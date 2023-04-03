import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination, usePizzaTypes } from "../../../hooks";
import { usePizzaSizes } from "../../../hooks/usePizzaSizes";
import { getAdminAllStockPizzas } from "../../../redux/actions/admin";
import { Pagination } from "../../";
import StockItem from "./StockItem";

const Stock = () => {
  const dispatch = useDispatch();

  const sizes = usePizzaSizes();
  const types = usePizzaTypes();
  const { list: stockPizzas, totalCount } = useSelector(
    (state) => state.admin.stockPizzas
  );

  const pagination = usePagination(totalCount, 5);

  useEffect(() => {
    dispatch(getAdminAllStockPizzas(pagination.page, pagination.rowsPerPage));
  }, [pagination.page]);

  return (
    <div className="stock">
      <div className="stock__content">
        <div className="overflow-x-auto">
          <table className="table stock-table">
            <thead>
              <tr>
                <th>available</th>
                <th>id</th>
                <th>name</th>
                <th>available sizes</th>
                <th>available types</th>
              </tr>
            </thead>
            <tbody>
              {stockPizzas.length
                ? sizes &&
                  types &&
                  stockPizzas.map((product) => (
                    <StockItem
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      sizes={sizes}
                      types={types}
                      availableSizes={product.Sizes}
                      availableTypes={product.Types}
                    />
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        {totalCount ? <Pagination {...pagination} /> : ""}
      </div>
    </div>
  );
};

export default Stock;
