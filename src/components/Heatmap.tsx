import { useMemo } from "react";
import type React from "react";
import Day from "./Day.tsx";
import EmptyDay from "./EmptyDay.tsx";
import { areDatesInTheSameDay, getFirstDayOfWeek } from "../utils/dates.ts";

interface Props {
  days?: Date[];
  actionable?: boolean;
  onDayChange: (date: Date, enabled: boolean) => Promise<void>;
}

const Heatmap: React.FC<Props> = ({
  days = [],
  actionable = true,
  onDayChange,
}) => {
  const weeks = useMemo(() => {
    return Array.from({ length: 52 }).map((_, weekDiff) => {
      // Get the day of the week involved
      const day = new Date();
      day.setDate(day.getDate() - weekDiff * 7);
      // Get the first day of the week
      const firtDayOfWeek = getFirstDayOfWeek(day, true);

      return Array.from({ length: 7 }).map((_, dayDiff) => {
        const date = new Date(firtDayOfWeek.getTime());
        date.setDate(date.getDate() + dayDiff);

        return {
          date,
          selected: days.some((day) => areDatesInTheSameDay(day, date)),
        };
      });
    });
  }, [actionable]);

  return (
    <div
      className="p-1 w-full overflow-y-auto inline-grid grid-rows-7 grid-flow-col gap-1"
      dir="rtl"
    >
      {weeks.map((week) =>
        week.map((day) =>
          day.date > new Date() ? (
            <EmptyDay key={day.date.toDateString()} />
          ) : (
            <Day
              key={day.date.toISOString()}
              date={day.date}
              selected={day.selected}
              actionable={actionable}
              onChange={async (value) => onDayChange(day.date, value)}
            />
          )
        )
      )}
    </div>
  );
};

export default Heatmap;
