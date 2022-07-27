import AllPlans from "../../componentes/internetComponentes/Allplans";
import Head from "next/head";


const ProductosYServicios = () => {
    return ( 


        <div className="mt-10">
                  <Head>
      <title>Servicios y telefonia</title>
      <meta name="description" content="Planes internet y telefonia oyikil Rio Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
    <div className="shadow-md shadow-slate-600">
            <h1 className=" shadow-inner shadow-neutral-900  text-4xl text-center my-3 italic font-semibold p-2 bg-green-700 text-yellow-400 select-none">Nuestros planes de internet</h1>
            </div>
           <AllPlans/>
        </div>
    );
}
 
export default ProductosYServicios;