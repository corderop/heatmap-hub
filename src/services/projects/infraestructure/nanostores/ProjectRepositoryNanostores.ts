import type Project from '../../domain/Project'
import type ProjectRepository from '../../domain/ProjectRepository'
import { ProjectNotFoundError } from './errors'
import { $projects, addProject, deleteProject, updateProject } from './project'

class ProjectRepositoryNanostores implements ProjectRepository {
  async create (project: Project): Promise<void> {
    addProject(project)
  }

  async getAll (): Promise<Project[]> {
    return $projects.get()
  }

  async save (project: Project): Promise<void> {
    try {
      updateProject(project)
    } catch (error) {
      if (error instanceof ProjectNotFoundError) {
        return
      }
      throw error
    }
  }

  async delete (id: string): Promise<void> {
    deleteProject(id)
  }
}

export default ProjectRepositoryNanostores
