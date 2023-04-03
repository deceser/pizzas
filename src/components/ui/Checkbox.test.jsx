import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Checkbox from "./Checkbox";
import { useRef, useState } from "react";

describe("Render Checkbox", () => {
  it("should render", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  it("should container have class", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox.parentElement).toHaveClass("checkbox");
  });

  it("should render as controlled input", () => {
    const TestCase = () => {
      const [value, setValue] = useState(false);

      const handleChange = () => {
        setValue(!value);
      };

      return <Checkbox value={value} onChange={handleChange} />;
    };

    render(<TestCase />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveProperty("checked", false);

    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", true);
  });

  it("should render as uncontrolled input", () => {
    const TestCase = () => {
      const ref = useRef();

      return <Checkbox inputRef={ref} />;
    };

    render(<TestCase />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveProperty("checked", false);

    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", true);
  });
});
