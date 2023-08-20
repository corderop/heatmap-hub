import type AuthClient from '../domain/AuthClient'
import User from '../domain/User'

class SignUpUser {
  constructor (private readonly authClient: AuthClient) {}

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
  async execute (email: string, password: string): Promise<void> {
    const user = new User(email, password)
    await this.authClient.signUp(user)
  }
}

export default SignUpUser
