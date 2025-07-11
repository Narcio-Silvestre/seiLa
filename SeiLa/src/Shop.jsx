import CardSneaker from './CardSneaker';
import { useState } from 'react'


const sneakersList = [
   
  {"img": "/src/assets/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg", "promo": 5, "isNew": true, "model": "Puma RS-X", "description": "Ideal para corrida", "price": 80},
  {"img": "/src/assets/domino-studio-164_6wVEHfI-unsplash.jpg", "promo": 15, "isNew": true, "model": "Yeezy Boost 350", "description": "Leveza e durabilidade", "price": 120},
  {"img": "/src/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg", "promo": 5, "isNew": false, "model": "Air Max Plus", "description": "Performance de elite", "price": 90},
  {"img": "/src/assets/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg", "promo": 20, "isNew": false, "model": "Vans Old Skool", "description": "Para treinos intensos", "price": 50},
  {"img": "/src/assets/linda-xu-fUEP0djb1hA-unsplash.jpg", "promo": 15, "isNew": false, "model": "Converse All Star", "description": "Leveza e durabilidade", "price": 75},
  {"img": "/src/assets/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg", "promo": 10, "isNew": false, "model": "New Balance 990", "description": "Para treinos intensos", "price": 90},
  {"img": "/src/assets/ryan-plomp-PGTO_A0eLt4-unsplash.jpg", "promo": 5, "isNew": true, "model": "Puma RS-X", "description": "Design moderno e versátil", "price": 60},
  {"img": "/src/assets/usama-akram-s-gYAbQToXk-unsplash.jpg", "promo": 25, "isNew": false, "model": "Nike React Vision", "description": "Ideal para corrida", "price": 100},
  
]


export default function Shop(){

    const [sneakers, setSneakers] = useState(sneakersList)

    return(
        <section className="bg-neutral-200 flex-1">
            <div className=" m-5 grid grid-cols-3  gap-7">
                {sneakers.map((sneaker,i) => {
                    return <CardSneaker key={i} img={sneaker.img} promo={sneaker.promo} isNew={sneaker.isNew} model={sneaker.model}
                description={sneaker.description}  price={sneaker.price}></CardSneaker>
                })}
            </div>
        </section>
    )
}