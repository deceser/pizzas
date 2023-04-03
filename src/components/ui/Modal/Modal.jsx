import classNames from "classnames";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalVisibility } from "../../../redux/actions/modals";

import styles from "./Modal.module.scss";

const Modal = ({
  name,
  visible,
  onClose,
  title,
  children,
  className,
  ...rest
}) => {
  const ref = useRef();
  const visibility = useSelector((state) =>
    name ? state.modals[name].visibility : visible
  );
  //const visibility = name
  //	? useSelector((state) => state.modals[name].visibility)
  //	: visible;
  const dispatch = useDispatch();

  const handleOutsideClick = useCallback(
    (e) => {
      if (visibility && ref.current && !ref.current.contains(e.target)) {
        if (name) {
          dispatch(toggleModalVisibility(name));
        }
        onClose && onClose();
      }
    },
    [visibility]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [visibility]);

  const onCloseClick = () => {
    if (name) {
      dispatch(toggleModalVisibility(name));
    }
    onClose && onClose();
  };

  return (
    <div
      className={classNames(styles.modal, {
        [styles.hidden]: !visibility,
      })}
      {...rest}
    >
      <div className={classNames(styles.content, className)} ref={ref}>
        <div className={styles.head}>
          <h2>{title}</h2>
          <div className={styles.close} onClick={onCloseClick}>
            <span className="icon-remove"></span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
