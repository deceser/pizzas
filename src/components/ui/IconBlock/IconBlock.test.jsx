import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IconBlock from "./IconBlock";
import styles from "./IconBlock.module.scss";

describe("Render IconBlock", () => {
  it("should render text position right icon block", () => {
    render(<IconBlock textPosition="right" data-testid="root" />);

    expect(screen.getByTestId("root")).toHaveClass(styles.iconBlock_textRigth);
  });
});
