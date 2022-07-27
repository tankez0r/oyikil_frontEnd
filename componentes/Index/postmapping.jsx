import Image from "next/image"
import Link from "next/link";

    export const postConstructor =  (post, url) => post.map(({ID, titulo, imagen, fecha,pie_imagen, subtitulo, contenido}, i)=> {
        const src = process.env.API_SOURCEIMAGELINK+imagen; // cambiar por localURL var
        const stringsplit =  contenido.split(/\r?\n/, 1)
        const localDate = new Date(fecha).toLocaleDateString()
        const mapStringContent = stringsplit.map((par, i) =>{return (<div key={i++}><p>{par}</p> 
        <span className="font-semibold italic text-green-800 text-right text-sm">... Click para leer completo</span></div>)})

            if(i == 0){
            return (
                <Link href={url+ID} key={i++} className="col-span-12">
                <a className="col-span-12 md:col-span-6 grid grid-cols-12 col-start-1 mx-2 my-5">
               
                   <div className="min-w-[80vw] lg:min-w-[540px] relative col-span-7    ">    
            <Image  priority={true}  src={src} alt="" width={820} height={500} objectFit='fill'/>  
            <span className="text-xs text-gray-300 absolute  md:bottom-[2%] md:min-w-[92.3%]  lg:min-w-full py-3 bottom-[3.5%] left-0 bg-black min-w-full bg-opacity-60">{pie_imagen}</span> 
            </div>
            <div className="col-span-12 ml-2 flex flex-row items-baseline">
                   <h2 className="text-3xl font-bold">{titulo}</h2>  
                   </div>
            <div className="grid col-span-12 col-start-1 ml-1"> 
            <h3 className="font-medium text-lg italic col-span-2">{subtitulo}</h3>  
            <h4 className="text-xs col-start-3">{localDate}</h4> 
            </div>
            <div className="col-span-12 col-start-1 ml-2 overflow-hidden text-ellipsis "> 
            {mapStringContent}
           
            </div>
                
                </a>
                
                </Link>)
                }
      
                else if(i==1){
                    return (
                        <Link href={url+ID} key={i++}>
                            <a className="col-span-12 lg:col-span-5 lg:col-start-8 grid grid-cols-12 my-5">
               
               <div className="min-w-[80vw] lg:min-w-[500px] relative">    
        <Image  priority={true}  src={src} alt="" width={820} height={500} objectFit='fill'/>  
        <span className="text-xs text-gray-300 absolute  md:bottom-[4.4%] lg:min-w-full  py-3 bottom-[4.5%] left-0 bg-black min-w-full bg-opacity-60">{pie_imagen}</span> 
        </div>
        <div className="col-span-12 ml-2 flex flex-row items-baseline">
               <h2 className="text-3xl font-bold">{titulo}</h2>  
               </div>
        <div className="grid col-span-12 col-start-1 ml-1"> 
        <h3 className="font-medium text-lg italic col-span-2">{subtitulo}</h3>  
        <h4 className="text-xs col-start-3">{localDate}</h4> 
        </div>
        <div className="col-span-12 col-start-1 ml-2 overflow-hidden text-ellipsis "> 
        {mapStringContent}
       
        </div>
            
            </a>
                        </Link>)
                }


                else if(i==2){
                    return (
                        <Link href={url+ID} key={i++}>
                        <a className="md:col-span-7 md:grid md:grid-cols-12 md:col-start-1 md:mx-2 md:my-5 col-span-12 grid grid-cols-12 col-start-1 mx-2 my-5">
                       
                           <div className="col-span-12 lg:col-span-8 col-start-1 md:col-start-1">
                               <div className="min-w-[90vw] lg:min-w-[520px] relative">          
                    <Image  priority={true}  src={src} alt="" width={820} height={500} objectFit='fill'/>  
                    <span className="text-xs text-gray-300 absolute md:col-span-9 md:bottom-[2%]  md:min-w-full py-3 bottom-[3.5%] left-0 bg-black min-w-full bg-opacity-60">{pie_imagen}</span>
                    </div> 
                    </div>
                    <div className="col-span-12 ml-2 flex flex-row items-baseline">
                   <h2 className="text-3xl font-bold">{titulo}</h2>  
                   </div>
            <div className="grid col-span-12 col-start-1 ml-1"> 
            <h3 className="font-medium text-lg italic col-span-2">{subtitulo}</h3>  
            <h4 className="text-xs col-start-3">{localDate}</h4> 
            </div>
            <div className="col-span-10 col-start-1 ml-2 overflow-hidden text-ellipsis"> 
            {mapStringContent}
           
            </div>
                        
                        </a>
                        
                        </Link>
                        
                        
                        )
                }
               





            });


        export const restOfPosts  =  (post, url) => post.map(({ID, titulo, imagen, fecha,pie_imagen, subtitulo, contenido}, i)=> {
            const src = process.env.API_SOURCEIMAGELINK +imagen;
            const stringsplit =  contenido.split(/\r?\n/, 1);
            const localDate = new Date(fecha).toLocaleDateString()
            const mapStringContent = stringsplit.map((par, i) =>{ 
                
                
                return (<div key={i++}><p >{par}</p> <span className="font-semibold italic text-green-800 text-right text-sm">... Click para leer completo</span></div>)});
            
             if(i > 0){
                        return (
                            <Link href={url+ID} key={i++}>
                            <a  className="md:col-span-3 md:grid md:grid-cols-12  md:mx-2 md:my-2 col-span-12 grid grid-cols-12 col-start-1 mx-2 my-5">
                            <div className="col-span-12 ml-2 ">
                               <h2 className="text-xl font-semibold">{titulo}</h2> 
                               </div>
                               <div className="col-span-10 lg:col-span-8 col-start-1 md:col-start-1 relative">         
                        <Image  priority={true}  src={src} alt="" width={820} height={500} objectFit='fill'/>  
                        <span className="text-xs text-gray-300 absolute md:col-span-9 md:bottom-[2%]  md:min-w-full py-3 bottom-[4.5%] left-0 bg-black min-w-full bg-opacity-60">{pie_imagen}</span>
                        </div>
                        <div className="grid col-span-12 col-start-1 ml-1"> 
                        <h3 className="font-bold text-md italic col-span-3">{subtitulo}</h3>  
                        <h4 className="text-xs col-start-9">{localDate}</h4>  
                        </div>
                        <div className="col-span-12 md:col-span-6 col-start-1 ml-2 overflow-hidden text-ellipsis "> 
                        {mapStringContent}
                       
                        </div>
                            
                            </a>
                            
                            </Link>
                            
                            
                            )
                    }
    
    
    
            }   
    
    
    
    
            )
        

     
