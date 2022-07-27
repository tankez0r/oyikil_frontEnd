import { Field, ErrorMessage, useField } from "formik";


const CustomField = ({inputType, name, placeholder, label, labelStyle, fieldStyle, as, accepts}) => {
const [field, meta, helpers] = useField(name)
const {setValue} = helpers;
    return ( 
       <div className="grid grid-cols-12 my-5">
        <label className={labelStyle} htmlFor={name}>{label}</label>
  {inputType==='file'?  <input onChange={(e)=>{setValue(e.currentTarget.files[0])}}  className={fieldStyle } name={name} as={as} type={inputType} placeholder={placeholder} accept={accepts} />
  :
  <Field className={fieldStyle + " text-black"} name={name} as={as} type={inputType} placeholder={placeholder} accepts={accepts? accepts : "*"} />}
<ErrorMessage  name={name} render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
</div>);
}
 
export default CustomField;