import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
    
      <div className={styles.content}>
        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <a href="#">payment information</a>
            </li>
           
            <li>
              <a href="#">shipping information</a>
            </li>
          </ul>
        </div>
        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <a href="#">terms of use</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
           
          </ul>
        </div>

        <div className={styles.branding}>
          <span className={styles.logo}>Buchi</span>
          <p>&copy; Buchi. all rights resirved</p>
          <div className={styles["social-container"]}>
            <a href="#">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
            <i class="bi bi-twitter"></i>
            </a>

            <a href="#">
            <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
