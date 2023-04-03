import React from "react";
import { formatProductProperties } from "../../utils/helpers";
import { Title } from "../ui";

const OrderCardItem = ({
  totalPrice,
  count,
  product: { name, ProductImages },
  size,
  type,
}) => {
  return (
    <div className="order-cart-item">
      <div className="order-cart-item__item order-cart-item__img">
        <img
          src={ProductImages[0].url}
          alt={name}
          className="pizza-block__image"
        />
      </div>
      <div className="order-cart-item__item order-cart-item__details">
        <Title variant="h4">{name}</Title>
        <span>{formatProductProperties(size, type, "inch")}</span>
      </div>
      <div className="order-cart-item__item order-cart-item__count">
        <Title variant="h4">{count}</Title>
      </div>
      <div className="order-cart-item__item order-cart-item__price">
        <Title variant="h4">{totalPrice}$</Title>
      </div>
    </div>
  );
};

export default OrderCardItem;
