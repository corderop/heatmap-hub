class ProjectNotFoundError extends Error {
  constructor () {
    super('Project not found in the repository.')
    this.name = 'ProjectNotFound'
  }
}

export { ProjectNotFoundError }
