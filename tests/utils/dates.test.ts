import { describe, it, expect } from "@jest/globals";
import { getFirstDayOfWeek } from "../../src/utils/dates";

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
