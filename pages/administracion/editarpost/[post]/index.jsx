import { useRouter } from "next/router";
import Image from "next/image";
import PostForms from "../../../../componentes/adminComponents/PostForms";
import CargandoScreen from "../../../../componentes/OnLoadScreen/CargandoScreen";

// oobtener props prerenderizados
export const getServerSideProps = async (context) =>{
const noticiaID = context.params.post
    const fetching = await fetch(process.env.API_POSTEOS + noticiaID)
    const res = await fetching.json();
    const json = res.data;
    return {
      props: { ID: noticiaID, titulo: json.titulo, subtitulo: json.subtitulo, imagen: json.imagen,
         pie_imagen: json.pie_imagen, contenido: json.contenido, fecha: json.fecha }  

    }

}

const PaginaDinamica = (props) => {

 
    const router = useRouter();
   if (router.isFallback) return ( <CargandoScreen/> )
    return (
        <>
       <PostForms editionMode={true} initialProps={props}/>  
</>
    );

}
 
export default PaginaDinamica;