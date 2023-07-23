import type React from "react";

interface Props {
  date: Date;
  selected: boolean;
}

const Day: React.FC<Props> = ({ date, selected }) => {
  const dateStr = date.toLocaleDateString("es-ES");
  const isEnabled = date > new Date();
  let bgClass = "";

  if (!isEnabled) {
    bgClass = selected ? "bg-[#50c878]" : "bg-[#50c87830]";
  }

  return (
    <div className={`w-3 h-3 rounded-sm ${bgClass}`} title={dateStr}></div>
  );
};

export default Day;
