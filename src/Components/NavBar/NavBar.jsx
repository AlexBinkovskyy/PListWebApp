import { Logo } from '../Logo/Logo';
import { NavLinks } from '../NavLinks/NavLinks';
import style from './NavBar.module.css'

export const NavBar = () => {
  return <div className={style.wrapper}>
    <Logo/>
    <NavLinks/>
  </div>;
};
