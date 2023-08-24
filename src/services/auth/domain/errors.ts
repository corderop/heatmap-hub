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

class InvalidUserError extends Error {
  constructor () {
    super('User is invalid or is disabled')
    this.name = 'InvalidUserError'
  }
}

class InvalidCredentialsError extends Error {
  constructor () {
    super('Invalid credentials')
    this.name = 'InvalidCredentialsError'
  }
}

class NotVerifiedUserError extends Error {
  constructor () {
    super('User is not verified')
    this.name = 'NotVerifiedUserError'
  }
}

export {
  AlreadyExistingUserError,
  InvalidEmailError,
  NotVerifiedUserError,
  InvalidUserError,
  InvalidPasswordError,
  InvalidCredentialsError
}
