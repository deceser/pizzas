import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaSizes } from "../redux/actions/pizzas";

export const usePizzaSizes = () => {
  const dispatch = useDispatch();

  const { sizes } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(getPizzaSizes());
  }, []);

  return sizes;
};
