import type { FirebaseApp } from 'firebase/app'
import { type Auth, type AuthError, getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, type UserCredential, signOut } from 'firebase/auth'
import type AuthClient from '../../domain/AuthClient'
import firebaseApp from './app'
import type User from '../../domain/User'
import { AlreadyExistingUserError, InvalidCredentialsError, InvalidEmailError, InvalidPasswordError, InvalidUserError, NotVerifiedUserError } from '../../domain/errors'
import { FIREBASE_ERROR_CODES } from './consts'

class FirebaseAuthClient implements AuthClient {
  private readonly app: FirebaseApp
  private readonly auth: Auth

  constructor () {
    this.app = firebaseApp
    this.auth = getAuth(this.app)
  }

  async signUp (user: User): Promise<void> {
    let userCredentials: UserCredential
    try {
      userCredentials = await createUserWithEmailAndPassword(this.auth, user.email, user.password)
    } catch (error) {
      const authError = error as AuthError
      const errorToRaiseByType = {
        [FIREBASE_ERROR_CODES.EMAIL_ALREADY_IN_USE]: AlreadyExistingUserError,
        [FIREBASE_ERROR_CODES.INVALID_EMAIL]: InvalidEmailError,
        [FIREBASE_ERROR_CODES.INVALID_PASSWORD]: InvalidPasswordError
      }

      const ErrorType = errorToRaiseByType[authError.code]
      throw ErrorType !== undefined ? new ErrorType() : error
    }

    const firebaseUser = userCredentials.user
    sendEmailVerification(firebaseUser)
    await signOut(this.auth)
  }

  async logIn (user: User): Promise<void> {
    let userCredential: UserCredential
    try {
      userCredential = await signInWithEmailAndPassword(this.auth, user.email, user.password)
    } catch (error) {
      const authError = error as AuthError
      const errorToRaiseByType = {
        [FIREBASE_ERROR_CODES.USER_NOT_FOUND]: InvalidUserError,
        [FIREBASE_ERROR_CODES.USER_DISABLED]: InvalidUserError,
        [FIREBASE_ERROR_CODES.INVALID_EMAIL]: InvalidCredentialsError,
        [FIREBASE_ERROR_CODES.USER_WRONG_PASSWORD]: InvalidCredentialsError
      }

      const ErrorType = errorToRaiseByType[authError.code]
      throw ErrorType !== undefined ? new ErrorType() : error
    }

    if (!userCredential.user.emailVerified) {
      await signOut(this.auth)
      throw new NotVerifiedUserError()
    }
  }
}

export default FirebaseAuthClient
