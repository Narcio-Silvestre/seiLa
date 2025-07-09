import img1 from './assets/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg'
import img2 from './assets/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg'
import img3 from './assets/linda-xu-fUEP0djb1hA-unsplash.jpg'
import img4 from './assets/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg'
import img5 from './assets/ryan-plomp-PGTO_A0eLt4-unsplash.jpg'
import img6 from './assets/usama-akram-s-gYAbQToXk-unsplash.jpg'

import CardSneaker from './CardSneaker';
export default function Shop(){


    return(
        <section className="bg-neutral-200 flex-1">
            <div className="icons m-5 grid grid-cols-3  gap-15">
                <CardSneaker img={img1} promo={15} isNew={false} model={"Nice Air Force 1"}
                desc={"O mais quente do momento"} remainigUnits={7} price={59.99}></CardSneaker>
                <CardSneaker img={img2}  promo={25} isNew={false} model={"Rebook Zola 23"}
                desc={"Modelo estiloso e único"} remainigUnits={2} price={79.99}></CardSneaker>
                <CardSneaker img={img3} promo={20} isNew={true} model={"New Balance Zarif"}
                desc={"O mais quente do momento"} remainigUnits={15} price={29.99}></CardSneaker>
                <CardSneaker img={img4}></CardSneaker>
                <CardSneaker img={img5}></CardSneaker>
                <CardSneaker img={img6}></CardSneaker>

                
            </div>
        </section>
    )
}