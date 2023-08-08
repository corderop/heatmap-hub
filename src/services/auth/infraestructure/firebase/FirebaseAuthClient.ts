import type { FirebaseApp } from 'firebase/app'
import { type Auth, getAuth } from 'firebase/auth'
import type AuthClient from '../../domain/AuthClient'
import firebaseApp from './app'

class FirebaseAuthClient implements AuthClient {
  private readonly app: FirebaseApp
  private readonly auth: Auth

  constructor () {
    this.app = firebaseApp
    this.auth = getAuth(this.app)
  }
}

export default FirebaseAuthClient
