import Day from '../domain/Day'
import Project from '../domain/Project'
import type ProjectRepository from '../domain/ProjectRepository'
import { ProjectNotFoundError } from '../domain/errors'

class ProjectRepositoryLocalStorage implements ProjectRepository {
  private convertObjectToProject (project: any): Project {
    const daysObject: Record<string, string> = project.days ?? {}

    const days = Object.entries(daysObject).reduce((acc, [key, date]) => {
      const dateObject = new Date(date)
      return { ...acc, [key]: new Day(dateObject) }
    }, {})

    return new Project(project.id, project.name, days)
  }

  private convertProjectToObject (project: Project): object {
    const projectObject = {
      id: project.id,
      name: project.name,
      days: {}
    }

    const days = Object.entries(project.days).reduce((acc, [key, date]) => {
      return { ...acc, [date.key]: date.date.toISOString() }
    }, {})

    return {
      ...projectObject,
      days
    }
  }

  private getProjects (): Project[] {
    const projects = JSON.parse(localStorage.getItem('projects') ?? '[]')
    return projects.map(this.convertObjectToProject)
  }

  private updateProjects (projects: Project[]): void {
    const projectObjects = projects.map(this.convertProjectToObject)
    localStorage.setItem('projects', JSON.stringify(projectObjects))
  }

  async create (project: Project): Promise<void> {
    const projects = this.getProjects()
    projects.push(project)
    this.updateProjects(projects)
  }

  async getAll (): Promise<Project[]> {
    return this.getProjects()
  }

  async save (project: Project): Promise<void> {
    const projects = this.getProjects()

    const projectIndex = projects.findIndex((p) => p.id === project.id)
    if (projectIndex === -1) throw new ProjectNotFoundError()

    projects[projectIndex] = project
    this.updateProjects(projects)
  }

  async delete (id: string): Promise<void> {
    let projects = this.getProjects()
    projects = projects.filter((project: Project) => project.id !== id)
    this.updateProjects(projects)
  }
}

export default ProjectRepositoryLocalStorage
