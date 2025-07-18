import CardSneaker from './CardSneaker';


export default function SneakersGrid(props){
        
    return(
                
        <div className=" m-5 grid grid-cols-3  gap-7">
            { props.sneakers.map((sneaker) => {
                return <CardSneaker 
                key={sneaker.id}
                sneaker={sneaker}
                handleFavorite = {props.handleFavorite}></CardSneaker>
            }).slice(props.prev,props.next)
            }
        </div>
    )
}