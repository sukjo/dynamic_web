import * as ReactDOM from "react-dom";
import cx from "classnames";
import styles from "./components.module.css";

export default function Modal({ children, onModalClick }) {
  const modalContainerCX = cx(styles.modalContainer);
  const overlayCX = cx(styles.modalOverlay);
  const modalCX = cx(styles.modalWindow);

  // const modalContainerCX = cx(styles.modalContainer, {
  //   [styles.hidden]: !isOpen,
  // });

  // const overlayCX = cx(styles.modalOverlay, {
  //   [styles.hidden]: !isOpen,
  // });

  // const modalCX = cx(styles.modalWindow, {
  //   // array of class names
  //   [styles.hidden]: !isOpen, // an object where keys are class names, and values determine whether the class should be added
  // });

  return ReactDOM.createPortal(
    <div className={modalContainerCX}>
      <div className={overlayCX} onClick={onModalClick}></div>{" "}
      <div className={modalCX} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modalContainer")
  );
}

// onClick={() => navigate("/")
