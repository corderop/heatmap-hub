import type React from "react";
import { useState } from "react";
import CreateProject from "../../services/projects/application/CreateProject";
import ProjectRepositoryLocalStorage from "../../services/projects/infraestructure/ProjectRepositoryLocalStorage";
import CreateProjectButton from "./CreateProjectButton";
import CreateProjectForm from "./CreateProjectForm";

const CreateProjectComponent: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showCreationForm = () => {
    setIsFormVisible(true);
  };

  const hideCreationForm = () => {
    setIsFormVisible(false);
  };

  const createProject = async (name: string) => {
    await new CreateProject(new ProjectRepositoryLocalStorage()).execute(name);
    window.location.reload();
  };

  return (
    <>
      {isFormVisible && (
        <CreateProjectForm
          onCancel={hideCreationForm}
          onCreate={createProject}
        />
      )}
      <CreateProjectButton onClick={showCreationForm} />
    </>
  );
};

export default CreateProjectComponent;
