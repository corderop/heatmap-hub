import type Project from "./Project";

interface ProjectRepository {
  getAll(): Promise<Project[]>;
  create(project: Project): Promise<void>;
  save(project: Project): Promise<void>;
  delete(id: string): Promise<void>;
}

export default ProjectRepository;
