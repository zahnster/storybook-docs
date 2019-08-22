(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs.js":
/*!*****************!*\
  !*** ./docs.js ***!
  \*****************/
/*! exports provided: Avatar, AvatarDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_components_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/components/Avatar */ \"./ui/components/Avatar/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Avatar\", function() { return _ui_components_Avatar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _ui_components_Avatar_other_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/components/Avatar/other.mdx */ \"./ui/components/Avatar/other.mdx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AvatarDocs\", function() { return _ui_components_Avatar_other_mdx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n// import 'mdx-js/react';\n\n\n\n // import Docs from './ui/components/Avatar/other.mdx';\n// export const AvatarDocs = () => (\n//   <div className=\"wow\">\n//     <Docs />\n//   </div>\n// );\n// // export\n\n//# sourceURL=webpack:///./docs.js?");

/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/index.es.js ***!
  \*****************************************************/
/*! exports provided: MDXContext, MDXProvider, useMDXComponents, withMDXComponents, mdx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDXContext\", function() { return MDXContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDXProvider\", function() { return MDXProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMDXComponents\", function() { return useMDXComponents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMDXComponents\", function() { return withMDXComponents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mdx\", function() { return createElement; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar isFunction = function (obj) { return typeof obj === 'function'; };\n\nvar MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});\nvar withMDXComponents = function (Component) { return function (props) {\n  var allComponents = useMDXComponents(props.components);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( Component, Object.assign({}, props, { components: allComponents }));\n}; };\nvar useMDXComponents = function (components) {\n  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);\n  var allComponents = contextComponents;\n\n  if (components) {\n    allComponents = isFunction(components) ? components(contextComponents) : Object.assign({}, contextComponents,\n      components);\n  }\n\n  return allComponents;\n};\nvar MDXProvider = function (props) {\n  var allComponents = useMDXComponents(props.components);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( MDXContext.Provider, { value: allComponents },\n      props.children\n    );\n};\n\nfunction objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }\nvar TYPE_PROP_NAME = 'mdxType';\nvar DEFAULTS = {\n  inlineCode: 'code',\n  wrapper: function (ref) {\n    var children = ref.children;\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);\n}\n};\n\nvar MDXCreateElement = function (ref) {\n  var propComponents = ref.components;\n  var mdxType = ref.mdxType;\n  var originalType = ref.originalType;\n  var parentName = ref.parentName;\n  var rest = objectWithoutProperties( ref, [\"components\", \"mdxType\", \"originalType\", \"parentName\"] );\n  var etc = rest;\n\n  var components = useMDXComponents(propComponents);\n  var type = mdxType;\n  var Component = components[(parentName + \".\" + type)] || components[type] || DEFAULTS[type] || originalType;\n\n  if (propComponents) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, etc,\n      {components: propComponents}));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, etc);\n};\n\nMDXCreateElement.displayName = 'MDXCreateElement';\nfunction createElement (type, props) {\n  var args = arguments;\n  var mdxType = props && props.mdxType;\n\n  if (typeof type === 'string' || mdxType) {\n    var argsLength = args.length;\n    var createElementArgArray = new Array(argsLength);\n    createElementArgArray[0] = MDXCreateElement;\n    var newProps = {};\n\n    for (var key in props) {\n      if (hasOwnProperty.call(props, key)) {\n        newProps[key] = props[key];\n      }\n    }\n\n    newProps.originalType = type;\n    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;\n    createElementArgArray[1] = newProps;\n\n    for (var i = 2; i < argsLength; i++) {\n      createElementArgArray[i] = args[i];\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@mdx-js/react/dist/index.es.js?");

/***/ }),

/***/ "./ui/components/Avatar/index.js":
/*!***************************************!*\
  !*** ./ui/components/Avatar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"avatar\"\n  }, props.name);\n});\n\n//# sourceURL=webpack:///./ui/components/Avatar/index.js?");

/***/ }),

/***/ "./ui/components/Avatar/other.mdx":
/*!****************************************!*\
  !*** ./ui/components/Avatar/other.mdx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/index.es.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n/* @jsx mdx */\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"div\", props);\n  };\n};\n\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", null, \"This is the simplest mdx.\"));\n}\n;\nMDXContent.isMDXComponent = true;\n\n//# sourceURL=webpack:///./ui/components/Avatar/other.mdx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"React\");\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

/******/ })));