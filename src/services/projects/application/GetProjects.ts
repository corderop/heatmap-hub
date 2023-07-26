import type Project from "../domain/Project";
import type ProjectRepository from "../domain/ProjectRepository";

class GetProjects {
  constructor(private repository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return this.repository.getAll();
  }
}

export default GetProjects;
