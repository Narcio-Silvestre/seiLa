import { useState, useEffect } from "react";
import RightSideBar from "./RightSideBar";
import Shop from "./Shop";
import Sidebar from "./Sidebar";
import Favorites from "./Favorites";


export default function ShopSneakers() {

  const [sneakers, setSneakers] = useState([])


  useEffect(function (){
      fetch("http://localhost:8000/sneakers")
      .then(res=>res.json())
      .then(data=>setSneakers(data.map((data,i)=>{
          return {...data, "isFavorite": false,"id":i}
      })))
    },[])

  function handleFavorite(id){
    setSneakers((sneakers)=> sneakers.map((sneaker)=>{
        if(sneaker.id === id)
            return {...sneaker,"isFavorite": !sneaker.isFavorite}
        return sneaker
    }))
  }
    

  return (
    <>
      <section className="h-full bg-cyan-950 flex flex-row  ">
          <Sidebar></Sidebar>
          {/* <Blog></Blog> */}
          <Shop sneakers={sneakers} handleFavorite={handleFavorite}></Shop>
          <RightSideBar>
            <Favorites favorites={sneakers.filter((sneaker)=> sneaker.isFavorite === true)} ></Favorites>
            <section className="bg-neutral-400 h-1/2"></section>
          </RightSideBar>
      </section>
    </>
  );
}
