import type Project from "./Project";

interface ProjectRepository {
  create(project: Project): Promise<void>;
}

export default ProjectRepository;
