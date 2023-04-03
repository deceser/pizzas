import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "./Modal";
import { renderWithStore } from "../../../utils/helpers/testing";
import styles from "./Modal.module.scss";

describe("Modal render", () => {
  it("should render", () => {
    renderWithStore(<Modal visible={true} title="My modal" />);

    screen.getByText("My modal");
  });

  it("should render children", () => {
    renderWithStore(<Modal visible={true}>Hello world!</Modal>);

    screen.getByText("Hello world!");
  });

  it("should be visible", () => {
    renderWithStore(
      <Modal visible={true} title="My modal" data-testid="root" />
    );

    const modal = screen.getByTestId("root");

    expect(modal).not.toHaveClass(styles.hidden);
  });

  it("should be unvisible", () => {
    renderWithStore(
      <Modal visible={false} title="My modal" data-testid="root" />
    );

    const modal = screen.getByTestId("root");

    expect(modal).toHaveClass(styles.hidden);
  });
});
