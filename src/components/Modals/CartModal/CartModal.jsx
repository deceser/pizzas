import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalBottom } from "../../ui";
import { MODALS } from "../../../utils/constants";
import { useCart } from "../../../hooks";
import { CartItem } from "../../Cart";
import { cartIdGenerate } from "../../../utils/helpers";

import styles from "./CartModal.module.scss";
import { toggleModalVisibility } from "../../../redux/actions/modals";

const CartModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, totalPrice } = useCart();

  const handleCheckoutClick = () => {
    navigate("/payment");
    dispatch(toggleModalVisibility(MODALS.CartModal));
  };

  return (
    <Modal name={MODALS.CartModal} className={styles.modal}>
      <ModalBody className={styles.body}>
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
      </ModalBody>
      <ModalBottom className={styles.bottom}>
        <div className={styles.totalPriceBlock}>
          <span className={styles.text}>Total Price: </span>
          <span className={styles.totalPrice}>{totalPrice}$</span>
        </div>
        <div className={styles.buttonBlock}>
          <Button
            variant="primary"
            size="big"
            className={styles.button}
            onClick={handleCheckoutClick}
          >
            Checkout
          </Button>
        </div>
      </ModalBottom>
    </Modal>
  );
};

export default CartModal;
