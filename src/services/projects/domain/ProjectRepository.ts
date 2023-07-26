import type Project from "./Project";

interface ProjectRepository {
  getAll(): Promise<Project[]>;
  create(project: Project): Promise<void>;
}

export default ProjectRepository;
