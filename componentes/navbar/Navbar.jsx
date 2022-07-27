/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import MenuDeskstop from "./MenuDesktop";
import { useState, useCallback, useEffect } from 'react';
import OyikilNavBarSVG from "../Index/OyikilNavBarSVG";
import Link from "next/link";


const NavBar = () => {

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener( 'change' ,updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeEventListener( 'change',updateTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return targetReached;
  };

  const isBreakpoint = useMediaQuery(768)

    return ( 
        <>
        <nav className="flex  bg-green-800 md:bg-transparent pt-5 md:py-10 lg:py-5 justify-between relative  z-10 lg:mb-20">
          <Link href="/">
<OyikilNavBarSVG className="max-h-[100px] max-w-md md:absolute md:max-w-sm md:top-[0%] md:left-[-1%] md:max-h-[130px] md:block"/>
</Link>
            <div  className="col-span-1 m-0 p-0 w-1 h-5 cursor-pointer" >
      
        </div>
     {isBreakpoint? <MenuMobile/> : <MenuDeskstop/>}
        </nav>
  
       
        </>
       
     );
}
 
export default NavBar;