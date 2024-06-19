import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../Redux/operations";
import style from "./HomePage.module.css";
import { selectIsLoading } from "../../Redux/selectors";
import { LoaderSpiner } from "../../Components/LoaderSpiner/LoaderSpiner";
import { ProductList } from "../../Components/ProductList/ProductList";


export const HomePage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
        <h1 style={{ visibility: "hidden", display: "none" }}>Home page</h1>
        {isLoading ? <LoaderSpiner /> : <ProductList />}
    </div>
  );
};
