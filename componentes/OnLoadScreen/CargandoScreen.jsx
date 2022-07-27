import Typical from 'react-typical'
import Image from 'next/image';
import Head from 'next/head';
const CargandoScreen = () => {
    
    return ( 
<div className='min-h-[75vh] grid grid-cols-12 relative'>
<Head>
      <title>Cargando...</title>
      <meta name="description" content="Cooperativa Oyikil, Río Turbio"/>
      <link rel="icon" href="/imagenes/favicon.png" />
    </Head>
<div className="absolute top-10 left-0 md:top-[10%] md:left-[40%] ">
<Image className="animate-spin-slow" src="/imagenes/oyikil_navbar.png" alt="" width={300} height={300}  layout="fixed"  />
</div>
<div className='absolute top-[80%] left-[5%] md:left-[35%] text-5xl select-none'>
        <Typical loop={Infinity} wrapper="p" steps={['Cargando...', 400, 'Loading...', 400, 'Ładowanie...', 400, 'Caricamento in corso...', 400, "Yükleniyor..", 400 ]} />
        </div>
        </div>
     );
}
 
export default CargandoScreen;