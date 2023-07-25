import Project from "../domain/Project";
import type ProjectRepository from "../domain/ProjectRepository";

class CreateProject {
  constructor(private repository: ProjectRepository) {}

  async execute(name: string): Promise<void> {
    const id = crypto.randomUUID();
    const project = new Project(id, name);

    await this.repository.create(project);
  }
}

export default CreateProject;
