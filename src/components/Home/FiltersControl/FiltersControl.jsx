import Categories from "./Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setSortBy } from "../../../redux/actions/filters";

import styles from "./FiltersControl.module.scss";
import { Button, Container, Input, SelectPopup } from "../../ui";
import classNames from "classnames";
import { searchProduct } from "../../../redux/actions/pizzas";
import { useInput } from "../../../hooks";
import { useFormik } from "formik";

const FiltersControl = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(({ filters }) => filters);

  const searchForm = useFormik({
    initialValues: {
      field: "",
    },
    onSubmit: (values) => {
      dispatch(searchProduct(values.field));
    },
  });

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <Container>
      <div className={styles.filters} id="menu">
        <Categories />
        {/* <SelectPopup
          label="Sort by"
          items={["popular", "price", "alphabet"]}
          activeItem={sortBy}
          onSelectItem={onSelectSortType}
          className={classNames(
            "select__popup select__popup--success",
            styles.sort
          )}
        /> */}
        {/*         <form className={styles.search} onSubmit={searchForm.handleSubmit}>
          <Input
            className={styles.searchInput}
            label="Search"
            id="field"
            name="field"
            onChange={searchForm.handleChange}
            value={searchForm.values.field}
          />
          <Button variant="success" type="submit">
            Search
          </Button>
        </form> */}
      </div>
    </Container>
  );
};

export default FiltersControl;
