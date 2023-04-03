import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Icon from "./Icon";
import styles from "./Icon.module.scss";

describe("Render icons", () => {
  it("should render icon", () => {
    render(<Icon name="icon" color="#000000" size={16} data-testid="root" />);

    expect(screen.getByTestId("root")).toHaveClass(styles.icon);
    expect(screen.getByPlaceholderText("icon")).toBeInTheDocument();
  });
});
