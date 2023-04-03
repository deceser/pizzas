import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Container from "./Container";

describe("Container component", () => {
  it("Container renders", () => {
    render(<Container>container</Container>);

    expect(screen.getByText("container")).toHaveClass("container");
  });

  it("Small container renders", () => {
    render(<Container variant="small">container</Container>);

    expect(screen.getByText("container")).toHaveClass(
      "container",
      "container--small"
    );
  });
});
