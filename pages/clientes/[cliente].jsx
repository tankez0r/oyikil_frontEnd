// oobtener props prerenderizados
import Head from "next/head";
import Image from "next/image";
import { fetchAuth } from "../../componentes/helpers/fetchClients";
import CargandoScreen from "../../componentes/OnLoadScreen/CargandoScreen";
export const getServerSideProps = async (context) =>{
   
    const clientProps = await  fetchAuth(context.params.cliente);
if(clientProps){
    return {
      props: {cliente: clientProps},
    }
  } else {
return{
    props: {cliente: {nombre: "error", telefono:"numero", telefono:"nan", direccion:"noadd",deuda:"nodeb", status:"asdf", idCliente:"asd", mails:null}}
  }
  }

}

const ClienteEstado = ({cliente}) => {

if(typeof window != 'undefined'){
 const  attachedClient =  JSON.parse(sessionStorage.getItem('attachment'))
 const {idcustomer, mails} = attachedClient
  const {nombre, telefono, direccion, deuda, status, idCliente} = cliente;
  const mailsMap = mails.map((mail, i) => { if(mail.attachments[0]){return ( <div key={i} className="my-5 border-b-2 md:text-2xl flex justify-between"><h3 >{new Date(mail.date).toLocaleDateString()}</h3> <a target="_blank" rel="noreferrer" className="text-blue-500 md:text-2xl underline" href={process.env.API_CLIENTLOGINURI + mail.attachments[0]}>Descargar</a></div>)} return null})
  const deudaStyle = deuda > 4500? "text-red-400": deuda > 0? "text-yellow-400": "text-green-500";
   const pushTo = (href) => {
    setTimeout(() => {
       window.location = location.protocol + "//" + location.hostname + href
    }, 400);
  }
  
    return (
      <div className="min-h-screen p-5">
  <Head>
      <title>Cliente: {nombre}</title>
      <meta meta="robots" content="noindex"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>

      <section className=" flex text-center flex-col mt-4 min-h">
      <div className="grid grid-cols-12 container mx-auto font-sans select-none"> 
      <div className="border-2 rounded-3xl bg-green-800 text-white col-start-3 shadow-2xl col-span-8 mx-2 p-4  my-2">
      <div className="bg-gray-900 rounded-lg p-2 bg-opacity-80">


     {nombre === "error" || !attachedClient || idcustomer != idCliente ?
      ( <section className="grid gridl-cols-12"> <h3 className="text-xl col-span-12">Error:</h3>
     <div className="col-span-12 md:col-span-4 md:col-start-5">
     <Image className="animate-spin-slow" src="/imagenes/oyikil_navbar.png" alt="" width={10} height={10} priority="blur" layout="responsive"  />
     </div>
     
     <p className="col-span-12 ">El numero ingresado es incorrecto o no existe</p> 
   <a onClick={()=>{pushTo("/clientes")}} className="text-blue-300 underline col-span-12 cursor-pointer">Haz Click aquí para regresar al menu de cliente</a>
     </section>)
      :
      (<><h3>ID Cliente: {idCliente}</h3> 
      <h3> Nombre: {nombre}</h3>
      <h3>Estado: {status}</h3> 
      <h4 className={deudaStyle}> Deuda: ${deuda}</h4> 
      <p>Telefono: {telefono}</p> <p>Direccion: { direccion}</p></>
        )
      }
      </div>
      </div>
      </div>
      <div className=" grid grid-cols-12 items-center text-green-600 my-5 text-center md:text-2xl text-sm font-extrabold ">
</div>
      </section>
      {mails? (    <section>
        <div className="grid grid-cols-12 container mx-auto font-sans select-none"> 
        <div className="border-2 rounded-3xl bg-green-800 text-white col-start-3 shadow-2xl col-span-8 mx-2 p-4  my-2">
        <div className="bg-gray-900 rounded-lg p-2 bg-opacity-80">

   <div>
<h1 className="md:text-5xl text-2xl text-center">Facturas</h1>
{mailsMap}
</div>

            </div>
            </div>
            </div>
            <div className=" grid grid-cols-12 items-center text-green-600 my-5 text-center md:text-2xl text-sm font-extrabold ">
        <a onClick={()=>{pushTo("/")}} className={"transform active:translate-y-1  col-start-1 border col-span-5 md:col-span-3 mx-2 shadow-md  p-2 md:p-2 rounded-full shadow-black hover:shadow-white  transition-all"}><button className="">Regresar a  Home</button></a>
        <a onClick={()=>{  sessionStorage.removeItem("attachment"); pushTo("/clientes")}} className={"transform active:translate-y-1 col-start-7 border  col-span-6 md:col-span-4 md:col-start-8  p-5 md:p-2 rounded-full mx-2 shadow-md shadow-black hover:shadow-white transition-all"}><button>Ingresar otro numero de cliente</button></a>
  </div>
        </section>): null}
      </div> 
    );
}
pushTo("/clientes")
return (<CargandoScreen/>)
  };
 
export default ClienteEstado;