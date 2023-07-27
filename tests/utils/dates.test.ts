import { describe, it, expect } from "@jest/globals";
import { areDatesInTheSameDay, getFirstDayOfWeek } from "../../src/utils/dates";

describe("getFirstDayOfWeek", () => {
  it("Should return sunday with a day in the middle of the week", () => {
    const date = new Date(2023, 6, 19); // Wednesday
    const expected = new Date(2023, 6, 16); // Sunday

    const result = getFirstDayOfWeek(date);

    expect(result).toEqual(expected);
  });

  it("Should return monday with a day in the middle of the week when flag active", () => {
    const date = new Date(2023, 6, 19); // Wednesday
    const expected = new Date(2023, 6, 17); // Monday

    const result = getFirstDayOfWeek(date, true);

    expect(result).toEqual(expected);
  });
});

describe("areDatesInTheSameDay", () => {
  it("Should return true for same days", () => {
    const date1 = new Date(2023, 6, 19, 10);
    const date2 = new Date(2023, 6, 19, 11);

    const result = areDatesInTheSameDay(date1, date2);

    expect(result).toStrictEqual(true);
  });

  it("Should return false for same days", () => {
    const date1 = new Date(2023, 6, 19, 1);
    const date2 = new Date(2023, 6, 20, 1);

    const result = areDatesInTheSameDay(date1, date2);

    expect(result).toStrictEqual(false);
  });
});
