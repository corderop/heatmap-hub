import type User from './User'

interface AuthClient {

  /**
   * Create the user in the auth service
   *
   * @param email
   * @param password
   *
   * @throws {AlreadyExistingUserError} if an user with the same email already exists
   * @throws {InvalidEmailError} if the email is not valid
   * @throws {InvalidPasswordError} if the password is not valid
   */
  signUp: (user: User) => Promise<void>

  /**
   * Login the user in the auth service
   *
   * @param email
   * @param password
   *
   * @throws {NotVerifiedUserError} if an user with the same email already exists
   * @throws {InvalidCredentialsError} if the credentials are not valid
   * @throws {InvalidUserError} if the user specified is invalid or disabled
   */
  logIn: (user: User) => Promise<void>
}

export default AuthClient
