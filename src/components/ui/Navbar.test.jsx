import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

const items = [
  "Orders",
  "Products",
  "Properties",
  "Stock",
  "Delivery",
  "Users",
  "Call",
  "Statistics",
];

describe("Render Navbar", () => {
  it("should render and has class names", () => {
    const activeItem = items[0];

    render(<Navbar items={items} activeItem={activeItem} />);

    for (let item of items) {
      if (item === activeItem) {
        expect(screen.getByText(item)).toHaveClass("active");
      } else {
        expect(screen.getByText(item)).not.toHaveClass("active");
      }
    }
  });
});
