import Image from "next/image";
import Custom404 from "../../404";
import Head from "next/head";

// oobtener props prerenderizados
export const getServerSideProps = async (context) =>{
const megas = context.params.megas



 if (megas ==='20'){
    return {
        props: {bajada: megas,subida:'5', borderColor:'border-orange-600', textColor:'text-orange-500', precio:'$2890', bgProps: "bg-orange-700 bg-opacity-10"}  
    
      }
}




else if(megas==='30'){
    return {
        props: {bajada: megas,subida:'5', borderColor:'border-yellow-500', textColor:'text-yellow-400', precio:'$3320', bgProps: "bg-yellow-700 bg-opacity-10"}  
    
      }
}




else if(megas==='50'){
    return {
        props: {bajada: megas,subida:'5', borderColor:'border-green-500', textColor:'text-green-500' , precio:'$6610', bgProps: "bg-green-700 bg-opacity-20"}  
    
      }
}




else if (megas ==='100'){
    return {
        props: {bajada: megas,subida:'10', borderColor:'border-purple-500', textColor:'text-purple-600',  precio:'$10220', bgProps: "bg-purple-300 bg-opacity-50"}  
    
      }
}

else {
    return {
        props: {error404:true}
    }
}

}

const Megas = (props) => {

 const {bajada, subida, borderColor, textColor, precio, bgProps} = props;   


   if(props?.error404){
    return (
        <>
         <Head>
                <meta name="robots" content="noindex"/>
              </Head> 
        <Custom404 statusCode={404} />
        </>)
   }
   else{
    return(

        <div className={`min-h-screen bg-slate-200 grid grid-cols-12 md:grid-rows-4 select-none mx-2 md:mt-5 mt-5`}>
                 <Head>
      <title>{bajada} Mbps</title>
      <meta name="description" content="Planes internet y telefonia oyikil Rio Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
       
       <div className={`md:mt-0 ${borderColor}   border-4 ${bgProps}  rounded-md col-span-12 my-2 ${textColor} col-start-1 mx-3 md:col-start-1 md:row-start-2 md:col-span-4 shadow-md shadow-black`}>
        <div className="shadow-inner shadow-black py-10">
       
           <p className={`${textColor} text-6xl text-center font-bold`}>{bajada}<span className="font-normal text-5xl">Mbps</span></p>
       </div>
       </div>
       <div className="md:col-start-1 text-right md:col-span-3 md:row-start-3 flex flex-col col-span-12">
       <h3 className={`${textColor} text-2xl font-bold`}>{precio}<span className="text-gray-700 font-medium"> por mes</span></h3> 
       <span className="italic text-xs">(Precio solo para residentes)</span>
       </div>
       
       
       <div className="md:my-0 my-2 md:col-span-1 md:col-start-5 md:row-start-2 md:row-span-2 flex flex-col justify-center col-span-12">
       <div className=" text-center animate-bounce">
           <Image src='/imagenes/flechaDown.png' height={30} width={25} alt='flecha' objectFit="responsive"/>
       </div>
       
       <p className="text-center text-lg text-gray-700 font-semibold leading-5">{`Bajada de ${bajada}mbps`}</p>
       </div>
       <div className=" md:my-0 my-2 md:col-start-6 md:col-span-1 md:row-start-2 md:row-span-2 flex flex-col justify-center col-span-12">
       
       <div className=" text-center mb-2 rotate-180 animate-animate-bounce-slow" >
           <Image src='/imagenes/flechaUp.png' height={30} width={25} alt='flecha' objectFit="responsive"/>
       </div>
       <p className="text-center text-lg text-gray-700 font-semibold leading-5 ">{`Subida de ${subida}mbps`}</p> 
       </div>
       
       <div className={`md:col-span-6 md:col-start-7 md:row-span-4 m-4 col-span-12 border-2  rounded-md ${bgProps} ${borderColor} self-center shadow-md shadow-black`}>
       <div className=" shadow-inner shadow-black p-4">
       <p className="text-base font-light italic">Ideal para el uso cotidiano de internet: home office, redes sociales, plataformas de stream populares como netflix.</p>
       <br />
       <h3 className=" italic font-bold">Requisitos</h3>
       <ul className={`text-base ${textColor} font-bold list-disc mx-5`}>
           <li>Fotocopia de D.N.I</li>
           <li>Fotocopia de la adjudicación de terreno, viviendo o bolento compraventa del inmueble.</li>
           <li>Certificado de domicilio</li>
           <li>Contrato de alquiler</li>
       </ul>
       <br />
       <div  className="text-base  font-medium">
           <div className="flex items-center">
       <Image src='/imagenes/old.png' width={40} height={40} alt='Jubilados'/>
       <h2 className={`text-lg ${textColor} not-italic mx-2`}> Descuento para Jubilados y pensionados.</h2>
       </div>
       <br />
       <span>- Valor de conexión $9500 hasta en 3 cuotas en contra factura.</span>
       <br />
       <span>- Por lineas de internet simetricas consultar en nuestra oficina por sus precios.</span>
       </div>
       </div>
       
       </div>
       
       
        </div>
           
           
           
           )
   }
  

}
 
export default Megas;