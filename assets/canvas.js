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
/******/ 	return __webpack_require__(__webpack_require__.s = "./canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./canvas.js":
/*!*******************!*\
  !*** ./canvas.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = () => {\n  const canvas = document.getElementById('app');\n  const ctx = canvas.getContext('2d');\n  canvas.style.background = '#8bd8c6';\n  /*\n    Greens\n    Pastel Green\n    #77dd77;\n    Calming Green\n    #8bd8c6\n  */\n\n  const scores = [85, 82, 69, 69, 100, 12, 72, 85, 47, 88, 20];\n  const width = 50;\n  const margin = 10;\n  const base = window.innerHeight / 2;\n  const currX = 50;\n  canvas.width = scores.length * width + margin + 20;\n  canvas.height = window.innerHeight;\n  ctx.fillStyle = '#77dd77';\n  ctx.strokeStyle = 'red'; // rect\n  // ctx.rect(10, 10, 400, 200);\n  // arc\n  // ctx.arc(9, 10, 35, 0, 360, false);\n  // fill params: (posX, posY, w, h)\n  // ctx.fill();\n  // ctx.fillRect(10, 15, 100, 200);\n  // ctx.strokeRect(10, 10, 400, 200);\n  // ctx.stroke();\n  // given scores, show how you would create a bar chart and sort bar chart\n\n  /*\n    Transform/Translate example for baseline chart\n  */\n  // translate\n  // set up and translate canvas. ex:move down base and draw UP\n  // ctx.translate(scores.length * (width + margin), base * 1.33);\n  // 1 Math.PI = 180 degrees;\n  // rotate the canvas so you start from bottom up\n  // ctx.rotate(1 * Math.PI);\n\n  /* \n    Arc Example\n    1 Math.PI = 180 degrees;\n    arc(start angle, end angle\n  */\n\n  scores.forEach((score, i) => {\n    // position starts from top left\n    // then width, and height\n    console.log(`score ${score} and i: ${i} for ${currX * i + 10}`, ctx.strokeStyle);\n    /*\n      first example, no translate;\n      const x = (currX + 10) * i;\n      const y = canvas.height - score;\n      ctx.fillRect(x, score, width, y);\n    */\n\n    ctx.fillStyle = '#77dd77';\n    const x = (currX + margin) * i;\n    const y = base - score;\n    ctx.fillRect(x, score, width, y);\n    ctx.fillStyle = '#01796F'; // begins new path when stroke ends path below\n\n    ctx.beginPath();\n    const arcX = x + currX / 2;\n    const degree = 720 / 360;\n    console.log('degree: ', degree * Math.PI); // begX, begY, radius, begAngle, endAngle, anticlockwise\n\n    ctx.arc(arcX, score, 10, 15, 0, degree * Math.PI, false);\n    ctx.fill();\n    ctx.strokeStyle = '#80A197';\n    ctx.lineWidth = 2;\n    ctx.stroke(); // translated ^^, so it is flipped\n    // really drawing down and then flip\n    // const x = (currX + 10) * i;\n    // ctx.fillRect(x, 0, width, score);\n  }); // start/end arc angles\n  //\n};\n\n//# sourceURL=webpack:///./canvas.js?");

/***/ })

/******/ });