import { v4 as uuid } from 'uuid'
import Project from '../domain/Project'
import type ProjectRepository from '../domain/ProjectRepository'

class CreateProject {
  constructor (private readonly repository: ProjectRepository) {}

  async execute (name: string): Promise<void> {
    const id = uuid()
    const project = new Project(id, name)

    await this.repository.create(project)
  }
}

export default CreateProject
