import Day from '../../domain/Day'
import Project from '../../domain/Project'

interface ProjectObject {
  id: string
  name: string
  days: Days
}

type Days = Record<string, string>

function encodeProject (projects: Project[]): string {
  const projectsObject: ProjectObject[] = projects.map((project) => {
    const projectObject = {
      id: project.id,
      name: project.name,
      days: {}
    }

    const days = Object.entries(project.days).reduce((acc, [key, date]) => {
      return { ...acc, [key]: date.date.toISOString() }
    }, {})

    return {
      ...projectObject,
      days
    }
  })

  return JSON.stringify(projectsObject)
}

function decodeProject (projectsString: string): Project[] {
  const projects = JSON.parse(projectsString ?? '[]') as ProjectObject[]

  return projects.map((projectObject: ProjectObject) => {
    const daysObject: Record<string, string> = projectObject.days ?? {}

    const days = Object.entries(daysObject).reduce((acc, [key, date]) => {
      const dateObject = new Date(date)
      return { ...acc, [key]: new Day(dateObject) }
    }, {})

    return new Project(projectObject.id, projectObject.name, days)
  })
}

export { encodeProject, decodeProject }
