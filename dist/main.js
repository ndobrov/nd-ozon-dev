/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_price__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://nd-ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n    const cartModal = document.querySelector('.cart');\r\n    const cartCloseBtn = document.querySelector('.cart-close');\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex';\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = '';\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart);\r\n\r\n    cartCloseBtn.addEventListener('click', closeCart);\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button > button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n    const catalogModalItems = document.querySelectorAll('.catalog li');\r\n\r\n    let isOpen =  false;\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen;\r\n\r\n        if (isOpen) {\r\n            catalogModal.style.display = 'block';\r\n        } else {\r\n            catalogModal.style.display = '';\r\n        }\r\n    });\r\n\r\n    catalogModalItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            const text = item.textContent;\r\n            \r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text).then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n            });\r\n        })\r\n        \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saerchFilter\": () => (/* binding */ saerchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter)\n/* harmony export */ });\nconst saerchFilter = (goods, value) => {\r\n    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()));\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter(goodsItem => goodsItem.category === value);\r\n}\r\n\r\nconst priceFilter = ({data, minValue, maxValue}) => {\r\n    return data.filter(goodsItem => {\r\n        return goodsItem.price >= minValue && goodsItem.price <= maxValue;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://nd-ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n    return fetch(`https://ozon-test-22248-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)\r\n    .then(res => res.json());    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\nconst price = () => {\r\n    const minPrice = document.querySelector('#min');\r\n    const maxPrice = document.querySelector('#max');\r\n\r\n    console.log(minPrice, maxPrice);\r\n    let minValue = 0;\r\n    let maxValue = 40000;\r\n\r\n    minPrice.addEventListener('input', (event) => {\r\n        let value = +event.target.value;\r\n        value ? minValue = value : minValue;\r\n        \r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(minValue).then(data => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.priceFilter)({data, minValue, maxValue}));\r\n        });\r\n    })\r\n\r\n    maxPrice.addEventListener('input', (event) => {\r\n        let value = +event.target.value;\r\n        value ? maxValue = value : maxValue;\r\n        \r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(maxValue).then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.priceFilter)({data, minValue, maxValue}));\r\n        });\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodWrapper = document.querySelector('.goods');\r\n    goodWrapper.innerHTML = '';\r\n\r\n    goods?.forEach(goodsItem => {\r\n        goodWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\">\r\n                    ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `)\r\n\r\n        \r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n\r\n    searchInput.addEventListener('input', (event) => {\r\n        const value = event.target.value;\r\n\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filter__WEBPACK_IMPORTED_MODULE_2__.saerchFilter)(data, value));\r\n        });\r\n    })\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://nd-ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;