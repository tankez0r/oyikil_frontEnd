import { Formik,Form  } from "formik";
import CustomButton from "./CustomButton";
import CustomField from "./CustomField";
import { fetchPostPut } from "../helpers/postPut";
import { useRouter } from "next/router";



const PostForms = ({initialProps, editionMode}) => {
  const router = useRouter();
const InputStyles = {labelCommons: "col-start-2 col-span-7", inputCommons:"border-opacity-40 border border-black shadow-md col-start-2 "}
  

const initProps = initialProps?  initialProps : {titulo:"", subtitulo:"", imagen:undefined, pie_imagen:"", contenido:""}


const buttonClases = {
  submit:"bg-yellow-400 mb-7  rounded-lg shadow-md shadow-yellow-800 transition-all active:translate-y-1 ",
  reset: "bg-green-700 mb-7  rounded-lg shadow-lg shadow-green-900 text-white transition-all active:translate-y-1 ",
  erase:"bg-red-600 mb-7 text-white rounded-lg shadow-md shadow-red-800 transition-all active:translate-y-1 "
};
const {submit, reset, erase} = buttonClases

return ( 
      <section>
    <Formik initialValues={initProps} onSubmit={value =>{editionMode? fetchPostPut(value, 'put', router) : fetchPostPut(value, 'post', router)}}>
       {formikProps=>(
           <Form>
             <CustomField as="input" name="titulo" label="Ingresar Título"  fieldStyle={InputStyles.inputCommons +"col-span-8"} labelStyle={InputStyles.labelCommons}/>
             <CustomField as="input" name="subtitulo" label="Ingresar subtitulo" fieldStyle={InputStyles.inputCommons + "col-span-6"} labelStyle={InputStyles.labelCommons} />
             <CustomField as="input" accepts="image/*" inputType="file" name="imagen" label="Ingresar imagen" fieldStyle={InputStyles.inputCommons + "col-span-9"} labelStyle={InputStyles.labelCommons} />
             <CustomField as="input" name="pie_imagen" label="Ingresar pie de imagen" fieldStyle={InputStyles.inputCommons + "col-span-8"} labelStyle={InputStyles.labelCommons} />
             <CustomField as="textarea" name="contenido" label="Ingresar contenido de post" fieldStyle={InputStyles.inputCommons + "h-[200px] col-span-10"} labelStyle={InputStyles.labelCommons} />
          <div className="grid grid-cols-12">
            {editionMode? 
            <><CustomButton type="submit" buttonClass={submit + "col-span-3 col-start-2"}/>  <CustomButton  buttonClass={reset + "col-span-4 col-start-8"} type="reset"/> <CustomButton router={router} postId={formikProps.values.ID} buttonClass={erase + "col-span-4 col-start-5"} type="delete"/></>
            :
            <> <CustomButton  buttonClass={submit + "col-span-4 col-start-2"} type="submit"/> <CustomButton  buttonClass={reset + "col-span-4 col-start-8"} type="reset"/></>}
          
        </div>
           </Form>
  
       )}
    </Formik> 
    </section>);
}
 
export default PostForms;
