import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



export default function CardSneaker({img, promo,  isNew,
    model , description, price
 }){

    const [isFavorite, setIsFavorite] = useState(false)    
    const [downArrow, setDownArrow] = useState(false)    

    return(
        <div className={` bg-white w-65 ${downArrow ? 'max-h-100' : 'max-h-74'}
            flex flex-col rounded-xl shadow-md relative transition-all duration-700 `}>

            <div className="relative w-full">
                <img src={img} alt="Nike Tenis" className='w-full h-55 object-cover rounded-t-xl' />
                {promo && <span className='absolute bg-red-600  rounded p-1 top-1 left-1'>-{promo}%</span>}
                {isNew && <span className='absolute bg-green-600 rounded text-white  p-1 top-1 right-1'>Novo</span>}
                {(price > 30) && <span className='absolute text-orange-400  p-1 bottom-1 left-1'>Frete Grátis</span>}
                <FaHeart onClick={()=>setIsFavorite(isFavorite => !isFavorite)} 
                className={`absolute ${isFavorite? 'text-red-600 ':
                'text-white'} stroke-6 stroke-black text-2xl bottom-2 right-2
                transition-all ease-in duration-150 `} />
            </div>

            <div className={` ${downArrow ? 'min-h-45' : 'min-h-20'} w-full p-1
                relative overflow-hidden  transition-all duration-700`}>
                <p className="text-2xl font-bold">{model}</p>
                <p className='text-gray-400 '>{description}</p>

                { downArrow && <div> <p className='text-sm text-red-600'>Restam apenas 5 unidades</p>
                    <div className="absolute bottom-2 left-2">
                        <p className='line-through text-red-600 text-sm mt-6'>{price}€</p>
                        <p className='text-green-600 text-xl font-bold'>{(price - ((promo / 100)* price)).toFixed(2)}€</p>
                    </div>

                    <button className='rounded bg-blue-500 p-2 flex flex-row items-center gap-2 absolute bottom-2 right-2
                    hover:bg-blue-700'>
                        <span>Comprar</span>
                        <FaCartShopping className=""/>
                    </button>
                </div>
                }
            </div>

            {!downArrow ? <IoIosArrowDown onClick={()=>setDownArrow(downArrow => !downArrow)} className=" size-20 opacity-5 hover:opacity-100 transition-all  duration-300 ease-linear absolute -bottom-11 left-1/2 -translate-x-1/2 "/> :
            <IoIosArrowUp  onClick={()=>setDownArrow(downArrow => !downArrow)} className=" size-10 opacity-5 hover:opacity-100 transition-all  duration-300 ease-linear absolute -bottom-3  left-1/2 -translate-x-1/2 "/>}

        </div>
    )
}


 {/* <div className='flex flex-row'>
                    {Array.from({length:5},()=><FaStar className='text-xl text-yellow-300 ' />)}
                </div> */}