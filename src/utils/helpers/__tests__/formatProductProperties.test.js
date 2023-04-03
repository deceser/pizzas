import formatProductProperties from "../formatProductProperties";

describe("formatProductProperties()", () => {
  it("should return formated properties | passed: sizeName, typeName, sizeUnit", () => {
    expect(formatProductProperties("16", "default", "90")).toEqual(
      "16 90 default"
    );
  });

  it("should return formated properties | passed: sizeName, typeName", () => {
    expect(formatProductProperties("16", "default")).toEqual("16  default");
  });

  it("should return empty string", () => {
    expect(formatProductProperties("none", "none")).toEqual(" ");
  });

  it("should return only size", () => {
    expect(formatProductProperties("16", "none")).toEqual("16  ");
  });

  it("should return only type", () => {
    expect(formatProductProperties("none", "default")).toEqual(" default");
  });
});
