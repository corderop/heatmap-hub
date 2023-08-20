import { InvalidEmailError, InvalidPasswordError } from './errors'

class User {
  public readonly email: string
  public readonly password: string

  constructor (email: string, password: string) {
    if (!User.isValidEmail(email)) {
      throw new InvalidEmailError()
    }
    if (!User.isValidPassword(password)) {
      throw new InvalidPasswordError()
    }

    this.email = email
    this.password = password
  }

  static isValidEmail (email: string): boolean {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return EMAIL_REGEX.test(email)
  }

  static isValidPassword (password: string): boolean {
    return password.length >= 8
  }
}

export default User
