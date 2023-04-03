import { useSelector } from "react-redux";
import { cartIdGenerate } from "../utils/helpers";

const useProduct = (id) => {
  const selectedFields = useSelector(
    (state) => state.pizzas.selectedFields[id]
  );

  const { items: cartItems } = useSelector((state) => state.cart);

  const cartItem =
    cartItems[
      cartIdGenerate(id, selectedFields?.type.id, selectedFields?.size.id)
    ];

  const cartCount = cartItem ? cartItem.count : 0;

  return {
    type: selectedFields?.type,
    size: selectedFields?.size,
    additionalPrice: selectedFields?.additionalPrice,
    cartCount,
  };
};

export default useProduct;
