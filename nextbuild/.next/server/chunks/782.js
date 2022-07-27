"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 4476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ adminComponents_CustomButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./componentes/helpers/fetchDestroy.js
const fetchDestroy = (id, router)=>{
    const result = window.confirm("Borrar post?");
    const pushTo = (href)=>{
        setTimeout(()=>{
            router.push(href);
        }, 400);
    };
    const DELETE = {
        method: "DELETE",
        mode: "cors",
        credentials: "include"
    };
    const res1 = result ? fetch("https://api.cooperativaoyikil.com.ar/posteos/" + id, DELETE).then((res)=>{
        if (!res.ok) throw new Error(res.status);
    }) : null;
    const trycatch = async ()=>{
        try {
            await res1;
            if (res1) {
                window.alert("Se ha eliminado el post");
                pushTo("/administracion");
            } else {
                window.alert("eliminaci\xf3n canceleada");
            }
        } catch (error) {
            window.alert("algo salio mal");
            pushTo("/administracion");
        }
    };
    trycatch();
};

;// CONCATENATED MODULE: ./componentes/adminComponents/CustomButton.jsx


const CustomButton = ({ type , buttonClass , postId , router  })=>{
    if (type === "submit") {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "submit",
            className: buttonClass,
            children: "Env\xedar"
        });
    } else if (type === "reset") {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "reset",
            className: buttonClass,
            children: "Resetear Form"
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            onClick: ()=>{
                fetchDestroy(postId, router);
            },
            className: buttonClass,
            children: "Borrar"
        });
    }
};
/* harmony default export */ const adminComponents_CustomButton = (CustomButton);


/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);


const CustomField = ({ inputType , name , placeholder , label , labelStyle , fieldStyle , as , accepts  })=>{
    const [field, meta, helpers] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(name);
    const { setValue  } = helpers;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-12 my-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: labelStyle,
                htmlFor: name,
                children: label
            }),
            inputType === "file" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                onChange: (e)=>{
                    setValue(e.currentTarget.files[0]);
                },
                className: fieldStyle,
                name: name,
                as: as,
                type: inputType,
                placeholder: placeholder,
                accept: accepts
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                className: fieldStyle + " text-black",
                name: name,
                as: as,
                type: inputType,
                placeholder: placeholder,
                accepts: accepts ? accepts : "*"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
                name: name,
                render: (msg)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-sm text-red-600 drop-shadow-sm shadow-white",
                        children: [
                            " ",
                            msg,
                            " "
                        ]
                    })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomField);


/***/ })

};
;