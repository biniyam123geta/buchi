import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "./Footer/footer";
import Menu from "./Menu/Menu";
import PetList from "./Pets/PetList";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";


const HomePage = () => {
  const dispatch = useDispatch();
 const [data,setData]=useState({
   age: "",
   gender: "",
   pet: "",
   size: ""});
  const handledata=(data)=>{
setData(data);

dispatch(uiActions.toggleMenu());
  }
   
    return (  <>
       <header>
        <NavBar  />
      </header>
        <main>
          <PetList data={data}/>
          <aside>
            <Menu  handledata={handledata}/>
          </aside>
        </main>
        <Footer />
      </> );
}
 
export default HomePage;