import type Project from "../domain/Project";
import type ProjectRepository from "../domain/ProjectRepository";

class ProjectRepositoryLocalStorage implements ProjectRepository {
  async create(project: Project): Promise<void> {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  async getAll(): Promise<Project[]> {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    return projects;
  }
}

export default ProjectRepositoryLocalStorage;
