import type React from "react";
import { useEffect, useState } from "react";
import GetProjects from "../services/projects/application/GetProjects";
import ProjectRepositoryLocalStorage from "../services/projects/infraestructure/ProjectRepositoryLocalStorage";
import type Project from "../services/projects/domain/Project";
import ProjectComponent from "./Project.tsx";

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

  return projects.map((project) => (
    <ProjectComponent key={project.id} title={project.name} />
  ));
};

export default ProjectList;
