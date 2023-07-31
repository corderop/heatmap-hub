import type Project from '../domain/Project'
import type ProjectRepository from '../domain/ProjectRepository'

class GetProjects {
  constructor (private readonly repository: ProjectRepository) {}

  async execute (): Promise<Project[]> {
    return await this.repository.getAll()
  }
}

export default GetProjects
