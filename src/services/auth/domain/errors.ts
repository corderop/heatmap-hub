class AlreadyExistingUserError extends Error {
  constructor () {
    super('User already exists')
    this.name = 'AlreadyExistingUserError'
  }
}

class InvalidEmailError extends Error {
  constructor () {
    super('Invalid email')
    this.name = 'InvalidEmailError'
  }
}

class InvalidPasswordError extends Error {
  constructor () {
    super('Invalid password')
    this.name = 'InvalidPasswordError'
  }
}

export { AlreadyExistingUserError, InvalidEmailError, InvalidPasswordError }
