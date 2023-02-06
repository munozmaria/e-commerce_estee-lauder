(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2078);
/* harmony import */ var _global_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_components_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1742);
/* harmony import */ var _global_styles_components_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_styles_components_styles_css__WEBPACK_IMPORTED_MODULE_3__);





function App({ Component , pageProps  }) {
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
        setCart(cartLocalStorage);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [
        cart
    ]);
    const addToCart = (product)=>{
        if (cart.some((makeup)=>makeup.id === product.id)) {
            const cartWithProduct = cart.map((makeup)=>{
                if (makeup.id === product.id) {
                    makeup.quantity = product.quantity;
                }
                return makeup;
            });
            setCart(cartWithProduct);
        } else {
            setCart([
                ...cart,
                product
            ]);
        }
    };
    //quantity cart
    const updateQuantity = (product)=>{
        const cartWithProduct = cart.map((makeup)=>{
            if (makeup.id === product.id) {
                makeup.quantity = product.quantity;
            }
            return makeup;
        });
        setCart(cartWithProduct);
    };
    //delete product
    const deleteProduct = (id)=>{
        const updateCart = cart.filter((item)=>item.id !== id);
        setCart(updateCart);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps,
            cart: cart,
            addToCart: addToCart,
            updateQuantity: updateQuantity,
            deleteProduct: deleteProduct
        })
    });
}


/***/ }),

/***/ 1742:
/***/ (() => {



/***/ }),

/***/ 2078:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();