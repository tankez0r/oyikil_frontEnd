import useSWR from "swr";
import { postConstructor, restOfPosts } from "./postmapping";
import { fetcher } from "../helpers/fetcher";
import CargandoScreen from "../OnLoadScreen/CargandoScreen";
const PostContainer = ({editMode}) => {
    const {data, error} = useSWR(process.env.API_GETPOSTEOS, fetcher, { refreshInterval: 1000 } )
if (error) return <div>Fallo al cargar, presionar f5 para recargar pagina</div>
if (!data) return (<CargandoScreen/>)
const  posts = data.data.post;
 return ( 
        <>
{editMode?
 (<div className="grid grid-cols-12">{postConstructor(posts,'/administracion/editarpost/')}
        {restOfPosts(posts,'/administracion/editarpost/')}</div>)
: 
(<>
<div className="grid grid-cols-12  border-b-2 mx-2">
{postConstructor(posts,'/noticias/')}
{posts.length >= 4? (

<div className="col-span-12 mx-auto col-start-1 lg:col-span-5 lg:col-start-8">
<h3 className="text-3xl font-semibold mt-5 col-span-12 lg:col-start-2 lg:text-center">Noticias Anteriores</h3>
    <div className="col-span-10 scrollbar scrollbar-thumb-green-800 scrollbar-track-green-700 hover:scrollbar-thumb-green-600 max-h-[70vh] max-w-lg col-start-2 overflow-y-scroll mb-20 border-4 border-green-600 border-opacity-50 md:divide-green-700 md:divide-y-2 divide-y-4 divide-green-700 shadow-lg shadow-black">
        <div className="shadow-inner shadow-black p-4 divide-blue-700 divide-y-4">
{restOfPosts(posts,'/noticias/')}
</div>
</div>
</div>):
null
}
</div>

</>)}


</>
     );
}
 
export default PostContainer;
