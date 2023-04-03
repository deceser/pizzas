import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "./Title";
import styles from "./Title.module.scss";

describe("Render Title", () => {
  it("should render with children", () => {
    render(<Title>Hello world!</Title>);

    const title = screen.getByText("Hello world!");

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should render h1", () => {
    const { container } = render(<Title>Hello world!</Title>);

    const heading = container.querySelector("h1");

    expect(heading).toBeInTheDocument();
  });

  it("should render h2", () => {
    const { container } = render(<Title variant="h2">Hello world!</Title>);

    const heading = container.querySelector("h2");

    expect(heading).toBeInTheDocument();
  });

  it("should render h3", () => {
    const { container } = render(<Title variant="h3">Hello world!</Title>);

    const heading = container.querySelector("h3");

    expect(heading).toBeInTheDocument();
  });

  it("should render h4", () => {
    const { container } = render(<Title variant="h4">Hello world!</Title>);

    const heading = container.querySelector("h4");

    expect(heading).toBeInTheDocument();
  });

  it("should render dashed", () => {
    render(
      <Title dashed data-testid="root">
        Hello world!
      </Title>
    );

    const container = screen.getByTestId("root");

    expect(container).toHaveClass(styles.dashed);
  });
});
