class Day {
  public readonly key: string;
  public readonly date: Date;

  constructor(date: Date) {
    this.key = date.toISOString().substring(0, 10);
    this.date = date;
  }
}

export default Day;
