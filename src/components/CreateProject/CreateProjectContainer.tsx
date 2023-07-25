import type React from "react";
import { useState } from "react";
import CreateProjectButton from "./CreateProjectButton";
import CreateProjectForm from "./CreateProjectForm";

const CreateProject: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showCreationForm = () => {
    setIsFormVisible(true);
  };

  const hideCreationForm = () => {
    setIsFormVisible(false);
  };

  const createProject = () => {
    console.log("Creating project");
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

export default CreateProject;
