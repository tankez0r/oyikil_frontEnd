
export const fetchLogin = async (formik) => {
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
    const res = await fetch(process.env.API_ADMINLOGINURI, options).then(res => res.json())

    try {
        res
    } catch (error) {
        return
    }
}



export const fetchlogOut = async () => {
    const options = {
        method: "POST",
        mode: "cors",
        credentials: "include"
    };
    const res = await fetch(process.env.API_LOGOUTURI, options).then(res => res.json())
    try {
        res
    } catch (error) {
        return
    }
}

