export default function Message(props){
        
    return(
                
        <props.tag {...props}>{props.children}</props.tag>    
    )
}