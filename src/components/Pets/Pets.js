import React, { useState, useEffect } from "react";
import styles from "./Pets.module.css";




const Pets = (props) => {
  
   const data="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    return (
        <>
        <li className={styles.item} onClick={props.onClick}>
          <div className={styles["image-container"]}>
            <img src={props.photos[0] && props.photos[0].url } alt="#" />
          </div>
          <div className={styles.name}>
            <h3>{props.type}</h3>
          </div>
          <p>{props.size}</p>
        </li>
      </>
      );
}
 
export default Pets;