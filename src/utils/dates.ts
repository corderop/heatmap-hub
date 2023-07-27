export function getFirstDayOfWeek(date: Date, mondayFirst: boolean = false) {
  const dayIndex = mondayFirst ? (date.getDay() + 6) % 7 : date.getDay();
  const firtDayOfWeek = date.getDate() - dayIndex;
  return new Date(date.getFullYear(), date.getMonth(), firtDayOfWeek);
}

export function areDatesInTheSameDay(date1: Date, date2: Date) {
  return (
    date1.toISOString().substring(0, 10) ===
    date2.toISOString().substring(0, 10)
  );
}
