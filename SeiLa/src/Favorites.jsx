import MiniCard from "./MiniCard";
import { BsThreeDots } from "react-icons/bs";

export default function Favorites({favorites}) {
    return (
        <section className="bg-neutral-200 overflow-hidden h-1/2 relative transition-all duration-300 border-b-neutral-00 flex flex-col gap-0.5 items-center">
            <p  className="text-sm font-extrabold">Favorites</p>
            {favorites.map((favorite,i)=>{
                return  <MiniCard key={i+"mcard"}favorite={favorite}></MiniCard>
            })}
            <div className="absolute flex items-center justify-center  bg-gradient-to-b from-transparent to-red-400 h-1/4  w-full bottom-0 opacity-85 hover:opacity-100 transition-all duration-700 ease-in">
            <BsThreeDots className="size-7 text-gray-600 hover:text-black mt-4 transition-all duration-200" /></div>
        </section>

    )
}