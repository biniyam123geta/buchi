import styles from "./ShippingForm.module.css";
import { useRef, useState } from "react";

const ShippingForm = (props) => {
  const name = useRef();
  const phone = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
  });

  const confirmHandler = (e) => {
    e.preventDefault();

    const isEmpty = (value) => value.trim() === "";
    const isDefault = (value) => value === "default";

    const enteredName = name.current.value;

    const enteredPhone = phone.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const phoneIsValid = !isEmpty(enteredPhone);

    setFormInputsValidity({
      name: nameIsValid,
      phone: phoneIsValid,
    });

    const formIsValid =
      nameIsValid &&
      phoneIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
    });
  };

  return (
    <form className={styles.form} id="shipping_form" onSubmit={confirmHandler}>
      <div className={styles.form__control}>
        <label htmlFor="name" className={styles["form__control-label"]}>
         Name
        </label>
        <input
          type="text"
          id="name"
          className={styles["form__control-input"]}
          ref={name}
        />
        {!formInputsValidity.name && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid name.
          </p>
        )}
      </div>
  
      <div className={styles.form__control}>
        <label htmlFor="phonenumber" className={styles["form__control-label"]}>
          Phone number
        </label>
        <input
          type="phone"
          id="phone"
          className={styles["form__control-input"]}
          ref={phone}
        />
        {!formInputsValidity.phone && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid phone number.
          </p>
        )}
      </div>
    </form>
  );
};

export default ShippingForm;
