import "./Nav.scss";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { toggleMenue } from "../ResponsiveMenu/menuSlice";

import { useAppSelector } from "../hooks";

const Nav = () => {
  const dispatch = useAppDispatch();

  const productsLength = useAppSelector(state => state.product.products.length)
 
  const handleClick = () => {
    dispatch(toggleMenue());
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/shop"> Shop </NavLink>
        </li>
        <li>
          <a> Pages </a>
        </li>
        <li>
          <NavLink to="/blog"> Blog </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
      <div className="cart_love">
        <div className="heart">
          <span> {productsLength} </span>
          <Link to="/cart">
            <div className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </Link>
        </div>
        <div className="cart">
          <span>0</span>
          <Link to="/loved">
            <div className="icon">
              <i className="fa-solid fa-heart"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="icon_bar" onClick={() => handleClick()}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
