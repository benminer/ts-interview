import { squareEncrypt } from "../answers";

describe("squareEncrypt", () => {
  it("should square encrypt a given string", () => {
    const result = squareEncrypt(
      "If man was meant to stay on the ground, god would have given us roots."
    );

    console.log(result);
    expect(result.startsWith("isotnugr")).toBe(true);
  });

  it("should encrypt the bee movie script", () => {
    const result = squareEncrypt(
      "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't car what humans think is impossible."
    );

    console.log(result);
    expect(result.startsWith("akaweiltgcwdmo")).toBe(true);
  });
});
