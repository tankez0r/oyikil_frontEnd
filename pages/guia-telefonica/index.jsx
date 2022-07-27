import Head from "next/head";
import { useRouter } from "next/router";
import FormGuia from "../../componentes/guiaForm/FormGuia";

export const getServerSideProps = async () =>{

    const res = await fetch(process.env.API_SOURCEIMAGELINK+ 'guiatelefonica?size=12')
    const json = await res.json();
    return {
      props: {personas: json.personas, paginas: json.paginas, paginaActual: json.paginaActual, cantidadPersonas: json.cantidadPersonas}  

    }

}

const Guia = ({personas, paginas, paginaActual, cantidadPersonas}) => {
    
const router = useRouter();

    const pushTo = (href) => {
        setTimeout(() => {
            router.push(href)
        }, 400);
      }
    // tarjetas con props iniciales estaticos
    const boxClass = "border-2 bg-blue-400 shadow-lg col-span-12 mx-16 items-center my-2 shadow-md shadow-black md:col-span-6 lg:col-span-4 "
    const listado = personas.map(persona => 
      
        <div className={boxClass} key={persona.codigo}>
        <h3 className="font-medium">{persona.nombre}</h3>
<p className="font-bold">{persona.telefono}</p> <p className="font-light">{persona.domicilio}</p>
</div> )

    return (
        <>
             <Head>
      <title>Guía Telefónica</title>
      <meta name="description" content="Planes internet y telefonia oyikil Rio Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
        <section className=" flex text-center flex-col mt-4 ">
        <FormGuia/>
        <div className="grid grid-cols-12 container mx-auto  font-sans"> 
         {listado}
        </div>
        <nav className="py-4 mx-2">
          <p>{`Pagina ${paginaActual+ 1} de ${paginas} de ${cantidadPersonas} personas`}</p>  
          <div className="grid grid-cols-12 text-center text-white">
         <button  className={`col-span-3 col-start-3  shadow-md shadow-slate-800 ${paginaActual <= 0? "bg-gray-600": 'bg-green-800 bg-opacity-80'} py-1`} disabled={true}><a>Anterior</a></button>
         <button onClick={()=>{pushTo("/guia-telefonica/" + (paginaActual + 1))}} className={`col-span-3  col-start-7  shadow-md shadow-black transform transition-all active:shadow-none active:translate-y-1 py-1 ${paginaActual >= paginas? "bg-gray-600": 'bg-green-800 bg-opacity-80'}`}> <a>Siguiente</a></button>
          </div>
            </nav>
        </section>
      
        </> 
    );
}
 
export default Guia;