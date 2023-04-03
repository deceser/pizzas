import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SelectPopup from "./SelectPopup";
import { useState } from "react";

const items = ["popular", "price", "alphabet"];

describe("SelectPopup render", () => {
  it("should render", () => {
    const activeItem = items[0];
    render(
      <SelectPopup
        items={items}
        activeItem={activeItem}
        onSelectItem={() => true}
      />
    );

    const select = screen.getByText(items[0]);
    expect(select).toBeInTheDocument();
  });

  it("should have label without active item", () => {
    render(
      <SelectPopup
        items={items}
        label="Hello world!"
        onSelectItem={() => true}
      />
    );

    const select = screen.getAllByText("Hello world!");
    expect(select).not.toBeNull();
  });

  it("should open popup", () => {
    const handleClick = jest.fn();
    const activeItem = items[0];
    render(
      <SelectPopup
        items={items}
        activeItem={activeItem}
        onSelectItem={handleClick}
      />
    );

    const select = screen.getByText(activeItem);
    expect(select).toBeInTheDocument();

    fireEvent.click(select);

    const item1 = screen.getByText(items[1]);
    expect(item1).toBeInTheDocument();
    const item2 = screen.getByText(items[2]);
    expect(item2).toBeInTheDocument();
  });

  it("should close popup", () => {
    const handleClick = jest.fn();
    const activeItem = items[0];
    render(
      <SelectPopup
        items={items}
        activeItem={activeItem}
        onSelectItem={handleClick}
      />
    );

    const select = screen.getByText(activeItem);

    fireEvent.click(select);
    fireEvent.click(select);

    const item1 = screen.queryByText(items[1]);
    const item2 = screen.queryByText(items[2]);

    expect(item1).toBeNull();
    expect(item2).toBeNull();
  });

  // it("should change active item", async () => {
  //   const { result } = renderHook(() => useState(items[0]));

  //   const [activeItem, setActiveItem] = result.current;

  //   render(
  //     <SelectPopup
  //       items={items}
  //       activeItem={activeItem}
  //       onSelectItem={setActiveItem}
  //     />
  //   );

  //   const select = screen.getByText(activeItem);

  //   fireEvent.click(select);

  //   const item1 = screen.getByText(items[1]);
  //   fireEvent.click(item1);

  //   await waitFor(async () => {
  //     await screen.findByText(items[1]);
  //   });
  // });
  it("should render with different active items", () => {
    const handleClick = jest.fn();
    const { rerender } = render(
      <SelectPopup
        items={items}
        activeItem={items[0]}
        onSelectItem={handleClick}
      />
    );

    const item = screen.getByText(items[0]);

    expect(item).toBeInTheDocument();

    rerender(
      <SelectPopup
        items={items}
        onSelectItem={handleClick}
        activeItem={items[1]}
      />
    );

    //const select = screen.getByText(activeItem);

    //fireEvent.click(select);

    const item1 = screen.getByText(items[1]);

    expect(item1).toBeInTheDocument();
  });

  it("should change active item on select", () => {
    const onSelectItem = jest.fn();

    const TestCase = () => {
      const [activeItem, setActiveItem] = useState(items[0]);

      return (
        <SelectPopup
          name="select"
          items={items}
          onSelectItem={setActiveItem}
          activeItem={activeItem}
        />
      );
    };

    render(<TestCase />);

    const select = screen.getByText(items[0]);
    fireEvent.click(select);

    const item1 = screen.getByText(items[1]);
    fireEvent.click(item1);

    expect(screen.getByText(items[1])).toBeInTheDocument();
    expect(screen.queryByText(items[0])).not.toBeInTheDocument();
  });
});
