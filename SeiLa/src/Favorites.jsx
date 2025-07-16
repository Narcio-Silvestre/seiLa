import MiniCard from "./MiniCard";


export default function Favorites({favorites}) {
    return (
        <section className="bg-neutral-300 overflow-y-scroll h-1/2  transition-all duration-300 border-b-neutral-00 flex flex-col gap-0.5 items-center">
                <p  className="text-sm font-extrabold">Favorites</p>
                {favorites.map((favorite,i)=>{
                    return  <MiniCard key={i+"mcard"}favorite={favorite}></MiniCard>
                })}
                
                
            </section>

    )
}