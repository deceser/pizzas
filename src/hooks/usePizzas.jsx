import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";

const usePizzas = (page, size) => {
  const dispatch = useDispatch();

  const { sortBy } = useSelector(({ filters }) => filters);
  const { list } = useSelector(({ pizzas }) => pizzas.items);
  const { category } = useSelector(({ filters }) => filters);
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (size && category !== "none") {
      dispatch(fetchPizzas(page, size, category));
    }
  }, [page, size, category]);

  /*   useEffect(() => {
    if (list.length) {
      setSortedItems(
        [...list].sort((a, b) => {
          switch (sortBy) {
            case "popular":
              return b.rating - a.rating;
            case "price":
              return a.price - b.price;
            case "alphabet":
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            default:
              return 0;
          }
        })
      );
    }
  }, [sortBy, list]); */

  return list;
};

export default usePizzas;
