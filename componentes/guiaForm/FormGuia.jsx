import { useRouter } from "next/router";
import { useState} from "react";
import CustomInput from "./CustomInput";

const FormGuia = () => {
const [inputValue, setValue] = useState({typeofsearch: "telefono", busqueda:""})

const setearValor = (e)=> {setValue( {...inputValue,busqueda: e.target.value})}


const router = useRouter();


    return ( 
   
      <form  className="text-black" onSubmit={e=> e.preventDefault()}>
  <div>
    <label  htmlFor="telefono" className="mx-1 text-black">Telefono</label>
    <input   onChange={e=>{setValue( {...inputValue, typeofsearch:e.target.value } )}}  type="radio" name="typeof" id="telefono" value="telefono" defaultChecked="true"/>
    <label  htmlFor="nombre" className="mx-1 text-black">Nombre</label>
    <input   onChange={e=>{setValue({ ...inputValue, typeofsearch:e.target.value })}}  type="radio" name="typeof" id="nombre" value="nombre"/>
    </div>
   <CustomInput setearValor={setearValor} inputValue={inputValue} />
  <button onClick={()=>{router.push(`/guia-telefonica/${inputValue.typeofsearch}/${inputValue.busqueda}`)}} type="submit" className="bg-green-800 shadow-md shadow-black rounded-md text-white p-1 mx-2 transition-all active:shadow-none active:translate-y-1">Buscar</button>
    </form>
     );
}
 
export default FormGuia;