import type Day from './Day'

class Project {
  public readonly id: string
  public readonly name: string
  public readonly days: Record<string, Day>

  constructor (id: string, name: string, days: Record<string, Day> = {}) {
    this.id = id
    this.name = name
    this.days = days
  }

  addDay (day: Day): void {
    this.days[day.key] = day
  }

  removeDay (day: Day): void {
    delete this.days[day.key]
  }

  getFlatDays (): Date[] {
    return Object.values(this.days).map((day) => day.date)
  }
}

export default Project
