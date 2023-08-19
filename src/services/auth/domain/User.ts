class User {
  private readonly email: string
  private readonly password: string

  constructor (email: string, password: string) {
    if (!User.isValidEmail(email)) {
      throw new Error('Invalid email')
    }
    if (!User.isValidPassword(password)) {
      throw new Error('Invalid password')
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
