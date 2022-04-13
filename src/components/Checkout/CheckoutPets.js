
import React, { useState, useEffect } from "react";
import styles from "./Checkoutpets.module.css";

const CheckoutPets = (props) => {
  const products = useState(props);

  const mappedItems = products.map((item) => (
    <li className={styles.checkout_item}>
      <div className={styles["checkout_item__img-container"]}>
        <img
          className={styles.checkout_item__img}
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className={styles["checkout_item__detail-container"]}>
        <p className={styles.checkout_item__detail}>{item.name}</p>
        <p className={styles.checkout_item__detail}>
         {/* size: {item.enteredSize.toUpperCase()} */}
        </p>
        <p className={styles.checkout_item__detail}>${item.price}</p>
      </div>
    </li>
  ));

  return <ul className={styles["checkout_item-container"]}>{mappedItems}</ul>;
};

export default CheckoutPets;
