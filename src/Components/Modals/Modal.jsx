/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import style from "./Modal.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AddForm } from "../AddForm/AddForm";

export const Modal = ({ closeModal, product }) => {
  function handleCloseModal(event) {
    if (event.target.classList.contains(style.backDrop)) closeModal();
  }

  return (
    <div className={style.backDrop} onClick={handleCloseModal}>
      <div className={style.wrapper}>
        <h2 className={style.productTitle}>{product.name}</h2>
        <button type="button" onClick={closeModal} className={style.icon} >
          <IconContext.Provider
            value={{ size: 36}}
          >
            <IoCloseCircleOutline />
          </IconContext.Provider>
        </button>
        <AddForm product={product} closeModal={closeModal}/>
      </div>
    </div>
  );
};
