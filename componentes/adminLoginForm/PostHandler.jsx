import Image from "next/image";
import { useRouter } from "next/router";
import { fetchlogOut } from "../helpers/FetchLog";
const PostHandler = () => {
    const router = useRouter()

    const pushTo =(href) =>{
        setTimeout(() => {
            router.push(href)
        }, 300);
    }

    const LogOut = async()=>{
       await fetchlogOut()
        pushTo('/')
    }

        return ( 
            <section className="">
                <div className="grid grid-cols-12">
      <h1 className="mt-4 text-3xl text-center font-bold col-span-12 justify-center">Bienvenido al dashboard de administración</h1>
      <button onClick={LogOut} className="col-span-2 bg-red-600 col-start-6 mt-5 rounded-sm shadow-md transition-all active:translate-y-2 active:shadow-red-500">LogOut</button>
      </div>
    <div>
    <div className="grid grid-cols-10 min-h-[60vh] md:mb-20 items-center grid-rows-2 md:grid-rows-1 font-semibold">
        <div onClick={()=>{pushTo('/administracion/nuevopost')}} className="col-start-2 md:col-span-4 col-span-8 justify-center row-start-1 place-self-center my-4 bg-green-800 p-4 rounded-sm shadow-green-900 shadow-md transition-all active:translate-y-1">
            <div className="text-center text-white">
            <h3 className="text-center text-xl">Agregar Nuevo Post</h3>
            <Image priority={true} src="/imagenes/agregar.png" alt="Agregar nuevo post" height={150} width={150}/>
            </div>
        </div>
        <div onClick={()=>{pushTo('/administracion/editarpost')}} className="col-start-2 md:col-start-6 md:col-span-4 col-span-8 justify-center md:row-start-1 row-start-2 place-self-center bg-green-800 p-4 px-10 rounded-sm shadow-green-900 shadow-md transition-all active:translate-y-1">
        <div className="text-center text-white">
            <h3 className="text-center text-2xl">Editar Post</h3>
            <Image priority={true} src="/imagenes/editar.png" alt="Agregar nuevo post" height={150} width={150}/>
            </div>
        </div>
    </div>
    </div>
                </section>
         );
}
 
export default PostHandler;