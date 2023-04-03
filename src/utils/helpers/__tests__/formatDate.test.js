import { formatDate } from "../";

describe("formatDate()", () => {
  it("should return formated date", () => {
    const date = new Date(2011, 0, 1, 2, 3, 4, 567);

    expect(formatDate(date)).toEqual("1.0.2011 2:3:4");
  });
});
