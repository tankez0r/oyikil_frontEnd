import { fetchDestroy } from "../helpers/fetchDestroy"

const CustomButton = ({type, buttonClass, postId, router}) => {
if (type ==="submit"){
    return( <button type={"submit"} className={buttonClass}>Envíar</button>)
} else if(type==="reset"){
    return ( <button type={"reset"} className={buttonClass}>Resetear Form</button>)
}
else {
    return ( <button type={"button"} onClick={()=>{fetchDestroy(postId, router)}} className={buttonClass}>Borrar</button>)
}
    
}
 
export default CustomButton;