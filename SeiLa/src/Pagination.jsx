import Button from "./Button";
import PaginationNumbers from "./PaginationNumbers";

export default function Pagination(props){
        
    return(
        
       
        <div className='flex flex-row justify-center items-center'>
            <Button onClick={props.prev} 
            className='w-15 p-1 bg-red-500 rounded-xl opacity-100 hover:opacity-85
            transition-opacity duration-200'>prev</Button>

            <PaginationNumbers props={props}/>
            
            <Button onClick={props.next} 
            className='w-15 p-1 bg-red-500 rounded-xl opacity-100 hover:opacity-85
             transition-opacity duration-200'>next</Button>
            
        </div>
       
    )
}