export default function Arrow(props){
        
    return(
                
        <props.tag onClick={props.onClick} className=" size-10 opacity-5 hover:opacity-100 transition-all  duration-300 ease-linear absolute -bottom-5 left-1/2 -translate-x-1/2 ">
            
           {props.children}
            
        </props.tag>
            
       
       
    )
}