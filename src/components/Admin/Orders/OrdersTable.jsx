import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePagination } from "../../../hooks";
import { getOrders } from "../../../redux/actions/admin";
import { Pagination } from "../../";
import Order from "./Order";
import DetailsModal from "./DetailsModal/DetailsModal";

const OrdersTable = ({ orders, totalCount, editing }) => {
  const dispatch = useDispatch();
  // const [filterStatusName, setFilterStatusName] = useState("All");
  //
  // const [filteredOrders, setFilteredOrders] = useState(orders);

  const pagination = usePagination(totalCount, 8);
  // const statusesList = Object.values(ORDER_STATUSES);

  useEffect(() => {
    dispatch(getOrders(pagination.page, pagination.rowsPerPage));
  }, [pagination.page]);

  // useEffect(() => {
  //   if (filterStatusName === "All") {
  //     setFilteredOrders(orders);
  //   } else {
  //     setFilteredOrders(
  //       orders.filter((order) => order.status === filterStatusName)
  //     );
  //   }
  // }, [filterStatusName, orders]);

  // const onSelectStatus = (status) => {
  //   setFilterStatusName(status);
  // };

  return (
    <div className="orders">
      <DetailsModal />
      {/*<div className="orders__filter">*/}
      {/*  <SelectPopup*/}
      {/*    label="Status"*/}
      {/*    items={["All", ...statusesList]}*/}
      {/*    activeItem={filterStatusName}*/}
      {/*    onSelectItem={onSelectStatus}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="orders__content overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="table orders-table">
            <thead>
              <tr>
                <th>id</th>
                {editing && <th>user id</th>}
                {editing && <th>phone</th>}
                <th>count</th>
                <th>price</th>
                <th>status</th>
                <th>date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.OrderProducts ? (
                  <Order
                    key={order.id}
                    id={order.id}
                    user={order.User}
                    count={order.totalCount}
                    status={order.status}
                    date={order.createdAt}
                    price={order.totalPrice}
                    editing={editing}
                  />
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
        {totalCount ? <Pagination {...pagination} /> : ""}
      </div>
    </div>
  );
};

export default OrdersTable;
