import React from "react";
import { formatProductProperties } from "../../utils/helpers";

const OrderItem = ({ title, count, price, img, size, type }) => {
  return (
    <div className="order-item">
      <div className="order-item-img">
        <img className="pizza-block__image" src={img} alt="Pizza" />
      </div>
      <div className="order-item-info">
        <h3>{title}</h3>
        <p>{formatProductProperties(size, type, "inch")}</p>
      </div>
      <div className="order-item-count">
        <b>{count}</b>
      </div>
      <div className="order-item-price">
        <b>{price} $</b>
      </div>
    </div>
  );
};

export default OrderItem;
