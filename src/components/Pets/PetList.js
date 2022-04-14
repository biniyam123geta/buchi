import React, { useState, useEffect } from "react";
import styles from "./PetList.module.css";
import PetModal from "./PetModal";
import Pets from "./Pets";
import {getAsync} from "../../Services/adapter";



const PetList = (props) => {
const [selectedItem, setSelectedItem] = useState(false);
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [httpError, setHttpError] = useState(null);
const [modalIsActive, setModal] = useState(false);

const limit=13;
const type=props.data.pet;
const age=props.data.age;
const size=props.data.gender;
const gender=props.data.size;
  
    const EventHandler = () => {
     setModal(true);
    };
    useEffect(() => {
        const fetchItems = async () => {
          setIsLoading(true);
        const res= getAsync(`http://209.97.133.58:8000/pet/get_pets?limit=${limit}&type=${type}&age=${age}&gender=${gender}&size=${size}`);
          const loadedItemss = [];
          const resData = await res.then(data=>
            {

             setItems(data.pets);
       
          }).catch(o=>{

            });
 
          setIsLoading(false);
        };
    
    
    
          fetchItems().catch((error) => {
          setHttpError(error.message);
          console.log(error.message);
          setIsLoading(false);
        });
    
       
      }, []);
    
     
    
      if (isLoading) {
        return (
          <section className={styles["items-section"]}>
            <div className={styles.loading}>
              Loading <span className="loading dots2"></span>{" "}
            </div>
          </section>
        );
      }
    
      if (httpError) {
        return (
          <section className={styles["items-section"]}>
            <p className={styles.went_wrong}>{httpError}</p>
          </section>
        );
      }
    
      const list = items.map((item) => (
        <Pets
        type={item.type}
         gender={item.gender}
           photos={item.photos.filter(check)}
          age={item.age}
          size={item.size}
          key={item.pet_id}
          onClick={() => {
            setSelectedItem(item);
    
          }}
        />
      ));
  
      function check(filter) {
       if(filter.url!=null && filter.url!=undefined && filter.url!="" )
        return filter.url;
      }
    return (  <>
        <section className={styles["items-section"]} onClick={EventHandler}>
          <ul className={styles["items-container"]}>{list}</ul>
  
          {modalIsActive && <PetModal item={selectedItem} />}
        </section>
      </> );
}
 
export default PetList;