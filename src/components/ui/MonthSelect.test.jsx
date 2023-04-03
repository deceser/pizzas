import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MonthSelect from "./MonthSelect";
import { MONTHS_LIST } from "../../utils/constants/months";
import { useState } from "react";

describe("Render MonthSelect", () => {
  it("should render", () => {
    render(<MonthSelect activeItem={8} />);

    expect(screen.getByText(MONTHS_LIST[7])).toBeInTheDocument();
  });

  it("should change on select, show and hide list", () => {
    const TestCase = () => {
      const [activeItem, setActiveItem] = useState(6);

      return (
        <MonthSelect activeItem={activeItem} onSelectItem={setActiveItem} />
      );
    };

    render(<TestCase />);

    const activeItem = screen.getByText(MONTHS_LIST[5]);

    fireEvent.click(activeItem);

    const item1 = screen.getByText(MONTHS_LIST[1]);

    fireEvent.click(item1);

    expect(screen.getByText(MONTHS_LIST[1])).toBeInTheDocument();

    expect(screen.queryByText(MONTHS_LIST[6])).not.toBeInTheDocument();
  });
});
