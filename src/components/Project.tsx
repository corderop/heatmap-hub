import Heatmap from "./Heatmap.tsx";

interface Props {
  title: string;
  onDelete: () => void;
}

const Project: React.FC<Props> = ({ title, onDelete }) => {
  return (
    <section className="p-3 max-w-4xl w-full border rounded-md">
      <header className="mb-3 mr-1 flex align-center gap-3">
        <h1 className="text-lg flex-grow">{title}</h1>
        <div className="flex gap-3 flex-grow-0">
          <button
            aria-label={`Delete project ${title}`}
            onClick={() => onDelete()}
          >
            🗑️
          </button>
        </div>
      </header>
      <Heatmap />
    </section>
  );
};

export default Project;
