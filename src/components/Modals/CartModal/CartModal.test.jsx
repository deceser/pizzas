import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as routerHooks from "react-router-dom";
import * as reduxHooks from "react-redux";
import { useCart } from "../../../hooks";
import CartModal from "./CartModal";
import * as actions from "../../../redux/actions/modals";

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-redux"),
  };
});

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-router-dom"),
  };
});

jest.mock("../../../redux/actions/modals", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../../redux/actions/modals"),
  };
});

const useNavigateSpy = jest.spyOn(routerHooks, "useNavigate");
const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const useSelectorSpy = jest.spyOn(reduxHooks, "useSelector");
//const useCartSpy = jest.spyOn(hooks, "useCart");
jest.mock("../../../hooks");

const cart = {
  "items": [
    {
      "item": {
        "id": 1,
        "ProductImages": [{ "url": "https://i.ibb.co/937F4Sp/text-4-2.png" }],
        "name": "White chiken",
        "Types": [
          { "id": 2, "name": "tiny", "price": 0 },
          { "id": 3, "name": "default", "price": 2 },
        ],
        "Sizes": [
          { "id": 2, "name": "10", "price": 0 },
          { "id": 3, "name": "12", "price": 2 },
          { "id": 4, "name": "16", "price": 4 },
        ],
        "price": 12,
      },
      "selectedProps": {
        "type": { "id": 2, "name": "tiny", "price": 0 },
        "size": { "id": 2, "name": "10", "price": 0 },
        "additionalPrice": 0,
      },
      "count": 1,
      "totalPrice": 12,
    },
    {
      "item": {
        "id": 1,
        "ProductImages": [{ "url": "https://i.ibb.co/937F4Sp/text-4-2.png" }],
        "name": "White chiken",
        "Types": [
          { "id": 3, "name": "default", "price": 2 },
          { "id": 2, "name": "tiny", "price": 0 },
        ],
        "Sizes": [
          { "id": 2, "name": "10", "price": 0 },
          { "id": 3, "name": "12", "price": 2 },
          { "id": 4, "name": "16", "price": 4 },
        ],
        "price": 12,
      },
      "selectedProps": {
        "type": { "id": 3, "name": "default", "price": 2 },
        "size": { "id": 2, "name": "10", "price": 0 },
        "additionalPrice": 0,
      },
      "count": 2,
      "totalPrice": 24,
    },
  ],
  "totalPrice": 36,
};

describe("CartModal render", () => {
  it("should render items", () => {
    const navigate = jest.fn();
    const dispatch = jest.fn();

    useNavigateSpy.mockReturnValue(navigate);
    useDispatchSpy.mockReturnValue(dispatch);
    useCart.mockReturnValue(cart);

    render(<CartModal />);

    expect(screen.queryAllByText("White chiken")).toHaveLength(2);
  });

  it("should dispatch action on click Checkout", () => {
    const navigate = jest.fn();
    const dispatch = jest.fn();

    const toggleModalVisibilitySpy = jest.spyOn(
      actions,
      "toggleModalVisibility"
    );

    useNavigateSpy.mockReturnValue(navigate);
    useDispatchSpy.mockReturnValue(dispatch);
    useCart.mockReturnValue(cart);

    render(<CartModal />);

    fireEvent.click(screen.getByText("Checkout"));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(toggleModalVisibilitySpy).toHaveBeenCalledTimes(1);
  });
});
