import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithStore } from "../../utils/helpers/testing";
import * as reduxHooks from "react-redux";
import { PizzaBlock } from "..";
import { useProduct } from "../../hooks";

const item = {
  id: 1,
  name: "White chiken",
  price: 12,
  rating: 6,
  Sizes: [
    {
      id: 2,
      name: "10",
      price: 0,
    },
    {
      id: 3,
      name: "12",
      price: 2,
    },
    {
      id: 4,
      name: "16",
      price: 4,
    },
  ],
  Types: [
    {
      id: 2,
      name: "tiny",
      price: 0,
    },
    {
      id: 3,
      name: "default",
      price: 2,
    },
  ],
  ProductImages: [
    {
      url: "https://i.ibb.co/937F4Sp/text-4-2.png",
    },
  ],
  Category: {
    id: 1,
    name: "Pizzas",
  },
};

const product = {
  "type": { "id": 2, "name": "tiny", "price": 0 },
  "size": { "id": 2, "name": "10", "price": 0 },
  "additionalPrice": 0,
  "cartCount": 0,
};

const selectedFields = {
  size: {
    id: 2,
    name: "10",
    price: 0,
  },
  type: {
    id: 2,
    name: "tiny",
    price: 0,
  },
  additionalPrice: 0,
};

const cart = {
  items: {
    "1_2_2": {
      item: {
        id: 1,
        ProductImages: [
          {
            url: "https://i.ibb.co/937F4Sp/text-4-2.png",
          },
        ],
        name: "White chiken",
        Types: [
          {
            id: 2,
            name: "tiny",
            price: 0,
          },
          {
            id: 3,
            name: "default",
            price: 2,
          },
        ],
        Sizes: [
          {
            id: 2,
            name: "10",
            price: 0,
          },
          {
            id: 3,
            name: "12",
            price: 2,
          },
          {
            id: 4,
            name: "16",
            price: 4,
          },
        ],
        price: 12,
      },
      selectedProps: {
        type: {
          id: 2,
          name: "tiny",
          price: 0,
        },
        size: {
          id: 2,
          name: "10",
          price: 0,
        },
        additionalPrice: 0,
      },
      count: 1,
      totalPrice: 12,
    },
  },
  totalPrice: 12,
  totalCount: 1,
  checkoutMessenge: null,
  orderId: null,
  isCheckouting: false,
};

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-redux"),
  };
});

const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const useSelectorSpy = jest.spyOn(reduxHooks, "useSelector");

describe("Render PizzaBlock", () => {
  it("should render with title, price and image", () => {
    const useProductSpy = jest.spyOn({ useProduct }, "useProduct");
    useDispatchSpy.mockReturnValue(jest.fn());
    useSelectorSpy
      .mockReturnValueOnce(selectedFields)
      .mockReturnValueOnce(cart);
    useProductSpy.mockReturnValue(product);

    render(<PizzaBlock {...item} />);

    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByAltText(item.name)).toBeInTheDocument();
    expect(screen.getByText(`from ${item.price}$`)).toBeInTheDocument();
  });
});
