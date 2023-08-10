import type Project from '../services/projects/domain/Project'
import ProjectComponent from './Project.tsx'
import DeleteProject from '../services/projects/application/DeleteProject.ts'
import { InfraestructureProjectRepository, infraestructureUseProjects } from '../config/dependencies.ts'
import useProjects from '../services/projects/application/hooks/useProjects.ts'

const ProjectList: React.FC = () => {
  const projects = useProjects(infraestructureUseProjects)

  const deleteProject = (project: Project): void => {
    new DeleteProject(new InfraestructureProjectRepository()).execute(project.id)
  }

  return projects.map((project) => (
    <ProjectComponent
      key={project.id}
      project={project}
      onDelete={() => {
        deleteProject(project)
      }}
    />
  ))
}

export default ProjectList
