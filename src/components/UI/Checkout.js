import { useState } from "react";

import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import ShippingForm from "../Checkout/ShippingForm";
import CheckoutPets from "../Checkout/CheckoutPets";
import NavBar from "../NavBar/NavBar";
import {postAsync} from "../../Services/adapter";

const Checkout = () => {
  console.log("pet",);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  //const dispatch = useDispatch();
  // const orderedItems = useSelector((state) => state.cart);
 const [totalPrice,setTotalPrice] = useState(10);

  const submitOrderHandler = async (userData) => {

    console.log("userdata",userData);
     setIsSubmitting(true);
 
  const res= postAsync("http://209.97.133.58:8000/customer/add_customer",userData);
  const loadedItemss = [];
  const resData = await res.then(data=>
    {
      setIsSubmitting(false);
      setDidSubmit(true);
     

  }).catch(o=>{
    console.log("fail inserted");
    });

  //setIsLoading(false);
  };

  const checkoutContent = (
    <>
      <main className={styles.checkout}>
        <p>Checkout</p>
        <div className={styles["checkout-container"]}>
          <div className={styles["checkout__address_details"]}>
            <p className={styles["checkout__details-heading"]}>
              We don't know how to reach you
            </p>
            <ShippingForm onConfirm={submitOrderHandler} />
          </div>
         
        </div>
        <button className={styles.checkout__submit} form="shipping_form">
          Send
        </button>
        <aside>
          <Menu />
        </aside>
      </main>
      <Footer />
    </>
  );

  const submittedOrder = (
    <div className={styles["submitting__order-container"]}>
      <p className={styles.submitting__text}>
        {didSubmit && !isSubmitting
          ? "Successfully submitted your order!"
          : "Submitting..."}
      </p>
      {didSubmit && (
        <Link to="/home">
          <button className={styles.submitting__btn}>Back to Home Page</button>
        </Link>
      )}
    </div>
  );

  return (
    <>
    <header>
        <NavBar  />
      </header>
      {!isSubmitting && !didSubmit && checkoutContent}
      {isSubmitting && !didSubmit && submittedOrder}
      {!isSubmitting && didSubmit && submittedOrder}
    </>
  );
};

export default Checkout;
