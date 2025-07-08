import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function CardSneaker(props){

    return(
        <div className=" bg-white w-65 h-100  flex flex-col rounded-xl shadow-md  
            transition-all ease-in-out duration-200  ">
            <div className="picture relative w-full">
                <img src={props.img} alt="Nike Tenis" className='w-full h-55 object-cover rounded-t-xl' />
                <span className='absolute bg-red-600  p-1 top-1 left-1'>-30%</span>
                <span className='absolute bg-green-600 text-white  p-1 top-1 right-1'>Novo</span>
                <span className='absolute text-orange-400  p-1 bottom-1 left-1'>Frete Grátis</span>
                <FaHeart className='absolute text-red-600  text-2xl bottom-2 right-2 ' />
            </div>
            <div className="details h-full w-full  p-1 relative">
                <p className="text-2xl font-bold">Nike Air Force 1</p>
                <p className='text-gray-400 '>Leve, simples e moderno</p>
                <p className='text-gray-400 text-sm text-red-600'>Restam apenas 3 unidades</p>
                {/* <div className='flex flex-row'>
                    {Array.from({length:5},()=><FaStar className='text-xl text-yellow-300 ' />)}
                </div> */}
                <p className='line-through text-red-600 text-sm mt-6'>89.99€</p>
                <p className='text-green-600 text-xl font-bold'>59.99€</p>
                <button className='rounded bg-blue-700 p-1 absolute bottom-2 right-2'>Adicionar no <br /> carrinho</button>
            </div>
        </div>
    )
}