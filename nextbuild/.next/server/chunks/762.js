"use strict";
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 5762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var _postmapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2262);
/* harmony import */ var _helpers_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7957);
/* harmony import */ var _OnLoadScreen_CargandoScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PostContainer = ({ editMode  })=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.cooperativaoyikil.com.ar/posteos?size=10", _helpers_fetcher__WEBPACK_IMPORTED_MODULE_4__/* .fetcher */ ._, {
        refreshInterval: 1000
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Fallo al cargar, presionar f5 para recargar pagina"
    });
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OnLoadScreen_CargandoScreen__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
    const posts = data.data.post;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: editMode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
                (0,_postmapping__WEBPACK_IMPORTED_MODULE_2__/* .postConstructor */ .n)(posts, "/administracion/editarpost/"),
                (0,_postmapping__WEBPACK_IMPORTED_MODULE_2__/* .restOfPosts */ .A)(posts, "/administracion/editarpost/")
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-12 border-b-2 mx-2",
                children: [
                    (0,_postmapping__WEBPACK_IMPORTED_MODULE_2__/* .postConstructor */ .n)(posts, "/noticias/"),
                    posts.length >= 4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-span-12 mx-auto col-start-1 lg:col-span-5 lg:col-start-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-3xl font-semibold mt-5 col-span-12 lg:col-start-2 lg:text-center",
                                children: "Noticias Anteriores"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-10 scrollbar scrollbar-thumb-green-800 scrollbar-track-green-700 hover:scrollbar-thumb-green-600 max-h-[70vh] max-w-lg col-start-2 overflow-y-scroll mb-20 border-4 border-green-600 border-opacity-50 md:divide-green-700 md:divide-y-2 divide-y-4 divide-green-700 shadow-lg shadow-black",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "shadow-inner shadow-black p-4 divide-blue-700 divide-y-4",
                                    children: (0,_postmapping__WEBPACK_IMPORTED_MODULE_2__/* .restOfPosts */ .A)(posts, "/noticias/")
                                })
                            })
                        ]
                    }) : null
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ restOfPosts),
/* harmony export */   "n": () => (/* binding */ postConstructor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const postConstructor = (post, url)=>post.map(({ ID , titulo , imagen , fecha , pie_imagen , subtitulo , contenido  }, i1)=>{
        const src = "https://api.cooperativaoyikil.com.ar/" + imagen; // cambiar por localURL var
        const stringsplit = contenido.split(/\r?\n/, 1);
        const localDate = new Date(fecha).toLocaleDateString();
        const mapStringContent = stringsplit.map((par, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: par
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold italic text-green-800 text-right text-sm",
                        children: "... Click para leer completo"
                    })
                ]
            }, i++);
        });
        if (i1 == 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: url + ID,
                className: "col-span-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "col-span-12 md:col-span-6 grid grid-cols-12 col-start-1 mx-2 my-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "min-w-[90vw] lg:min-w-[720px] relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    priority: true,
                                    src: src,
                                    alt: "",
                                    width: 820,
                                    height: 500,
                                    objectFit: "fill"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-gray-300 absolute md:bottom-[2%] md:min-w-[92.3%] lg:min-w-full py-3 bottom-[3.5%] left-0 bg-black min-w-full bg-opacity-60",
                                    children: pie_imagen
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 ml-2 flex flex-row items-baseline",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-3xl font-bold",
                                children: titulo
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid col-span-12 col-start-1 ml-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-medium text-lg italic col-span-2",
                                    children: subtitulo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xs col-start-3",
                                    children: localDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 col-start-1 ml-2 overflow-hidden text-ellipsis ",
                            children: mapStringContent
                        })
                    ]
                })
            }, i1++);
        } else if (i1 == 1) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: url + ID,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "col-span-12 lg:col-span-5 lg:col-start-8 grid grid-cols-12 mx-2 my-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "min-w-[90vw] lg:min-w-[500px] relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    priority: true,
                                    src: src,
                                    alt: "",
                                    width: 820,
                                    height: 500,
                                    objectFit: "fill"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-gray-300 absolute md:bottom-[3.2%] lg:min-w-full py-3 bottom-[3.5%] left-0 bg-black min-w-full bg-opacity-60",
                                    children: pie_imagen
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 ml-2 flex flex-row items-baseline",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-3xl font-bold",
                                children: titulo
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid col-span-12 col-start-1 ml-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-medium text-lg italic col-span-2",
                                    children: subtitulo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xs col-start-3",
                                    children: localDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 col-start-1 ml-2 overflow-hidden text-ellipsis ",
                            children: mapStringContent
                        })
                    ]
                })
            }, i1++);
        } else if (i1 == 2) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: url + ID,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "md:col-span-7 md:grid md:grid-cols-12 md:col-start-1 md:mx-2 md:my-5 col-span-12 grid grid-cols-12 col-start-1 mx-2 my-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 lg:col-span-8 col-start-1 md:col-start-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "min-w-[90vw] lg:min-w-[720px] relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        priority: true,
                                        src: src,
                                        alt: "",
                                        width: 820,
                                        height: 500,
                                        objectFit: "fill"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs text-gray-300 absolute md:col-span-9 md:bottom-[2%] md:min-w-full py-3 bottom-[3.5%] left-0 bg-black min-w-full bg-opacity-60",
                                        children: pie_imagen
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 ml-2 flex flex-row items-baseline",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-3xl font-bold",
                                children: titulo
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid col-span-12 col-start-1 ml-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-medium text-lg italic col-span-2",
                                    children: subtitulo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xs col-start-3",
                                    children: localDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-10 col-start-1 ml-2 overflow-hidden text-ellipsis",
                            children: mapStringContent
                        })
                    ]
                })
            }, i1++);
        }
    })
;
const restOfPosts = (post, url)=>post.map(({ ID , titulo , imagen , fecha , pie_imagen , subtitulo , contenido  }, i2)=>{
        const src = "https://api.cooperativaoyikil.com.ar/" + imagen;
        const stringsplit = contenido.split(/\r?\n/, 1);
        const localDate = new Date(fecha).toLocaleDateString();
        const mapStringContent = stringsplit.map((par, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: par
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold italic text-green-800 text-right text-sm",
                        children: "... Click para leer completo"
                    })
                ]
            }, i++);
        });
        if (i2 > 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: url + ID,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "md:col-span-3 md:grid md:grid-cols-12 md:mx-2 md:my-2 col-span-12 grid grid-cols-12 col-start-1 mx-2 my-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 ml-2 ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: titulo
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-10 lg:col-span-8 col-start-1 md:col-start-1 relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    priority: true,
                                    src: src,
                                    alt: "",
                                    width: 820,
                                    height: 500,
                                    objectFit: "fill"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-gray-300 absolute md:col-span-9 md:bottom-[2%] md:min-w-full py-3 bottom-[4.5%] left-0 bg-black min-w-full bg-opacity-60",
                                    children: pie_imagen
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid col-span-12 col-start-1 ml-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-bold text-md italic col-span-3",
                                    children: subtitulo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xs col-start-9",
                                    children: localDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-12 md:col-span-6 col-start-1 ml-2 overflow-hidden text-ellipsis ",
                            children: mapStringContent
                        })
                    ]
                })
            }, i2++);
        }
    })
;


/***/ }),

/***/ 7957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fetcher)
/* harmony export */ });
/* unused harmony export fetcherStatus */
function fetcher(...args) {
    return fetch(...args).then((res)=>res.json()
    );
}
function fetcherStatus(...args) {
    return fetch(...args).then((res)=>{
        if (!res.ok) {
            return res.json();
        }
        ;
        return {
            ...res.json(),
            ok: true
        };
    });
}


/***/ })

};
;