"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 7218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ fetchAuth),
/* harmony export */   "n": () => (/* binding */ fetchLoginClient)
/* harmony export */ });
const fetchLoginClient = async (formik, passSubmit)=>{
    passSubmit(true);
    const options = {
        method: "POST",
        body: JSON.stringify(formik),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        },
        mode: "cors",
        credentials: "include"
    };
    const res1 = await fetch("https://test.cooperativaoyikil.com.ar/", options).then((res)=>{
        return res.json();
    });
    try {
        return res1;
    } catch (error) {
        return {
            error: true,
            error
        };
    }
};
const fetchAuth = async (cliente)=>{
    try {
        var ref;
        const res = await fetch("http://online8.ispcube.com:8080/index.php/customers?limit=1&q=" + cliente, {
            headers: {
                "Content-Type": "application/json",
                "api-key": "708jND5al0dNa73acwPmWNdMcxitiEk95CjLkJTGzmDs6oEsoZv3ZIh",
                "api-token": "c79EloM5ksoPZdlkNjZa9lWdxGxJs7Jm"
            }
        });
        // variables de respuesta
        const json = await res.json();
        const client = json.data[0];
        const telefono = ((ref = client.customerdata[0]) === null || ref === void 0 ? void 0 : ref.value) || "Sin numero telefonico";
        const clientProps = {
            idCliente: cliente,
            nombre: client.name,
            telefono: telefono,
            direccion: client.address,
            deuda: client.debt,
            status: client.nameStatus
        };
        return clientProps;
    } catch (e) {
        return null;
    }
};


/***/ })

};
;