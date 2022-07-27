import Image from "next/image";
const Footer = () => {
    return ( 
    <footer className="bg-green-800 min-w-full py-6">
        <div className="grid grid-cols-12 ">
             <h2 className="text-center col-start-2 md:col-start-6 md:col-span-5 col-span-12 text-2xl text-yellow-300 font-semibold">Números Telefónicos</h2>
             </div>
<div className="grid grid-cols-12 gap-2">
<Image priority={true} className="col-span-2"  src="/imagenes/oyikil_navbar.png" alt="" width={100} height={100}  layout="fixed" />
    <ul className="text-white text-center col-span-2 col-start-5 list-item md:col-span-3 md:col-start-6">
   
    <li>
    <h3 className="mb-[-10px] text-lg">Locutorio:</h3>
    <span className="font-semibold">421000
    </span>
    </li>
    <li>
    <h3 className="mb-[-10px] text-lg">Tecnicos:</h3>
    <span className="font-semibold">421100
    </span>
    </li>

    </ul>
    <ul className="md:col-span-3 md:col-start-9 col-span-2 col-start-8 text-white">
      
        <li className="list-item text-lg">
        <h3 className="mb-[-10px]">Administración:</h3>
         <span className="font-semibold">421274</span></li>

        <li className="list-item text-lg">
        <h3 className="mb-[-10px] ">Fax:</h3>
          <span className="font-semibold">421476</span></li>

        
    </ul>

    </div>

    </footer> );
}
 
export default Footer;