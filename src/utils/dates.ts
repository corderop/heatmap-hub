export function getFirstDayOfWeek(date: Date, mondayFirst: boolean = false) {
  const dayIndex = mondayFirst ? (date.getDay() + 6) % 7 : date.getDay();
  const firtDayOfWeek = date.getDate() - dayIndex;
  return new Date(date.getFullYear(), date.getMonth(), firtDayOfWeek);
}
