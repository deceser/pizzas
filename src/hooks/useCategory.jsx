import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";

const useCategory = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(({ filters }) => filters);

  const setCategoryHandler = (index) => {
    dispatch(setCategory(index));
  };

  return [category, setCategoryHandler];
};

export default useCategory;
