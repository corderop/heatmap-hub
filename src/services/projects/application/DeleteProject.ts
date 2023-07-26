import type ProjectRepository from "../domain/ProjectRepository";

class DeleteProject {
  constructor(private repository: ProjectRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export default DeleteProject;
