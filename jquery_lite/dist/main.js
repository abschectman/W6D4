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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(args){\n    this.elements = args;\n    return this;\n  }\n\n  html(string){\n    let arr = this.elements;\n    if(string){\n      arr.forEach(element => {\n        element.innerHTML = string;\n      });\n      // return document.getElementById(string).innerHTML;\n    } else {\n      return arr[0].innerHTML;\n    }\n  }\n\n  empty(){\n    let arr = this.elements;\n    arr.forEach((el) => {\n      el.innerHTML = \"\";\n    })\n  }\n\n  append(arg){\n    let arr = this.elements;\n    arr.forEach((el)=>{\n      if (arg instanceof DOMNodeCollection){\n        arg.elements.forEach((argEl)=>{\n          el.innerHTML += argEl.outerHTML; \n        });\n      } else if(typeof arg === \"string\"){\n        el.innerHTML += arg;\n      } else {\n        el.innerHTML += arg.outerHTML;\n      }\n    })\n  }\n\n  addClass(className){\n    this.elements.forEach((el)=>{\n      el.classList.add(className);\n    })\n  }\n\n  removeClass(className){\n    this.elements.forEach((el)=> {\n      el.classList.remove(className);\n    })\n  }\n  attr(name, value){\n    if(!value){\n      if (!this.elements[0].getAttribute(name)) {\n        return undefined;\n      }\n      return this.elements[0].getAttribute(name);\n\n    }else{\n    this.elements.forEach((el)=>{\n      el.setAttribute(name, value);\n    })}\n  }\n\n  children(){\n    const children = [];\n\n  \n    this.elements.forEach((el)=>{ \n      let arr = Array.from(el.children);\n      arr.forEach((child)=>{\n        children.push(child);\n      })         \n    });\n    return new DOMNodeCollection(children);\n  }\n\n  parent(){\n    const parents = [];\n    this.elements.forEach(el => {\n      let parent = el.parentElement;\n      if(!parents.includes(parent)){\n      parents.push(parent);\n      }\n    });\n    return new DOMNodeCollection(parents);\n  }\n\n  find(argument){\n    let found = [];\n    this.elements.forEach((el)=>{\n      if(el.querySelectorAll(argument)){\n        found = found.concat(Array.from(el.querySelectorAll(argument)));\n      }\n    });\n    return found;\n  }\n\n  remove(){\n    this.elements.forEach((el)=>{\n      let parent = el.parentElement;\n      parent.removeChild(el);\n    });\n\n  }\n\n  on(type, callback){\n    this.stored = {};\n    this.elements.forEach((el)=>{\n      el.addEventListener(type, callback);\n      this.stored.el = callback;\n    });\n  }\n  off(type){\n    this.elements.forEach(el => {\n      const callback = this.stored.el;\n      el.removeEventListener(type, callback);\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Node = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\nconst queue = [];\n// function test(arg){\n//   console.log(arg);\n// }\n\n\nfunction main(arg) {\n  if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n  }else if(typeof arg === \"string\"){\n    let nodeList = document.querySelectorAll(arg);\n    let nodeListArray = Array.from(nodeList);\n    return new DOMNodeCollection(nodeListArray);\n  } else if(arg instanceof Function){\n    queue.push(arg);\n    //TODO ADD FOR WHEN DOC ALREADY LOADED save in callback\n  }\n \n};\n\n\nwindow.$l = main;\n\n\nwindow.$l.ajax = function(options) {\n    const xhr = new XMLHttpRequest();\n    if(!options.type){\n      options.type = \"GET\";\n    }\n    if (!options.url) {\n      options.url = \"window.location.href\";\n    }\n    if (!options.contentType) {\n      options.contentType = \"application/x-www-form-urlencoded; charset=UTF-8\";\n    }\n    if (!options.error) {\n      options.error = ()=>{\n        console.log(\"error\");\n      }\n    }\n     if (!options.success) {\n       options.success = ()=>{\n         console.log(\"success!\")\n       };\n     }\n    xhr.open(options.type, options.url);\n\n    xhr.send();\n    xhr.onload = function(){\n      if (xhr.status === 200) {\n        return options.success();\n      } else if (xhr.status > 399 && xhr.status < 500) {\n        return options.error();\n      }\n    }\n  }\n\nconst callback3 = function() {\n  return console.log(\"hi3\");\n};\n\nconst callback = function() {\n  return console.log(\"hi\");\n};\nwindow.$l(callback);\nwindow.$l(callback3);\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{queue.forEach(func => {\n     func();\n   });})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Node{\n  constructor(argument){\n    this.NodeList = document.querySelectorAll(argument);\n    this.NodeListArray = Array.from(this.NodeList);\n  }\n}\n\nmodule.exports = Node;\n\n//# sourceURL=webpack:///./src/node.js?");

/***/ })

/******/ });