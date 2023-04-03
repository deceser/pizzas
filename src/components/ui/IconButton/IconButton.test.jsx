import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IconButton from "./IconButton";
import styles from "./IconButton.module.scss";

describe("IconButton render", () => {
  it("should render and have classNames", () => {
    const { container } = render(<IconButton iconName="root" />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass(styles.iconButton);
    expect(button.firstChild).toHaveClass("root");
  });

  it("should handle click", () => {
    const handleClick = jest.fn();
    render(<IconButton onClick={handleClick} />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass(styles.iconButton);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
