import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "../../../hooks";
import { getAdminPizzas } from "../../../redux/actions/admin";
import { Pagination } from "../../";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import { getCategories } from "../../../redux/actions/filters";

const Products = () => {
  const dispatch = useDispatch();

  const { list: pizzas, totalCount } = useSelector(
    (state) => state.admin.pizzas
  );
  const pagination = usePagination(totalCount, 5);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getAdminPizzas(pagination.page, pagination.rowsPerPage));
  }, [pagination.page]);

  return (
    <div className="products">
      <div className="products__content">
        <AddProduct />
        <div className="overflow-x-auto">
          <table className="table products-table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>imageUrl</th>
                <th>price</th>
                <th>category</th>
                <th>rating</th>
                <th>action</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <ProductItem key={pizza.id} {...pizza} />
                ))}
            </tbody>
          </table>
        </div>
        <Pagination {...pagination} />
      </div>
    </div>
  );
};

export default Products;
