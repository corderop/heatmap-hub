import type Project from '../../domain/Project'
import type useProjectInterface from '../../domain/hooks/useProject'

function useProjects (hook: useProjectInterface): Project[] {
  return hook()
}

export default useProjects
