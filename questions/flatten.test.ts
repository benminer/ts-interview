import { flatten } from "./flatten";
// import { flatten } from "../answers/flatten.answer";

describe("flatten", () => {
  it("should flatten a set of arrays", () => {
    expect(flatten([1, [2, 3], 4, [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should ignore undefined or null values", () => {
    expect(flatten([1, null, [2, 3, 4], [5], undefined, null])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it.skip("should flatten an infinite set of arrays", () => {
    expect(flatten([1, [2, [3, 4, [5, 6]]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
