import "./ResponsiveMenu.scss";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { toggleMenue } from "./menuSlice";


 
const ResponsiveMenu = () => {
  const [ulBlock, setUlBlock] = useState<boolean>(false);
  const selector = useAppSelector(state => state.menu.showMenue)
  const dispatch = useAppDispatch()

  const productsLength = useAppSelector(state => state.product.products.length)

  return (
    <div className={selector ? "responsive_menu visible" : "responsive_menu"}>
      <div className="overlay" onClick={() => dispatch(toggleMenue())} ></div>
      <div className="menu">
        <div className="logo">
          <img src={logoImg} alt="logo_img" loading="lazy" />
        </div>
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
            <span> 0 </span>
            <Link to="/loved">
              <div className="icon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </Link>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to=""> Home </NavLink>
          </li>
          <li>
            <NavLink to=""> Shop </NavLink>
          </li>
          <li>
            <NavLink to="" onClick={() => setUlBlock((preve) => !preve)}>
              Pages
              {ulBlock ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </NavLink>
            <ul className={ulBlock ? "block" : " "}>
              <li>
                <NavLink to=""> Shop Details</NavLink>
              </li>
              <li>
                <NavLink to=""> Shoping Cart</NavLink>
              </li>
              <li>
                <NavLink to=""> Check Out</NavLink>
              </li>
              <li>
                <NavLink to=""> Blog Details</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to=""> Blog </NavLink>
          </li>
          <li>
            <NavLink to=""> Contact </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
