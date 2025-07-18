import { useState } from 'react'
import Pagination from './Pagination';
import SneakersGrid from './SneakersGrid';

// 1 - 0 (i-1)*max .... 10 i*max
// 2 - 10 .... 20 i*max
// 3 - 20 .... 30
// 1 - 0 .... 10

export default function Shop({sneakers, handleFavorite}){

    

    const [page, setPage] = useState(1)
    const [numberItens, SetNumberItens] = useState(6)
    

    const numberPages = Math.ceil(sneakers.length/numberItens);
    



    

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
            
            <SneakersGrid sneakers={sneakers} 
            prev={(page-1)*numberItens}
            next={page*numberItens}
            handleFavorite={handleFavorite}/>

             <Pagination maxPage ={numberPages} next={handlePageNext} 
            prev={handlePagePrev} page={handlePage} numPage ={page} />  
        </section>
    )
}

