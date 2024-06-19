import { useSelector } from "react-redux";
import { selectCartList, selectProductList } from "../../Redux/selectors";
import { ProductItem } from "../ProductItem/ProductItem";
import style from "./ProductList.module.css";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

export const ProductList = () => {
  const location = useLocation();
  const productList = useSelector(selectProductList);
  const cartList = useSelector(selectCartList);
  const prodList = location.pathname === "/" ? productList : cartList;

  return (
    <ul className={style.list}>
      {prodList.map((product) => (
        <li
          key={location.pathname === "/" ? product._id : nanoid()}
          className={style.listItem}
        >
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};
