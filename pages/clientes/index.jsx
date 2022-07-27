import ClienteInput from "../../componentes/LoginForm/ClientesInput";
import useSWR from "swr"
import {fetcher } from "../../componentes/helpers/fetcher";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import CargandoScreen from "../../componentes/OnLoadScreen/CargandoScreen";
import Head from "next/head";



const Login = () => {

  const ref = useRef()
  const idcustomerRef = ref.current?.idcustomer
  const [shouldFetch, setShouldFetch] = useState(false)
const {error, data} = useSWR(shouldFetch? process.env.API_CLIENTLOGINURI: null, url=>fetcher(url,{credentials:"include"}), { refreshInterval: 200 });
const fetchPlease  = ()=> setShouldFetch(true)
const router = useRouter();
if (!data && !error){
  return (   <>
    <Head>
      <title>Atencíon al Cliente</title>
      <meta name="description" content="guía de telefono Río Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
    <section className="min-h-[100vh] md:min-h-[70vh] mb-5">
<ClienteInput fetchPlease={fetchPlease} ref={ref}/> 
    </section>
    </>)
}
if(error){
  return (   <>
    <Head>
      <title>Atencíon al Cliente</title>
      <meta name="description" content="guía de telefono Río Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
    <section className="min-h-screen md:min-h-[70vh]">
<ClienteInput   ref={ref} fetchPlease={fetchPlease} onError={error}/>
    </section>
    </>)
}

if(data && idcustomerRef){
  console.log(data, idcustomerRef)
  sessionStorage.setItem("attachment", JSON.stringify(data))
  router.push(`/clientes/${idcustomerRef}`).then(_ =>{idcustomerRef=null}).catch(e=>{console.log(e)})

  return(<CargandoScreen/>)  

}
}
 
export default Login;