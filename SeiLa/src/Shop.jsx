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
            <div className="icons m-5 grid grid-cols-3 gap-5">
                <CardSneaker img={img1}></CardSneaker>
                <CardSneaker img={img2}></CardSneaker>
                <CardSneaker img={img3}></CardSneaker>
                <CardSneaker img={img4}></CardSneaker>
                <CardSneaker img={img5}></CardSneaker>
                <CardSneaker img={img6}></CardSneaker>
            </div>
        </section>
    )
}