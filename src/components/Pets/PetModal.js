import React, { useRef, useState } from "react";
import styles from "./PetModal.module.css";
import { useDispatch, useSelector } from "react-redux";
 import { uiActions } from "../../store/uiSlice";
import { Link } from "react-router-dom";


const PetModal = (props) => {
  console.log("propss modal",props);

    const disptach = useDispatch();

       const submitHandler = (e) => {
      
 };

 
 const closeModalHandler = () => {
   disptach(uiActions.toggleModal());
 };
    return ( 
        <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={props.item.photos[0] && props.item.photos[0].url} alt="" />
        </div>
        <h3 className="item-name">Pet type :{props.item.type}</h3>
        <p>Gender :{props.item.gender}</p>
      </div>
      <form className={styles["item-modal-form"]} onSubmit={submitHandler} >
      <p>Source: {props.item.source}</p>
      <p> Size :{props.item.size}  </p> 
     
        <p>Age: {props.item.age}</p>
    
      
        <Link to="/checkout">
          <button className={styles["add-btn"]}>Adobt Me</button>
        </Link>
      
        <button
          className={styles["close-modal-btn"]}
          onClick={closeModalHandler}
        >
          Close
        </button>
      </form>
    </div>
     );
}
 
export default PetModal;