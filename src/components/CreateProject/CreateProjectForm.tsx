import type React from "react";
import Heatmap from "../Heatmap";

interface Props {
  onCancel: () => void;
  onCreate: () => void;
}

const CreateProjectForm: React.FC<Props> = ({ onCancel, onCreate }) => {
  return (
    <section className="p-3 max-w-4xl w-full border rounded-md">
      <header className="mb-3 mr-1 flex align-center gap-3">
        <input
          aria-label="New project title"
          className="text-lg flex-grow bg-inherit focus:outline-none"
          placeholder="Enter a new title here"
        ></input>
        <div className="flex gap-3 flex-grow-0">
          <button aria-label="Cancel project creation" onClick={onCancel}>
            ❌
          </button>
          <button aria-label="Confirm project creation" onClick={onCreate}>
            ✅
          </button>
        </div>
      </header>
      <Heatmap actionable={false} />
    </section>
  );
};

export default CreateProjectForm;
