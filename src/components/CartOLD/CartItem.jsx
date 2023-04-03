import React from "react";
import { Button, MinusIcon, PlusIcon } from "../ui";

const CartItem = ({
	title,
	count,
	price,
	img,
	onRemove,
	onIncCount,
	onDecCount,
	selectedProps,
	props,
}) => {
	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img className="pizza-block__image" src={img} alt="Pizza" />
			</div>
			<div className="cart__item-info">
				<h3>{title}</h3>
				<p>
					{selectedProps
						? `${selectedProps.type}, ${selectedProps.size} inch`
						: props}
				</p>
			</div>
			<div className="cart__item-count">
				<Button
					className="button button--outline button--circle cart__item-count-minus"
					onClick={onDecCount}
				>
					<MinusIcon />
				</Button>
				<b>{count}</b>
				<div
					className="button button--outline button--circle cart__item-count-plus"
					onClick={onIncCount}
				>
					<PlusIcon />
				</div>
			</div>
			<div className="cart__item-price">
				<b>{price} $</b>
			</div>
			<div className="cart__item-remove">
				<Button
					className="button button--outline button--circle"
					onClick={onRemove}
				>
					<PlusIcon />
				</Button>
			</div>
		</div>
	);
};

export default CartItem;
