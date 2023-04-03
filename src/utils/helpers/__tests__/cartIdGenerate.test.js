import cartIdGenerate from "../cartIdGenerate";

describe("cartIdGenerate()", () => {
  it("should generate id", () => {
    const id = 10;
    const type = "big";
    const size = "64";

    expect(cartIdGenerate(id, type, size)).toEqual(`${id}_${type}_${size}`);
  });
});
