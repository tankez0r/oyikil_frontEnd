export const fetchLoginClient = async (formik, passSubmit) => {

    passSubmit(true)
    const options = {
        method: "POST",
        body: JSON.stringify(formik),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
        mode: "cors",
        credentials: "include"
    };
    const res = await fetch(process.env.API_CLIENTLOGINURI, options).then(res => { return res.json() })
    try {
        return res
    } catch (error) {
        return { error: true, error }
    }
}


export const fetchAuth = async (cliente) => {

    try {
        const res = await fetch(process.env.ISPC_CLIENTURI + cliente,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "api-key": process.env.ISPC_APIKEY,
                    "api-token": process.env.ISPC_APITOKEN
                }
            })
        // variables de respuesta
        const json = await res.json()
        const client = json.data[0]
        const telefono = client.customerdata[0]?.value || "Sin numero telefonico";
        const clientProps = { idCliente: cliente, nombre: client.name, telefono: telefono, direccion: client.address, deuda: client.debt, status: client.nameStatus }

        return clientProps

    } catch (e) {
        return null
    }

}