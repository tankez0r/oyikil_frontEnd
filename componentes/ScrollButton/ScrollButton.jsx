import Image from "next/image";
import { useState, useEffect} from "react";
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };  
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
   


    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
     
      return () => {
        window.removeEventListener('scroll', toggleVisible)
      }
      
    }, [])
    
  

    
    return (
      <button onClick={scrollToTop}  className={visible?"select-none z-20 fixed bottom-4 right-5 rounded-full p-1 transition-all active:translate-y-2 ": "hidden"}>
       <span 
       className={visible ? 'inline bg-yellow-400 rounded-full px-5 py-4 md:px-3 md:py-3' : 'hidden'}>
           <Image src="/imagenes/chevron-doble-up.png" alt="doble up" height={20} width={18} objectFit="fixed"/>
           </span>  
      </button>
    );
  }
    
  export default ScrollButton;