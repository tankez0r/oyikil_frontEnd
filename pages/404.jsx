import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
export default function Custom404() {
    
    
    
    
    return (
      <>
      <Head>
      <title>Error 404</title>
      <meta name="robots" content='noindex' />
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
<div className="py-12 grid grid-cols-12">
  
  <div className="col-span-3 col-start-5">
        <Image className="animate-spin-slow" src="/imagenes/oyikil_navbar.png" alt="" width={100} height={100}  layout="responsive"  />
        </div>
 <div className="text-center text-green-800 col-span-7 col-start-3 bg-white bg-opacity-5">
 <h1 className="text-4xl font-mono font-bold">Error 404</h1>
 <p className="text-lg font-mono">Parece que la pagina que estabas buscando no existe, <Link href={"/"}><a className="text-blue-400">hace click acá</a></Link>  y volve al Home</p>
 </div>
 </div>
 </>
    )
  }