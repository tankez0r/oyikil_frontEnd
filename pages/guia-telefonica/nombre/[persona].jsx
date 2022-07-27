import FormGuia from "../../../componentes/guiaForm/FormGuia";
import Head from "next/head";

// oobtener props prerenderizados
export const getServerSideProps = async (context) =>{
const persona = context.params.persona;
    const res = await fetch(process.env.API_SOURCEIMAGELINK + `guiatelefonica/nombre/${persona}`)
    const json = await res.json();
    return {
      props: {personas: json.data}  

    }

}



const NombrePage = ({personas}) => {
    
    // tarjetas con props iniciales estaticos
    const boxClass = "border-2 bg-blue-400 shadow-lg col-span-12 mx-16 items-center my-2 shadow-md shadow-black md:col-span-6 lg:col-span-4"
    const listado = personas.map(persona => 
        <div className={boxClass} key={persona.codigo}>
        <h3>{persona.nombre}</h3>
<p>Telefono: {persona.telefono}</p> <p>Direccion: {persona.domicilio}</p>
</div> )


    return (
        <>
          <Head>
      <title>Guía Telefónica</title>
      <meta name="description" content="guía de telefono Río Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
        <section className=" flex text-center flex-col mt-4 min-h-screen">
        <FormGuia/>
        <div className="grid grid-cols-12 container mx-auto font-sans"> 
         {listado}
        </div>
        </section>
        </> 
    );
}
 
export default NombrePage;