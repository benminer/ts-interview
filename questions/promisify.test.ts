import { promisify } from "./promisify";
// import { promisify } from "../answers";

const fetchThing = (id: number, cb: Function) => {
  setTimeout(() => {
    const thing = {
      id,
      name: `Thing ${id}`,
    };
    cb(null, thing);
  }, 1000);
};

describe("promisify", () => {
  it("should return a promise", async () => {
    const fetchThingPromise = promisify(fetchThing);
    await expect(fetchThingPromise(1)).resolves.toEqual({
      id: 1,
      name: "Thing 1",
    });
  });
});
