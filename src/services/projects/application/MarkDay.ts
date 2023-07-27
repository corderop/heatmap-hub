import Day from "../domain/Day";
import type Project from "../domain/Project";
import type ProjectRepository from "../domain/ProjectRepository";

class MarkDay {
  constructor(private repository: ProjectRepository) {}

  async execute(project: Project, date: Date) {
    const day = new Day(date);
    project.addDay(day);
    await this.repository.save(project);
  }
}

export default MarkDay;
