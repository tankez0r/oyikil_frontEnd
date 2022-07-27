import Link from "next/link";
const ExtendedMenu = ({Toggling}) => {

const linkStyle = "hover:text-yellow-300 py-2 cursor-pointer select-none hover:bg-green-600";
   const pushTo = (href) => {
    setTimeout(() => {
       window.location = location.protocol + "//" + location.hostname + href
    }, 400);
  }


    return ( 
    <div  className="grid grid-cols-12 min-w-max min-h-[100vh]  absolute right-0 left-0 ">
      <div onClick={Toggling} className="bg-slate-600 col-span-5 bg-opacity-60 overflow-y-hidden"></div>
    <div className="col-start-5 bg-green-800 col-span-8 list-none text-yellow-500 text-2xl text-center absolute min-h-[100vh] left-3 right-0">      
    <Link  href="/"><a> <li onClick={Toggling} className={linkStyle}>Inicio</li></a></Link>
<button onClick={()=>{pushTo("/clientes")}}><a><li onClick={Toggling} className={linkStyle}>Clientes: Estado de cuenta</li></a></button> 
        <Link replace href="/guia-telefonica"><a><li onClick={Toggling} className={linkStyle}>Guía Telefonica Río Turbio</li></a></Link>
    </div>
  </div> );
}
 
export default ExtendedMenu;