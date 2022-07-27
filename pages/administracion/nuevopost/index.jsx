import PostForms from "../../../componentes/adminComponents/PostForms";
const NuevoPost = () => {
    return ( 
        <div>
        <h1 className="my-5">Formulario para nuevos posteos</h1>
       <PostForms editionMode={false}/>
       </div>
     );
}
 
export default NuevoPost;