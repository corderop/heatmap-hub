import { action } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'
import type Project from '../../domain/Project'
import { decodeProject, encodeProject } from './serializers'
import { ProjectNotFoundError } from './errors'

export const $projects = persistentAtom<Project[]>('projects', [], {
  encode: encodeProject,
  decode: decodeProject
})

export const addProject = action($projects, 'addProject', (store, project: Project) => {
  store.set([...store.get(), project])
})

export const updateProject = action($projects, 'updateProject', (store, project: Project) => {
  const projects = store.get()
  const projectIndex = projects.findIndex((p) => p.id === project.id)

  if (projectIndex === -1) {
    throw new ProjectNotFoundError()
  }

  projects[projectIndex] = project
  store.set(projects)
})

export const deleteProject = action($projects, 'deleteProject', (store, id: string) => {
  const projects = store.get()
  const projectIndex = projects.findIndex((p) => p.id === id)

  if (projectIndex === -1) {
    return
  }

  store.set(projects.toSpliced(projectIndex, 1))
})
