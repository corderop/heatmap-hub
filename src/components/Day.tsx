import type React from "react";
import { useMemo, useState } from "react";

interface Props {
  date: Date;
  selected: boolean;
}

const Day: React.FC<Props> = ({ date, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const isFuture = date > new Date();

	function performSelection () {
		if (isFuture) return;

		const newIsSelected = !isSelected;
		setIsSelected(newIsSelected);
	};
	
	let bgClass = "";
	let borderClass = "";
	let pointerClass = "";

	if (!isFuture) {
		bgClass = isSelected ? "bg-[#50c878]" : "bg-[#50c87830]";
		borderClass = "box-border hover:border hover:border-[#50c878]"
	} else {
		pointerClass = "cursor-default"
	}


  return (
    <button
      className={`w-3 h-3 rounded-sm ${bgClass} ${borderClass} ${pointerClass}`}
      title={date.toLocaleDateString("es-ES")}
      onClick={performSelection}
    ></button>
  );
};

export default Day;
