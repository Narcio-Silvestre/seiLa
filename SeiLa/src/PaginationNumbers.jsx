export default function PaginationNumbers({props}){
        
    return(
        
        <div className='m-2 flex'>
            {Array.from({length:props.maxPage},(_,i)=>{
                    return <p key={i} onClick={()=>{props.page(i+1); }}
                    className={`p-1 font-extrabold hover:underline ${(i+1) == props.numPage ?
                    'underline' : ''}`}>{i+1}</p>
                }
            )}
        </div>
    )
}