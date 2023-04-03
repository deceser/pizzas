import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Selector from "./Selector";
import * as reduxHooks from "react-redux";
import styles from "./Selector.module.scss";
import * as actions from "../../redux/actions/pizzas";

const props = {
  "id": 1,
  "types": [
    { "id": 2, "name": "tiny", "price": 0 },
    { "id": 3, "name": "default", "price": 2 },
  ],
  "sizes": [
    { "id": 2, "name": "10", "price": 0 },
    { "id": 3, "name": "12", "price": 2 },
    { "id": 4, "name": "16", "price": 4 },
  ],
  "activeType": { "id": 2, "name": "tiny", "price": 0 },
  "activeSize": { "id": 2, "name": "10", "price": 0 },
};

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-redux"),
  };
});

jest.mock("../../redux/actions/pizzas", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../redux/actions/pizzas"),
  };
});

const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const useSelectorSpy = jest.spyOn(reduxHooks, "useSelector");

describe("Render Selector", () => {
  it("should render with correct types", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    const { debug } = render(<Selector {...props} />);

    for (let type of props.types) {
      expect(screen.getByText(type.name)).not.toBeNull();
    }
  });

  it("should render with correct sizes", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    render(<Selector {...props} />);

    for (let size of props.sizes) {
      expect(screen.getByText(size.name, { exact: false })).not.toBeNull();
    }
  });

  it("should render with correct active size", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    render(<Selector {...props} />);

    const activeSize = screen.getByText(props.activeSize.name, {
      exact: false,
    });

    expect(activeSize).toHaveClass(styles.active);
  });

  it("should render with correct active type", () => {
    useDispatchSpy.mockReturnValue(jest.fn());

    render(<Selector {...props} />);

    const activeType = screen.getByText(props.activeType.name, {
      exact: false,
    });

    expect(activeType).toHaveClass(styles.active);
  });

  it("should dispatch setSelectedSize on select size", () => {
    const dispatch = jest.fn();

    useDispatchSpy.mockReturnValue(dispatch);

    const setSelectedFieldSpy = jest.spyOn(actions, "setSelectedField");

    render(<Selector {...props} />);

    fireEvent.click(screen.getByText(props.sizes[2].name, { exact: false }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(setSelectedFieldSpy).toHaveBeenCalledTimes(1);
  });

  it("should dispatch setSelectedSize on select type", () => {
    const dispatch = jest.fn();

    useDispatchSpy.mockReturnValue(dispatch);

    const setSelectedFieldSpy = jest.spyOn(actions, "setSelectedField");

    render(<Selector {...props} />);

    fireEvent.click(screen.getByText(props.types[1].name, { exact: false }));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(setSelectedFieldSpy).toHaveBeenCalledTimes(1);
  });
});
