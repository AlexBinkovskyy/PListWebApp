import { NavLink, useLocation } from "react-router-dom";
import style from "./NavLinks.module.css";

export const NavLinks = () => {
  const location = useLocation();

  return (
    <div>
      <ul className={style.list}>
        {location.pathname === '/cart' && <li className={style.listItem}>
          <NavLink to="/">Main</NavLink>
        </li>}
        <li className={style.listItem}>
          <NavLink to="/cart">Shopping Cart</NavLink>
        </li>
      </ul>
    </div>
  );
};
