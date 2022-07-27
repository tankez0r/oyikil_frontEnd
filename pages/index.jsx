import PostsContainer from "../componentes/Index/PostsContainer"
import Swipper from "../componentes/Index/SwipperHead"
import ScrollButton from "../componentes/ScrollButton/ScrollButton"
import Head from "next/head"
import AllPlans from "../componentes/internetComponentes/Allplans"


export default function Home() {

  return (
    <div className='-z-0'>
      <section className="my-5">
      <Swipper/>
          </section>
          <section className="bg-white-200 py-5 container-particulas my-4 shadow-lg shadow-gray-400">
          <h4 className="text-center select-none mt-5 font-semibold text-5xl text-emerald-500">Nuestros Planes de Internet</h4>
        <AllPlans/>
          </section>
  <section>
  <PostsContainer/>
  </section>
  <ScrollButton/>
  <Head>
      <title>Cooperativa Oyikil, Río Turbio</title>
      <meta name="description" content="Cooperativa de telefonia e internet. Río Turbio, Santa Cruz"/>
      <link rel="icon" href="/imagenes/favicon.png" /> 
    </Head>
      </div>
  )
}
