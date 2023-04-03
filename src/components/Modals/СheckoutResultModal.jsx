import React from "react";
import { useSelector } from "react-redux";
import { MODALS } from "../../utils/constants";
import { Modal, ModalBody } from "../ui";

const СheckoutResultModal = ({ visible, setVisible }) => {
  const { checkoutMessenge } = useSelector((state) => state.cart);

  const onClose = () => {};

  return (
    <Modal
      className="checkout-modal"
      name={MODALS.СheckoutResultModal}
      title="Done"
      onClose={onClose}
      visible={visible}
    >
      <ModalBody className="checkout-modal__body">
        <p>{checkoutMessenge}</p>
      </ModalBody>
    </Modal>
  );
};

export default СheckoutResultModal;
