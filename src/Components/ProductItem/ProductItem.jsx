/* eslint-disable react/prop-types */
import style from "./ProductItem.module.css";

export const ProductItem = ({ product }) => {
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
    </div>
  );
};
