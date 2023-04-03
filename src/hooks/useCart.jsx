import { useSelector } from "react-redux";

const useCart = () => {
  const {
    items,
    totalPrice,
    totalCount,
    isCheckouting,
    checkoutMessenge,
    orderId,
  } = useSelector((state) => state.cart);

  return {
    items: Object.values(items),
    totalPrice,
    totalCount,
    isCheckouting,
    checkoutMessenge,
    orderId,
  };
};

export default useCart;
