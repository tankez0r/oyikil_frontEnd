import Image from "next/image"
import Link from "next/link";


const PaginaEnConstruccion = () => {
    return ( 
        <section className="flex items-center flex-col relative container mx-auto">
        <Image priority={true} className="motion-safe:animate-bounce" src="/imagenes/oyikil_navbar.svg" alt="" width={300} height={350}/>
        <div className=" bottom-[35%] w-[60vw]">
<h1 className="font-mono font-bold text-green-500 text text-1xl text-center">Estamos trabajando para darte un mejor servicio, la pagina aún se encuentra en construcción</h1>
</div>
<div className="flex items-center flex-col my-2">
<p className="text-sm text-center text-white">Te recordamos que podes comunicarte con nosotros por whatsapp
 <Link href="https://wa.me/message/KZAEBMPOGGINE1"><a className="text-green-600 font-bold"> haciendo Click acá </a></Link> 
  o escaneando el codigo QR</p>
<div className="my-2">
<Image priority={true} className="my-4 shadow-md shadow-slate-50" src="/imagenes/whatsappqr.jpeg" alt="oyikilQR"  width={314} height={314}/>
</div>
</div>

</section>
     );
}
 
export default PaginaEnConstruccion;