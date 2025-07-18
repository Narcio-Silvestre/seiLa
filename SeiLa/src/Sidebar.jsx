import { useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar(){

    const [sideActive,setSideActive] = useState(true)
    


    return (
        <section className={`bg-white relative ${sideActive ? 'w-10' : 'w-65'} transition-all duration-300`}>
            <button onClick={()=>setSideActive(!sideActive)} className=" w-fit absolute right-0 m-1.5">
                {sideActive ? <IoIosArrowForward className="size-6" /> :
                 <IoIosCloseCircleOutline className="size-4 text-red-400"/> }
            </button>
        </section>
    )
}