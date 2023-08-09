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

li {
  list-style-type: none;
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
  background-color: hsl(23, 100%, 97%);
  color: #ff4d4d;
}

main {
  display: flex;
  flex-direction: row;
  align-items: "";
  justify-content: "";
  flex-grow: 1;
  background-color: hsl(23, 100%, 97%);
  padding: 1rem;
}
main .sidebar {
  width: 500px;
  text-align: center;
  border-top: 1px solid hsl(0, 100%, 70%);
  border-right: 1px solid hsl(0, 100%, 77%);
  border-bottom: 1px solid hsl(0, 100%, 70%);
  border-left: 1px solid hsl(0, 100%, 70%);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;
}
main .sidebar h2 {
  padding: 1rem;
  font-size: 2rem;
  border-bottom: 1px solid hsl(0, 100%, 77%);
}
main .sidebar .missions-list {
  display: grid;
  padding: 0.3rem;
  grid-template-rows: repeat(10, 50px);
  row-gap: 5px;
}
main .sidebar .missions-list .active-mission {
  background-color: #fee1e1;
}
main .sidebar .missions-list li {
  font-size: 1.5rem;
  padding-left: 2rem;
  gap: 10px;
  color: #262626;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: "";
}
main .sidebar .missions-list li:hover {
  cursor: pointer;
  background-color: #fee1e1;
}
main .sidebar .missions-list li:hover .fa-map-pin {
  transform: rotate(300deg);
  text-decoration: underline;
}
main .sidebar .missions-list li:hover p {
  cursor: pointer;
  text-decoration: underline;
}
main .sidebar .missions-list li .fa-map-pin {
  color: #ff1a1a;
  transform: rotate(270deg);
}
main .sidebar .missions-list li .pinned {
  transform: rotate(300deg);
  text-decoration: underline;
}
main .sidebar .missions-list li .fa-x {
  position: absolute;
  right: 2rem;
  padding: 0.3rem 0.4rem 0.3rem 0.4rem;
  color: #e60000;
  border-radius: 25px;
  font-size: 12px;
  border: 2px solid hsl(0, 100%, 70%);
}
main .sidebar .missions-list li .fa-x:hover {
  color: whitesmoke;
  background-color: hsl(0, 100%, 70%);
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
  border-top: 1px solid hsl(0, 100%, 70%);
  border-right: 1px solid hsl(0, 100%, 70%);
  border-bottom: 1px solid hsl(0, 100%, 70%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: "";
  justify-content: "";
}
main .content h2 {
  padding: 1rem;
  font-size: 2rem;
  border-bottom: 1px solid hsl(0, 100%, 77%);
}
main .content .objectives-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main .content .objectives-box .objectives {
  height: 100%;
  width: 100%;
  padding: 1rem;
  color: black;
  display: grid;
  grid-template-rows: repeat(10, 45px);
  row-gap: 5px;
}
main .content .objectives-box .objectives .no-objectives {
  font-size: 24px;
}
main .content .objectives-box .objectives li {
  text-align: left;
  font-size: 1.5rem;
  border-bottom: 1px solid hsl(0, 93%, 84%);
  letter-spacing: 1.5px;
}
main .content .objectives-box .objectives .objective-element {
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: "";
}
main .content .objectives-box .objectives .objective-element input {
  width: 0;
  height: 0;
  visibility: hidden;
}
main .content .objectives-box .objectives .objective-element input:checked + label:after {
  background-color: #fa7f7f;
}
main .content .objectives-box .objectives .objective-element label {
  width: 30px;
  height: 30px;
  position: relative;
  background-color: #ffe6d6;
  border-radius: 200px;
  box-shadow: -2px -2px inset #ffc6a3, 2px 2px inset #ffc6a3;
}
main .content .objectives-box .objectives .objective-element label:hover {
  cursor: pointer;
}
main .content .objectives-box .objectives .objective-element label:after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 200px;
}
main .content .objectives-box .objectives .objective-element .active-objective {
  background-color: #fdc9c9;
}
main .content .objectives-box .objectives .objective-element .objective-box {
  width: 100%;
  border-radius: 5px;
  margin-left: 0.5rem;
  position: relative;
}
main .content .objectives-box .objectives .objective-element .objective-box .obj-textdate-box {
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
main .content .objectives-box .objectives .objective-element .objective-box:hover {
  cursor: pointer;
  background-color: #fee1e1;
}
main .content .objectives-box .objectives .objective-element .objective-box .objective-description {
  position: absolute;
  left: 0;
  right: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 0;
  visibility: hidden;
  background-color: hsl(0, 93%, 84%);
  z-index: 3;
  padding: 0.5rem;
  transition: all 0.5s ease;
  opacity: 0;
}
main .content .objectives-box .objectives .objective-element .objective-box .active-objective-description {
  opacity: 1;
  transform: translateY(0);
  height: 50px;
  visibility: visible;
  background-color: #fb9898;
}
main .content .objectives-box .mission-form,
main .content .objectives-box .objective-form {
  display: none;
}
main .content .objectives-box .show-form {
  display: flex;
}
main .content .objectives-box form {
  background-color: hsl(0, 93%, 84%);
  margin-top: -100px;
  padding: 1.5rem;
  width: 350px;
  gap: 15px;
  position: absolute;
  border-radius: 15px;
  box-shadow: -3px -3px inset #fa7f7f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main .content .objectives-box form input {
  font-family: "Edu SA Beginner", cursive;
  width: 100%;
  height: 30px;
  padding-left: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
}
main .content .objectives-box form select {
  height: 30px;
  width: 100%;
}
main .content .objectives-box form button {
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
main .content .objectives-box form button:hover {
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
footer:hover {
  cursor: default;
}
footer a {
  text-decoration: none;
  color: white;
}
footer a:hover {
  color: hsl(0, 100%, 77%);
}`, "",{"version":3,"sources":["webpack://./src/scss/_resets.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    list-style-type: none;\n}","@import 'resets', 'variables';\n\nbody {\n    height: 100vh;\n    font-family: $mainFont;\n    color: $vibrant-pink;\n    @include flex(column, \"\", \"\")\n}\n\nheader {\n    text-align: center;\n    padding: 1rem;\n    font-size: 2rem;\n    background-color: $cream;\n    color: darken($vibrant-pink, 5%);\n}\n\nmain {\n    @include flex(row, \"\", \"\");\n    flex-grow: 1;\n    background-color: $cream;\n    padding: 1rem;\n\n    .sidebar {\n        width: 500px;\n        text-align: center;\n        border-top: 1px solid $vibrant-pink;\n        border-right: 1px solid $medium-pink;\n        border-bottom: 1px solid $vibrant-pink;\n        border-left: 1px solid $vibrant-pink;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        position: relative;\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $medium-pink;\n        }\n\n        .missions-list {\n            display: grid;\n            padding: .3rem;\n            grid-template-rows: repeat(10, 50px);\n            row-gap: 5px;\n\n            .active-mission {\n                background-color: lighten($pink, 10%);\n            }\n\n            li {\n                font-size: 1.5rem;\n                padding-left: 2rem;\n                gap: 10px;\n                color: lighten(black, 15%);\n                border-radius: 5px;\n                position: relative;\n                @include flex(row, center, \"\");\n\n                &:hover {\n                    cursor: pointer;\n                    background-color: lighten($pink, 10%);\n\n                    .fa-map-pin {\n                        transform: rotate(300deg);\n                        text-decoration: underline;\n                    }\n\n                    p {\n                        cursor: pointer;\n                        text-decoration: underline;\n                    }\n\n                }\n\n                .fa-map-pin {\n                    color: darken($vibrant-pink, 15%);\n                    transform: rotate(270deg);\n                }\n\n                .pinned {\n                    transform: rotate(300deg);\n                    text-decoration: underline;\n                }\n\n                .fa-x {\n                    position: absolute;\n                    right: 2rem;\n                    padding: .3rem .4rem .3rem .4rem;\n                    color: darken($vibrant-pink, 25%);\n                    border-radius: 25px;\n                    font-size: 12px;\n                    border: 2px solid $vibrant-pink;\n\n                    &:hover {\n                        color: whitesmoke;\n                        background-color: $vibrant-pink;\n                    }\n                }\n\n            }\n\n            \n        }\n\n        #add-mission {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n\n    .content {\n        width: 90%;\n        text-align: center;\n        position: relative;\n        border-top: 1px solid $vibrant-pink;\n        border-right: 1px solid $vibrant-pink;\n        border-bottom: 1px solid $vibrant-pink;\n        border-top-right-radius: 10px;\n        border-bottom-right-radius: 10px;\n        @include flex(column, \"\", \"\");\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $medium-pink;\n        }\n\n        .objectives-box {\n            height: 100%;\n            @include flex(column, center, center);\n\n            .objectives {\n                height: 100%;\n                width: 100%;\n                padding: 1rem;\n                color: black;\n                display: grid;\n                grid-template-rows: repeat(10, 45px);\n                row-gap: 5px;\n                \n                .no-objectives {\n                    font-size: 24px;\n                }\n\n                li {\n                    text-align: left;\n                    font-size: 1.5rem;\n                    border-bottom: 1px solid $pink;\n                    letter-spacing: 1.5px;\n                }\n\n                .objective-element {\n                    padding: .3rem;\n                    @include flex(row, center, \"\");\n\n                    input {\n                        width: 0;\n                        height: 0;\n                        visibility: hidden;\n                    }\n\n                    input:checked + label:after {\n                        background-color: darken($pink, 10%);\n                    }\n\n                    label {\n                        width: 30px;\n                        height: 30px;\n                        position: relative;\n                        background-color: darken($cream, 5%);\n                        border-radius: 200px;\n                        box-shadow: -2px -2px inset darken($cream, 15%), 2px 2px inset darken($cream, 15%);\n\n                        &:hover {\n                            cursor: pointer;\n                        }\n\n                        &:after {\n                            content: \"\";\n                            width: 20px;\n                            height: 20px;\n                            position: absolute;\n                            top: 5px;\n                            left: 5px;\n                            border-radius: 200px;\n                        }\n                    }\n\n                    .active-objective {\n                        background-color: lighten($pink, 5%);\n                    }\n\n                    .objective-box {\n                        width: 100%;\n                        border-radius: 5px;\n                        margin-left: .5rem;\n                        position: relative;\n\n                        .obj-textdate-box {\n                            padding: .3rem .3rem .3rem .5rem;\n                            @include flex(row, center, space-between);\n                        }\n\n                        &:hover {\n                            cursor: pointer;\n                            background-color: lighten($pink, 10%);\n                        }\n\n                        .objective-description {\n                            position: absolute;\n                            left: 0;\n                            right: 0;\n                            border-bottom-left-radius: 5px;\n                            border-bottom-right-radius: 5px;\n                            height: 0;\n                            visibility: hidden;\n                            background-color: $pink;\n                            z-index: 3;\n                            padding: .5rem;\n                            transition: all 0.5s ease;\n                            opacity: 0;\n                        }\n\n                        .active-objective-description {\n                            opacity: 1;\n                            \n                            transform: translateY(0);\n                            height: 50px;\n                            visibility: visible;\n                            background-color: darken($pink, 5%);\n                        }\n\n                    }\n                }\n            }\n\n            .mission-form,\n            .objective-form {\n                display: none;\n            }\n\n            .show-form {\n                display: flex;\n            }\n\n            form {\n                background-color: $pink;\n                margin-top: -100px;\n                padding: 1.5rem;\n                width: 350px;\n                gap: 15px;\n                position: absolute;\n                border-radius: 15px;\n                box-shadow: -3px -3px inset darken($pink, 10%);\n                @include flex(column, center, center);\n    \n                input {\n                    font-family: $mainFont;\n                    width: 100%;\n                    height: 30px;\n                    padding-left: 1rem;\n                    border-radius: 5px;\n                    font-size: 1rem;\n                    font-weight: weight(bold);\n                    letter-spacing: 2px;\n                }\n    \n                select {\n                    height: 30px;\n                    width: 100%;\n                }\n    \n                button {\n                    width: 100%;\n                    border: none;\n                    border-radius: 5px;\n                    font-family: $mainFont;\n                    font-size: 1rem;\n                    font-weight: weight(semi-bold);\n                    height: 35px;\n                    color: whitesmoke;\n                    background-color: $green;\n                    box-shadow: -3px -3px inset lighten($green, 10%);\n\n                    &:hover {\n                        cursor: pointer;\n                        background-color: lighten($green, 10%);\n                        box-shadow: -3px -3px inset lighten($green, 5%);\n                        font-weight: weight(bold);\n                    }\n                }\n            }\n    \n        }\n\n        \n        #add-objective {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n}\n\nfooter {\n    background-color: black;\n    color: whitesmoke;\n    padding: .8rem;\n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: weight(semi-bold);\n\n    &:hover {\n        cursor: default;\n    }\n\n    a {\n        text-decoration: none;\n        color: white;\n        &:hover {\n            color: $medium-pink;\n        }\n    }\n}","$vibrant-pink: hsl(0, 100%, 70%);\n$medium-pink: hsl(0, 100%, 77%);\n$pink: hsl(0, 93%, 84%);\n$soft-pink: hsl(23, 100%, 93%);\n$cream: hsl(23, 100%, 97%);\n$green: hsl(174, 66%, 39%);\n$mainFont: 'Edu SA Beginner', cursive;\n$mobile-width: 375px;\n$font-weights: (\n    \"regular\": 400,\n    \"medium\": 500,\n    \"semi-bold\": 600,\n    \"bold\": 700\n);\n\n@function weight($weight-name) {\n    @return map-get($font-weights, $weight-name)\n};\n\n@mixin mobile {\n    @media (max-width: $mobile-width) {\n        @content;        \n    }\n}\n\n@mixin flex($flex-direction, $align, $justify) {\n    display: flex;\n    flex-direction: $flex-direction;\n    align-items: $align;\n    justify-content: $justify;\n}"],"sourceRoot":""}]);
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
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   displayMissions: () => (/* binding */ displayMissions),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   setActiveMission: () => (/* binding */ setActiveMission),
/* harmony export */   toggleForm: () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var _modules_Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Mission */ "./src/modules/Mission.js");
/* harmony import */ var _modules_Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Objective */ "./src/modules/Objective.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");




const quest = new _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"]()

const testMission = new _modules_Mission__WEBPACK_IMPORTED_MODULE_0__["default"]("Testing mission")
quest.addMission(testMission)

const testObjective = new _modules_Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Objective", "this is for testing", "2023-08-10")
quest.addObjective("Today", testObjective)
const anotherObjective = new _modules_Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Second objective", "second test", "2023-08-11")
quest.addObjective("Today", anotherObjective)

function toggleForm(button) {
    if(button.target.textContent === "Add Mission") {
      document.querySelector(".mission-form").classList.toggle("show-form")
      document.querySelector(".objective-form").classList.remove("show-form")
    } else {
      document.querySelector(".objective-form").classList.toggle("show-form")
      document.querySelector(".mission-form").classList.remove("show-form")
    }
}

function createMissionElement(mission) {
    if(mission.getName() === "Today") {
        const missionElement = document.createElement("li")
        missionElement.classList.add("mission-element")
        const missionIcon = document.createElement("span")
        missionIcon.classList.add("fa-solid", "fa-map-pin")
        const missionText = document.createElement("p")
        missionText.textContent = mission.getName()

        missionElement.addEventListener("click", () => {
            document.querySelectorAll(".mission-element").forEach(mission => {
                mission.classList.remove("active-mission")
                document.querySelectorAll(".fa-map-pin").forEach(pin => {
                    pin.classList.remove("pinned")
                })
            })
            missionElement.classList.add("active-mission")
            missionIcon.classList.add("pinned")
            setActiveMission(quest.getQuestMenu().getMission(missionText.textContent))
        })
        
        missionElement.append(missionIcon, missionText)
        return missionElement
    } else {
        const missionElement = document.createElement("li")
        missionElement.classList.add("mission-element")
        const missionIcon = document.createElement("span")
        missionIcon.classList.add("fa-solid", "fa-map-pin")
        const missionText = document.createElement("p")
        missionText.textContent = mission.getName()
        const closeBtn = document.createElement("span")
        const elId = missionText.textContent.split(" ")
        closeBtn.id = elId.join("").toLowerCase()
        closeBtn.classList.add("fa-solid", "fa-x")
        
        closeBtn.addEventListener("click", () => {
            quest.deleteMission(mission.getName())
            console.log(quest.getQuestMenu().getMissions())
            displayMissions(quest.getQuestMenu().getMissions())
        })

        missionElement.addEventListener("click", () => {
            document.querySelectorAll(".mission-element").forEach(mission => {
                mission.classList.remove("active-mission")
                document.querySelectorAll(".fa-map-pin").forEach(pin => {
                    pin.classList.remove("pinned")
                })
            })
            missionElement.classList.add("active-mission")
            missionIcon.classList.add("pinned")
            setActiveMission(quest.getQuestMenu().getMission(mission.getName()))
        })

        // TODO enable name editing(?)

        missionElement.append(missionIcon, missionText, closeBtn)
        return missionElement
    }
}

function createObjectiveElement(objective) {
    const objectiveElement = document.createElement("li")
    objectiveElement.classList.add("objective-element")

    const objCheckbox = document.createElement("input")
    objCheckbox.setAttribute("type", "checkbox")
    objCheckbox.id = objective.getName()

    const objCheckboxLabel = document.createElement("label")
    objCheckboxLabel.setAttribute("for", objective.getName())

    const objectiveBox = document.createElement("div")
    objectiveBox.classList.add("objective-box")

    const textDateBox = document.createElement("div")
    textDateBox.classList.add("obj-textdate-box")

    const objectiveText = document.createElement("p")
    objectiveText.textContent = objective.getName()

    const objectiveDate = document.createElement("p")
    objectiveDate.textContent = objective.getDateFormatted()

    const objectiveDescription = document.createElement("p")
    objectiveDescription.classList.add("objective-description")
    objectiveDescription.textContent = objective.getDescription()


    textDateBox.addEventListener("click", (e) => {
        document.querySelectorAll(".obj-textdate-box").forEach(el => {
            if(el !== e.target) {
                el.classList.remove("active-objective")
                el.closest(".objective-box").querySelector(".objective-description").classList.remove("active-objective-description")
            }
        })
        textDateBox.classList.toggle("active-objective")
        objectiveDescription.classList.toggle("active-objective-description")
    })

    textDateBox.append(objectiveText, objectiveDate)
    objectiveBox.append(textDateBox, objectiveDescription)
    objectiveElement.append(objCheckbox, objCheckboxLabel, objectiveBox)
    return objectiveElement

}

function displayMissions(missionList) {
    const list = missionList
    const missionsListElement = document.querySelector(".missions-list")
    missionsListElement.textContent = ""
    for(const mission of list) {
        missionsListElement.appendChild(createMissionElement(mission))
    }
    // set list = missionList
    // iterate through missionList
        // for each mission, createMissionElement()
}

function displayObjectives(mission) {
    const objectivesElement = document.querySelector(".objectives")
    const objectiveList = mission.getObjectives()
    for(const objective of objectiveList) {
        objectivesElement.appendChild(createObjectiveElement(objective))
    }
}

function setActiveMission(mission) {
    const objectivesElement = document.querySelector(".objectives")
    if (mission.getObjectives().length === 0) {
        clear(objectivesElement)
        const noObjectivesElement = document.createElement("p")
        noObjectivesElement.classList.add("no-objectives")
        noObjectivesElement.textContent = "This mission has no objectives yet."
        objectivesElement.appendChild(noObjectivesElement)
    } else {
        clear(objectivesElement)
        displayObjectives(mission)
    }
    return objectivesElement
}

function clear(element) {
    element.textContent = ""
}

function render() {
    displayMissions(quest.getQuestMenu().getMissions())
    setActiveMission(quest.getQuestMenu().getMission("Today"))
    document.querySelectorAll(".mission-element")[0].classList.add("active-mission")
    document.querySelectorAll(".fa-map-pin")[0].classList.add("pinned")
}

function renderToday() {
    
}



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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




// TODO move listeners to creator functions


_dom__WEBPACK_IMPORTED_MODULE_2__.render()

// Listeners

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.toggleForm) })

/*
const missionElements = document.querySelectorAll(".mission-element")
const pins = document.querySelectorAll(".fa-map-pin")

missionElements[0].classList.add("active-mission")
pins[0].classList.add("pinned")

missionElements.forEach(mission => {
    mission.addEventListener("click", (e) => {
        missionElements.forEach(el => {
            dom.handleClass(el, "active-mission", "remove")
            pins.forEach(pin => {
                dom.handleClass(pin, "pinned", "remove")
            })
        })
        const missionName = e.target.textContent
        console.log(missionName)
        dom.handleClass(mission, "active-mission", "add")
        dom.handleClass(mission.children[0], "pinned", "add")
        dom.setActiveMission(dom.quest.getQuestMenu().getMission(missionName))
    })
})

const objectiveTextDateBox = document.querySelectorAll(".obj-textdate-box") 

objectiveTextDateBox.forEach(obj => {
    obj.addEventListener("click", (e) => {
        objectiveTextDateBox.forEach(el => {
            if(el !== e.target) {
                el.classList.remove("active-objective")
                el.closest(".objective-box").querySelector(".objective-description").classList.remove("active-objective-description")
            }
        })
        if(e.target.closest(".objective-box").querySelector(".objective-description").classList.contains("active-objective-description")) {
            e.target.classList.remove("active-objective")
            e.target.closest(".objective-box").querySelector(".objective-description").classList.remove("active-objective-description")
            return
        }
        e.target.classList.toggle("active-objective")
        e.target.closest(".objective-box").querySelector(".objective-description").classList.toggle("active-objective-description")
        
    })
})

*/


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlLQUFpSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsYUFBYSxlQUFlLGVBQWUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsY0FBYyxlQUFlLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLGFBQWEsZUFBZSxlQUFlLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxlQUFlLGVBQWUsTUFBTSxNQUFNLFVBQVUsVUFB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDdkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNhO0FBQ1g7O0FBRTVCOzs7QUFHQSx3Q0FBVTs7QUFFVjs7QUFFQTs7QUFFQSxvQ0FBb0MsaUNBQWlDLDRDQUFjLEdBQUc7O0FBRXRGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL01pc3Npb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9RdWVzdE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBcIlwiO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IFwiXCI7XG59XG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMsIDEwMCUsIDk3JSk7XG4gIGNvbG9yOiAjZmY0ZDRkO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMsIDEwMCUsIDk3JSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5tYWluIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDc3JSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAuc2lkZWJhciBoMiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3NyUpO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xuICByb3ctZ2FwOiA1cHg7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IC5hY3RpdmUtbWlzc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWUxZTE7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgZ2FwOiAxMHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWUxZTE7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpOmhvdmVyIC5mYS1tYXAtcGluIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpOmhvdmVyIHAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCBsaSAuZmEtbWFwLXBpbiB7XG4gIGNvbG9yOiAjZmYxYTFhO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCBsaSAucGlubmVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpIC5mYS14IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDAuNHJlbSAwLjNyZW0gMC40cmVtO1xuICBjb2xvcjogI2U2MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGkgLmZhLXg6aG92ZXIge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XG59XG5tYWluIC5zaWRlYmFyICNhZGQtbWlzc2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IDE3MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJFZHUgU0EgQmVnaW5uZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzQsIDY2JSwgMzklKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMmFjZmJmO1xufVxubWFpbiAuc2lkZWJhciAjYWRkLW1pc3Npb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmYmY7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMjZiYWFiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxubWFpbiAuY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3MCUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbn1cbm1haW4gLmNvbnRlbnQgaDIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzclKTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDVweCk7XG4gIHJvdy1nYXA6IDVweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5uby1vYmplY3RpdmVzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgbGkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCA5MyUsIDg0JSk7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCB7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBcIlwiO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGlucHV0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTdmN2Y7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgbGFiZWwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBib3gtc2hhZG93OiAtMnB4IC0ycHggaW5zZXQgI2ZmYzZhMywgMnB4IDJweCBpbnNldCAjZmZjNmEzO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGxhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAuYWN0aXZlLW9iamVjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGM5Yzk7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgLm9iamVjdGl2ZS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgLm9iamVjdGl2ZS1ib3ggLm9iai10ZXh0ZGF0ZS1ib3gge1xuICBwYWRkaW5nOiAwLjNyZW0gMC4zcmVtIDAuM3JlbSAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAub2JqZWN0aXZlLWJveDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTFlMTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAub2JqZWN0aXZlLWJveCAub2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDkzJSwgODQlKTtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IC5vYmplY3RpdmUtYm94IC5hY3RpdmUtb2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjk4OTg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAubWlzc2lvbi1mb3JtLFxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZS1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5zaG93LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA5MyUsIDg0JSk7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICB3aWR0aDogMzUwcHg7XG4gIGdhcDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgI2ZhN2Y3ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiRWR1IFNBIEJlZ2lubmVyXCIsIGN1cnNpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIHNlbGVjdCB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRWR1IFNBIEJlZ2lubmVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3NCwgNjYlLCAzOSUpO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzJhY2ZiZjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFjZmJmO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzI2YmFhYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbm1haW4gLmNvbnRlbnQgI2FkZC1vYmplY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxNzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiRWR1IFNBIEJlZ2lubmVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTc0LCA2NiUsIDM5JSk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzJhY2ZiZjtcbn1cbm1haW4gLmNvbnRlbnQgI2FkZC1vYmplY3RpdmU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmYmY7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMjZiYWFiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmZvb3Rlcjpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNzclKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QUFOQTtFQUNJLGFBQUE7RUFDQSx1Q0NFTztFRERQLHdCQ0xXO0VBMEJYLGFBQUE7RUFDQSxzQkRyQmM7RUNzQmQsZUR0QnNCO0VDdUJ0QixtQkR2QjBCO0FBWTlCOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQ1RJO0VEVUosY0FBQTtBQVlKOztBQVRBO0VDU0ksYUFBQTtFQUNBLG1CRFRjO0VDVWQsZURWbUI7RUNXbkIsbUJEWHVCO0VBQ3ZCLFlBQUE7RUFDQSxvQ0NoQkk7RURpQkosYUFBQTtBQWVKO0FBYkk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQWVSO0FBYlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FBZVo7QUFaUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBY1o7QUFaWTtFQUNJLHlCQUFBO0FBY2hCO0FBWFk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VDOUJaLGFBQUE7RUFDQSxtQkQ4QjBCO0VDN0IxQixtQkQ2QitCO0VDNUIvQixtQkQ0QnVDO0FBZ0IzQztBQWRnQjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQWdCcEI7QUFkb0I7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBZ0J4QjtBQWJvQjtFQUNJLGVBQUE7RUFDQSwwQkFBQTtBQWV4QjtBQVZnQjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQVlwQjtBQVRnQjtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFXcEI7QUFSZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQVVwQjtBQVJvQjtFQUNJLGlCQUFBO0VBQ0EsbUNDaEdUO0FEMEdmO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0MzR0Q7RUQ0R0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQy9HSjtFRGdISSxpQkFBQTtFQUNBLG1DQUFBO0FBR1o7QUFEWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFHaEI7QUFFSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQy9HSixhQUFBO0VBQ0Esc0JEK0drQjtFQzlHbEIsZUQ4RzBCO0VDN0cxQixtQkQ2RzhCO0FBR2xDO0FBRFE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FBR1o7QUFBUTtFQUNJLFlBQUE7RUN6SFIsYUFBQTtFQUNBLHNCRHlIc0I7RUN4SHRCLG1CRHdIOEI7RUN2SDlCLHVCRHVIc0M7QUFLMUM7QUFIWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBS2hCO0FBSGdCO0VBQ0ksZUFBQTtBQUtwQjtBQUZnQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHFCQUFBO0FBSXBCO0FBRGdCO0VBQ0ksZUFBQTtFQ2pKaEIsYUFBQTtFQUNBLG1CRGlKOEI7RUNoSjlCLG1CRGdKbUM7RUMvSW5DLG1CRCtJMkM7QUFNL0M7QUFKb0I7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTXhCO0FBSG9CO0VBQ0kseUJBQUE7QUFLeEI7QUFGb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBEQUFBO0FBSXhCO0FBRndCO0VBQ0ksZUFBQTtBQUk1QjtBQUR3QjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUc1QjtBQUNvQjtFQUNJLHlCQUFBO0FBQ3hCO0FBRW9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUF4QjtBQUV3QjtFQUNJLG9DQUFBO0VDaE14QixhQUFBO0VBQ0EsbUJEZ01zQztFQy9MdEMsbUJEK0wyQztFQzlMM0MsOEJEOExtRDtBQUd2RDtBQUF3QjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQUU1QjtBQUN3QjtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NDek9yQjtFRDBPcUIsVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFDNUI7QUFFd0I7RUFDSSxVQUFBO0VBRUEsd0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUQ1QjtBQVFZOztFQUVJLGFBQUE7QUFOaEI7QUFTWTtFQUNJLGFBQUE7QUFQaEI7QUFVWTtFQUNJLGtDQ3ZRVDtFRHdRUyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQ3RQWixhQUFBO0VBQ0Esc0JEc1AwQjtFQ3JQMUIsbUJEcVBrQztFQ3BQbEMsdUJEb1AwQztBQUw5QztBQU9nQjtFQUNJLHVDQzlRVDtFRCtRUyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxwQjtBQVFnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTnBCO0FBU2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQ2pTVDtFRGtTUyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0N2U1o7RUR3U1ksbUNBQUE7QUFQcEI7QUFTb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBUHhCO0FBZVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0M3VEQ7RUQ4VEMsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQ2pVSjtFRGtVSSxpQkFBQTtFQUNBLG1DQUFBO0FBYlo7QUFlWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFiaEI7O0FBbUJBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFrQkk7RUFDSSxlQUFBO0FBaEJSO0FBbUJJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBakJSO0FBa0JRO0VBQ0ksd0JDbldFO0FEbVZkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cIixcIkBpbXBvcnQgJ3Jlc2V0cycsICd2YXJpYWJsZXMnO1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICBjb2xvcjogJHZpYnJhbnQtcGluaztcXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIFxcXCJcXFwiLCBcXFwiXFxcIilcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXG4gICAgY29sb3I6IGRhcmtlbigkdmlicmFudC1waW5rLCA1JSk7XFxufVxcblxcbm1haW4ge1xcbiAgICBAaW5jbHVkZSBmbGV4KHJvdywgXFxcIlxcXCIsIFxcXCJcXFwiKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJG1lZGl1bS1waW5rO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR2aWJyYW50LXBpbms7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR2aWJyYW50LXBpbms7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG1lZGl1bS1waW5rO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1pc3Npb25zLWxpc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgcGFkZGluZzogLjNyZW07XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcXG5cXG4gICAgICAgICAgICAuYWN0aXZlLW1pc3Npb24ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwaW5rLCAxMCUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDE1JSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBcXFwiXFxcIik7XFxuXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGluaywgMTAlKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC5mYS1tYXAtcGluIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5mYS1tYXAtcGluIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHZpYnJhbnQtcGluaywgMTUlKTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnBpbm5lZCB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmZhLXgge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM3JlbSAuNHJlbSAuM3JlbSAuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHZpYnJhbnQtcGluaywgMjUlKTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdmlicmFudC1waW5rO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpYnJhbnQtcGluaztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNhZGQtbWlzc2lvbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDUlKTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChib2xkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHZpYnJhbnQtcGluaztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBcXFwiXFxcIiwgXFxcIlxcXCIpO1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtLXBpbms7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAub2JqZWN0aXZlcy1ib3gge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgICAgICAgICAgIC5vYmplY3RpdmVzIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDVweCk7XFxuICAgICAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC5uby1vYmplY3RpdmVzIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHBpbms7XFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLm9iamVjdGl2ZS1lbGVtZW50IHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgXFxcIlxcXCIpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcGluaywgMTAlKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY3JlYW0sIDUlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggaW5zZXQgZGFya2VuKCRjcmVhbSwgMTUlKSwgMnB4IDJweCBpbnNldCBkYXJrZW4oJGNyZWFtLCAxNSUpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLW9iamVjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGluaywgNSUpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLm9iamVjdGl2ZS1ib3gge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vYmotdGV4dGRhdGUtYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjNyZW0gLjNyZW0gLjNyZW0gLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwaW5rLCAxMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAub2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLW9iamVjdGl2ZS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwaW5rLCA1JSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5taXNzaW9uLWZvcm0sXFxuICAgICAgICAgICAgLm9iamVjdGl2ZS1mb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNob3ctZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGZvcm0ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBkYXJrZW4oJHBpbmssIDEwJSk7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIsIGNlbnRlcik7XFxuICAgIFxcbiAgICAgICAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KGJvbGQpO1xcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChzZW1pLWJvbGQpO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDEwJSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JlZW4sIDEwJSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCA1JSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChib2xkKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG4gICAgICAgICNhZGQtb2JqZWN0aXZlIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYm90dG9tOiAxcmVtO1xcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWFpbkZvbnQ7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChzZW1pLWJvbGQpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDEwJSk7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JlZW4sIDEwJSk7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgNSUpO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KGJvbGQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogd2VpZ2h0KHNlbWktYm9sZCk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICRtZWRpdW0tcGluaztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIiR2aWJyYW50LXBpbms6IGhzbCgwLCAxMDAlLCA3MCUpO1xcbiRtZWRpdW0tcGluazogaHNsKDAsIDEwMCUsIDc3JSk7XFxuJHBpbms6IGhzbCgwLCA5MyUsIDg0JSk7XFxuJHNvZnQtcGluazogaHNsKDIzLCAxMDAlLCA5MyUpO1xcbiRjcmVhbTogaHNsKDIzLCAxMDAlLCA5NyUpO1xcbiRncmVlbjogaHNsKDE3NCwgNjYlLCAzOSUpO1xcbiRtYWluRm9udDogJ0VkdSBTQSBCZWdpbm5lcicsIGN1cnNpdmU7XFxuJG1vYmlsZS13aWR0aDogMzc1cHg7XFxuJGZvbnQtd2VpZ2h0czogKFxcbiAgICBcXFwicmVndWxhclxcXCI6IDQwMCxcXG4gICAgXFxcIm1lZGl1bVxcXCI6IDUwMCxcXG4gICAgXFxcInNlbWktYm9sZFxcXCI6IDYwMCxcXG4gICAgXFxcImJvbGRcXFwiOiA3MDBcXG4pO1xcblxcbkBmdW5jdGlvbiB3ZWlnaHQoJHdlaWdodC1uYW1lKSB7XFxuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udC13ZWlnaHRzLCAkd2VpZ2h0LW5hbWUpXFxufTtcXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXG4gICAgICAgIEBjb250ZW50OyAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuQG1peGluIGZsZXgoJGZsZXgtZGlyZWN0aW9uLCAkYWxpZ24sICRqdXN0aWZ5KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XFxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XFxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE1pc3Npb24gZnJvbSAnLi9tb2R1bGVzL01pc3Npb24nO1xuaW1wb3J0IE9iamVjdGl2ZSBmcm9tICcuL21vZHVsZXMvT2JqZWN0aXZlJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9TdG9yYWdlJztcblxuY29uc3QgcXVlc3QgPSBuZXcgU3RvcmFnZSgpXG5cbmNvbnN0IHRlc3RNaXNzaW9uID0gbmV3IE1pc3Npb24oXCJUZXN0aW5nIG1pc3Npb25cIilcbnF1ZXN0LmFkZE1pc3Npb24odGVzdE1pc3Npb24pXG5cbmNvbnN0IHRlc3RPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKFwiVGVzdCBPYmplY3RpdmVcIiwgXCJ0aGlzIGlzIGZvciB0ZXN0aW5nXCIsIFwiMjAyMy0wOC0xMFwiKVxucXVlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdGVzdE9iamVjdGl2ZSlcbmNvbnN0IGFub3RoZXJPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKFwiU2Vjb25kIG9iamVjdGl2ZVwiLCBcInNlY29uZCB0ZXN0XCIsIFwiMjAyMy0wOC0xMVwiKVxucXVlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgYW5vdGhlck9iamVjdGl2ZSlcblxuZnVuY3Rpb24gdG9nZ2xlRm9ybShidXR0b24pIHtcbiAgICBpZihidXR0b24udGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkFkZCBNaXNzaW9uXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzc2lvbi1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWZvcm1cIilcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlLWZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZS1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWZvcm1cIilcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzc2lvbi1mb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pIHtcbiAgICBpZihtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWVsZW1lbnRcIilcbiAgICAgICAgY29uc3QgbWlzc2lvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICBtaXNzaW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1tYXAtcGluXCIpXG4gICAgICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKVxuXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pc3Npb24tZWxlbWVudFwiKS5mb3JFYWNoKG1pc3Npb24gPT4ge1xuICAgICAgICAgICAgICAgIG1pc3Npb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1taXNzaW9uXCIpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS1tYXAtcGluXCIpLmZvckVhY2gocGluID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGluLmNsYXNzTGlzdC5yZW1vdmUoXCJwaW5uZWRcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgbWlzc2lvbkljb24uY2xhc3NMaXN0LmFkZChcInBpbm5lZFwiKVxuICAgICAgICAgICAgc2V0QWN0aXZlTWlzc2lvbihxdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKG1pc3Npb25UZXh0LnRleHRDb250ZW50KSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZChtaXNzaW9uSWNvbiwgbWlzc2lvblRleHQpXG4gICAgICAgIHJldHVybiBtaXNzaW9uRWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWVsZW1lbnRcIilcbiAgICAgICAgY29uc3QgbWlzc2lvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICBtaXNzaW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1tYXAtcGluXCIpXG4gICAgICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKVxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIGNvbnN0IGVsSWQgPSBtaXNzaW9uVGV4dC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilcbiAgICAgICAgY2xvc2VCdG4uaWQgPSBlbElkLmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS14XCIpXG4gICAgICAgIFxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcXVlc3QuZGVsZXRlTWlzc2lvbihtaXNzaW9uLmdldE5hbWUoKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpXG4gICAgICAgICAgICBkaXNwbGF5TWlzc2lvbnMocXVlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKSlcbiAgICAgICAgfSlcblxuICAgICAgICBtaXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taXNzaW9uLWVsZW1lbnRcIikuZm9yRWFjaChtaXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmEtbWFwLXBpblwiKS5mb3JFYWNoKHBpbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBpbi5jbGFzc0xpc3QucmVtb3ZlKFwicGlubmVkXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW1pc3Npb25cIilcbiAgICAgICAgICAgIG1pc3Npb25JY29uLmNsYXNzTGlzdC5hZGQoXCJwaW5uZWRcIilcbiAgICAgICAgICAgIHNldEFjdGl2ZU1pc3Npb24ocXVlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uLmdldE5hbWUoKSkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVE9ETyBlbmFibGUgbmFtZSBlZGl0aW5nKD8pXG5cbiAgICAgICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kKG1pc3Npb25JY29uLCBtaXNzaW9uVGV4dCwgY2xvc2VCdG4pXG4gICAgICAgIHJldHVybiBtaXNzaW9uRWxlbWVudFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpIHtcbiAgICBjb25zdCBvYmplY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgb2JqZWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWVsZW1lbnRcIilcblxuICAgIGNvbnN0IG9iakNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgb2JqQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpXG4gICAgb2JqQ2hlY2tib3guaWQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpXG5cbiAgICBjb25zdCBvYmpDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgb2JqQ2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgb2JqZWN0aXZlLmdldE5hbWUoKSlcblxuICAgIGNvbnN0IG9iamVjdGl2ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBvYmplY3RpdmVCb3guY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZS1ib3hcIilcblxuICAgIGNvbnN0IHRleHREYXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHREYXRlQm94LmNsYXNzTGlzdC5hZGQoXCJvYmotdGV4dGRhdGUtYm94XCIpXG5cbiAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldE5hbWUoKVxuXG4gICAgY29uc3Qgb2JqZWN0aXZlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgb2JqZWN0aXZlRGF0ZS50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKClcblxuICAgIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpXG4gICAgb2JqZWN0aXZlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKVxuXG5cbiAgICB0ZXh0RGF0ZUJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmotdGV4dGRhdGUtYm94XCIpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaWYoZWwgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vYmplY3RpdmVcIilcbiAgICAgICAgICAgICAgICBlbC5jbG9zZXN0KFwiLm9iamVjdGl2ZS1ib3hcIikucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZGVzY3JpcHRpb25cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vYmplY3RpdmUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGV4dERhdGVCb3guY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZS1vYmplY3RpdmVcIilcbiAgICAgICAgb2JqZWN0aXZlRGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZS1vYmplY3RpdmUtZGVzY3JpcHRpb25cIilcbiAgICB9KVxuXG4gICAgdGV4dERhdGVCb3guYXBwZW5kKG9iamVjdGl2ZVRleHQsIG9iamVjdGl2ZURhdGUpXG4gICAgb2JqZWN0aXZlQm94LmFwcGVuZCh0ZXh0RGF0ZUJveCwgb2JqZWN0aXZlRGVzY3JpcHRpb24pXG4gICAgb2JqZWN0aXZlRWxlbWVudC5hcHBlbmQob2JqQ2hlY2tib3gsIG9iakNoZWNrYm94TGFiZWwsIG9iamVjdGl2ZUJveClcbiAgICByZXR1cm4gb2JqZWN0aXZlRWxlbWVudFxuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNaXNzaW9ucyhtaXNzaW9uTGlzdCkge1xuICAgIGNvbnN0IGxpc3QgPSBtaXNzaW9uTGlzdFxuICAgIGNvbnN0IG1pc3Npb25zTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb25zLWxpc3RcIilcbiAgICBtaXNzaW9uc0xpc3RFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIlxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIGxpc3QpIHtcbiAgICAgICAgbWlzc2lvbnNMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNaXNzaW9uRWxlbWVudChtaXNzaW9uKSlcbiAgICB9XG4gICAgLy8gc2V0IGxpc3QgPSBtaXNzaW9uTGlzdFxuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBtaXNzaW9uTGlzdFxuICAgICAgICAvLyBmb3IgZWFjaCBtaXNzaW9uLCBjcmVhdGVNaXNzaW9uRWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlPYmplY3RpdmVzKG1pc3Npb24pIHtcbiAgICBjb25zdCBvYmplY3RpdmVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlc1wiKVxuICAgIGNvbnN0IG9iamVjdGl2ZUxpc3QgPSBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKVxuICAgIGZvcihjb25zdCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlTGlzdCkge1xuICAgICAgICBvYmplY3RpdmVzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVNaXNzaW9uKG1pc3Npb24pIHtcbiAgICBjb25zdCBvYmplY3RpdmVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlc1wiKVxuICAgIGlmIChtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY2xlYXIob2JqZWN0aXZlc0VsZW1lbnQpXG4gICAgICAgIGNvbnN0IG5vT2JqZWN0aXZlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBub09iamVjdGl2ZXNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuby1vYmplY3RpdmVzXCIpXG4gICAgICAgIG5vT2JqZWN0aXZlc0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlRoaXMgbWlzc2lvbiBoYXMgbm8gb2JqZWN0aXZlcyB5ZXQuXCJcbiAgICAgICAgb2JqZWN0aXZlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm9PYmplY3RpdmVzRWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhcihvYmplY3RpdmVzRWxlbWVudClcbiAgICAgICAgZGlzcGxheU9iamVjdGl2ZXMobWlzc2lvbilcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdGl2ZXNFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIlxufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZGlzcGxheU1pc3Npb25zKHF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpXG4gICAgc2V0QWN0aXZlTWlzc2lvbihxdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKFwiVG9kYXlcIikpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taXNzaW9uLWVsZW1lbnRcIilbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1taXNzaW9uXCIpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS1tYXAtcGluXCIpWzBdLmNsYXNzTGlzdC5hZGQoXCJwaW5uZWRcIilcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kYXkoKSB7XG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheU1pc3Npb25zLFxuICAgIGNsZWFyLFxuICAgIHRvZ2dsZUZvcm0sXG4gICAgcmVuZGVyLFxuICAgIHNldEFjdGl2ZU1pc3Npb24sXG59IiwiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRPYmplY3RpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXM7XG4gIH1cblxuICBzZXRPYmplY3RpdmVzKG9iamVjdGl2ZXMpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBvYmplY3RpdmVzO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gb2JqTmFtZSk7XG4gIH1cblxuICBhZGRPYmplY3RpdmUobmV3T2JqKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBuZXdPYmoubmFtZSkpIHtcbiAgICAgIHRoaXMub2JqZWN0aXZlcy5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSB0aGlzLm9iamVjdGl2ZXMuZmlsdGVyKChvYmopID0+IG9iai5uYW1lICE9PSBvYmpOYW1lKVxuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMl1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVswXVxuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3RNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IFtdXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRvZGF5XCIpKVxuICAgIH1cblxuICAgIHNldE1pc3Npb25zKG1pc3Npb25zKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBtaXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSlcbiAgICB9XG5cbiAgICBhZGRNaXNzaW9uKG5ld01pc3Npb24pIHtcbiAgICAgICAgaWYoIXRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBuZXdNaXNzaW9uLm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3TWlzc2lvbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSB0aGlzLm1pc3Npb25zLmZpbHRlcigobWlzc2lvbikgPT4gbWlzc2lvbi5uYW1lICE9PSBtaXNzaW9uTmFtZSlcbiAgICAgICAgLyogY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpICovXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHsgIFxuICAgIHNhdmVRdWVzdE1lbnUoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXN0bWVudVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICBnZXRRdWVzdE1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IFF1ZXN0TWVudSgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0bWVudVwiKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuc2V0TWlzc2lvbnMoXG4gICAgICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgICAgIC5tYXAobWlzc2lvbiA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIG5ldyBNaXNzaW9uKCksIG1pc3Npb25cbiAgICAgICAgICAgICkpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgLmZvckVhY2gobWlzc2lvbiA9PiBcbiAgICAgICAgICAgIG1pc3Npb24uc2V0T2JqZWN0aXZlcyhcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9PiBPYmplY3QuYXNzaWduKG5ldyBPYmplY3RpdmUsIG9iaikpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHF1ZXN0c01lbnVcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgcGFyYW1ldGVycyB3aXRoIC1OYW1lIGhhcyAuZ2V0TmFtZSgpIG9yIGl0IHdpbGwgZGVsZXRlIHdyb25nIGl0ZW1cblxuICAgIGFkZE1pc3Npb24obWlzc2lvbikge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmFkZE1pc3Npb24obWlzc2lvbilcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU1pc3Npb24ob2xkTWlzc2lvbk5hbWUsIG5ld01pc3Npb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihvbGRNaXNzaW9uTmFtZSkuc2V0TmFtZShuZXdNaXNzaW9uTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgYWRkT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5hZGRPYmplY3RpdmUob2JqZWN0aXZlKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5kZWxldGVPYmplY3RpdmUob2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgcmVuYW1lT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lLCBuZXdPYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlKG9iak5hbWUpLnNldE5hbWUobmV3T2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvU3RvcmFnZSdcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSdcblxuLy8gVE9ETyBtb3ZlIGxpc3RlbmVycyB0byBjcmVhdG9yIGZ1bmN0aW9uc1xuXG5cbmRvbS5yZW5kZXIoKVxuXG4vLyBMaXN0ZW5lcnNcblxuY29uc3Qgc2hvd0Zvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93LWZvcm0tYnV0dG9uXCIpXG5cbnNob3dGb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLnRvZ2dsZUZvcm0pIH0pXG5cbi8qXG5jb25zdCBtaXNzaW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pc3Npb24tZWxlbWVudFwiKVxuY29uc3QgcGlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmEtbWFwLXBpblwiKVxuXG5taXNzaW9uRWxlbWVudHNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1taXNzaW9uXCIpXG5waW5zWzBdLmNsYXNzTGlzdC5hZGQoXCJwaW5uZWRcIilcblxubWlzc2lvbkVsZW1lbnRzLmZvckVhY2gobWlzc2lvbiA9PiB7XG4gICAgbWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbWlzc2lvbkVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZG9tLmhhbmRsZUNsYXNzKGVsLCBcImFjdGl2ZS1taXNzaW9uXCIsIFwicmVtb3ZlXCIpXG4gICAgICAgICAgICBwaW5zLmZvckVhY2gocGluID0+IHtcbiAgICAgICAgICAgICAgICBkb20uaGFuZGxlQ2xhc3MocGluLCBcInBpbm5lZFwiLCBcInJlbW92ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWlzc2lvbk5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICBjb25zb2xlLmxvZyhtaXNzaW9uTmFtZSlcbiAgICAgICAgZG9tLmhhbmRsZUNsYXNzKG1pc3Npb24sIFwiYWN0aXZlLW1pc3Npb25cIiwgXCJhZGRcIilcbiAgICAgICAgZG9tLmhhbmRsZUNsYXNzKG1pc3Npb24uY2hpbGRyZW5bMF0sIFwicGlubmVkXCIsIFwiYWRkXCIpXG4gICAgICAgIGRvbS5zZXRBY3RpdmVNaXNzaW9uKGRvbS5xdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKSlcbiAgICB9KVxufSlcblxuY29uc3Qgb2JqZWN0aXZlVGV4dERhdGVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9iai10ZXh0ZGF0ZS1ib3hcIikgXG5cbm9iamVjdGl2ZVRleHREYXRlQm94LmZvckVhY2gob2JqID0+IHtcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIG9iamVjdGl2ZVRleHREYXRlQm94LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaWYoZWwgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vYmplY3RpdmVcIilcbiAgICAgICAgICAgICAgICBlbC5jbG9zZXN0KFwiLm9iamVjdGl2ZS1ib3hcIikucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZGVzY3JpcHRpb25cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vYmplY3RpdmUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi5vYmplY3RpdmUtYm94XCIpLnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1vYmplY3RpdmUtZGVzY3JpcHRpb25cIikpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtb2JqZWN0aXZlXCIpXG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdGl2ZS1ib3hcIikucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZGVzY3JpcHRpb25cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vYmplY3RpdmUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtb2JqZWN0aXZlXCIpXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIub2JqZWN0aXZlLWJveFwiKS5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZS1kZXNjcmlwdGlvblwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlLW9iamVjdGl2ZS1kZXNjcmlwdGlvblwiKVxuICAgICAgICBcbiAgICB9KVxufSlcblxuKi9cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9