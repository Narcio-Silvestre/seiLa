import { TiDeleteOutline } from "react-icons/ti";

export default function MiniCard({favorite}){
    return (
        <div className="bg-neutral-100 flex flex-row hover:shadow-md  transition-all duration-300 hover:shadow-black  h-15 rounded-2xl mt-1 p-0.5 w-13/14  ">
                    <img
                     className="h-10 w-10 rounded-xl flex-1 self-center m-1"
                     src={favorite.img} alt="" />
                     <div className=" flex-2  ">
                        <p className="text-sm font-extrabold">{favorite.model}</p>
                        <p className="text-sm text-neutral-400">19.99€</p>
                       

                     </div>
                     <div className="flex flex-row items-center flex-1  ">
                        <button className="rounded-2xl size-4 bg-red-500 hover:bg-red-700 flex items-center justify-center  "><span>
                            -</span></button>
                        <p className=" text-sm justify-center items-center flex   rounded-2xl bg-white p-2">5</p>
                        <button className="rounded-2xl size-4 bg-red-500 hover:bg-red-700 flex items-center justify-center">+</button>

                     </div>
                    <TiDeleteOutline className="rounded-2xl size-4 m-1 hover:text-red-700 text-black flex items-center justify-center"/>

                </div>
    )
}