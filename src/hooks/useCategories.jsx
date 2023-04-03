import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/filters";

const useCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return categories;
};

export default useCategories;
