import React from "react";
import { useSelector } from "react-redux";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const { list: orders, totalCount } = useSelector(
    (state) => state.admin.orders
  );

  return (
    <div>
      <OrdersTable orders={orders} totalCount={totalCount} editing={true} />
    </div>
  );
};

export default Orders;
