import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaTypes } from "../redux/actions/pizzas";

const usePizzaTypes = () => {
  const dispatch = useDispatch();

  const { types } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(getPizzaTypes());
  }, []);

  return types;
};

export default usePizzaTypes;
