import { Tabs } from "../../../ui";
import { useCategories } from "../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../../redux/actions/filters";
import { useSearchParams } from "react-router-dom";

import styles from "./Categories.module.scss";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const categories = useCategories();
  const activeCategory = useSelector((state) => state.filters.category);
  const category = activeCategory;

  const onCategoryChange = (id) => {
    searchParams.delete("page");
    setSearchParams(searchParams);
    dispatch(setCategory(id));
  };

  return (
    <div className={styles.categories}>
      {categories.length ? (
        <Tabs
          items={categories}
          value={category}
          onChange={onCategoryChange}
          className={styles.tabs}
          tabClassName={styles.tab}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Categories;
