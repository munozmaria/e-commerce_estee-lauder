/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-styles/normalize.css */ \"./global-styles/normalize.css\");\n/* harmony import */ var _global_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _global_styles_components_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-styles/components-styles.css */ \"./global-styles/components-styles.css\");\n/* harmony import */ var _global_styles_components_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_styles_components_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cartLocalStorage = JSON.parse(localStorage.getItem(\"cart\")) ?? [];\n        setCart(cartLocalStorage);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(cart));\n    }, [\n        cart\n    ]);\n    const addToCart = (product)=>{\n        if (cart.some((makeup)=>makeup.id === product.id)) {\n            const cartWithProduct = cart.map((makeup)=>{\n                if (makeup.id === product.id) {\n                    makeup.quantity = product.quantity;\n                }\n                return makeup;\n            });\n            setCart(cartWithProduct);\n        } else {\n            setCart([\n                ...cart,\n                product\n            ]);\n        }\n    };\n    //quantity cart\n    const updateQuantity = (product)=>{\n        const cartWithProduct = cart.map((makeup)=>{\n            if (makeup.id === product.id) {\n                makeup.quantity = product.quantity;\n            }\n            return makeup;\n        });\n        setCart(cartWithProduct);\n    };\n    //delete product\n    const deleteProduct = (id)=>{\n        const updateCart = cart.filter((item)=>item.id !== id);\n        setCart(updateCart);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            cart: cart,\n            addToCart: addToCart,\n            updateQuantity: updateQuantity,\n            deleteProduct: deleteProduct\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\1593m\\\\OneDrive\\\\Escritorio\\\\E-commerce\\\\e-commerce-laurent\\\\pages\\\\_app.js\",\n            lineNumber: 64,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ0o7QUFDRTtBQUNNO0FBS2hDLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNyRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNmLE1BQU1NLG1CQUFtQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ3ZFTCxRQUFRQztJQUNULEdBQUcsRUFBRTtJQUNMTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZTLGFBQWFFLE9BQU8sQ0FBQyxRQUFRSixLQUFLSyxTQUFTLENBQUNSO0lBQzdDLEdBQUc7UUFBQ0E7S0FBSztJQUNULE1BQU1TLFlBQVlDLENBQUFBLFVBQVc7UUFDNUIsSUFBSVYsS0FBS1csSUFBSSxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPQyxFQUFFLEtBQUtILFFBQVFHLEVBQUUsR0FBRztZQUNsRCxNQUFNQyxrQkFBa0JkLEtBQUtlLEdBQUcsQ0FBQ0gsQ0FBQUEsU0FBVTtnQkFDMUMsSUFBSUEsT0FBT0MsRUFBRSxLQUFLSCxRQUFRRyxFQUFFLEVBQUU7b0JBQzVCRCxPQUFPSSxRQUFRLEdBQUdOLFFBQVFNLFFBQVE7Z0JBQ3BDLENBQUM7Z0JBQ0QsT0FBT0o7WUFDUjtZQUVEWCxRQUFRYTtRQUNSLE9BQU87WUFDTmIsUUFBUTttQkFBSUQ7Z0JBQU1VO2FBQVE7UUFDM0IsQ0FBQztJQUVGO0lBSUEsZUFBZTtJQUNmLE1BQU1PLGlCQUFpQlAsQ0FBQUEsVUFBVztRQUNqQyxNQUFNSSxrQkFBa0JkLEtBQUtlLEdBQUcsQ0FBQyxDQUFDSCxTQUFXO1lBQzVDLElBQUlBLE9BQU9DLEVBQUUsS0FBS0gsUUFBUUcsRUFBRSxFQUFFO2dCQUM3QkQsT0FBT0ksUUFBUSxHQUFHTixRQUFRTSxRQUFRO1lBQ25DLENBQUM7WUFDRCxPQUFPSjtRQUNSO1FBQ0FYLFFBQVFhO0lBQ1Q7SUFJQSxnQkFBZ0I7SUFDaEIsTUFBTUksZ0JBQWdCTCxDQUFBQSxLQUFNO1FBQzNCLE1BQU1NLGFBQWFuQixLQUFLb0IsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLUixFQUFFLEtBQUtBO1FBQ25EWixRQUFRa0I7SUFDVDtJQVFBLHFCQUNDO2tCQUVDLDRFQUFDckI7WUFDQyxHQUFHQyxTQUFTO1lBQ2JDLE1BQU1BO1lBQ05TLFdBQVdBO1lBQ1hRLGdCQUFnQkE7WUFDaEJDLGVBQWVBOzs7Ozs7O0FBSW5CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtbmFtZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFwiLi4vZ2xvYmFsLXN0eWxlcy9ub3JtYWxpemUuY3NzXCJcclxuaW1wb3J0IFwiLi4vZ2xvYmFsLXN0eWxlcy9tYWluLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgXCIuLi9nbG9iYWwtc3R5bGVzL2NvbXBvbmVudHMtc3R5bGVzLmNzc1wiXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblx0Y29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBjYXJ0TG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSA/PyBbXTtcclxuXHRcdHNldENhcnQoY2FydExvY2FsU3RvcmFnZSk7XHJcblx0fSwgW10pXHJcblx0dXNlRWZmZWN0KCgpID0+IHsgXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG5cdH0sIFtjYXJ0XSlcclxuXHRjb25zdCBhZGRUb0NhcnQgPSBwcm9kdWN0ID0+IHtcclxuXHRcdGlmIChjYXJ0LnNvbWUobWFrZXVwID0+IG1ha2V1cC5pZCA9PT0gcHJvZHVjdC5pZCkpIHsgXHJcblx0XHRcdGNvbnN0IGNhcnRXaXRoUHJvZHVjdCA9IGNhcnQubWFwKG1ha2V1cCA9PiB7XHJcblx0XHRcdFx0aWYgKG1ha2V1cC5pZCA9PT0gcHJvZHVjdC5pZCkge1xyXG5cdFx0XHRcdFx0XHRtYWtldXAucXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBtYWtldXBcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRzZXRDYXJ0KGNhcnRXaXRoUHJvZHVjdClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldENhcnQoWy4uLmNhcnQsIHByb2R1Y3RdKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vcXVhbnRpdHkgY2FydFxyXG5cdGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gcHJvZHVjdCA9PiB7XHJcblx0XHRjb25zdCBjYXJ0V2l0aFByb2R1Y3QgPSBjYXJ0Lm1hcCgobWFrZXVwKSA9PiB7XHJcblx0XHRcdGlmIChtYWtldXAuaWQgPT09IHByb2R1Y3QuaWQpIHtcclxuXHRcdFx0XHRtYWtldXAucXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG1ha2V1cFxyXG5cdFx0fSlcclxuXHRcdHNldENhcnQoY2FydFdpdGhQcm9kdWN0KVxyXG5cdH1cclxuXHJcblx0XHJcblx0XHJcblx0Ly9kZWxldGUgcHJvZHVjdFxyXG5cdGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBpZCA9PiB7IFxyXG5cdFx0Y29uc3QgdXBkYXRlQ2FydCA9IGNhcnQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG5cdFx0c2V0Q2FydCh1cGRhdGVDYXJ0KVxyXG5cdH1cclxuXHJcblx0XHJcblx0XHJcblxyXG5cdFxyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcclxuXHRcdFx0PENvbXBvbmVudFxyXG5cdFx0XHRcdHsuLi5wYWdlUHJvcHN9XHJcblx0XHRcdFx0Y2FydD17Y2FydH1cclxuXHRcdFx0XHRhZGRUb0NhcnQ9e2FkZFRvQ2FydH1cclxuXHRcdFx0XHR1cGRhdGVRdWFudGl0eT17dXBkYXRlUXVhbnRpdHl9XHJcblx0XHRcdFx0ZGVsZXRlUHJvZHVjdD17ZGVsZXRlUHJvZHVjdH1cclxuXHRcdFx0PjwvQ29tcG9uZW50PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNhcnQiLCJzZXRDYXJ0IiwiY2FydExvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInNvbWUiLCJtYWtldXAiLCJpZCIsImNhcnRXaXRoUHJvZHVjdCIsIm1hcCIsInF1YW50aXR5IiwidXBkYXRlUXVhbnRpdHkiLCJkZWxldGVQcm9kdWN0IiwidXBkYXRlQ2FydCIsImZpbHRlciIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./global-styles/components-styles.css":
/*!*********************************************!*\
  !*** ./global-styles/components-styles.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./global-styles/normalize.css":
/*!*************************************!*\
  !*** ./global-styles/normalize.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();