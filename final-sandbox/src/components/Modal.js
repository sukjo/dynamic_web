import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./components.module.css";

export default function Modal({ children }) {
  const navigate = useNavigate();
  const modalContainerCX = cx(styles.modalContainer);
  const modalCX = cx(styles.modal);

  return (
    <div className={modalContainerCX} onClick={() => navigate("/")}>
      <div className={modalCX} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
