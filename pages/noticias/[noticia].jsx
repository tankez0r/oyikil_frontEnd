import { useRouter } from "next/router";
import Image from "next/image";
import CargandoScreen from "../../componentes/OnLoadScreen/CargandoScreen";
import Head from "next/head";


// oobtener props prerenderizados
export const getServerSideProps = async (context) =>{
const noticiaID = context.params.noticia
    const fetching = await fetch(process.env.API_POSTEOS + noticiaID)
    const res = await fetching.json();
    const json = res.data;
    return {
      props: {titulo: json.titulo, subtitulo: json.subtitulo, imagen: json.imagen,
         pie_imagen: json.pie_imagen, contenido: json.contenido, fecha: json.fecha }  

    }

}

const NoticiasPage = (props) => {
    const {titulo, subtitulo, imagen, pie_imagen, fecha} = props
    const router = useRouter();
   if (router.isFallback) return ( <CargandoScreen/> )

    // tarjetas con props iniciales estaticos
const src = process.env.API_SOURCEIMAGELINK +imagen;
const stringsplit =   props.contenido.split(/\r?\n/)
const mapStringContent = stringsplit.map((par, i) =>{ return (<p key={i}>{par} <br/></p>)});
    return (
        <section className=" flex flex-col mt-4">
                 <Head>
      <title>Cooperativa Oyikil RT</title>
      <meta name="description" content="Planes internet y telefonia oyikil Rio Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
             <div className="my-2 grid grid-cols-12">
             <div className="col-span-12">
                <div className=" min-w-[80vw] relative mx-2 ">           
            <Image priority={true} src={src} alt="" width={828} height={481}/>  
            <span className="text-xs text-gray-300 absolute bottom-[1.2%] min-w-[100%] left-0 bg-black lg:min-w-[828px] bg-opacity-60 py-3">{pie_imagen}</span>
            </div>
            <div className="col-span-12 ml-2">
                   <h2 className="text-3xl my-2 mx-2 font-sans font-extrabold">{titulo}</h2> 
                   </div>
            <div className="grid grid-cols-12  col-span-5 ml-1 mt-6 "> 
            <h4 className="text-sm font-light col-start-1">{fecha}</h4>  
            <h2 className="font-medium ml-1 text-2xl col-span-12 col-start-1 ">{subtitulo}</h2>  
            </div>
            <div className="col-span-12 col-start-1 mx-4 overflow-clip text-ellipsis my-1"> 
            {mapStringContent}
            </div>
            </div>
            </div>
        </section>
      
    );

}
 
export default NoticiasPage;