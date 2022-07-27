"use strict";
exports.id = 299;
exports.ids = [299];
exports.modules = {

/***/ 9299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ guiaForm_FormGuia)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./componentes/guiaForm/CustomInput.jsx

const CustomInput = ({ setearValor , inputValue  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        autoComplete: "off",
        onChange: (e)=>{
            setearValor(e);
        },
        type: "search",
        name: "buscador",
        placeholder: `Ingresar ${inputValue.typeofsearch}`,
        id: "",
        className: "bg-slate-400 rounded-full my-3 px-4 py-2"
    });
};
/* harmony default export */ const guiaForm_CustomInput = (CustomInput);

;// CONCATENATED MODULE: ./componentes/guiaForm/FormGuia.jsx




const FormGuia = ()=>{
    const { 0: inputValue , 1: setValue  } = (0,external_react_.useState)({
        typeofsearch: "telefono",
        busqueda: ""
    });
    const setearValor = (e)=>{
        setValue({
            ...inputValue,
            busqueda: e.target.value
        });
    };
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "text-black",
        onSubmit: (e)=>e.preventDefault()
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "telefono",
                        className: "mx-1 text-black",
                        children: "Telefono"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        onChange: (e)=>{
                            setValue({
                                ...inputValue,
                                typeofsearch: e.target.value
                            });
                        },
                        type: "radio",
                        name: "typeof",
                        id: "telefono",
                        value: "telefono",
                        defaultChecked: "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "nombre",
                        className: "mx-1 text-black",
                        children: "Nombre"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        onChange: (e)=>{
                            setValue({
                                ...inputValue,
                                typeofsearch: e.target.value
                            });
                        },
                        type: "radio",
                        name: "typeof",
                        id: "nombre",
                        value: "nombre"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(guiaForm_CustomInput, {
                setearValor: setearValor,
                inputValue: inputValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    router.push(`/guia-telefonica/${inputValue.typeofsearch}/${inputValue.busqueda}`);
                },
                type: "submit",
                className: "bg-green-800 shadow-md shadow-black rounded-md text-white p-1 mx-2 transition-all active:shadow-none active:translate-y-1",
                children: "Buscar"
            })
        ]
    });
};
/* harmony default export */ const guiaForm_FormGuia = (FormGuia);


/***/ })

};
;