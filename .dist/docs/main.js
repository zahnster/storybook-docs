module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(3)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(4);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// CONCATENATED MODULE: ./node_modules/@mdx-js/react/dist/index.es.js


var isFunction = function (obj) { return typeof obj === 'function'; };

var MDXContext = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createContext({});
var withMDXComponents = function (Component) { return function (props) {
  var allComponents = useMDXComponents(props.components);
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement( Component, Object.assign({}, props, { components: allComponents }));
}; };
var useMDXComponents = function (components) {
  var contextComponents = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : Object.assign({}, contextComponents,
      components);
  }

  return allComponents;
};
var MDXProvider = function (props) {
  var allComponents = useMDXComponents(props.components);
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement( MDXContext.Provider, { value: allComponents },
      props.children
    );
};

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function (ref) {
    var children = ref.children;

    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, {}, children);
}
};

var MDXCreateElement = function (ref) {
  var propComponents = ref.components;
  var mdxType = ref.mdxType;
  var originalType = ref.originalType;
  var parentName = ref.parentName;
  var rest = objectWithoutProperties( ref, ["components", "mdxType", "originalType", "parentName"] );
  var etc = rest;

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components[(parentName + "." + type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Component, Object.assign({}, etc,
      {components: propComponents}));
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Component, etc);
};

MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement.apply(null, createElementArgArray);
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement.apply(null, args);
}



// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./shared/helpers/cannot-be-set-with.js
// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
var CannotBeSetWith = function CannotBeSetWith(dependentPropName, propType) {
  return function (props, propName, componentName) {
    if (props[propName] === undefined || props[propName] === null) {
      return;
    }

    if (props[dependentPropName] !== undefined && props[dependentPropName] !== null) {
      return new Error('Invalid prop `' + propName + '` (has value `' + props[propName] + '`) supplied to `' + componentName + '`. Cannot set `' + dependentPropName + '` (has value `' + props[dependentPropName] + '`) when setting `' + propName + '`');
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
};

/* harmony default export */ var cannot_be_set_with = (CannotBeSetWith);
// CONCATENATED MODULE: ./ui/components/Button/base/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license





var base_Button = function Button(props) {
  var className = props.className,
      disabled = props.disabled,
      isBrand = props.isBrand,
      isNeutral = props.isNeutral,
      isOutlineBrand = props.isOutlineBrand,
      isInverse = props.isInverse,
      isDestructive = props.isDestructive,
      isTextDestructive = props.isTextDestructive,
      isSuccess = props.isSuccess,
      isFullWidth = props.isFullWidth,
      isStretch = props.isStretch,
      isFirst = props.isFirst,
      isMiddle = props.isMiddle,
      isLast = props.isLast,
      use = props.use,
      rest = _objectWithoutProperties(props, ["className", "disabled", "isBrand", "isNeutral", "isOutlineBrand", "isInverse", "isDestructive", "isTextDestructive", "isSuccess", "isFullWidth", "isStretch", "isFirst", "isMiddle", "isLast", "use"]);

  var classNameList = classnames_default()('slds-button', {
    'slds-button_brand': isBrand,
    'slds-button_neutral': isNeutral,
    'slds-button_outline-brand': isOutlineBrand,
    'slds-button_inverse': isInverse,
    'slds-button_destructive': isDestructive,
    'slds-button_text-destructive': isTextDestructive,
    'slds-button_success': isSuccess,
    'slds-button_full-width': isFullWidth,
    'slds-button_stretch': isStretch,
    'slds-button_first': isFirst,
    'slds-button_middle': isMiddle,
    'slds-button_last': isLast
  }, className);
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, use === 'a' ? external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("a", _extends({
    className: classNameList
  }, rest, {
    href: "javascript:void(0);"
  }), props.children) : external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", _extends({
    className: classNameList,
    disabled: disabled
  }, rest), props.children));
};

base_Button.displayName = 'Button';
base_Button.propTypes = {
  className: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  isBrand: prop_types_default.a.bool,
  isNeutral: prop_types_default.a.bool,
  isOutlineBrand: prop_types_default.a.bool,
  isInverse: prop_types_default.a.bool,
  isDestructive: prop_types_default.a.bool,
  isTextDestructive: prop_types_default.a.bool,
  isSuccess: prop_types_default.a.bool,
  isFullWidth: prop_types_default.a.bool,
  isStretch: prop_types_default.a.bool,
  isFirst: prop_types_default.a.bool,
  isMiddle: prop_types_default.a.bool,
  isLast: prop_types_default.a.bool,
  use: cannot_be_set_with('disabled', prop_types_default.a.oneOf(['a']))
};
/* harmony default export */ var base = (base_Button);
// CONCATENATED MODULE: ./ui/components/Button/docs.stories.mdx
function docs_stories_extends() { docs_stories_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return docs_stories_extends.apply(this, arguments); }

function docs_stories_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = docs_stories_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function docs_stories_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



var docs_stories_makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return createElement("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = docs_stories_objectWithoutProperties(_ref, ["components"]);

  return createElement(MDXLayout, docs_stories_extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), createElement("h1", null, "Button"), createElement("h2", null, "Buttons are everywhere"), createElement("p", null, "This docs file exists in storybook-docs spike, under ui/components/Button/docs.mdx"), createElement("p", null, "This is some paragraph content"), createElement("ul", null, createElement("li", {
    parentName: "ul"
  }, "This"), createElement("li", {
    parentName: "ul"
  }, "is a"), createElement("li", {
    parentName: "ul"
  }, "bulleted list")), createElement("ol", null, createElement("li", {
    parentName: "ol"
  }, "This"), createElement("li", {
    parentName: "ol"
  }, "is an"), createElement("li", {
    parentName: "ol"
  }, "ordered list")), createElement("p", null, createElement("em", {
    parentName: "p"
  }, "this is italic text")), createElement("p", null, createElement("strong", {
    parentName: "p"
  }, "this is some bold text, too")), createElement("h3", null, "This is the component, rendered live!"), createElement(base, {
    mdxType: "Button"
  }, "Button"));
}
;
MDXContent.isMDXComponent = true;
// CONCATENATED MODULE: ./docs.js
/* concated harmony reexport ButtonDocs */__webpack_require__.d(__webpack_exports__, "ButtonDocs", function() { return MDXContent; });

 // import 'mdx-js/react';
// export Avatar from './ui/components/Avatar';
// export AvatarDocs from './ui/components/Avatar/other.mdx';
// import Docs from './ui/components/Avatar/other.mdx';
// export const AvatarDocs = () => (
//   <div className="wow">
//     <Docs />
//   </div>
// );
// // export

/***/ })
/******/ ]);