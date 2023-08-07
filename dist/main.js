/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  font-family: "Edu SA Beginner", cursive;
  color: hsl(0, 100%, 70%);
  display: flex;
  flex-direction: column;
  align-items: "";
  justify-content: "";
}

header {
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  background-color: hsl(23, 100%, 93%);
  color: #ff3333;
}

main {
  display: flex;
  flex-direction: row;
  align-items: "";
  justify-content: "";
  flex-grow: 1;
  background-color: hsl(23, 100%, 93%);
  border: 1px solid hsl(0, 93%, 84%);
}
main .sidebar {
  width: 500px;
  text-align: center;
  border-right: 1px solid hsl(0, 93%, 84%);
  position: relative;
}
main .sidebar h2 {
  padding: 1rem;
  font-size: 2rem;
  border-bottom: 1px solid hsl(0, 93%, 84%);
}
main .sidebar #add-mission {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 170px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: "Edu SA Beginner", cursive;
  font-weight: 600;
  font-size: 1.4rem;
  background-color: hsl(174, 66%, 39%);
  color: whitesmoke;
  box-shadow: -3px -3px inset #2acfbf;
}
main .sidebar #add-mission:hover {
  cursor: pointer;
  background-color: #2acfbf;
  box-shadow: -3px -3px inset #26baab;
  font-weight: 700;
}
main .content {
  width: 90%;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: "";
  justify-content: "";
}
main .content h2 {
  padding: 1rem;
  font-size: 2rem;
  border-bottom: 1px solid hsl(0, 93%, 84%);
}
main .content .objective-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main .content .objective-box .mission-form,
main .content .objective-box .objective-form {
  display: none;
}
main .content .objective-box .showForm {
  display: flex;
}
main .content .objective-box form {
  background-color: hsl(0, 93%, 84%);
  margin-top: -100px;
  padding: 1.5rem;
  width: 350px;
  gap: 15px;
  border-radius: 15px;
  box-shadow: -3px -3px inset #fa7f7f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main .content .objective-box form input {
  font-family: "Edu SA Beginner", cursive;
  width: 100%;
  height: 30px;
  padding-left: 1rem;
  border-radius: 5px;
}
main .content .objective-box form select {
  height: 30px;
  width: 100%;
}
main .content .objective-box form button {
  width: 100%;
  border: none;
  border-radius: 5px;
  font-family: "Edu SA Beginner", cursive;
  font-size: 1rem;
  font-weight: 600;
  height: 35px;
  color: whitesmoke;
  background-color: hsl(174, 66%, 39%);
  box-shadow: -3px -3px inset #2acfbf;
}
main .content .objective-box form button:hover {
  cursor: pointer;
  background-color: #2acfbf;
  box-shadow: -3px -3px inset #26baab;
  font-weight: 700;
}
main .content #add-objective {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 170px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: "Edu SA Beginner", cursive;
  font-weight: 600;
  font-size: 1.4rem;
  background-color: hsl(174, 66%, 39%);
  color: whitesmoke;
  box-shadow: -3px -3px inset #2acfbf;
}
main .content #add-objective:hover {
  cursor: pointer;
  background-color: #2acfbf;
  box-shadow: -3px -3px inset #26baab;
  font-weight: 700;
}

footer {
  background-color: black;
  color: whitesmoke;
  padding: 0.8rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}
footer a {
  color: white;
}
footer a:hover {
  color: hsl(0, 100%, 77%);
}`, "",{"version":3,"sources":["webpack://./src/scss/_resets.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;ACDJ;;AAFA;EACI,aAAA;EACA,uCCCO;EDAP,wBCLW;EAyBX,aAAA;EACA,sBDpBc;ECqBd,eDrBsB;ECsBtB,mBDtB0B;AAQ9B;;AALA;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oCCVI;EDWJ,cAAA;AAQJ;;AALA;ECQI,aAAA;EACA,mBDRc;ECSd,eDTmB;ECUnB,mBDVuB;EACvB,YAAA;EACA,oCCjBI;EDkBJ,kCAAA;AAWJ;AATI;EACI,YAAA;EACA,kBAAA;EACA,wCAAA;EACA,kBAAA;AAWR;AATQ;EACI,aAAA;EACA,eAAA;EACA,yCAAA;AAWZ;AARQ;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,uCCtCD;EDuCC,gBAAA;EACA,iBAAA;EACA,oCC1CJ;ED2CI,iBAAA;EACA,mCAAA;AAUZ;AARY;EACI,eAAA;EACA,yBAAA;EACA,mCAAA;EACA,gBAAA;AAUhB;AALI;EACI,UAAA;EACA,kBAAA;EACA,kBAAA;ECrCJ,aAAA;EACA,sBDqCkB;ECpClB,eDoC0B;ECnC1B,mBDmC8B;AAUlC;AARQ;EACI,aAAA;EACA,eAAA;EACA,yCAAA;AAUZ;AAPQ;EACI,YAAA;EC/CR,aAAA;EACA,sBD+CsB;EC9CtB,mBD8C8B;EC7C9B,uBD6CsC;AAY1C;AAVY;;EAEI,aAAA;AAYhB;AATY;EACI,aAAA;AAWhB;AARY;EACI,kCCnFT;EDoFS,kBAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,mBAAA;EACA,mCAAA;EClEZ,aAAA;EACA,sBDkE0B;ECjE1B,mBDiEkC;EChElC,uBDgE0C;AAa9C;AAXgB;EACI,uCC1FT;ED2FS,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAapB;AAVgB;EACI,YAAA;EACA,WAAA;AAYpB;AATgB;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uCC1GT;ED2GS,eAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,oCChHZ;EDiHY,mCAAA;AAWpB;AAToB;EACI,eAAA;EACA,yBAAA;EACA,mCAAA;EACA,gBAAA;AAWxB;AAHQ;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,uCCtID;EDuIC,gBAAA;EACA,iBAAA;EACA,oCC1IJ;ED2II,iBAAA;EACA,mCAAA;AAKZ;AAHY;EACI,eAAA;EACA,yBAAA;EACA,mCAAA;EACA,gBAAA;AAKhB;;AACA;EACI,uBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAEJ;AAAI;EACI,YAAA;AAER;AADQ;EACI,wBCtKE;ADyKd","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}","@import 'resets', 'variables';\n\nbody {\n    height: 100vh;\n    font-family: $mainFont;\n    color: $vibrant-pink;\n    @include flex(column, \"\", \"\")\n}\n\nheader {\n    text-align: center;\n    padding: 1rem;\n    font-size: 2rem;\n    background-color: $cream;\n    color: darken($vibrant-pink, 10%);\n}\n\nmain {\n    @include flex(row, \"\", \"\");\n    flex-grow: 1;\n    background-color: $cream;\n    border: 1px solid $pink;\n\n    .sidebar {\n        width: 500px;\n        text-align: center;\n        border-right: 1px solid $pink;\n        position: relative;\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $pink;\n        }\n\n        #add-mission {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n\n    .content {\n        width: 90%;\n        text-align: center;\n        position: relative;\n        @include flex(column, \"\", \"\");\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $pink;\n        }\n\n        .objective-box {\n            height: 100%;\n            @include flex(column, center, center);\n\n            .mission-form,\n            .objective-form {\n                display: none;\n            }\n\n            .showForm {\n                display: flex;\n            }\n\n            form {\n                background-color: $pink;\n                margin-top: -100px;\n                padding: 1.5rem;\n                width: 350px;\n                gap: 15px;\n                border-radius: 15px;\n                box-shadow: -3px -3px inset darken($pink, 10%);\n                @include flex(column, center, center);\n    \n                input {\n                    font-family: $mainFont;\n                    width: 100%;\n                    height: 30px;\n                    padding-left: 1rem;\n                    border-radius: 5px;\n                }\n    \n                select {\n                    height: 30px;\n                    width: 100%;\n                }\n    \n                button {\n                    width: 100%;\n                    border: none;\n                    border-radius: 5px;\n                    font-family: $mainFont;\n                    font-size: 1rem;\n                    font-weight: weight(semi-bold);\n                    height: 35px;\n                    color: whitesmoke;\n                    background-color: $green;\n                    box-shadow: -3px -3px inset lighten($green, 10%);\n\n                    &:hover {\n                        cursor: pointer;\n                        background-color: lighten($green, 10%);\n                        box-shadow: -3px -3px inset lighten($green, 5%);\n                        font-weight: weight(bold);\n                    }\n                }\n            }\n    \n        }\n\n        \n        #add-objective {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n}\n\nfooter {\n    background-color: black;\n    color: whitesmoke;\n    padding: .8rem;\n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: weight(semi-bold);\n\n    a {\n        color: white;\n        &:hover {\n            color: $medium-pink;\n        }\n    }\n}","$vibrant-pink: hsl(0, 100%, 70%);\n$medium-pink: hsl(0, 100%, 77%);\n$pink: hsl(0, 93%, 84%);\n$cream: hsl(23, 100%, 93%);\n$green: hsl(174, 66%, 39%);\n$mainFont: 'Edu SA Beginner', cursive;\n$mobile-width: 375px;\n$font-weights: (\n    \"regular\": 400,\n    \"medium\": 500,\n    \"semi-bold\": 600,\n    \"bold\": 700\n);\n\n@function weight($weight-name) {\n    @return map-get($font-weights, $weight-name)\n};\n\n@mixin mobile {\n    @media (max-width: $mobile-width) {\n        @content;        \n    }\n}\n\n@mixin flex($flex-direction, $align, $justify) {\n    display: flex;\n    flex-direction: $flex-direction;\n    align-items: $align;\n    justify-content: $justify;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toggleForm(button) {
    if(button.target.textContent === "Add Mission") {
      document.querySelector(".mission-form").classList.toggle("showForm")
      document.querySelector(".objective-form").classList.remove("showForm")
    } else {
      document.querySelector(".objective-form").classList.toggle("showForm")
      document.querySelector(".mission-form").classList.remove("showForm")
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleForm);

/***/ }),

/***/ "./src/modules/Mission.js":
/*!********************************!*\
  !*** ./src/modules/Mission.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mission)
/* harmony export */ });


class Mission {
  constructor(name) {
    this.name = name;
    this.objectives = [];
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getObjectives() {
    return this.objectives;
  }

  setObjectives(objectives) {
    this.objectives = objectives;
  }

  getObjective(objName) {
    return this.objectives.find((obj) => obj.getName() === objName);
  }

  addObjective(newObj) {
    if (!this.objectives.find((obj) => obj.getName() === newObj.name)) {
      this.objectives.push(newObj);
    }
  }

  deleteObjective(objName) {
    this.objectives = this.objectives.filter((obj) => obj.name !== objName)
  }

}

/***/ }),

/***/ "./src/modules/Objective.js":
/*!**********************************!*\
  !*** ./src/modules/Objective.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Objective)
/* harmony export */ });
class Objective {
    constructor(name, description, dueDate = "") {
        this.name = name
        this.description = description
        this.dueDate = dueDate
    }

    getName() {
        return this.name
    }

    setName(objName) {
        this.name = objName
    }

    getDescription() {
        return this.description
    }

    setDescription(newDescription) {
        this.description = newDescription
    }

    getDueDate() {
        return this.dueDate
    }

    getDateFormatted() {
        if (this.dueDate === "today") {
            return "today"
        } else {
            const day = this.dueDate.split('-')[2]
            const month = this.dueDate.split('-')[1]
            const year = this.dueDate.split('-')[0]
            return `${month}/${day}/${year}`
        }
      }
}

/***/ }),

/***/ "./src/modules/QuestMenu.js":
/*!**********************************!*\
  !*** ./src/modules/QuestMenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestMenu)
/* harmony export */ });
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/modules/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/modules/Objective.js");
/* eslint-disable no-useless-return */



class QuestMenu {
    constructor() {
        this.missions = []
        this.missions.push(new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"))
        this.missions.push(new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"]("This Week"))
    }

    setMissions(missions) {
        this.missions = missions
    }

    getMissions() {
        return this.missions
    }

    getMission(missionName) {
        return this.missions.find(mission => mission.getName() === missionName)
    }

    addMission(newMission) {
        if(!this.missions.find(mission => mission.getName() === newMission.name)) {
            this.missions.push(newMission)
        }
    }
    
    deleteMission(missionName) {
        this.missions = this.missions.filter((mission) => mission.name !== missionName)
        /* const missionToDelete = this.missions.find(mission => mission.getName() === missionName) 
        this.missions.splice(this.missions.indexOf(missionToDelete), 1) */
    }

    updateTodayMission() {
        this.getMission("Today").objectives = []

        this.missions.forEach((mission) => {
            if (mission.getName() === "Today") return
            const todayObjectives = mission.getTodayObjectives()
            todayObjectives.forEach((objective) => {
                const objectiveName = `${objective.getName()}`
                this.getMission("Today").addObjective(new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"](objectiveName, objective.getDateFormatted()))
            })
        })
    }
}

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/modules/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/modules/Objective.js");
/* harmony import */ var _QuestMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestMenu */ "./src/modules/QuestMenu.js");
/* eslint-disable class-methods-use-this */





class Storage {  
    saveQuestMenu(data) {
        localStorage.setItem("questmenu", JSON.stringify(data))
    }

    getQuestMenu() {
        const questsMenu = Object.assign(
            new _QuestMenu__WEBPACK_IMPORTED_MODULE_2__["default"](),
            JSON.parse(localStorage.getItem("questmenu"))
        )

        questsMenu.setMissions(
            questsMenu.getMissions()
            .map(mission => Object.assign(
                new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"](), mission
            ))
        )

        questsMenu.getMissions()
        .forEach(mission => 
            mission.setObjectives(
                mission.getObjectives().map(
                    obj => Object.assign(new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"], obj))
            )
        )
        return questsMenu
    }

    // Make sure parameters with -Name has .getName() or it will delete wrong item

    addMission(mission) {
        const questsMenu = this.getQuestMenu()
        questsMenu.addMission(mission)
        this.saveQuestMenu(questsMenu)
    }

    deleteMission(missionName) {
        const questsMenu = this.getQuestMenu()
        questsMenu.deleteMission(missionName)
        this.saveQuestMenu(questsMenu)
    }

    renameMission(oldMissionName, newMissionName) {
        const questsMenu = this.getQuestMenu()
        questsMenu.getMission(oldMissionName).setName(newMissionName)
        this.saveQuestMenu(questsMenu)
    }

    addObjective(missionName, objective) {
        const questsMenu = this.getQuestMenu()
        questsMenu.getMission(missionName).addObjective(objective)
        this.saveQuestMenu(questsMenu)
    }

    deleteObjective(missionName, objName) {
        const questsMenu = this.getQuestMenu()
        questsMenu.getMission(missionName).deleteObjective(objName)
        this.saveQuestMenu(questsMenu)
    }

    renameObjective(missionName, objName, newObjName) {
        const questsMenu = this.getQuestMenu()
        questsMenu.getMission(missionName).getObjective(objName).setName(newObjName)
        this.saveQuestMenu(questsMenu)
    }
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Mission */ "./src/modules/Mission.js");
/* harmony import */ var _modules_Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Objective */ "./src/modules/Objective.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");






const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_4__["default"]) })


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlLQUFpSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxhQUFhLGNBQWMsZUFBZSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxhQUFhLGVBQWUsZUFBZSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsZUFBZSxlQUFlLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksaUNBQWlDLDZC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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3ZFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNJO0FBQ0o7QUFDZDtBQUNJOztBQUU5Qjs7QUFFQSxvQ0FBb0MsaUNBQWlDLDRDQUFVLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9NaXNzaW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvT2JqZWN0aXZlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvUXVlc3RNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBcIlwiO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IFwiXCI7XG59XG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMsIDEwMCUsIDkzJSk7XG4gIGNvbG9yOiAjZmYzMzMzO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMsIDEwMCUsIDkzJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCA5MyUsIDg0JSk7XG59XG5tYWluIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCA5MyUsIDg0JSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1haW4gLnNpZGViYXIgaDIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgOTMlLCA4NCUpO1xufVxubWFpbiAuc2lkZWJhciAjYWRkLW1pc3Npb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxNzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiRWR1IFNBIEJlZ2lubmVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTc0LCA2NiUsIDM5JSk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzJhY2ZiZjtcbn1cbm1haW4gLnNpZGViYXIgI2FkZC1taXNzaW9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFjZmJmO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzI2YmFhYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbm1haW4gLmNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbn1cbm1haW4gLmNvbnRlbnQgaDIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgOTMlLCA4NCUpO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlLWJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmUtYm94IC5taXNzaW9uLWZvcm0sXG5tYWluIC5jb250ZW50IC5vYmplY3RpdmUtYm94IC5vYmplY3RpdmUtZm9ybSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmUtYm94IC5zaG93Rm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmUtYm94IGZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgOTMlLCA4NCUpO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgd2lkdGg6IDM1MHB4O1xuICBnYXA6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjZmE3ZjdmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZS1ib3ggZm9ybSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZS1ib3ggZm9ybSBzZWxlY3Qge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlLWJveCBmb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRWR1IFNBIEJlZ2lubmVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3NCwgNjYlLCAzOSUpO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzJhY2ZiZjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZS1ib3ggZm9ybSBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmYmY7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMjZiYWFiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxubWFpbiAuY29udGVudCAjYWRkLW9iamVjdGl2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IDE3MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJFZHUgU0EgQmVnaW5uZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzQsIDY2JSwgMzklKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMmFjZmJmO1xufVxubWFpbiAuY29udGVudCAjYWRkLW9iamVjdGl2ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhY2ZiZjtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyNmJhYWI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMC44cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNzclKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLHVDQ0NPO0VEQVAsd0JDTFc7RUF5QlgsYUFBQTtFQUNBLHNCRHBCYztFQ3FCZCxlRHJCc0I7RUNzQnRCLG1CRHRCMEI7QUFROUI7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0NDVkk7RURXSixjQUFBO0FBUUo7O0FBTEE7RUNRSSxhQUFBO0VBQ0EsbUJEUmM7RUNTZCxlRFRtQjtFQ1VuQixtQkRWdUI7RUFDdkIsWUFBQTtFQUNBLG9DQ2pCSTtFRGtCSixrQ0FBQTtBQVdKO0FBVEk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBV1I7QUFUUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFXWjtBQVJRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUNDdENEO0VEdUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0MxQ0o7RUQyQ0ksaUJBQUE7RUFDQSxtQ0FBQTtBQVVaO0FBUlk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBVWhCO0FBTEk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQ3JDSixhQUFBO0VBQ0Esc0JEcUNrQjtFQ3BDbEIsZURvQzBCO0VDbkMxQixtQkRtQzhCO0FBVWxDO0FBUlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBVVo7QUFQUTtFQUNJLFlBQUE7RUMvQ1IsYUFBQTtFQUNBLHNCRCtDc0I7RUM5Q3RCLG1CRDhDOEI7RUM3QzlCLHVCRDZDc0M7QUFZMUM7QUFWWTs7RUFFSSxhQUFBO0FBWWhCO0FBVFk7RUFDSSxhQUFBO0FBV2hCO0FBUlk7RUFDSSxrQ0NuRlQ7RURvRlMsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VDbEVaLGFBQUE7RUFDQSxzQkRrRTBCO0VDakUxQixtQkRpRWtDO0VDaEVsQyx1QkRnRTBDO0FBYTlDO0FBWGdCO0VBQ0ksdUNDMUZUO0VEMkZTLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWFwQjtBQVZnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBWXBCO0FBVGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQzFHVDtFRDJHUyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0NoSFo7RURpSFksbUNBQUE7QUFXcEI7QUFUb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBV3hCO0FBSFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0N0SUQ7RUR1SUMsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQzFJSjtFRDJJSSxpQkFBQTtFQUNBLG1DQUFBO0FBS1o7QUFIWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFLaEI7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFEUTtFQUNJLHdCQ3RLRTtBRHlLZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIixcIkBpbXBvcnQgJ3Jlc2V0cycsICd2YXJpYWJsZXMnO1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICBjb2xvcjogJHZpYnJhbnQtcGluaztcXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIFxcXCJcXFwiLCBcXFwiXFxcIilcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXG4gICAgY29sb3I6IGRhcmtlbigkdmlicmFudC1waW5rLCAxMCUpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgQGluY2x1ZGUgZmxleChyb3csIFxcXCJcXFwiLCBcXFwiXFxcIik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyZWFtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcGluaztcXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHBpbms7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICBoMiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwaW5rO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2FkZC1taXNzaW9uIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYm90dG9tOiAxcmVtO1xcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWFpbkZvbnQ7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChzZW1pLWJvbGQpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDEwJSk7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JlZW4sIDEwJSk7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgNSUpO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KGJvbGQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIFxcXCJcXFwiLCBcXFwiXFxcIik7XFxuXFxuICAgICAgICBoMiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwaW5rO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm9iamVjdGl2ZS1ib3gge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgICAgICAgICAgIC5taXNzaW9uLWZvcm0sXFxuICAgICAgICAgICAgLm9iamVjdGl2ZS1mb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNob3dGb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgZm9ybSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBkYXJrZW4oJHBpbmssIDEwJSk7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIsIGNlbnRlcik7XFxuICAgIFxcbiAgICAgICAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgNSUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoYm9sZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuICAgICAgICAjYWRkLW9iamVjdGl2ZSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDUlKTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChib2xkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHdlaWdodChzZW1pLWJvbGQpO1xcblxcbiAgICBhIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkbWVkaXVtLXBpbms7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCIkdmlicmFudC1waW5rOiBoc2woMCwgMTAwJSwgNzAlKTtcXG4kbWVkaXVtLXBpbms6IGhzbCgwLCAxMDAlLCA3NyUpO1xcbiRwaW5rOiBoc2woMCwgOTMlLCA4NCUpO1xcbiRjcmVhbTogaHNsKDIzLCAxMDAlLCA5MyUpO1xcbiRncmVlbjogaHNsKDE3NCwgNjYlLCAzOSUpO1xcbiRtYWluRm9udDogJ0VkdSBTQSBCZWdpbm5lcicsIGN1cnNpdmU7XFxuJG1vYmlsZS13aWR0aDogMzc1cHg7XFxuJGZvbnQtd2VpZ2h0czogKFxcbiAgICBcXFwicmVndWxhclxcXCI6IDQwMCxcXG4gICAgXFxcIm1lZGl1bVxcXCI6IDUwMCxcXG4gICAgXFxcInNlbWktYm9sZFxcXCI6IDYwMCxcXG4gICAgXFxcImJvbGRcXFwiOiA3MDBcXG4pO1xcblxcbkBmdW5jdGlvbiB3ZWlnaHQoJHdlaWdodC1uYW1lKSB7XFxuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udC13ZWlnaHRzLCAkd2VpZ2h0LW5hbWUpXFxufTtcXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXG4gICAgICAgIEBjb250ZW50OyAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuQG1peGluIGZsZXgoJGZsZXgtZGlyZWN0aW9uLCAkYWxpZ24sICRqdXN0aWZ5KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XFxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XFxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gdG9nZ2xlRm9ybShidXR0b24pIHtcbiAgICBpZihidXR0b24udGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkFkZCBNaXNzaW9uXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzc2lvbi1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93Rm9ybVwiKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd0Zvcm1cIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd0Zvcm1cIilcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzc2lvbi1mb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93Rm9ybVwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlRm9ybSIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzO1xuICB9XG5cbiAgc2V0T2JqZWN0aXZlcyhvYmplY3RpdmVzKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gb2JqZWN0aXZlcztcbiAgfVxuXG4gIGdldE9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG9iak5hbWUpO1xuICB9XG5cbiAgYWRkT2JqZWN0aXZlKG5ld09iaikge1xuICAgIGlmICghdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gbmV3T2JqLm5hbWUpKSB7XG4gICAgICB0aGlzLm9iamVjdGl2ZXMucHVzaChuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gdGhpcy5vYmplY3RpdmVzLmZpbHRlcigob2JqKSA9PiBvYmoubmFtZSAhPT0gb2JqTmFtZSlcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBzZXROYW1lKG9iak5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqTmFtZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXREYXRlRm9ybWF0dGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kdWVEYXRlID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRvZGF5XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzJdXG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzFdXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMF1cbiAgICAgICAgICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXG4gICAgICAgIH1cbiAgICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLXJldHVybiAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0TWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBbXVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVGhpcyBXZWVrXCIpKVxuICAgIH1cblxuICAgIHNldE1pc3Npb25zKG1pc3Npb25zKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBtaXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSlcbiAgICB9XG5cbiAgICBhZGRNaXNzaW9uKG5ld01pc3Npb24pIHtcbiAgICAgICAgaWYoIXRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBuZXdNaXNzaW9uLm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3TWlzc2lvbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSB0aGlzLm1pc3Npb25zLmZpbHRlcigobWlzc2lvbikgPT4gbWlzc2lvbi5uYW1lICE9PSBtaXNzaW9uTmFtZSlcbiAgICAgICAgLyogY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpICovXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgIGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7ICBcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHBhcmFtZXRlcnMgd2l0aCAtTmFtZSBoYXMgLmdldE5hbWUoKSBvciBpdCB3aWxsIGRlbGV0ZSB3cm9uZyBpdGVtXG5cbiAgICBhZGRNaXNzaW9uKG1pc3Npb24pIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5hZGRNaXNzaW9uKG1pc3Npb24pXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVNaXNzaW9uKG9sZE1pc3Npb25OYW1lLCBuZXdNaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24ob2xkTWlzc2lvbk5hbWUpLnNldE5hbWUobmV3TWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGFkZE9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuYWRkT2JqZWN0aXZlKG9iamVjdGl2ZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSwgbmV3T2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmdldE9iamVjdGl2ZShvYmpOYW1lKS5zZXROYW1lKG5ld09iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTWlzc2lvbiBmcm9tICcuL21vZHVsZXMvTWlzc2lvbic7XG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gJy4vbW9kdWxlcy9PYmplY3RpdmUnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL1N0b3JhZ2UnO1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2NzcydcbmltcG9ydCB0b2dnbGVGb3JtIGZyb20gJy4vZG9tJ1xuXG5jb25zdCBzaG93Rm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3ctZm9ybS1idXR0b25cIilcblxuc2hvd0Zvcm1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHsgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVGb3JtKSB9KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=