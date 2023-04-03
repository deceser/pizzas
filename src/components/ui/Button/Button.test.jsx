import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button component", () => {
  it("should a text and class default button", () => {
    render(<Button>Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button");
  });

  it("should a text and class circle button", () => {
    render(<Button variant="circle">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--circle");
  });

  it("should a text and class black button", () => {
    render(<Button variant="black">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--black");
  });

  it("should a text and class outline-primary button", () => {
    render(<Button variant="outline-primary">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--outline-primary");
  });

  it("should a text and class outline button", () => {
    render(<Button variant="outline">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--outline");
  });

  it("should a text and class add button", () => {
    render(<Button variant="add">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--add");
  });

  it("should a text and class light button", () => {
    render(<Button variant="light">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--light");
  });

  it("should a text and class danger button", () => {
    render(<Button variant="danger">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--danger");
  });

  it("should a text and class success button", () => {
    render(<Button variant="success">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--success");
  });

  it("should a text and class small button", () => {
    render(<Button variant="small">Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "button--small");
  });

  it("should a text and class disabled button", () => {
    render(<Button disabled>Hello World</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello World");
    expect(button).toHaveClass("button", "disabled");
  });

  it("should handle click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Hello World</Button>);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
