import { PizzaBlock, PizzaLoadingBlock } from "../../index";

import styles from "./Products.module.scss";
import { useSelector } from "react-redux";
import { usePagination, usePizzas } from "../../../hooks";
import Pagination from "../../Pagination/Pagination";
import { Container } from "../../ui";

const Products = () => {
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const { totalCount } = useSelector(({ pizzas }) => pizzas.items);

  const pagination = usePagination(totalCount, 8);

  const pizzas = usePizzas(pagination.page, pagination.rowsPerPage);

  return (
    <div className={styles.products}>
      <Container>
        <h2 className={styles.title}>Menu</h2>
        <div className={styles.items}>
          {pizzas !== null
            ? isLoaded && pizzas.length
              ? pizzas.map((item, index) => (
                  <PizzaBlock key={index} {...item} />
                ))
              : Array(8)
                  .fill()
                  .map((_, index) => <PizzaLoadingBlock key={index} />)
            : "Nothing found"}
        </div>
        <div className={styles.pagination}>
          {totalCount ? <Pagination {...pagination} /> : ""}
        </div>
      </Container>
    </div>
  );
};

export default Products;
