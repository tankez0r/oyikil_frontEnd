import Link from "next/link";

const MenuDeskstop = () => {
   
    const pushTo = (href) => {
        setTimeout(() => {
           window.location = location.protocol + "//" + location.hostname + href
        }, 400);
      }
    
    
    return ( 
    <div className=" text-yellow-500  text-2xl text-left font-bold bg-gray-200 rounded-sm min-w-full">
        <div className="py-6 absolute right-[1%]">
    <Link href="/"><a> <span className="  hover:text-green-700  p-2 col-span-2">Inicio</span></a></Link>
<button onClick={()=>{pushTo("/clientes")}}><a><span className=" hover:text-green-700 font-semibold rounded-full p-2 ">Cliente: Estado de cuenta</span></a></button>
        <Link replace href="/guia-telefonica"><a><span className="   hover:text-green-700  rounded-full p-2 ">Guía Telefonica local</span></a></Link>
        </div>
    </div>

    );
}
 
export default MenuDeskstop;