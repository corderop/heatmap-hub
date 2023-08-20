import type User from './User'

interface AuthClient {
  signUp: (user: User) => Promise<void>
}

export default AuthClient
