import type React from "react";
import { useEffect, useState } from "react";
import GetProjects from "../services/projects/application/GetProjects";
import ProjectRepositoryLocalStorage from "../services/projects/infraestructure/ProjectRepositoryLocalStorage";
import type Project from "../services/projects/domain/Project";
import ProjectComponent from "./Project.tsx";
import DeleteProject from "../services/projects/application/DeleteProject.ts";

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjectService = new GetProjects(
      new ProjectRepositoryLocalStorage()
    );
    getProjectService.execute().then((projects) => {
      setProjects(projects);
    });
  }, []);

  const deleteProject = (project: Project) => {
    new DeleteProject(new ProjectRepositoryLocalStorage()).execute(project.id);
    setProjects((prevProjects) =>
      prevProjects.filter((p) => p.id !== project.id)
    );
  };

  return projects.map((project) => (
    <ProjectComponent
      key={project.id}
      project={project}
      onDelete={() => deleteProject(project)}
    />
  ));
};

export default ProjectList;
