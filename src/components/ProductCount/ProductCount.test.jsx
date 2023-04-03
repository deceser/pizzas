import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import ProductCount from "./ProductCount";

describe("Render ProductCount", () => {
  it("should render with correct count", () => {
    render(<ProductCount count={10} />);

    expect(screen.getByText(10)).toBeInTheDocument();
  });

  it("should call inc function", () => {
    const handleInc = jest.fn();
    render(<ProductCount count={10} onInc={handleInc} />);

    fireEvent.click(screen.getByText("+"));

    expect(handleInc).toHaveBeenCalledTimes(1);
  });

  it("should call dec function", () => {
    const handleDec = jest.fn();

    render(<ProductCount count={10} onDec={handleDec} />);

    fireEvent.click(screen.getByText("-"));

    expect(handleDec).toHaveBeenCalledTimes(1);
  });

  it("should inc count", () => {
    const TestCase = () => {
      const [count, setCount] = useState(5);

      const handleInc = () => {
        setCount(count + 1);
      };

      return <ProductCount count={count} onInc={handleInc} />;
    };

    render(<TestCase />);

    fireEvent.click(screen.getByText("+"));

    expect(screen.getByText(6)).toBeInTheDocument();
  });

  it("should dec count", () => {
    const TestCase = () => {
      const [count, setCount] = useState(5);

      const handleDec = () => {
        setCount(count - 1);
      };

      return <ProductCount count={count} onDec={handleDec} />;
    };

    render(<TestCase />);

    fireEvent.click(screen.getByText("-"));

    expect(screen.getByText(4)).toBeInTheDocument();
  });
});
