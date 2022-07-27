/* eslint-disable react/display-name */
import { Formik } from "formik";
import CustomInput from "./CustomInput";
import * as yup from "yup"
import { fetchLoginClient } from "../helpers/fetchClients";
import { forwardRef, useImperativeHandle, useState } from "react";
import SubmitButton from "./SubmitButton";
import Script from "next/script";
import ReCAPTCHA from "react-google-recaptcha";




const ClienteInput = forwardRef(({fetchPlease, onError},ref) =>{
  {
const [Recaptcha, OnCaptchaChange] = useState(true)
const [formikValues, setformikValues] = useState({})
const [onSubmit, setSubmit] = useState(false)
const passSubmit = (state)=>{setSubmit(state)}

    const validationSchema = yup.object().shape({idcustomer:yup.string().required("Debes ingresar tu numero de cliente"), dni:yup.string().required("debes ingresar un dni")}) 
 useImperativeHandle(ref, ()=>{return {idcustomer: formikValues.idcustomer}})
  
      return ( 
  
        <Formik validateOnBlur={true}  onSubmit={formik=>{fetchLoginClient(formik, passSubmit).finally(_ =>{fetchPlease();  setformikValues(formik); setSubmit(false)});}} validationSchema={validationSchema} initialValues={{idcustomer:"", dni:""}}>
         {(formik)=>(
           <div className="max-w-screen-2xl flex justify-around flex-wrap mt-10">
        <Script src="https://www.google.com/recaptcha/api.js" strategy="beforeInteractive" />
         <form onSubmit={formik.handleSubmit}
          className={"max-w-[500px] flex-grow-[2]  bg-green-700 p-3 m-4 rounded-sm shadow-lg shadow-black"} >

              <div className="mb-4 md:mb-0 col-span-12 shadow-md">
              <CustomInput  type="text" name="idcustomer"  label="Numero De Cliente" placeholder="Ingresar numero de cliente"/>
             </div>
             <div className="mb-4 md:mb-0 col-span-12 shadow-md">
              <CustomInput  type="text" name="dni"  label="DNI o CUIL" placeholder="Ingresar DNI o CUIL(empresas y ongs)"/>
             </div>
             <div className="grid grid-cols-12">
          
            </div>
             <div className=" flex items-center col-start-10">
              <SubmitButton disabled={Recaptcha} onSubmit={onSubmit} />
             </div>
             {onError? (    <div className="col-span-5  col-start-1 mx-auto px-5 text-center bg-red-600 shadow-md text-white" >
  <span>Hubo un error con las credenciales, por favor intenta de nuevo</span>
  </div>) : null}
             </form>
         
  <ReCAPTCHA theme="dark" sitekey={process.env.GOOGLE_SITEKEY}  onChange={()=>{OnCaptchaChange(false)}}/> 
               <div className="bg-green-800 bg-opacity-75 p-2 rounded-2xl shadow-lg shadow-black max-w-[400px] mx-3 flex-grow-[2] mt-2 md:mt-0">
               <h3 className="text-center text-white font-semibold">Encontra el id de cliente en tu factura o comprobante:</h3>
           <video onContextMenu={(e)=>{e.preventDefault()}} width={600} height={300} autoPlay={true} loop={true} muted={true} src="/imagenes/gifoyikil.webm"></video>
             </div>
             </div>)
         }
        </Formik>
      
      
      
      
        );}
}

)

 
export default ClienteInput;