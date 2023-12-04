import { describe, it, expect } from "vitest";
import { calculateChange } from "../lib/calculateChange";

describe("calculateChange Function", () => {
  it("correctly calculates change for a given amount", () => {
    const result = calculateChange("11.49");
    expect(result).toEqual({
      $10: 1,
      $1: 1,
      "25¢": 1,
      "10¢": 2,
      "1¢": 4,
    });
  });

  it("correctly calculates change for a given amount", () => {
    const result = calculateChange("1.01");
    expect(result).toEqual({
      $1: 1,
      "1¢": 1,
    });
  });

  it("handles exact dollar amounts correctly", () => {
    expect(calculateChange("100")).toEqual({ $100: 1 });
  });

  it("handles high-value amounts correctly", () => {
    expect(calculateChange("1050")).toEqual({ $100: 10, $50: 1 });
  });

  it("returns empty object for zero value", () => {
    expect(calculateChange("0")).toEqual({});
  });

  it("handles negative values", () => {
    expect(calculateChange("-5")).toEqual({});
  });

  it("handles non-numeric inputs", () => {
    expect(calculateChange("abc")).toEqual({});
  });

  it("handles small cents amounts correctly", () => {
    expect(calculateChange("0.04")).toEqual({ "1¢": 4 });
  });
});
