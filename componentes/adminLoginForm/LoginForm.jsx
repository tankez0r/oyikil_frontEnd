import { Formik,Form  } from "formik";
import CustomButton from "../adminComponents/CustomButton";
import CustomField from "../adminComponents/CustomField";
import { fetchLogin } from "../helpers/FetchLog";


const LoginForm = () => {
const InputStyles = {labelCommons: "col-start-2 col-span-7", inputCommons:"border-opacity-40 border border-black shadow-md col-start-2 "}
const initProps = {username:"", password:""}

const buttonClases = {
  submit:"bg-yellow-400 mb-7  rounded-lg shadow-md shadow-yellow-800 transition-all active:translate-y-1 "};
const {submit} = buttonClases



return ( 
      <section>
    <Formik initialValues={initProps} onSubmit={formik =>fetchLogin(formik)}>
       {formikProps=>(
         
           <Form className="min-h-screen">
             <CustomField as="input" name="username" label="Ingresar usuario"  fieldStyle={InputStyles.inputCommons +"col-span-8"} labelStyle={InputStyles.labelCommons}/>
             <CustomField as="input" inputType="password" name="password" label="Ingresar password" fieldStyle={InputStyles.inputCommons + "col-span-6"} labelStyle={InputStyles.labelCommons} />
          <div className="grid grid-cols-12">
           
            <><CustomButton type="submit" buttonClass={submit + "col-span-3 col-start-2"}/> </>
           
         
          
        </div>
           </Form>
  
       )}
    </Formik> 
    </section>);
}
 
export default LoginForm;