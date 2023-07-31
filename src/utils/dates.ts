export function getFirstDayOfWeek (date: Date, mondayFirst: boolean = false): Date {
  const dayIndex = mondayFirst ? (date.getDay() + 6) % 7 : date.getDay()
  const firtDayOfWeek = date.getDate() - dayIndex
  return new Date(date.getFullYear(), date.getMonth(), firtDayOfWeek)
}

export function areDatesInTheSameDay (date1: Date, date2: Date): boolean {
  return date1.toLocaleDateString() === date2.toLocaleDateString()
}
