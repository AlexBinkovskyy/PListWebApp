/* eslint-disable react/prop-types */
import style from "./ProductItem.module.css";
import { Modal } from "../../Components/Modals/Modal";
import { RemoveScroll } from "react-remove-scroll";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ConfirmModal } from "../Modals/ConfirmModal";

export const ProductItem = ({ product, }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [delModalOpen, setDelModalOpen] = useState(false)

  function toggleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }
  function toggleDeleteConfirm(){
    setDelModalOpen(!delModalOpen)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <h2 className={style.title}>{product.name}</h2>
        <img
          src={product.imageUrl}
          alt={`${product.name}'s image`}
          className={style.image}
        />
      </div>
      <div className={style.detailsWrapper}>
        <ul className={style.detailsList}>
          <li key={`count-${product.id}`} className={style.detailsListItem}>
            <span>count of items: {product.count}</span>
          </li>
          <li
            key={`dimensions-${product.id}`}
            className={style.detailsListItem}
          >
            <span>
              dimensions:
              <br />
              width ({product.size.width})mm, height ({product.size.height})mm
            </span>
          </li>
          <li key={`weight-${product.id}`} className={style.detailsListItem}>
            <span>weight: {product.weight}</span>
          </li>
        </ul>
        <h4 className={style.titleComments}>comments:</h4>
        <ul>
          {product.comment.map((comment, index) => (
            <li key={`comment-${index}`} className={style.commItem}>
              <p className={style.commItemText}>{comment}</p>
            </li>
          ))}
        </ul>
      </div>
      {location.pathname === "/" ? (
        <button
          type="button"
          onClick={toggleOpenModal}
          className={style.addButton}
        >
          Add product
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleDeleteConfirm}
          className={style.addButton}
        >
          Delete from cart
        </button>
      )}
      {isModalOpen && (
        <RemoveScroll>
          <Modal product={product} closeModal={toggleOpenModal} />
        </RemoveScroll>
      )}
      {delModalOpen && (
        <RemoveScroll>
          <ConfirmModal product={product} closeModal={toggleDeleteConfirm}/>
        </RemoveScroll>
      )}
    </div>
  );
};
