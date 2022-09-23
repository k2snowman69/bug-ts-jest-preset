import { describe, expect, it } from "@jest/globals";
import * as Utils from "./index.js";

describe("add", () => {
  it("should add two values", () => {
    const value = Utils.add(1, 2);
    expect(value).toBe(3);
  });

  it("should add two values", () => {
    const value = Utils.add("1", "2");
    expect(value).toBe(3);
  });

  it("should throw exception if invalid value provided", () => {
    expect(() => {
      Utils.add({}, "2");
    }).toThrow();
  });
});
