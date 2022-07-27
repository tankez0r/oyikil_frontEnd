import Head from "next/head";

import FormGuia from "../../componentes/guiaForm/FormGuia";
import { useRouter } from "next/router";
import Custom404 from "../404";
import CargandoScreen from "../../componentes/OnLoadScreen/CargandoScreen";


// oobtener props prerenderizados
export const getServerSideProps = async (context) =>{
const pagina = context.params.pagina
    const res = await fetch(process.env.API_SOURCEIMAGELINK+'guiatelefonica?size=12&page=' + pagina)
    const json = await res.json();
    return {
      props: {personas: json.personas, paginas: json.paginas, paginaActual: json.paginaActual, cantidadPersonas: json.cantidadPersonas, }  

    }

}

const PaginaTelefono = ({personas, paginas, paginaActual, cantidadPersonas}) => {
    const router = useRouter();
   if (router.isFallback) return ( <CargandoScreen/> )

    // tarjetas con props iniciales estaticos
    const boxClass = "border-2 bg-blue-400 shadow-lg col-span-12 mx-16 items-center my-2 shadow-md shadow-black md:col-span-6 lg:col-span-4"
    const listado = personas.map(persona => 
        <div className={boxClass} key={persona.codigo}>
          <div className="">
        <h3 className="font-medium">{persona.nombre}</h3>
<p className="font-bold">{persona.telefono}</p> <p className="font-light">{persona.domicilio}</p>
</div>
</div> )
const pushTo = (href) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  setTimeout(() => {
      router.push(href)
  }, 400);
}

if (personas.length > 1){
    return (
        <>
             <Head>
      <title>Guía Telefónica</title>
      <meta name="description" content="guía de telefono Río Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
        <section className=" flex text-center flex-col mt-4">
        <FormGuia/>
        <div className="grid grid-cols-12 container mx-auto font-sans"> 
         {listado}
        </div>
        </section>
        <nav className="py-4 mx-2 text-center">
          <p>{`Pagina ${paginaActual + 1} de ${paginas} de ${cantidadPersonas} personas`}</p>  
          <div className="grid grid-cols-12 text-center text-white">
         <button onClick={()=>{pushTo("/guia-telefonica/" + (paginaActual - 1))}} className={`col-span-3 col-start-3  shadow-md shadow-black  ${paginaActual <= 0? "bg-gray-600": 'bg-green-800 bg-opacity-80 transform transition-all active:shadow-none active:translate-y-1 '} py-1`} disabled={paginaActual<=0}><a>Anterior</a></button>
          <button onClick={()=>{pushTo("/guia-telefonica/" + (paginaActual + 1))}} className={`col-span-3  col-start-7  shadow-md shadow-black transform transition-all active:shadow-none active:translate-y-1 py-1 bg-green-800`}> <a>Siguiente</a></button>
          </div>
            </nav>
        </> 
    );
} else {


return (
<>
 <Head>
        <meta name="robots" content="noindex"/>
      </Head> 
<Custom404 statusCode={404} />
</>)
}

}
 
export default PaginaTelefono;