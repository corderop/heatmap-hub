import type React from "react";
import { useState } from "react";

interface Props {
  date: Date;
  selected: boolean;
  actionable?: boolean;
}

const Day: React.FC<Props> = ({ date, selected, actionable = true }) => {
  const [isSelected, setIsSelected] = useState(selected);

  function performSelection() {
    setIsSelected(!isSelected);
  }

  let bgClass = isSelected ? "bg-[#50c878]" : "bg-[#50c87830]";

  return (
    <button
      aria-label={`${date.toLocaleDateString("es-ES")}`}
      className={`w-3 h-3 rounded-sm ${bgClass} hover:border hover:border-[#50c878] disabled:border-none disabled:cursor-not-allowed`}
      title={date.toLocaleDateString("es-ES")}
      onClick={performSelection}
      disabled={!actionable}
    ></button>
  );
};

export default Day;
