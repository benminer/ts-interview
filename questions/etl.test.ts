import { etl } from "./etl";
// import { etl } from "../answers";

describe("etl", () => {
  it("should properly convert data to new format", () => {
    const newFormat = etl({
      1: ["A"],
    });
    expect(newFormat.a).toEqual(1);
  });
});
