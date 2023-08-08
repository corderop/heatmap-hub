import FirebaseAuthClient from '../services/auth/infraestructure/firebase/FirebaseAuthClient'
import ProjectRepositoryNanostores from '../services/projects/infraestructure/nanostores/ProjectRepositoryNanostores'
import useNanostoresProjects from '../services/projects/infraestructure/nanostores/useNanostoresProjects'

export const InfraestructureProjectRepository = ProjectRepositoryNanostores
export const infraestructureUseProjects = useNanostoresProjects
export const InfraestructureAuthClient = new FirebaseAuthClient()
