
import styles from "./Navbar.module.css";
import React from "react";
import Navlink from "../UI/Navlink";
import {Link} from 'react-router-dom'
import Logo from "../UI/Logo";
import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
const NavBar = (props) => {

  const dispatch = useDispatch();


  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const toggleMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };
  
    return ( <nav className={styles.nav}>
      <Navlink onClick={()=>toggleMenuHandler()} >
      <i class="bi bi-search"></i>
      </Navlink>
      <Logo />
      <Navlink onClick={toggleCartHandler}>
        <div className={styles["nav__btn-wrapper"]}>
        <i class="bi bi-grid-3x3-gap"></i>
         
        </div>
      </Navlink>
    </nav> );
}
 
export default NavBar;