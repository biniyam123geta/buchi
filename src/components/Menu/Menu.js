import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";


const Menu = ({handledata}) => {
  const dispatch = useDispatch();
  const menuIsActive = useSelector((state) => state.ui.menuIsVisible);
  const closeMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };
  const [pet, setPet] = React.useState(null);
  const [age, setAge] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const [size, setSize] = React.useState(null);


  const handlePetChange = (event) => {
    setPet(event.target.value);

  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);

  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);

  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);

  };



  const submitHandler = (e) => {
    e.preventDefault();
console.log("submit clicked",e);
 
  };

  return (
    <>
      <div className={`${styles.menu} ${menuIsActive ? styles.active : ""}`}>
        <form>
          <input type="text" placeholder="search" />
          <button>
            <i class="ri-search-line"></i>
          </button>
        </form>
        <button className={styles["close-menu"]} onClick={closeMenuHandler}>
        <i class="bi bi-x-circle"></i>
        </button>
       
        <form className={styles["item-modal-form"]} onSubmit={()=>handledata({pet,age,gender,size})} >
        <div>
      <label>
        Pet Type:
        <select value={pet} onChange={handlePetChange}>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Others">Others</option>
        </select>
      </label>
    </div>

    <div>
      <label>
        Age:
        <select value={age} onChange={handleAgeChange}>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
    
        </select>
      </label>
    </div>

    <div>
      <label>
        Size:
        <select value={size} onChange={handleSizeChange}  >
          <option value="Small">Small</option>
          <option value="Large">Large</option>
    
        </select>
      </label>
    </div>
    <button className={styles["add-btn"]}>Search</button>
</form>
    
      </div>
  
    </>
  );
};

export default Menu;
