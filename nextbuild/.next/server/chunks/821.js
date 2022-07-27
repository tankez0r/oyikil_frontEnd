"use strict";
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 5821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ adminComponents_PostForms)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./componentes/adminComponents/CustomButton.jsx + 1 modules
var CustomButton = __webpack_require__(4476);
// EXTERNAL MODULE: ./componentes/adminComponents/CustomField.jsx
var CustomField = __webpack_require__(2965);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(5566);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
;// CONCATENATED MODULE: ./componentes/helpers/objectToForm.js
function getFormData(object) {
    const formData = new FormData;
    for(const key in object){
        formData.append(key, object[key]);
    }
    return formData;
}

;// CONCATENATED MODULE: ./componentes/helpers/postPut.js


const fetchPostPut = async (formik, method, router)=>{
    const pushTo = (href)=>{
        setTimeout(()=>{
            router.push(href);
        }, 400);
    };
    const resultado = getFormData(formik);
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
    const res1 = await method === "put" ? fetch("https://api.cooperativaoyikil.com.ar/posteos/" + id, PUT).then((res)=>{
        if (!res.ok) {
            throw new (error_default())(res.status);
        }
    }) : fetch("https://api.cooperativaoyikil.com.ar/posteos/", POST).then((res)=>{
        if (!res.ok) {
            throw new (error_default())(res.status);
        }
    });
    const trycatch = async ()=>{
        try {
            await res1;
            if (method === "post") {
                window.alert("Se ha creado un nuevo post");
            } else {
                window.alert("El post se ha editado correctamente");
            }
            pushTo("/administracion");
        } catch (error) {
            window.alert("algo salio mal");
            pushTo("/administracion");
            return;
        }
    };
    trycatch();
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./componentes/adminComponents/PostForms.jsx






const PostForms = ({ initialProps , editionMode  })=>{
    const router = (0,router_.useRouter)();
    const InputStyles = {
        labelCommons: "col-start-2 col-span-7",
        inputCommons: "border-opacity-40 border border-black shadow-md col-start-2 "
    };
    const initProps = initialProps ? initialProps : {
        titulo: "",
        subtitulo: "",
        imagen: undefined,
        pie_imagen: "",
        contenido: ""
    };
    const buttonClases = {
        submit: "bg-yellow-400 mb-7  rounded-lg shadow-md shadow-yellow-800 transition-all active:translate-y-1 ",
        reset: "bg-green-700 mb-7  rounded-lg shadow-lg shadow-green-900 text-white transition-all active:translate-y-1 ",
        erase: "bg-red-600 mb-7 text-white rounded-lg shadow-md shadow-red-800 transition-all active:translate-y-1 "
    };
    const { submit , reset , erase  } = buttonClases;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initProps,
            onSubmit: (value)=>{
                editionMode ? fetchPostPut(value, "put", router) : fetchPostPut(value, "post", router);
            },
            children: (formikProps)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomField/* default */.Z, {
                            as: "input",
                            name: "titulo",
                            label: "Ingresar T\xedtulo",
                            fieldStyle: InputStyles.inputCommons + "col-span-8",
                            labelStyle: InputStyles.labelCommons
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomField/* default */.Z, {
                            as: "input",
                            name: "subtitulo",
                            label: "Ingresar subtitulo",
                            fieldStyle: InputStyles.inputCommons + "col-span-6",
                            labelStyle: InputStyles.labelCommons
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomField/* default */.Z, {
                            as: "input",
                            accepts: "image/*",
                            inputType: "file",
                            name: "imagen",
                            label: "Ingresar imagen",
                            fieldStyle: InputStyles.inputCommons + "col-span-9",
                            labelStyle: InputStyles.labelCommons
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomField/* default */.Z, {
                            as: "input",
                            name: "pie_imagen",
                            label: "Ingresar pie de imagen",
                            fieldStyle: InputStyles.inputCommons + "col-span-8",
                            labelStyle: InputStyles.labelCommons
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomField/* default */.Z, {
                            as: "textarea",
                            name: "contenido",
                            label: "Ingresar contenido de post",
                            fieldStyle: InputStyles.inputCommons + "h-[200px] col-span-10",
                            labelStyle: InputStyles.labelCommons
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-12",
                            children: editionMode ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* default */.Z, {
                                        type: "submit",
                                        buttonClass: submit + "col-span-3 col-start-2"
                                    }),
                                    "  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* default */.Z, {
                                        buttonClass: reset + "col-span-4 col-start-8",
                                        type: "reset"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* default */.Z, {
                                        router: router,
                                        postId: formikProps.values.ID,
                                        buttonClass: erase + "col-span-4 col-start-5",
                                        type: "delete"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* default */.Z, {
                                        buttonClass: submit + "col-span-4 col-start-2",
                                        type: "submit"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* default */.Z, {
                                        buttonClass: reset + "col-span-4 col-start-8",
                                        type: "reset"
                                    })
                                ]
                            })
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const adminComponents_PostForms = (PostForms);


/***/ })

};
;