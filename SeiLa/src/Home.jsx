import { useState, useEffect } from "react";
import Blog from "./blog";
import OtherSideBar from "./OtherSideBar";
import Shop from "./Shop";
import Sidebar from "./Sidebar";
import Favorites from "./Favorites";


export default function Home() {

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
      <OtherSideBar>
        <Favorites favorites={sneakers.filter((sneaker)=> sneaker.isFavorite === true)} ></Favorites>
        <section className="bg-neutral-300"></section>
      </OtherSideBar>
      
    </section>
    <footer className="text-4xl h-10  bg-amber-800">
        Footer
      </footer>
    </>
    
  );
}
