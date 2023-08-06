class ProjectNotFoundError extends Error {
  constructor () {
    super('Nanostore Project not found')
    this.name = 'ProjectNotFoundError'
  }
}

export { ProjectNotFoundError }
