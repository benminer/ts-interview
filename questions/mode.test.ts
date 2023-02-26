import {
  mode as modeFunc,
  mean as meanFunc,
  median as medianFunc,
} from "./mode";
// import {
//   mode as modeFunc,
//   mean as meanFunc,
//   median as medianFunc,
// } from "../answers/";

describe("mode", () => {
  it("should return the correct mode given a list of integers", () => {
    const mode = modeFunc([2, 7, 10, 4, 2]);
    expect(mode).toEqual(2);
  });

  it("should return the correct mode given a list of integers when there are multiple", () => {
    const mode = modeFunc([2, 2, 2, 7, 10, 10, 4, 2, 10]);
    expect(mode).toEqual(2);
  });
});

describe("mean", () => {
  it("should return the correct mean value for a list of numbers", () => {
    const mean = meanFunc([2, 7, 9]);
    expect(mean).toEqual(6);
  });
});

describe("median", () => {
  it("should return the correct median value for a list of numbers", () => {
    const median = medianFunc([10, 11, 13, 15, 16, 23, 26]);
    expect(median).toEqual(15);
  });
});
