import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ORDER_STATUSES } from "../../../utils/constants";
import {
  setOrderStatus,
  showOrderDetails,
  updateOrder,
} from "../../../redux/actions/admin";
import { Button, SelectPopup } from "../../ui";
import { useLocale } from "../../../hooks";
import parsePhoneNumber from "libphonenumber-js";

const statusesList = Object.values(ORDER_STATUSES);

const Order = ({ id, user, count, status, date, price, editing }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locale = useLocale();

  const parsedDate = new Date(date);
  const [selectedStatus, setSelectedStatus] = useState(status);

  const onSelectStatus = (status) => {
    setSelectedStatus(status);
    dispatch(setOrderStatus(id, status));
    dispatch(updateOrder(id));
  };

  const onViewClick = () => {
    // navigate("/order/" + id);
    dispatch(showOrderDetails(id));
  };

  // const onUpdateClick = () => {
  // 	dispatch(updateOrder(id));
  // };

  return (
    <tr key={id}>
      <td>{id}</td>
      {editing && <td>{user && user.id}</td>}
      {editing && (
        <td>
          {user &&
            parsePhoneNumber("+" + user.phoneNumber).formatInternational()}
        </td>
      )}
      <td>{count}</td>
      <td>{price}$</td>
      <td>
        {editing ? (
          <SelectPopup
            items={statusesList}
            activeItem={selectedStatus}
            onSelectItem={onSelectStatus}
          />
        ) : (
          selectedStatus
        )}
      </td>
      <td>{parsedDate.toLocaleString(locale)}</td>
      <td className="orders-table__button">
        <Button
          className="button--default button--default"
          onClick={onViewClick}
        >
          <span>View</span>
        </Button>
      </td>
    </tr>
  );
};

export default Order;
