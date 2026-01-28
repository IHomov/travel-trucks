import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/" className={s.logo}>
          Travel<span className={s.logoAccent}>Trucks</span>
        </Link>
        <div className={s.menu}>
          <NavLink to="/" className={({isActive}) => isActive ? s.active : s.link}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={({isActive}) => isActive ? s.active : s.link}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};