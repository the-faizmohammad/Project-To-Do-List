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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 16% 0;\r\n}\r\n\r\n.main {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\r\n}\r\n\r\n.main-heading {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 12px;\r\n  border-bottom: 1px solid #c6c6c7;\r\n}\r\n\r\n.reload-image {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.adding-list {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border-bottom: 1px solid #c6c6c7;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.list-adding:hover {\r\n  background: #e4e4ff;\r\n  border: 1px solid #373835;\r\n}\r\n\r\n#add-new-list {\r\n  width: 100%;\r\n  padding: 4px;\r\n  font-size: 18px;\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n#add-new-list::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.addbtn {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.addicon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.addicon:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\nul#do-list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  font-size: 20px;\r\n}\r\n\r\nli.create-each-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 12px;\r\n  border-bottom: 1px solid #c6c6c7;\r\n}\r\n\r\n.create-each-task:hover {\r\n  background: #363c36;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.tag-check {\r\n  display: flex;\r\n  gap: 12px;\r\n  width: 80%;\r\n}\r\n\r\ninput.task-description {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 16px;\r\n  background: none;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.deltbin {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.addMore {\r\n  width: 20px;\r\n  height: 20px;\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.addMore:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.clear-list {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 17px;\r\n  justify-content: center;\r\n  background: #f1f1f4;\r\n}\r\n\r\n.clear-list-p {\r\n  font-size: medium;\r\n  font-weight: bold;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reload_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload.png */ \"./src/reload.png\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statusUpdates.js */ \"./src/statusUpdates.js\");\n\r\n\r\n\r\n\r\n \r\nconst appHeading = document.querySelector('.main-heading');\r\nconst todoList = document.getElementById('do-list');\r\nconst addListDiv = document.querySelector('.adding-list');\r\nconst inputTask = document.createElement('input');\r\nconst addButton = document.createElement('button');\r\nconst reloadIcon = new Image();\r\nreloadIcon.src = _reload_png__WEBPACK_IMPORTED_MODULE_1__;\r\nreloadIcon.className = 'reload-image';\r\nreloadIcon.setAttribute('alt', 'reload-icon');\r\nappHeading.appendChild(reloadIcon);\r\ninputTask.setAttribute('type', 'text');\r\ninputTask.setAttribute('placeholder', 'Add task to your list');\r\ninputTask.setAttribute('id', 'add-new-list');\r\naddButton.type = 'button';\r\naddButton.className = 'addbtn';\r\nconst addIcon = new Image();\r\naddIcon.src = _plus_png__WEBPACK_IMPORTED_MODULE_3__;\r\naddIcon.setAttribute('alt', 'addicon');\r\naddIcon.className = 'addicon';\r\naddButton.appendChild(addIcon);\r\naddListDiv.appendChild(inputTask);\r\naddListDiv.appendChild(addButton);\r\nlet tasks = JSON.parse(localStorage.getItem('todolist')) || [];\r\n\r\nfunction setIndex() {\r\n  tasks.forEach((task, index) => {\r\n    task.id = index + 1;\r\n  });\r\n  localStorage.setItem('todolist', JSON.stringify(tasks));\r\n}\r\n\r\nclass Create {\r\n  constructor(newTask) {\r\n    this.newTask = newTask;\r\n  }\r\n  createTodo() {\r\n    const taskListItem = document.createElement('li');\r\n    taskListItem.className = 'create-each-task';\r\n    taskListItem.setAttribute('data-task-id', this.newTask.id); // Set task ID as data attribute\r\n\r\n    const taskTag = document.createElement('div');\r\n    taskTag.className = 'tag-check';\r\n\r\n    const checkBox = document.createElement('input');\r\n    checkBox.setAttribute('class', 'task-check');\r\n    checkBox.setAttribute('type', 'checkbox');\r\n    checkBox.checked = this.newTask.complete;\r\n\r\n    if (this.newTask.complete) {\r\n      taskListItem.classList.add('checked');\r\n    }\r\n const taskDescription = document.createElement('input');\r\n    taskDescription.setAttribute('type', 'text');\r\n    taskDescription.setAttribute('class', 'task-description');\r\n    taskDescription.value = this.newTask.description;\r\n\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.className = 'deltbin';\r\n    deleteButton.setAttribute('type', 'button');\r\n    deleteButton.setAttribute('id', this.newTask.id);\r\n    const addNewIcon = new Image();\r\n    addNewIcon.className = 'addMore';\r\n    addNewIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    addNewIcon.setAttribute('alt', 'plus Icon');\r\n\r\n    taskTag.appendChild(checkBox);\r\n    taskTag.appendChild(taskDescription);\r\n\r\n    taskListItem.appendChild(taskTag);\r\n    deleteButton.appendChild(addNewIcon);\r\n    taskListItem.appendChild(deleteButton);\r\n    todoList.appendChild(taskListItem);\r\n checkBox.addEventListener('change', () => {\r\n      this.newTask.complete = checkBox.checked;\r\n\r\n      if (this.newTask.complete) {\r\n        taskListItem.classList.add('checked');\r\n        taskListItem.style.background = '#f4f5Cf';\r\n        taskListItem.style.opacity = '0.5';\r\n      } else {\r\n        taskListItem.classList.remove('checked');\r\n        taskListItem.style.background = 'none';\r\n        taskListItem.style.opacity = '1';\r\n      }\r\n\r\n      (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskStatus)(this.newTask.id, this.newTask.complete); // Update task status in local storage\r\n    });\r\n  taskDescription.addEventListener('input', () => {\r\n      this.newTask.description = taskDescription.value;\r\n    });\r\n\r\n    taskDescription.addEventListener('blur', () => {\r\n      taskDescription.setAttribute('disabled', '');\r\n      localStorage.setItem('todolist', JSON.stringify(tasks));\r\n    });\r\n\r\n    taskTag.addEventListener('click', () => {\r\n      taskDescription.removeAttribute('disabled');\r\n      taskDescription.focus();\r\n    });\r\n   addNewIcon.addEventListener('click', () => {\r\n      tasks = tasks.filter((task) => task.id !== this.newTask.id);\r\n      taskListItem.remove();\r\n      setIndex();\r\n      localStorage.setItem('todolist', JSON.stringify(tasks));\r\n    });\r\n\r\n    return {\r\n      taskListItem,\r\n      taskDescription,\r\n      taskTag,\r\n      addNewIcon,\r\n    };\r\n  }\r\n}\r\nfunction addTaskToList(value) {\r\n  const newTask = {\r\n    id: tasks.length + 1,\r\n    description: value,\r\n    complete: false,\r\n  };\r\n  tasks.push(newTask);\r\n  const instance = new Create(newTask);\r\n  instance.createTodo();\r\n  localStorage.setItem('todolist', JSON.stringify(tasks));\r\n}\r\n\r\naddListDiv.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n\r\n  addButton.addEventListener('click', () => {\r\n    if (inputTask.value !== '') {\r\n      addTaskToList(inputTask.value);\r\n      inputTask.value = '';\r\n    }\r\n  });\r\n});\r\nfunction displayList() {\r\n  if (localStorage.getItem('todolist')) {\r\n    tasks = JSON.parse(localStorage.getItem('todolist'));\r\n    tasks.forEach((task) => {\r\n      const instance = new Create(task);\r\n      const { taskListItem } = instance.createTodo();\r\n      todoList.appendChild(taskListItem);\r\n    });\r\n  }\r\n}\r\ntodoList.addEventListener('change', (e) => {\r\n    if (e.target.type === 'checkbox') {\r\n      const taskId = parseInt(e.target.getAttribute('data-task-id'));\r\n      const completed = e.target.checked;\r\n      (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskStatus)(taskId, completed);\r\n      updateTaskListItemClass(taskId, completed);\r\n    }\r\n  });\r\n  \r\n  function updateTaskListItemClass(taskId, completed) {\r\n    const taskListItem = document.querySelector(`[data-task-id=\"${taskId}\"]`);\r\n    if (taskListItem) {\r\n      if (completed) {\r\n        taskListItem.classList.add('checked');\r\n        taskListItem.style.background = '#f4f5Cf';\r\n        taskListItem.style.opacity = '0.5';\r\n      } else {\r\n        taskListItem.classList.remove('checked');\r\n        taskListItem.style.background = 'none';\r\n        taskListItem.style.opacity = '1';\r\n      }\r\n    }\r\n  }\r\nconst clearCompletedButton = document.querySelector('.clear-completed-btn');\r\nif (clearCompletedButton) {\r\n  clearCompletedButton.addEventListener('click', () => {\r\n    (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_4__.clearCompletedTasks)();\r\n    const completedTaskItems = document.querySelectorAll('.create-each-task.checked');\r\n    completedTaskItems.forEach((item) => item.remove());\r\n  });\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', displayList);\r\n\n\n//# sourceURL=webpack://project-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/statusUpdates.js":
/*!******************************!*\
  !*** ./src/statusUpdates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   updateTaskStatus: () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\nfunction getTasksFromLocalStorage() {\r\n    return JSON.parse(localStorage.getItem('todolist')) || [];\r\n  }\r\nfunction saveTasksToLocalStorage(tasks) {\r\n    localStorage.setItem('todolist', JSON.stringify(tasks));\r\n  }  \r\n function updateTaskStatus(taskId, completed) {\r\n    const tasks = getTasksFromLocalStorage();\r\n    const taskToUpdate = tasks.find((task) => task.id === taskId);\r\n    if (taskToUpdate) {\r\n      taskToUpdate.complete = completed;\r\n      saveTasksToLocalStorage(tasks);\r\n    }\r\n  }\r\nfunction clearCompletedTasks() {\r\n    const tasks = getTasksFromLocalStorage();\r\n    const updatedTasks = tasks.filter((task) => !task.complete);\r\n    saveTasksToLocalStorage(updatedTasks);\r\n  }\r\n\n\n//# sourceURL=webpack://project-to-do-list/./src/statusUpdates.js?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c2d7d14511c0e884050.png\";\n\n//# sourceURL=webpack://project-to-do-list/./src/delete.png?");

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e3d60cd93c0f851f657.png\";\n\n//# sourceURL=webpack://project-to-do-list/./src/plus.png?");

/***/ }),

/***/ "./src/reload.png":
/*!************************!*\
  !*** ./src/reload.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8736f7e0d9f165adfba.png\";\n\n//# sourceURL=webpack://project-to-do-list/./src/reload.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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