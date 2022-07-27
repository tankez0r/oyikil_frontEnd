import '../styles/globals.css'
import '../styles/particulas.scss'

import NavBar from '../componentes/navbar/Navbar'
import Footer from '../componentes/footer/Footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {


  return (
    <div className='bg-stone-200 text-black'>
      <Head>
        <title>Cooperativa Oyikil</title>
        <meta name="description" content="Cooperativa Oyikil Río Turbio" />
        <link rel="icon" href="/imagenes/favicon.png" />
      </Head>

      <NavBar />
      <div className=''>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>)
}

export default MyApp
