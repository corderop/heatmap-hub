import Heatmap from "./Heatmap.tsx";

interface Props {
  title: string;
}

const Project: React.FC<Props> = ({ title }) => {
  return (
    <section className="p-3 max-w-4xl w-full border rounded-md">
      <h1 className="text-lg mb-3">{title}</h1>
      <Heatmap />
    </section>
  );
};

export default Project;
