import { useSelector } from "react-redux";
import { selectProductList } from "../../Redux/selectors";
import { Container } from "../Container/Container";
import { ProductItem } from "../ProductItem/ProductItem";
import style from './ProductList.module.css'

export const ProductList = () => {
  const prodList = useSelector(selectProductList);

  return (
    <Container>
      {
        <ul className={style.list}>
          {prodList.map((product) => (
            <li key={product._id} className={style.listItem}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      }
    </Container>
  );
};
