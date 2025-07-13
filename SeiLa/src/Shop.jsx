import CardSneaker from './CardSneaker';
import { useRef, useState } from 'react'


const sneakersList = [
   
  {"img": "/src/assets/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg", "promo": 5, "isNew": true, "model": "Puma RS-X", "description": "Ideal para corrida", "price": 80},
  {"img": "/src/assets/domino-studio-164_6wVEHfI-unsplash.jpg", "promo": 15, "isNew": true, "model": "Yeezy Boost 350", "description": "Leveza e durabilidade", "price": 120},
  {"img": "/src/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg", "promo": 5, "isNew": false, "model": "Air Max Plus", "description": "Performance de elite", "price": 90},
  {"img": "/src/assets/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg", "promo": 20, "isNew": false, "model": "Vans Old Skool", "description": "Para treinos intensos", "price": 50},
  {"img": "/src/assets/linda-xu-fUEP0djb1hA-unsplash.jpg", "promo": 15, "isNew": false, "model": "Converse All Star", "description": "Leveza e durabilidade", "price": 75},
  {"img": "/src/assets/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg", "promo": 10, "isNew": false, "model": "New Balance 990", "description": "Para treinos intensos", "price": 90},
  {"img": "/src/assets/ryan-plomp-PGTO_A0eLt4-unsplash.jpg", "promo": 5, "isNew": true, "model": "Puma RS-X", "description": "Design moderno e versátil", "price": 60},
  {"img": "/src/assets/usama-akram-s-gYAbQToXk-unsplash.jpg", "promo": 25, "isNew": false, "model": "Nike React Vision", "description": "Ideal para corrida", "price": 100},
  {"img": "/src/assets/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg", "promo": 5, "isNew": true, "model": "Puma RS-X", "description": "Ideal para corrida", "price": 80},
  {"img": "/src/assets/domino-studio-164_6wVEHfI-unsplash.jpg", "promo": 15, "isNew": true, "model": "Yeezy Boost 350", "description": "Leveza e durabilidade", "price": 120},
  {"img": "/src/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg", "promo": 5, "isNew": false, "model": "Air Max Plus", "description": "Performance de elite", "price": 90},
  {"img": "/src/assets/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg", "promo": 20, "isNew": false, "model": "Vans Old Skool", "description": "Para treinos intensos", "price": 50},
  {"img": "/src/assets/linda-xu-fUEP0djb1hA-unsplash.jpg", "promo": 15, "isNew": false, "model": "Converse All Star", "description": "Leveza e durabilidade", "price": 75},
  {"img": "/src/assets/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg", "promo": 10, "isNew": false, "model": "New Balance 990", "description": "Para treinos intensos", "price": 90},
  {"img": "/src/assets/ryan-plomp-PGTO_A0eLt4-unsplash.jpg", "promo": 5, "isNew": true, "model": "Puma RS-X", "description": "Design moderno e versátil", "price": 60},
  {"img": "/src/assets/usama-akram-s-gYAbQToXk-unsplash.jpg", "promo": 25, "isNew": false, "model": "Nike React Vision", "description": "Ideal para corrida", "price": 100},
  
]

// 1 - 0 (i-1)*max .... 10 i*max
// 2 - 10 .... 20 i*max
// 3 - 20 .... 30
// 1 - 0 .... 10


export default function Shop(){

    

    const [sneakers, setSneakers] = useState(sneakersList)
    const [page, setPage] = useState(2)
    const [numberItens, SetNumberItens] = useState(4)
    

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
        setPage((page)=> page = i)
        
    }

    return(
        <section className="bg-neutral-200 flex-1 flex flex-col justify-center content-center items-center">
            <div className=" m-5 grid grid-cols-3  gap-7">
                {sneakers.map((sneaker,i) => {
                    return <CardSneaker key={i} img={sneaker.img} promo={sneaker.promo} isNew={sneaker.isNew} model={sneaker.model}
                description={sneaker.description}  price={sneaker.price}></CardSneaker>
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