import Message from "./Message";
import Button from "./Button";
import Stars from "./Stars";
import { FaCartShopping } from "react-icons/fa6";


export default function BottomCardSneaker({downArrow,sneaker}){
        const newPrice = (sneaker.price - ((sneaker.promo / 100)* sneaker.price)).toFixed(2);
    return(
                
        <div className={` ${downArrow ? 'min-h-45' : 'min-h-20'} w-full p-1
            relative overflow-hidden  transition-all duration-700`}>
            <Message tag='p' className="text-2xl font-bold">{sneaker.model}</Message>
            <Stars />
            <Message tag='p' className='text-gray-400 '>{sneaker.description}</Message>
            { downArrow && 
                <div> 
                    <Message tag='p' className='text-sm text-red-600'>Restam apenas 5 unidades</Message>
                    <div className="absolute bottom-2 left-2">
                        <Message tag='p' className='line-through text-red-600 text-sm mt-6'>{sneaker.price}€</Message>
                        <Message tag='p' className='text-green-600 text-xl font-bold'>{newPrice}€</Message>
                    </div>
                    <Button className='rounded bg-blue-700 p-2 flex flex-row
                    items-center gap-2 absolute bottom-2 right-2 hover:bg-blue-500
                    transition-all duration-200 ease-in-out'>
                        <span>Comprar</span>
                        <FaCartShopping className=""/>
                    </Button>
                </div>
            }
        </div>
       
    )
}