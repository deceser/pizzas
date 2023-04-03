import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as reduxHooks from "react-redux";
import { usePagination, usePizzas, useProduct } from "../../../hooks";
import Products from "./Products";

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

const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const useSelectorSpy = jest.spyOn(reduxHooks, "useSelector");
jest.mock("../../../hooks");

const totalCount = 18;
const pagination = {
  "page": 0,
  "initialPage": 0,
  "totalRows": 18,
  "rowsPerPage": 8,
};
const pizzas = [
  {
    "id": 8,
    "name": "Pepperoni",
    "price": 17,
    "rating": 9,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [
      {
        "url":
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      },
    ],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 7,
    "name": "Margarita",
    "price": 13,
    "rating": 4,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [
      {
        "url":
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
      },
    ],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 6,
    "name": "Four seasons",
    "price": 13,
    "rating": 10,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [
      {
        "url":
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
      },
    ],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 5,
    "name": "Vegetables and mushrooms",
    "price": 12,
    "rating": 7,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [
      {
        "url":
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
      },
    ],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 4,
    "name": "Bavarian",
    "price": 10,
    "rating": 10,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [{ "url": "https://i.ibb.co/pZsNLQy/text-1.png" }],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 3,
    "name": "Cesar",
    "price": 18,
    "rating": 8,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [{ "url": "https://i.ibb.co/dpV67gp/text-2-1.png" }],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 2,
    "name": "Hawaiian",
    "price": 15,
    "rating": 10,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [{ "url": "https://i.ibb.co/6NNfVVq/text-3-1.png" }],
    "Category": { "id": 1, "name": "Pizzas" },
  },
  {
    "id": 1,
    "name": "White chiken",
    "price": 12,
    "rating": 6,
    "Sizes": [
      { "id": 2, "name": "10", "price": 0 },
      { "id": 3, "name": "12", "price": 2 },
      { "id": 4, "name": "16", "price": 4 },
    ],
    "Types": [
      { "id": 2, "name": "tiny", "price": 0 },
      { "id": 3, "name": "default", "price": 2 },
    ],
    "ProductImages": [{ "url": "https://i.ibb.co/937F4Sp/text-4-2.png" }],
    "Category": { "id": 1, "name": "Pizzas" },
  },
];

const product = {
  "type": { "id": 2, "name": "tiny", "price": 0 },
  "size": { "id": 2, "name": "10", "price": 0 },
  "additionalPrice": 0,
  "cartCount": 0,
};

describe("Render Products", () => {
  it("should render products", () => {
    useSelectorSpy
      .mockReturnValueOnce(true)
      .mockReturnValueOnce({ totalCount });

    usePagination.mockReturnValue(pagination);
    useProduct.mockReturnValue(product);
    usePizzas.mockReturnValue(pizzas);

    render(<Products />);

    for (let product of pizzas) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    }
  });
});
