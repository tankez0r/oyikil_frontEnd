export const fetchDestroy = (id, router) => {
    const result = window.confirm('Borrar post?')

    const pushTo = (href) => {
        setTimeout(() => {
            router.push(href)
        }, 400);
    }
    const DELETE = {
        method: "DELETE",
        mode: 'cors',
        credentials: "include"
    }
    const res = result ? fetch(process.env.API_POSTEOS + id, DELETE).then(res => { if (!res.ok) throw new Error(res.status) }) : null;

    const trycatch = async () => {
        try {
            await res;
            if (res) {
                window.alert('Se ha eliminado el post')
                pushTo('/administracion')

            }
            else {
                window.alert('eliminación canceleada')
            }

        } catch (error) {
            window.alert('algo salio mal')
            pushTo('/administracion')
        }
    }

    trycatch();
}