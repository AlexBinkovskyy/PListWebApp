/* eslint-disable react/prop-types */
import { IoCloseCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import style from "./ConfirmModal.module.css";
import { useDispatch } from "react-redux";
import { removeBuyedProducts } from "../../Redux/productSlice";

export const ConfirmModal = ({ closeModal, product }) => {
const dispatch = useDispatch()

  function handleCloseModal(event) {
    if (event.target.classList.contains(style.backDrop)) closeModal();
  }

  function handleDelete() {
    dispatch(removeBuyedProducts(product._id));
    closeModal();
  }

  return (
    <div className={style.backDrop} onClick={handleCloseModal}>
      <div className={style.wrapper}>
        <button type="button" onClick={closeModal} className={style.icon}>
          <IconContext.Provider value={{ size: 36 }}>
            <IoCloseCircleOutline />
          </IconContext.Provider>
        </button>
        <h2 className={style.title}>
          Do you realy want to delete "{product.name}" <br />
          from the cart?
        </h2>
        <div className={style.btnWrapper}>
          <button
            type="button"
            className={style.buttonConfirm}
            onClick={handleDelete}
          >
            Confirm
          </button>
          <button type="button" className={style.buttonCancel} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
