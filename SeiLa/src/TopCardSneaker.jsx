import Message from "./Message";
import Promo from "./Promo";
import { FaHeart } from "react-icons/fa";


export default function TopCardSnearker({sneaker,handleFavorite}){
        
    return(
                
        <div className="relative w-full">
            
           <img src={sneaker.img} alt="Nike Tenis" className='w-full h-55 object-cover rounded-t-xl' />
           {sneaker.promo && <Promo promo={sneaker.promo}/>}
           {sneaker.isNew && <Message tag='span' className='absolute bg-green-600 rounded text-white  p-1 top-1 right-1'>Novo</Message>}
           {(sneaker.price > 30) && <Message tag='span' className='absolute text-orange-400  p-1 bottom-1 left-1'>Frete Grátis</Message>}
           <FaHeart onClick={()=>handleFavorite(sneaker.id)} 
           className={`absolute ${sneaker.isFavorite? 'text-red-600 ':
           'text-white'} stroke-6 stroke-black text-2xl bottom-2 right-2
           transition-all ease-in duration-150 `} />

        </div>
            
       
       
    )
}