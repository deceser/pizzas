import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Tabs } from "..";
import styles from "./Tabs.module.scss";
import { useState } from "react";

const items = [
  { id: 1, name: "tab1" },
  { id: 2, name: "tab2" },
  { id: 3, name: "tab3" },
  { id: 4, name: "tab4" },
];

describe("Render Tabs", () => {
  it("should render and have class", () => {
    render(<Tabs items={items} data-testid="root" />);

    const tabs = screen.getByTestId("root");

    expect(tabs).toBeInTheDocument();
  });

  it("should have class", () => {
    render(<Tabs items={items} data-testid="root" />);

    const tabs = screen.getByTestId("root");

    expect(tabs).toHaveClass(styles.tabs);
  });

  it("should render items", () => {
    render(<Tabs items={items} data-testid="root" />);

    for (let item of items) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("should items have class names", () => {
    render(<Tabs items={items} data-testid="root" />);

    for (let item of items) {
      expect(screen.getByText(item.name).parentElement).toHaveClass(styles.tab);
    }
  });

  it("should render active item", () => {
    const value = items[2].id;
    const name = items[2].name;

    render(<Tabs value={value} items={items} data-testid="root" />);

    expect(screen.getByText(name)).toHaveClass("button--success");
  });

  it("should render unactive items", () => {
    const value = items[2].id;
    const name = items[2].name;

    render(<Tabs value={value} items={items} data-testid="root" />);

    for (let item of items) {
      if (item.name === name) {
        expect(screen.getByText(item.name)).toHaveClass("button--success");
        expect(screen.getByText(item.name)).not.toHaveClass("button--outline");
      } else {
        expect(screen.getByText(item.name)).not.toHaveClass("button--success");
        expect(screen.getByText(item.name)).toHaveClass("button--outline");
      }
    }
  });

  it("should change active item", () => {
    const TestCase = () => {
      const [value, setValue] = useState(items[2].id);

      return (
        <Tabs
          items={items}
          value={value}
          onChange={setValue}
          data-testid="root"
        />
      );
    };

    render(<TestCase />);

    const item1 = screen.getByText(items[1].name);
    const item2 = screen.getByText(items[2].name);

    fireEvent.click(item1);
    expect(screen.getByText(items[1].name)).toHaveClass("button--success");

    fireEvent.click(item2);
    expect(screen.getByText(items[2].name)).toHaveClass("button--success");
  });
});
