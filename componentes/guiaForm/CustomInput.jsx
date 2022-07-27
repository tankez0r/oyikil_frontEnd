const CustomInput = ({setearValor, inputValue}) => {
  
  
  
    return (
          <input autoComplete="off" onChange={e=>{setearValor(e)}}   
    type="search" name="buscador" placeholder={`Ingresar ${inputValue.typeofsearch }`} id="" 
     className="bg-slate-400 rounded-full my-3 px-4 py-2" /> 
     );
}
 
export default CustomInput;