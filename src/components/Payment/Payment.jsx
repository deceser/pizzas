import { Button, Container, Title } from "../ui";
import { PaymentForm, usePaymentForm } from "../Forms";
import { useCart } from "../../hooks";
import { CartItem } from "../Cart";
import { cartIdGenerate } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Payment.module.scss";
import {
  checkoutCart,
  setCheckoutCartMessenge,
} from "../../redux/actions/cart";
import { Loader } from "../index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUserShippingData } from "../../redux/actions/user";
import { getDeliveryPrice } from "../../redux/actions/pizzas";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { delivery } = useSelector((state) => state.pizzas);
  const { items, totalPrice, isCheckouting, checkoutMessenge, orderId } =
    useCart();

  const handleSubmit = (values) => {
    dispatch(setUserShippingData(values));
    dispatch(checkoutCart(values));
  };

  const form = usePaymentForm(handleSubmit);

  useEffect(() => {
    if (!items.length && orderId) {
      navigate("/order/" + orderId);
    }
  }, [orderId]);

  useEffect(() => {
    dispatch(getDeliveryPrice());

    if (!items.length) {
      navigate("/");
    }
    dispatch(setCheckoutCartMessenge(null));
  }, []);

  return (
    <Container>
      <div className={styles.payment}>
        {isCheckouting ? (
          <Loader />
        ) : (
          <>
            <Title variant="h1" dashed={true}>
              Payment
            </Title>
            <div className={styles.content}>
              <div className={styles.form}>
                <PaymentForm form={form} />
              </div>
              <div className={styles.cart}>
                <div>
                  {items.map((item) => (
                    <CartItem
                      {...item}
                      key={cartIdGenerate(
                        item.item.id,
                        item.selectedProps.type,
                        item.selectedProps.size
                      )}
                      countSize="small"
                    />
                  ))}
                </div>
                <div className={styles.cartUnderBlock}>
                  <Title
                    variant="h4"
                    dashed={true}
                    className={styles.textBlock}
                  >
                    <span>Delivery</span>
                    <span>{delivery?.price || 0}$</span>
                  </Title>
                  <div className={styles.totalPrice}>
                    <label>Total Price:</label>
                    <span>{totalPrice + (delivery?.price || 0)}$</span>
                  </div>
                  <Button
                    onClick={form.handleSubmit}
                    variant="primary"
                    size="big"
                  >
                    Checkout
                  </Button>
                </div>
                {checkoutMessenge ? (
                  <div className={styles.checkoutMessenge}>
                    {checkoutMessenge}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Payment;
