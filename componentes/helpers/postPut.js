import Error from "next/error";
import { getFormData } from "./objectToForm";
export const fetchPostPut = async (formik, method, router) => {
    const pushTo = (href) => {
        setTimeout(() => {
            router.push(href)
        }, 400);
    }
    const resultado = getFormData(formik)
    const id = formik.ID;
    const POST = {
        method: "POST",
        body: resultado,
        mode: "cors",
        credentials: "include"
    };

    const PUT = {
        method: "PUT",
        body: resultado,
        mode: "cors",
        credentials: "include"
    };
    const res = await method === 'put' ? fetch(process.env.API_POSTEOS + id, PUT).then(res => { if (!res.ok) { throw new Error(res.status) } }) :
        fetch(process.env.API_POSTEOS, POST).then(res => { if (!res.ok) { throw new Error(res.status) } })

    const trycatch = async () => {
        try {
            await res;
            if (method === 'post') {
                window.alert('Se ha creado un nuevo post')
            }
            else {
                window.alert('El post se ha editado correctamente')
            }

            pushTo('/administracion')

        } catch (error) {
            window.alert('algo salio mal')
            pushTo('/administracion')
            return

        }
    }


    trycatch()
}