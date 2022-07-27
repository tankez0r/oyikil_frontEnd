import { useRouter } from "next/router";
import Particulas from "./Particulas";
const AllPlans = () => {
const router = useRouter();
  const pushTo = (href) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks


    setTimeout(() => {
        router.push(href)
    }, 500);
  }

    return (
      
        <div className="grid grid-cols-12 gap-1 items-center grid-rows-2 mx-10 select-none mt-10">
   <Particulas/>
            <div className="col-span-12 my-5 text-orange-500 md:my-0 rounded group md:col-span-3 md:row-start-1 md:col-start-1 bg-white bg-opacity-5 shadow-2xl shadow-orange-500">
        <h3 className="font-bold text-5xl text-center">20<span className="font-normal"> Mbps</span> </h3>
      
        <div onClick={()=>{pushTo('/productos-y-servicios/20')}}  className="rounded active:text-white group-hover:cursor-pointer transform transition text-center duration-500 bg-slate-200 bg-opacity-60 active:bg-orange-600 group-hover:bg-orange-600 border-b-2 border-orange-600 relative select-none">
      <a  className="group-hover:text-white font-semibold duration-75 text-2xl pt-2 text-orange-600">Solicitar | <span className="text-2xl font-normal">$2890</span> </a>
        </div>

            </div>


            <div className="col-span-12 my-5 text-yellow-500 md:my-0 rounded group md:col-span-3 md:row-start-1 md:col-start-4  bg-white bg-opacity-5 shadow-2xl shadow-yellow-400 ">
        <h3 className="font-bold text-5xl text-center">30<span className="font-normal"> Mbps</span> </h3>
      
        <div onClick={()=>{pushTo('/productos-y-servicios/30')}}  className="rounded active:text-white group-hover:cursor-pointer transform transition text-center duration-500 bg-slate-200 bg-opacity-60 active:bg-yellow-400 group-hover:bg-yellow-400 border-b-2 border-yellow-500 relative select-none">
      <a  className="group-hover:text-white font-semibold duration-75 text-2xl pt-2">Solicitar | <span className="text-2xl font-normal">$3320</span> </a>
        </div>


            </div>

            <div className="col-span-12 my-5 text-emerald-700 md:my-0 rounded group md:col-span-3 md:col-start-7 bg-white bg-opacity-20 shadow-2xl shadow-green-700">
        <h3 className="font-bold text-5xl text-center ">50<span className="font-normal"> Mbps</span> </h3>
      
        <div onClick={()=>{pushTo('/productos-y-servicios/50')}}  className="rounded active:text-white group-hover:cursor-pointer transform transition text-center duration-500 bg-slate-200 bg-opacity-60 active:bg-emerald-700 group-hover:bg-green-600 border-b-2 border-green-600 relative select-none">
      <a  className="group-hover:text-white font-semibold duration-75 text-2xl pt-2 text-emerald-700">Solicitar | <span className="text-2xl font-normal">$6610</span> </a>
        </div>


            </div>


            <div className="col-span-12 my-5 text-purple-500 md:my-0 rounded group md:col-span-3 md:col-start-10 bg-white bg-opacity-5 shadow-2xl shadow-purple-700">
        <h3 className="font-bold text-5xl text-center">100<span className="font-normal"> Mbps</span> </h3>
      
        <div onClick={()=>{pushTo('/productos-y-servicios/100')}}  className="rounded active:text-white group-hover:cursor-pointer transform transition text-center duration-500 bg-slate-200 bg-opacity-60 active:bg-purple-600 group-hover:bg-purple-700 border-b-2 border-purple-700 relative select-none">
      <a  className="group-hover:text-white font-semibold duration-75 text-2xl pt-2">Solicitar | <span className="text-2xl font-normal">$14790</span> </a>
        </div>


            </div>

   
    </div> 
    );
}
 
export default AllPlans;