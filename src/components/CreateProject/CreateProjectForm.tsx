import type React from "react";
import { useState } from "react";
import Heatmap from "../Heatmap";

interface Props {
  onCancel: () => void;
  onCreate: (name: string) => void;
}

const CreateProjectForm: React.FC<Props> = ({ onCancel, onCreate }) => {
  const [title, setTitle] = useState("");

  return (
    <section className="p-3 max-w-4xl w-full border rounded-md">
      <header className="mb-3 mr-1 flex align-center gap-3">
        <input
          aria-label="Project Name"
          className="text-lg flex-grow bg-inherit focus:outline-none"
          placeholder="Enter a new title here"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div className="flex gap-3 flex-grow-0">
          <button aria-label="Cancel project creation" onClick={onCancel}>
            ❌
          </button>
          <button
            aria-label="Confirm project creation"
            onClick={() => onCreate(title)}
          >
            ✅
          </button>
        </div>
      </header>
      <Heatmap actionable={false} />
    </section>
  );
};

export default CreateProjectForm;
