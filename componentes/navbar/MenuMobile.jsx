import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import OyikilNavBarSVG from "../Index/OyikilNavBarSVG";
import ExtendedMenu from "./ExtendedMenu";

const MenuIndex = () => {
    const [toggleMenu, setToggle] = useState(false)
    const Toggling= ()=> setToggle(!toggleMenu)
    useEffect(() => {
    toggleMenu? document.body.style.overflow="hidden":document.body.style.overflow="";
    }, [toggleMenu])
    
    
    return ( 
    <div className="bg-green-300">
    <div onClick={Toggling} className=" z-20 col-start-8  leading-extra-none text-center text-yellow-500 hover:text-yellow-200 text-xl cursor-pointer select-none">
        <div className="absolute right-[5%] top-[30%]">__ <br />__ <br />__</div>
    </div>

    <Transition
        show={toggleMenu}
         enter="transition duration-500 ease-out"
         enterFrom="transform scale-10 opacity-0"
         enterTo="transform scale-100 opacity-100"
         leave="transition duration-500 ease-out"
         leaveFrom="transform scale-100 opacity-100"
         leaveTo="transform scale-100 opacity-0"
         className="absolute right-0 left-0 top-[100%]"
         >
      {/* transición menu toggeable */}
<ExtendedMenu Toggling={Toggling}/>
</Transition>
</div>

    );
}
 
export default MenuIndex;