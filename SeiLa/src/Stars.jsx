import { FaStar } from "react-icons/fa";
export default function Stars(){
    return (
        <div className='flex flex-row'>
            {Array.from({length:5},(_,i)=><FaStar key={i} className='text-sm text-yellow-300 ' />)}
        </div>
    )
}