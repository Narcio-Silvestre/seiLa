import CardSneaker from './CardSneaker';
import { useState } from 'react'

// 1 - 0 (i-1)*max .... 10 i*max
// 2 - 10 .... 20 i*max
// 3 - 20 .... 30
// 1 - 0 .... 10

export default function Shop({sneakers, handleFavorite}){

    

    const [page, setPage] = useState(1)
    const [numberItens, SetNumberItens] = useState(6)
    

    const numberPages = Math.ceil(sneakers.length/numberItens);
    const prev = (page-1)*numberItens;
    const next = page*numberItens;



    

    function handlePagePrev(){
        if (page>1)  return handlePage(page-1)
        return null;
    }

    function handlePageNext(){
        if (page<numberPages)  return handlePage(page+1)
        return null;
    }

    function handlePage(i){
        setPage(i)
        
    }

   
    return(
        <section className="bg-neutral-200 flex-1 flex flex-col justify-center content-center items-center">
            <div className=" m-5 grid grid-cols-3  gap-7">
                { sneakers.map((sneaker) => {
                    return <CardSneaker 
                    key={sneaker.id}
                    sneaker={sneaker}
                    handleFavorite = {handleFavorite}></CardSneaker>
                }).slice(prev,next)
                }
            </div>

             <Pages maxPage ={numberPages} next={handlePageNext} 
            prev={handlePagePrev} page={handlePage} numPage ={page} />  
        </section>
    )
}

function Pages(props){
        


    return(
        
       
        <div className='flex flex-row justify-center items-center'>
            <button onClick={props.prev} className='w-15 h-8 bg-blue-500 rounded opacity-100 hover:opacity-85 transition-opacity duration-200'>Prev</button>
                <div className='m-2 flex'>
                    {Array.from({length:props.maxPage},(_,i)=>{
                    return <span key={i} onClick={()=>{props.page(i+1); }} className={`p-1 font-extrabold hover:underline ${(i+1) == props.numPage ? 'underline' : ''}`}>{i+1}</span>
                }
                )}
                </div>
                
            <button onClick={props.next} className='w-15 h-8 bg-blue-500 rounded opacity-100 hover:opacity-85 transition-opacity duration-200'>Next</button>
            
        </div>
       
    )
}