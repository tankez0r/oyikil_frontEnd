import { Field, ErrorMessage } from "formik";

const CustomInput = ({type, name, placeholder, label}) => {
 const labelStyle = "block text-gray-100 text-sm font-bold";
 const fieldStyle = "shadow appearance-none border rounded w-full py-2 md:p-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
 return ( 
     <div className="my-4 mx-2">
    <label className={labelStyle} htmlFor={name}> {label} </label>
 <Field placeholder={placeholder} type={type} name={name} className={fieldStyle}/>
 <ErrorMessage  name={name}>{msg => <p className="text-red-600 text-xs">{msg}</p>}</ErrorMessage>
 
 </div>
    );
}
 
export default CustomInput;