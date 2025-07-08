export default function Tezenis (){

    return(

        <div className="bg-blue-900 w-full flex justify-center items-center h-120">
            <div className="bg-white w-4/12 h-100 flex flex-col justify-center items-center">
                <div></div>
                <div className="grid grid-cols-4 gap-4 grid-rows-2 justify-center items-center">
                    {Array.from({length:8},(_,i)=><Dice key={i} value={Math.floor(Math.random() * 6)+1} ></Dice>)}
                </div>
                
                

            </div>
        </div>
    )
}

function Dice(props){
    return(
        
            <button className=" w-13 h-13 p-2 bg-neutral-400 rounded-md flex items-center justify-center ">
                {props.value}
            </button>
       
    )
}