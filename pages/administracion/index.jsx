import useSWR from "swr";
import { fetcher } from "../../componentes/helpers/fetcher";
import LoginForm from "../../componentes/adminLoginForm/LoginForm";
import PostHandler from "../../componentes/adminLoginForm/PostHandler";
import CargandoScreen from "../../componentes/OnLoadScreen/CargandoScreen";
import Head from "next/head";


const Administracion = () => {
const {data, error} = useSWR(process.env.API_ADMINLOGINURI, url=>fetcher(url, {credentials:"include"}), { refreshInterval: 1000 });


if (error) return <div className="min-h-screen mt-2">Fallo al cargar, presionar f5 para recargar pagina</div>
if (!data) return <CargandoScreen/>
return <>
 <Head>
      <title>Administracion</title>
      <meta name="robots" content="noindex"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
{ data.logedin? <PostHandler/> : <LoginForm/>}</>
}
 
export default Administracion;