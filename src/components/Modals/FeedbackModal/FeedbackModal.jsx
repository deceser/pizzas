import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModalVisibility } from "../../../redux/actions/modals";
import { MODALS } from "../../../utils/constants";
import { Button, Modal, ModalBody, ModalBottom } from "../../ui";

import styles from "./FeedbackModal.module.scss";
import { useUserData } from "../../../hooks";
import { callBack } from "../../../redux/actions/user";

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orderId } = useSelector((state) => state.cart);
  const [phone, setPhone] = useState(useUserData().phoneNumber || "");

  const onConfirmModal = () => {
    dispatch(callBack(phone));
    dispatch(toggleModalVisibility(MODALS.FeedbackModal));
  };

  useEffect(() => {
    if (orderId) {
      navigate("/order/" + orderId);
    }
  }, [orderId]);

  return (
    <Modal
      className={styles.modal}
      name={MODALS.FeedbackModal}
      title="Call me back"
    >
      <ModalBody className={styles.body}>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={setPhone}
          className={styles.input}
        />
      </ModalBody>
      <ModalBottom className={styles.bottom}>
        <Button variant="success" onClick={onConfirmModal}>
          <span>Call me back</span>
        </Button>
      </ModalBottom>
    </Modal>
  );
};

export default FeedbackModal;
