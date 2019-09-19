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

/***/ "./src/Inbox.js":
/*!**********************!*\
  !*** ./src/Inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nclass Inbox{\n\n  constructor(){\n\n  }\n  render(){\n    let ul = document.createElement(\"ul\");\n    ul.className = \"messages\";\n    let inboxMessages = MessageStore.prototype.getInboxMessages();\n    inboxMessages.forEach((message)=>{\n       let messageItem = this.renderMessage(message); \n       ul.appendChild(messageItem);\n    });\n    return ul\n  }\n\n  renderMessage(message){\n    let li = document.createElement(\"li\");\n    li.className = \"message\";\n    let from = document.createElement(\"span\");\n    let subject = document.createElement(\"span\");\n    let body = document.createElement(\"span\");\n\n    from.innerHTML = message.from\n    subject.innerHTML = message.subject\n    body.innerHTML = message.body\n\n    li.appendChild(from);\n    li.appendChild(subject);\n    li.appendChild(body);\n\n    return li;\n  }\n}\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack:///./src/Inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./Inbox.js */ \"./src/Inbox.js\");\nconst MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\ndocument.addEventListener(\"DOMContentLoaded\", callback);\n\nlet routes = {};\nroutes.inbox = new Inbox();\n\nfunction callback (){\n  window.location.hash = \"inbox\";\n  let content = document.querySelector(\".content\");\n  let router = new Router(content, routes);\n  router.start();\n  \n  let navLis = Array.from(document.querySelectorAll(\".sidebar-nav li\"));\n  navLis.forEach((element)=>{\n    element.addEventListener(\"click\", locationSetter.bind(null, element));\n  });\n}\n\nfunction locationSetter (element){\n  let location = element.innerText.toLowerCase();\n  window.location.hash = location;\n    let content = document.querySelector(\".content\");\n    let router = new Router(content, routes);\n    router.start();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let messages = {\n  sent: [\n    {\n      to: \"friend@mail.com\",\n      subject: \"Check this out\",\n      body: \"It's so cool\"\n    },\n    { to: \"person@mail.com\", subject: \"zzz\", body: \"so booring\" }\n  ],\n  inbox: [\n    {\n      from: \"grandma@mail.com\",\n      subject: \"Fwd: Fwd: Fwd: Check this out\",\n      body: \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n    },\n    {\n      from: \"person@mail.com\",\n      subject: \"Questionnaire\",\n      body: \"Take this free quiz win $1000 dollars\"\n    }\n  ]\n};\n\nclass MessageStore {\n  getInboxMessages() {\n    return messages.inbox;\n  }\n\n  getSentMessages() {\n    return messages.sent;\n  }\n\n}\n\nmodule.exports = MessageStore;\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Router {\n  constructor(node, routes){\n    this.node = node;\n    this.routes = routes;\n\n  }\n\n  start(){\n    this.node.addEventListener(\"hashchange\", ()=>{this.render()})\n    this.render();\n  };\n\n  render(){\n    let component = this.activeRoute();\n    if (!component){\n      this.node.innerHTML = \"\";\n    } else {\n      this.node.innerHTML = \"\";\n      let htmlTag= component.render();\n      this.node.appendChild(htmlTag);\n    }\n  }\n\n  activeRoute(){\n    let location = window.location.hash.slice(1);\n    return this.routes[location];\n\n  }\n\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ })

/******/ });