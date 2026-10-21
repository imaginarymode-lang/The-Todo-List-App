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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f6;\r\n  color: #333;\r\n}\r\n\r\naside {\r\n  width: 260px;\r\n  background-color: #2c3e50;\r\n  color: white;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  border-right: 1px solid #34495e;\r\n}\r\n\r\n#sidebar-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  background: #34495e;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.project-item button {\r\n  background: transparent;\r\n  border: none;\r\n  color: #ecf0f1;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  padding: 5px;\r\n}\r\n\r\n.project-item button.active {\r\n  font-weight: bold;\r\n  color: #3498db;\r\n}\r\n\r\n.project-item button:hover {\r\n  color: #3498db;\r\n}\r\n\r\n.project-item button:last-child {\r\n  background: #e74c3c;\r\n  color: white;\r\n  border-radius: 4px;\r\n  padding: 4px 8px;\r\n  font-size: 0.85rem;\r\n  text-align: center;\r\n}\r\n\r\n#project-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  background: #2c3e50;\r\n  padding: 0;\r\n  box-shadow: none;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#project-name-input {\r\n  background-color: #34495e;\r\n  color: #ffffff;\r\n  border: 1px solid #4e6d8d;\r\n}\r\n\r\n#project-name-input::placeholder {\r\n  color: #bdc3c7;\r\n}\r\n\r\nmain {\r\n  flex: 1;\r\n  padding: 40px;\r\n  overflow-y: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 10px;\r\n  background: #ecf0f1;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\ninput,\r\nselect,\r\nbutton {\r\n  padding: 10px;\r\n  border: 1px solid #bdc3c7;\r\n  border-radius: 4px;\r\n  font-size: 1rem;\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n  background: #3498db;\r\n  color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\nbutton[type=\"submit\"]:hover {\r\n  background: #2980b9;\r\n}\r\n\r\n.filter-container {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.filter-container button {\r\n  background: #ecf0f1;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.filter-container button.active-filter {\r\n  background: #3498db;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#project-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  background: #ecf0f1;\r\n  padding: 15px 20px;\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  border-left: 5px solid #3498db;\r\n}\r\n\r\n.todo-item.completed {\r\n  border-left-color: #2ecc71;\r\n  text-decoration: line-through;\r\n  opacity: 0.6;\r\n}\r\n\r\n.todo-item h4 {\r\n  flex: 1;\r\n}\r\n\r\n.todo-item button {\r\n  background-color: #e74c3c;\r\n  color: white;\r\n  border: none;\r\n  padding: 6px 12px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-web-practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/domManager.js"
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMManager: () => (/* binding */ DOMManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst DOMManager = {\r\n  /**\r\n   * @param {Project} project\r\n   * @param {Function} onDeleteTodo\r\n   */\r\n  renderFilters(currentFilter, onSelectFilter) {\r\n    const projectContainer = document.getElementById(\"project-container\");\r\n\r\n    if (!projectContainer) return;\r\n\r\n    const filterContainer = document.createElement(\"div\");\r\n    filterContainer.classList.add(\"filter-container\");\r\n\r\n    const filters = [\"all\", \"completed\", \"incomplete\"];\r\n\r\n    filters.name = \"filters\";\r\n    filters.forEach((filterType) => {\r\n      const btn = document.createElement(\"button\");\r\n\r\n      btn.textContent =\r\n        filterType.charAt(0).toUpperCase() + filterType.slice(1);\r\n\r\n      if (filterType === currentFilter) {\r\n        btn.classList.add(\"active-filter\");\r\n      }\r\n      btn.addEventListener(\"click\", () => {\r\n        onSelectFilter(filterType);\r\n      });\r\n      filterContainer.append(btn);\r\n    });\r\n    projectContainer.append(filterContainer);\r\n  },\r\n\r\n  renderProject(\r\n    project,\r\n    todosToDisplay,\r\n    onDeleteTodo,\r\n    onToggleComplete,\r\n    onOpenToDoDialog,\r\n  ) {\r\n    const projectContainer = document.getElementById(\"project-container\");\r\n\r\n    if (!projectContainer) return;\r\n\r\n    while (projectContainer.firstChild) {\r\n      projectContainer.removeChild(projectContainer.firstChild);\r\n    }\r\n\r\n    const headerDiv = document.createElement(\"div\");\r\n    headerDiv.classList.add(\"project-header-card\");\r\n\r\n    const h3 = document.createElement(\"h3\");\r\n    const p = document.createElement(\"p\");\r\n    h3.textContent = project.name;\r\n    p.textContent = project.description;\r\n\r\n    const addTaskBtn = document.createElement(\"button\");\r\n    addTaskBtn.textContent = \"Add Task\";\r\n    addTaskBtn.classList.add(\"add-btn-primary\");\r\n    addTaskBtn.addEventListener(\"click\", onOpenToDoDialog);\r\n\r\n    headerDiv.append(h3, p, addTaskBtn);\r\n    projectContainer.append(headerDiv);\r\n\r\n    todosToDisplay.forEach((todoItem) => {\r\n      const todoDiv = document.createElement(\"div\");\r\n      todoDiv.classList.add(\"todo-item\");\r\n\r\n      if (todoItem.completed) {\r\n        todoDiv.classList.add(\"completed\");\r\n      }\r\n\r\n      const checkbox = document.createElement(\"input\");\r\n      checkbox.type = \"checkbox\";\r\n      checkbox.checked = todoItem.completed;\r\n      checkbox.addEventListener(\"change\", () => {\r\n        onToggleComplete(todoItem.title);\r\n      });\r\n\r\n      const todoTitle = document.createElement(\"h4\");\r\n      const todoDescription = document.createElement(\"p\");\r\n      const todoDueDate = document.createElement(\"p\");\r\n      const todoPriority = document.createElement(\"p\");\r\n\r\n      todoTitle.textContent = todoItem.title;\r\n      todoDescription.textContent = todoItem.description;\r\n      todoDueDate.textContent = `Due Date: ${todoItem.dueDate}`;\r\n      todoPriority.textContent = `Priority: ${todoItem.priority}`;\r\n\r\n      const deleteBtn = document.createElement(\"button\");\r\n      deleteBtn.textContent = \"Delete\";\r\n      deleteBtn.addEventListener(\"click\", () => {\r\n        onDeleteTodo(todoItem.title);\r\n      });\r\n      todoDiv.append(\r\n        checkbox,\r\n        todoTitle,\r\n        todoDescription,\r\n        todoDueDate,\r\n        todoPriority,\r\n        deleteBtn,\r\n      );\r\n\r\n      projectContainer.append(todoDiv);\r\n    });\r\n  },\r\n  /**\r\n   *@param {Project[]} projects\r\n   *@param {number} currentProjectIndex\r\n   *@param {Function} onSelectProject\r\n   */\r\n  renderSidebar: function (\r\n    projects,\r\n    currentProjectIndex,\r\n    onSelectProject,\r\n    onDeleteProject,\r\n  ) {\r\n    const sidebar = document.getElementById(\"sidebar-container\");\r\n    while (sidebar.firstChild) {\r\n      sidebar.removeChild(sidebar.firstChild);\r\n    }\r\n    projects.forEach((project, index) => {\r\n      const projectItemDiv = document.createElement(\"div\");\r\n      projectItemDiv.classList.add(\"project-item\");\r\n      const button = document.createElement(\"button\");\r\n      button.textContent = project.name;\r\n\r\n      if (index === currentProjectIndex) {\r\n        button.classList.add(\"active\");\r\n      }\r\n\r\n      button.addEventListener(\"click\", () => {\r\n        onSelectProject(index);\r\n      });\r\n\r\n      const deleteProjectBtn = document.createElement(\"button\");\r\n      deleteProjectBtn.textContent = \"Delete Project\";\r\n      deleteProjectBtn.addEventListener(\"click\", (event) => {\r\n        event.stopPropagation();\r\n        onDeleteProject(index);\r\n      });\r\n\r\n      projectItemDiv.append(button, deleteProjectBtn);\r\n      sidebar.append(projectItemDiv);\r\n    });\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/domManager.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager.js */ \"./src/domManager.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nconst projects = [];\r\nlet currentProjectIndex = 0;\r\nlet currentFilter = \"all\";\r\n\r\nconst projectDialog = document.getElementById(\"project-dialog\");\r\nconst openProjectDialogBtn = document.getElementById(\"open-project-dialog-btn\");\r\nconst closeProjectDialogBtn = document.getElementById(\r\n  \"close-project-dialog-btn\",\r\n);\r\nconst projForm = document.getElementById(\"project-form\");\r\n\r\nconst todoDialog = document.getElementById(\"todo-dialog\");\r\nconst closeTodoDialogBtn = document.getElementById(\"close-todo-dialog-btn\");\r\nconst todoForm = document.getElementById(\"todo-form\");\r\n\r\nif (openProjectDialogBtn && projectDialog) {\r\n  openProjectDialogBtn.addEventListener(\"click\", () =>\r\n    projectDialog.showModal(),\r\n  );\r\n}\r\nif (closeProjectDialogBtn && projectDialog) {\r\n  closeProjectDialogBtn.addEventListener(\"click\", () => projectDialog.close());\r\n}\r\n\r\nif (closeTodoDialogBtn && todoDialog) {\r\n  closeTodoDialogBtn.addEventListener(\"click\", () => todoDialog.close());\r\n}\r\n\r\nif (projForm) {\r\n  projForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const projectNameInput = document.getElementById(\"project-name-input\");\r\n    if (!projectNameInput || !projectNameInput.value.trim()) return;\r\n\r\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(\r\n      projectNameInput.value.trim(),\r\n      \"Custom project description\",\r\n    );\r\n\r\n    projects.push(newProject);\r\n    currentProjectIndex = projects.length - 1;\r\n    updateUI();\r\n    projForm.reset();\r\n\r\n    if (projectDialog) {\r\n      projectDialog.close();\r\n    }\r\n  });\r\n}\r\n\r\nif (todoForm) {\r\n  todoForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const title = document.getElementById(\"todo-title\").value;\r\n    const description = document.getElementById(\"todo-description\").value;\r\n    const dueDate = document.getElementById(\"todo-due-date\").value;\r\n    const priority = document.getElementById(\"todo-priority\").value;\r\n\r\n    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);\r\n    projects[currentProjectIndex].addTodo(newTodo);\r\n\r\n    updateUI();\r\n    todoForm.reset();\r\n\r\n    if (todoDialog) {\r\n      todoDialog.close();\r\n    }\r\n  });\r\n}\r\n\r\nfunction updateUI() {\r\n  _domManager_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.renderSidebar(\r\n    projects,\r\n    currentProjectIndex,\r\n    (index) => {\r\n      currentProjectIndex = index;\r\n      updateUI();\r\n    },\r\n    (indexToDelete) => {\r\n      if (projects.length <= 1) {\r\n        alert(\"You must have at least one project!\");\r\n        return;\r\n      }\r\n\r\n      projects.splice(indexToDelete, 1);\r\n      if (currentProjectIndex >= projects.length) {\r\n        currentProjectIndex = projects.length - 1;\r\n      }\r\n      updateUI();\r\n    },\r\n  );\r\n\r\n  const project = projects[currentProjectIndex];\r\n  let todosToDisplay = [];\r\n\r\n  if (currentFilter === \"all\") {\r\n    todosToDisplay = project.getAllTodos();\r\n  } else if (currentFilter === \"incomplete\") {\r\n    todosToDisplay = project.getFilteredTodos((t) => !t.completed);\r\n  } else if (currentFilter === \"completed\") {\r\n    todosToDisplay = project.getFilteredTodos((t) => t.completed);\r\n  }\r\n\r\n  _domManager_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.renderProject(\r\n    project,\r\n    todosToDisplay,\r\n    (titleToDelete) => {\r\n      projects[currentProjectIndex].removeTodo(titleToDelete);\r\n      updateUI();\r\n    },\r\n    (titleToToggle) => {\r\n      const todo = projects[currentProjectIndex]\r\n        .getAllTodos()\r\n        .find((t) => t.title === titleToToggle);\r\n\r\n      if (todo) {\r\n        todo.toggleComplete();\r\n      }\r\n      updateUI();\r\n    },\r\n    () => {\r\n      if (todoDialog) {\r\n        todoDialog.showModal();\r\n      }\r\n    },\r\n  );\r\n\r\n  _domManager_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.renderFilters(currentFilter, (selectedFilter) => {\r\n    currentFilter = selectedFilter;\r\n    updateUI();\r\n  });\r\n\r\n  saveToLocalStorage();\r\n}\r\n\r\nfunction saveToLocalStorage() {\r\n  const projectsJSON = JSON.stringify(projects);\r\n  localStorage.setItem(\"projects\", projectsJSON);\r\n}\r\n\r\nfunction loadFromLocalStorage() {\r\n  const savedProjectsJSON = localStorage.getItem(\"projects\");\r\n  if (savedProjectsJSON) {\r\n    const savedProjects = JSON.parse(savedProjectsJSON);\r\n    savedProjects.forEach((savedProject) => {\r\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(savedProject.name, savedProject.description);\r\n\r\n      savedProject.todos.forEach((savedTodo) => {\r\n        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n          savedTodo.title,\r\n          savedTodo.description,\r\n          savedTodo.dueDate,\r\n          savedTodo.priority,\r\n          savedTodo.completed,\r\n        );\r\n        project.addTodo(todo);\r\n      });\r\n      projects.push(project);\r\n    });\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nconst loaded = loadFromLocalStorage();\r\n\r\nif (!loaded) {\r\n  const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(\r\n    \"Default Project\",\r\n    \"This is the default project\",\r\n  );\r\n  const task1 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n    \"Task 1\",\r\n    \"Description for Task 1\",\r\n    \"2023-12-31\",\r\n    \"High\",\r\n  );\r\n  const task2 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n    \"Task 2\",\r\n    \"Description for Task 2\",\r\n    \"2024-01-15\",\r\n    \"Medium\",\r\n  );\r\n\r\n  defaultProject.addTodo(task1);\r\n  defaultProject.addTodo(task2);\r\n\r\n  projects.push(defaultProject);\r\n}\r\n\r\nupdateUI();\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/index.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\nclass Project {\r\n  constructor(name, description) {\r\n    this.name = name;\r\n    this.description = description;\r\n    this.todos = [];\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  }\r\n\r\n  removeTodo(titleToRemove) {\r\n    this.todos = this.todos.filter((t) => t.title !== titleToRemove);\r\n  }\r\n\r\n  getAllTodos() {\r\n    return this.todos;\r\n  }\r\n  getFilteredTodos(filterFn) {\r\n    return this.todos.filter(filterFn);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/project.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title, description, dueDate, priority, completed = false) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.completed = completed;\r\n  }\r\n\r\n  toggleComplete() {\r\n    this.completed = !this.completed;\r\n  }\r\n\r\n  displayInfo() {\r\n    console.log(\r\n      `Title: ${this.title}, Description: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}`,\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;