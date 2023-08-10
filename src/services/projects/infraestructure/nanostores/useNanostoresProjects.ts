import { useStore } from '@nanostores/react'
import type useProjectInterface from '../../domain/hooks/useProject'
import { $projects } from './project'

const useNanostoresProjects: useProjectInterface = () => {
  return useStore($projects)
}

export default useNanostoresProjects
