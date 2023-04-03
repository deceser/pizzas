import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";
import { useRef, useState } from "react";
import { useEffect } from "react";

describe("Input component", () => {
  it("should render input and has class", () => {
    const handleChange = jest.fn();
    render(<Input value="text" onChange={handleChange} />);

    const input = screen.getByDisplayValue("text");
  });

  it("should render label", () => {
    const handleChange = jest.fn();
    render(<Input label="Hello word!" onChange={handleChange} />);

    screen.getByText("Hello word!");
  });

  it("should render error", () => {
    const handleChange = jest.fn();
    render(<Input error="Some error!" onChange={handleChange} />);

    screen.getByText("Some error!");
  });

  it("should handle as controlled input", () => {
    const TestCase = () => {
      const [value, setValue] = useState("Hello word!");

      const handleChange = (e) => {
        setValue(e.target.value);
      };

      return <Input value={value} onChange={handleChange} />;
    };

    render(<TestCase />);

    const input = screen.getByDisplayValue("Hello word!");

    fireEvent.change(input, { target: { value: "hi" } });

    expect(screen.getByDisplayValue("hi")).toBeInTheDocument();
  });

  it("should handle as uncontrolled input", () => {
    const TestCase = () => {
      const ref = useRef();

      useEffect(() => {
        ref.current.value = "Hello world!";
      }, []);

      return <Input inputRef={ref} />;
    };

    render(<TestCase />);

    const input = screen.getByDisplayValue("Hello world!");

    fireEvent.change(input, { target: { value: "hi" } });

    expect(screen.getByDisplayValue("hi")).toBeInTheDocument();
  });
});
