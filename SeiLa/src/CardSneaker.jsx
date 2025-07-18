import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import TopCardSneaker from "./TopCardSneaker";
import Arrow from "./Arrow";
import BottomCardSneaker from "./BottomCardSneaker";



export default function CardSneaker({sneaker, handleFavorite
 }){

       
    const [downArrow, setDownArrow] = useState(false) 
    
    return(
        <div className={` bg-white w-65 ${downArrow ? 'max-h-100' : 'max-h-74'}
            flex flex-col rounded-xl shadow-md   relative transition-all duration-700 `}>

            <TopCardSneaker sneaker={sneaker} handleFavorite={handleFavorite} />

            <BottomCardSneaker sneaker={sneaker} downArrow={downArrow} />

            {!downArrow ? 
            <Arrow tag={IoIosArrowDown} onClick={()=>setDownArrow(downArrow => !downArrow)} /> :
            <Arrow tag={IoIosArrowUp}  onClick={()=>setDownArrow(downArrow => !downArrow)} />}

        </div>
    )
}


 