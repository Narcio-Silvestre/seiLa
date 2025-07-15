import { TiDeleteOutline } from "react-icons/ti";
export default function OtherSideBar(){
    return (
        <section className="bg-emerald-900 w-65 grid grid-rows-2">
            <section className="bg-neutral-400 flex flex-col gap-0.5 items-center">
                <div className="bg-neutral-100 flex flex-row hover:shadow-md transition-all duration-300 hover:shadow-black  h-17 rounded-2xl mt-1 p-1 w-13/14  ">
                    <img
                     className="h-10 w-10 rounded-xl flex-[1] self-center m-1"
                     src="src/assets/domino-studio-164_6wVEHfI-unsplash.jpg" alt="" />
                     <div className=" flex-[3] ">
                        <p className="text-md font-extrabold">Nike Air 1</p>
                        <p className="text-sm text-neutral-400">19.99€</p>
                        <p className="text-sm text-green-400"><span className="
                        font-bold text-black">Total:</span> 219.99€</p>

                     </div>
                     <div className="flex flex-row flex-[1] items-center  ">
                        <button className="rounded-2xl size-4 bg-blue-500 hover:bg-blue-700 flex items-center justify-center  "><span>
                            -</span></button>
                        <p className="mb-4 size-8 justify-center items-center flex   rounded-2xl bg-white ">5</p>
                        <button className="rounded-2xl size-4 bg-blue-500 hover:bg-blue-700 flex items-center justify-center">+</button>

                     </div>
                    <TiDeleteOutline className="rounded-2xl size-4 m-1 hover:text-red-700 text-black flex items-center justify-center"/>

                </div>
                <div className="bg-neutral-100 flex flex-row hover:shadow-md transition-all duration-300 hover:shadow-black  h-17 rounded-2xl mt-1 p-1 w-13/14  ">
                    <img
                     className="h-10 w-10 rounded-xl flex-[1] self-center m-1"
                     src="src/assets/domino-studio-164_6wVEHfI-unsplash.jpg" alt="" />
                     <div className=" flex-[3] ">
                        <p className="text-md font-extrabold">Nike Air 1</p>
                        <p className="text-sm text-neutral-400">19.99€</p>
                        <p className="text-sm text-green-400"><span className="
                        font-bold text-black">Total:</span> 219.99€</p>

                     </div>
                     <div className="flex flex-row flex-[1] items-center  ">
                        <button className="rounded-2xl size-4 bg-blue-500 hover:bg-blue-700 flex items-center justify-center  "><span>
                            -</span></button>
                        <p className="mb-4 size-8 justify-center items-center flex   rounded-2xl bg-white ">5</p>
                        <button className="rounded-2xl size-4 bg-blue-500 hover:bg-blue-700 flex items-center justify-center">+</button>

                     </div>
                    <TiDeleteOutline className="rounded-2xl size-4 m-1 hover:text-red-700 text-black flex items-center justify-center"/>

                </div>
            </section>
            <section className="bg-neutral-300"></section>
        </section>
    )
}