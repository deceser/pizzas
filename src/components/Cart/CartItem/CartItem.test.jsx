import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartItem from "./CartItem";
import * as reduxHooks from "react-redux";
import * as utils from "../../../utils/helpers";

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-redux"),
  };
});

jest.mock("../../../utils/helpers", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../../utils/helpers"),
  };
});

const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const cartIdGenerateSpy = jest.spyOn(utils, "cartIdGenerate");

const props = {
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
  "count": 1,
  "selectedProps": {
    "type": { "id": 2, "name": "tiny", "price": 0 },
    "size": { "id": 2, "name": "10", "price": 0 },
    "additionalPrice": 0,
  },
  "totalPrice": 12,
  "countSize": "small",
};

describe("Render CartItem", () => {
  it("should render item price, image, size and type", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText(props.item.price, { exact: false })).not.toBeNull();
    expect(
      screen.getByText(props.selectedProps.type.name, { exact: false })
    ).not.toBeNull();
    expect(
      screen.getByText(props.selectedProps.size.name, { exact: false })
    ).not.toBeNull();
    expect(screen.getByAltText(props.item.name)).toBeInTheDocument();
  });

  it("should render item total price", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText(props.totalPrice, { exact: false })).not.toBeNull();
  });
});
