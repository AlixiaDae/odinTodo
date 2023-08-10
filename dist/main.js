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
main .content .objectives-box .objectives .message {
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
main .content .objectives-box .objectives .objective-element input, main .content .objectives-box .objectives .objective-element form select, main .content .objectives-box form .objectives .objective-element select {
  width: 0;
  height: 0;
  visibility: hidden;
}
main .content .objectives-box .objectives .objective-element input:checked + label:after, main .content .objectives-box .objectives .objective-element form select:checked + label:after, main .content .objectives-box form .objectives .objective-element select:checked + label:after {
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
main .content .objectives-box form input, main .content .objectives-box form select {
  font-family: "Edu SA Beginner", cursive;
  width: 100%;
  height: 30px;
  padding-left: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/_resets.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    list-style-type: none;\n}","@import 'resets', 'variables';\n\nbody {\n    height: 100vh;\n    font-family: $mainFont;\n    color: $vibrant-pink;\n    @include flex(column, \"\", \"\")\n}\n\nheader {\n    text-align: center;\n    padding: 1rem;\n    font-size: 2rem;\n    background-color: $cream;\n    color: darken($vibrant-pink, 5%);\n}\n\nmain {\n    @include flex(row, \"\", \"\");\n    flex-grow: 1;\n    background-color: $cream;\n    padding: 1rem;\n\n    .sidebar {\n        width: 500px;\n        text-align: center;\n        border-top: 1px solid $vibrant-pink;\n        border-right: 1px solid $medium-pink;\n        border-bottom: 1px solid $vibrant-pink;\n        border-left: 1px solid $vibrant-pink;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        position: relative;\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $medium-pink;\n        }\n\n        .missions-list {\n            display: grid;\n            padding: .3rem;\n            grid-template-rows: repeat(10, 50px);\n            row-gap: 5px;\n\n            .active-mission {\n                background-color: lighten($pink, 10%);\n            }\n\n            li {\n                font-size: 1.5rem;\n                padding-left: 2rem;\n                gap: 10px;\n                color: lighten(black, 15%);\n                border-radius: 5px;\n                position: relative;\n                @include flex(row, center, \"\");\n\n                &:hover {\n                    cursor: pointer;\n                    background-color: lighten($pink, 10%);\n\n                    .fa-map-pin {\n                        transform: rotate(300deg);\n                        text-decoration: underline;\n                    }\n\n                    p {\n                        cursor: pointer;\n                        text-decoration: underline;\n                    }\n\n                }\n\n                .fa-map-pin {\n                    color: darken($vibrant-pink, 15%);\n                    transform: rotate(270deg);\n                }\n\n                .pinned {\n                    transform: rotate(300deg);\n                    text-decoration: underline;\n                }\n\n                .fa-x {\n                    position: absolute;\n                    right: 2rem;\n                    padding: .3rem .4rem .3rem .4rem;\n                    color: darken($vibrant-pink, 25%);\n                    border-radius: 25px;\n                    font-size: 12px;\n                    border: 2px solid $vibrant-pink;\n\n                    &:hover {\n                        color: whitesmoke;\n                        background-color: $vibrant-pink;\n                    }\n                }\n\n            }\n\n            \n        }\n\n        #add-mission {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n\n    .content {\n        width: 90%;\n        text-align: center;\n        position: relative;\n        border-top: 1px solid $vibrant-pink;\n        border-right: 1px solid $vibrant-pink;\n        border-bottom: 1px solid $vibrant-pink;\n        border-top-right-radius: 10px;\n        border-bottom-right-radius: 10px;\n        @include flex(column, \"\", \"\");\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $medium-pink;\n        }\n\n        .objectives-box {\n            height: 100%;\n            @include flex(column, center, center);\n\n            .objectives {\n                height: 100%;\n                width: 100%;\n                padding: 1rem;\n                color: black;\n                display: grid;\n                grid-template-rows: repeat(10, 45px);\n                row-gap: 5px;\n                \n                .message {\n                    font-size: 24px;\n                }\n\n                li {\n                    text-align: left;\n                    font-size: 1.5rem;\n                    border-bottom: 1px solid $pink;\n                    letter-spacing: 1.5px;\n                }\n\n                .objective-element {\n                    padding: .3rem;\n                    @include flex(row, center, \"\");\n\n                    input {\n                        width: 0;\n                        height: 0;\n                        visibility: hidden;\n                    }\n\n                    input:checked + label:after {\n                        background-color: darken($pink, 10%);\n                    }\n\n                    label {\n                        width: 30px;\n                        height: 30px;\n                        position: relative;\n                        background-color: darken($cream, 5%);\n                        border-radius: 200px;\n                        box-shadow: -2px -2px inset darken($cream, 15%), 2px 2px inset darken($cream, 15%);\n\n                        &:hover {\n                            cursor: pointer;\n                        }\n\n                        &:after {\n                            content: \"\";\n                            width: 20px;\n                            height: 20px;\n                            position: absolute;\n                            top: 5px;\n                            left: 5px;\n                            border-radius: 200px;\n                        }\n                    }\n\n                    .active-objective {\n                        background-color: lighten($pink, 5%);\n                    }\n\n                    .objective-box {\n                        width: 100%;\n                        border-radius: 5px;\n                        margin-left: .5rem;\n                        position: relative;\n\n                        .obj-textdate-box {\n                            padding: .3rem .3rem .3rem .5rem;\n                            @include flex(row, center, space-between);\n                        }\n\n                        &:hover {\n                            cursor: pointer;\n                            background-color: lighten($pink, 10%);\n                        }\n\n                        .objective-description {\n                            position: absolute;\n                            left: 0;\n                            right: 0;\n                            border-bottom-left-radius: 5px;\n                            border-bottom-right-radius: 5px;\n                            height: 0;\n                            visibility: hidden;\n                            background-color: $pink;\n                            z-index: 3;\n                            padding: .5rem;\n                            transition: all 0.5s ease;\n                            opacity: 0;\n                        }\n\n                        .active-objective-description {\n                            opacity: 1;\n                            \n                            transform: translateY(0);\n                            height: 50px;\n                            visibility: visible;\n                            background-color: darken($pink, 5%);\n                        }\n\n                    }\n                }\n            }\n\n            .mission-form,\n            .objective-form {\n                display: none;\n            }\n\n            .show-form {\n                display: flex;\n            }\n\n            form {\n                background-color: $pink;\n                margin-top: -100px;\n                padding: 1.5rem;\n                width: 350px;\n                gap: 15px;\n                position: absolute;\n                border-radius: 15px;\n                box-shadow: -3px -3px inset darken($pink, 10%);\n                @include flex(column, center, center);\n    \n                input {\n                    font-family: $mainFont;\n                    width: 100%;\n                    height: 30px;\n                    padding-left: 1rem;\n                    border-radius: 5px;\n                    font-size: 1rem;\n                    font-weight: weight(bold);\n                    letter-spacing: 2px;\n                }\n    \n                select {\n                    @extend input\n                }\n    \n                button {\n                    width: 100%;\n                    border: none;\n                    border-radius: 5px;\n                    font-family: $mainFont;\n                    font-size: 1rem;\n                    font-weight: weight(semi-bold);\n                    height: 35px;\n                    color: whitesmoke;\n                    background-color: $green;\n                    box-shadow: -3px -3px inset lighten($green, 10%);\n\n                    &:hover {\n                        cursor: pointer;\n                        background-color: lighten($green, 10%);\n                        box-shadow: -3px -3px inset lighten($green, 5%);\n                        font-weight: weight(bold);\n                    }\n                }\n            }\n    \n        }\n\n        \n        #add-objective {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n}\n\nfooter {\n    background-color: black;\n    color: whitesmoke;\n    padding: .8rem;\n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: weight(semi-bold);\n\n    &:hover {\n        cursor: default;\n    }\n\n    a {\n        text-decoration: none;\n        color: white;\n        &:hover {\n            color: $medium-pink;\n        }\n    }\n}","$vibrant-pink: hsl(0, 100%, 70%);\n$medium-pink: hsl(0, 100%, 77%);\n$pink: hsl(0, 93%, 84%);\n$soft-pink: hsl(23, 100%, 93%);\n$cream: hsl(23, 100%, 97%);\n$green: hsl(174, 66%, 39%);\n$mainFont: 'Edu SA Beginner', cursive;\n$mobile-width: 375px;\n$font-weights: (\n    \"regular\": 400,\n    \"medium\": 500,\n    \"semi-bold\": 600,\n    \"bold\": 700\n);\n\n@function weight($weight-name) {\n    @return map-get($font-weights, $weight-name)\n};\n\n@mixin mobile {\n    @media (max-width: $mobile-width) {\n        @content;        \n    }\n}\n\n@mixin flex($flex-direction, $align, $justify) {\n    display: flex;\n    flex-direction: $flex-direction;\n    align-items: $align;\n    justify-content: $justify;\n}"],"sourceRoot":""}]);
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
/* harmony export */   loadPage: () => (/* binding */ loadPage),
/* harmony export */   quest: () => (/* binding */ quest),
/* harmony export */   setActiveMission: () => (/* binding */ setActiveMission),
/* harmony export */   toggleForm: () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var _modules_Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Mission */ "./src/modules/Mission.js");
/* harmony import */ var _modules_Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Objective */ "./src/modules/Objective.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");




const quest = new _modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"]()

const testObjective = new _modules_Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Objective", "this is for testing", "2023-08-10")
quest.addObjective("Today", testObjective)
const anotherObjective = new _modules_Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Second objective", "second test", "2023-08-11")
quest.addObjective("Today", anotherObjective)

const forms = document.querySelectorAll("form")

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
            forms.forEach(form => {
                form.classList.remove("show-form")
            })
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
            displayMissions(quest.getQuestMenu().getMissions())
            clear(document.querySelector(".objectives"))
            const noMissionMessage = document.createElement("p")
            noMissionMessage.classList.add("message")
            noMissionMessage.textContent = "Please select a mission."
            document.querySelector(".objectives").appendChild(noMissionMessage)
            forms.forEach(form => {
                form.classList.remove("show-form")
            })
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
            setActiveMission(quest.getQuestMenu().getMission(missionText.textContent))
            forms.forEach(form => {
                form.classList.remove("show-form")
            })
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
            if (!el.closest(".objective-box").querySelector(".objective-description")) {
                el.classList.remove("active-objective")
            } else if(el !== e.target) {
                el.classList.remove("active-objective")
                el.closest(".objective-box").querySelector(".objective-description").classList.remove("active-objective-description")
            }
        })
        textDateBox.classList.toggle("active-objective")
        objectiveDescription.classList.toggle("active-objective-description")
    })

    if(objectiveDescription.textContent !== "") {
        textDateBox.append(objectiveText, objectiveDate)
        objectiveBox.append(textDateBox, objectiveDescription)
        objectiveElement.append(objCheckbox, objCheckboxLabel, objectiveBox)
    } else {
        textDateBox.append(objectiveText, objectiveDate)
        objectiveBox.append(textDateBox)
        objectiveElement.append(objCheckbox, objCheckboxLabel, objectiveBox)
    }

    
    return objectiveElement

}

function displayMissions(missionList) {
    const list = missionList
    const missionsListElement = document.querySelector(".missions-list")
    missionsListElement.textContent = ""
    for(const mission of list) {
        missionsListElement.appendChild(createMissionElement(mission))
    }
}

function displayObjectives(mission) {
    const objectivesElement = document.querySelector(".objectives")
    const objectiveList = mission.getObjectives()
    clear(objectivesElement)
    for(const objective of objectiveList) {
        objectivesElement.appendChild(createObjectiveElement(objective))
    }
}

function setActiveMission(mission) {
    const objectives = document.querySelector(".objectives")
    if(!mission) return
    if (mission.getObjectives().length === 0) {
        clear(objectives)
        const message = document.createElement("p")
        message.classList.add("message")
        message.textContent = "This mission has no objectives yet."
        objectives.appendChild(message)
    } else {
        clear(objectives)
        displayObjectives(mission)
    }
}

function clear(element) {
    element.textContent = ""
}

function loadPage() {
    displayMissions(quest.getQuestMenu().getMissions())
    setActiveMission(quest.getQuestMenu().getMission("Today"))
    document.querySelector(".mission-element").classList.add("active-mission")
    document.querySelector(".mission-element").children[0].classList.add("pinned")
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
/* harmony import */ var _modules_Mission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Mission */ "./src/modules/Mission.js");
/* harmony import */ var _modules_Objective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Objective */ "./src/modules/Objective.js");






// TODO move listeners to creator functions


_dom__WEBPACK_IMPORTED_MODULE_2__.loadPage()

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.toggleForm) })

// Forms
    // Mission
const missionForm = document.querySelector(".mission-form")
const missionNameInput = document.getElementById("missionName")
const submitMissionForm = document.getElementById("create-mission")

submitMissionForm.addEventListener("click", (e) => {
    e.preventDefault()
    if(missionNameInput.value === "") return
    const newMission = new _modules_Mission__WEBPACK_IMPORTED_MODULE_3__["default"](missionNameInput.value)
    _dom__WEBPACK_IMPORTED_MODULE_2__.quest.addMission(newMission)
    _dom__WEBPACK_IMPORTED_MODULE_2__.displayMissions(_dom__WEBPACK_IMPORTED_MODULE_2__.quest.getQuestMenu().getMissions())
    _dom__WEBPACK_IMPORTED_MODULE_2__.setActiveMission(_dom__WEBPACK_IMPORTED_MODULE_2__.quest.getQuestMenu().getMission(newMission.getName()))
    const elements = document.querySelectorAll(".mission-element")
    elements[elements.length -1].classList.add("active-mission")
    elements[elements.length -1].children[0].classList.add("pinned")
    missionForm.classList.remove("show-form")
})

    // Objective
const objectiveForm = document.querySelector(".objective-form")
const objNameInput = document.getElementById("objName")
const objDescription = document.getElementById("objDescription")
const objDate = document.getElementById("objDate")
const selectMission = document.getElementById("objMissionName")
const objectiveFormBtn = document.getElementById("add-objective")
const submitObjectiveFormBtn = document.getElementById("create-objective")

function setSelection(missionList) {
    const selectElement = document.getElementById("objMissionName")
    selectElement.textContent = ""
    for(const mission of missionList) {
        const option = document.createElement("option")
        option.value = mission.getName()
        option.textContent = mission.getName()
        selectElement.appendChild(option)
    }
    return selectElement
}

objectiveFormBtn.addEventListener("click", () => {
    setSelection(_dom__WEBPACK_IMPORTED_MODULE_2__.quest.getQuestMenu().getMissions())
})

submitObjectiveFormBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(objNameInput.value === "") return
    if(objDate.value === "") return
    const newObjective = new _modules_Objective__WEBPACK_IMPORTED_MODULE_4__["default"](objNameInput.value, objDescription.value, objDate.value)
    _dom__WEBPACK_IMPORTED_MODULE_2__.quest.addObjective(selectMission.value, newObjective)
    _dom__WEBPACK_IMPORTED_MODULE_2__.setActiveMission(_dom__WEBPACK_IMPORTED_MODULE_2__.quest.getQuestMenu().getMission(selectMission.value))
    objectiveForm.classList.remove("show-form")
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpS0FBaUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGVBQWUsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsZUFBZSxlQUFlLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLGNBQWMsZUFBZSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxhQUFhLGVBQWUsZUFBZSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsZUFBZSxlQUFlLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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LDBEQUFTO0FBQ3RDLElBQUksdUNBQVM7QUFDYixJQUFJLGtEQUFvQixDQUFDLHVDQUFTO0FBQ2xDO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL09iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1F1ZXN0TWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiRWR1IFNBIEJlZ2lubmVyXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNzAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbn1cblxuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMywgMTAwJSwgOTclKTtcbiAgY29sb3I6ICNmZjRkNGQ7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogXCJcIjtcbiAganVzdGlmeS1jb250ZW50OiBcIlwiO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMywgMTAwJSwgOTclKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbm1haW4gLnNpZGViYXIge1xuICB3aWR0aDogNTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3MCUpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzclKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3MCUpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3MCUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYWluIC5zaWRlYmFyIGgyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDc3JSk7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XG4gIHJvdy1nYXA6IDVweDtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgLmFjdGl2ZS1taXNzaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTFlMTtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBnYXA6IDEwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBcIlwiO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCBsaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTFlMTtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGk6aG92ZXIgLmZhLW1hcC1waW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGk6aG92ZXIgcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpIC5mYS1tYXAtcGluIHtcbiAgY29sb3I6ICNmZjFhMWE7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpIC5waW5uZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGkgLmZhLXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMC40cmVtIDAuM3JlbSAwLjRyZW07XG4gIGNvbG9yOiAjZTYwMDAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3MCUpO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCBsaSAuZmEteDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMTAwJSwgNzAlKTtcbn1cbm1haW4gLnNpZGViYXIgI2FkZC1taXNzaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTcwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3NCwgNjYlLCAzOSUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyYWNmYmY7XG59XG5tYWluIC5zaWRlYmFyICNhZGQtbWlzc2lvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhY2ZiZjtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyNmJhYWI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5tYWluIC5jb250ZW50IHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogXCJcIjtcbiAganVzdGlmeS1jb250ZW50OiBcIlwiO1xufVxubWFpbiAuY29udGVudCBoMiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3NyUpO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0NXB4KTtcbiAgcm93LWdhcDogNXB4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDkzJSwgODQlKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IHtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IFwiXCI7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgaW5wdXQsIG1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCBmb3JtIHNlbGVjdCwgbWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgc2VsZWN0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciwgbWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGZvcm0gc2VsZWN0OmNoZWNrZWQgKyBsYWJlbDphZnRlciwgbWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgc2VsZWN0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTdmN2Y7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgbGFiZWwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBib3gtc2hhZG93OiAtMnB4IC0ycHggaW5zZXQgI2ZmYzZhMywgMnB4IDJweCBpbnNldCAjZmZjNmEzO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGxhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAuYWN0aXZlLW9iamVjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGM5Yzk7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgLm9iamVjdGl2ZS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgLm9iamVjdGl2ZS1ib3ggLm9iai10ZXh0ZGF0ZS1ib3gge1xuICBwYWRkaW5nOiAwLjNyZW0gMC4zcmVtIDAuM3JlbSAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAub2JqZWN0aXZlLWJveDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTFlMTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAub2JqZWN0aXZlLWJveCAub2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDkzJSwgODQlKTtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IC5vYmplY3RpdmUtYm94IC5hY3RpdmUtb2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjk4OTg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAubWlzc2lvbi1mb3JtLFxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZS1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5zaG93LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA5MyUsIDg0JSk7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICB3aWR0aDogMzUwcHg7XG4gIGdhcDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgI2ZhN2Y3ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIGlucHV0LCBtYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzQsIDY2JSwgMzklKTtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyYWNmYmY7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhY2ZiZjtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyNmJhYWI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5tYWluIC5jb250ZW50ICNhZGQtb2JqZWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTcwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3NCwgNjYlLCAzOSUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyYWNmYmY7XG59XG5tYWluIC5jb250ZW50ICNhZGQtb2JqZWN0aXZlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFjZmJmO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzI2YmFhYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5mb290ZXI6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDc3JSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fcmVzZXRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0FDREo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsdUNDRU87RUREUCx3QkNMVztFQTBCWCxhQUFBO0VBQ0Esc0JEckJjO0VDc0JkLGVEdEJzQjtFQ3VCdEIsbUJEdkIwQjtBQVk5Qjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtF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QkFBQTtFQUNBLG9DQ2hVSjtFRGlVSSxpQkFBQTtFQUNBLG1DQUFBO0FBaEJaO0FBa0JZO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQWhCaEI7O0FBc0JBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUFxQkk7RUFDSSxlQUFBO0FBbkJSO0FBc0JJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBcEJSO0FBcUJRO0VBQ0ksd0JDbFdFO0FEK1VkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cIixcIkBpbXBvcnQgJ3Jlc2V0cycsICd2YXJpYWJsZXMnO1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICBjb2xvcjogJHZpYnJhbnQtcGluaztcXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIFxcXCJcXFwiLCBcXFwiXFxcIilcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjcmVhbTtcXG4gICAgY29sb3I6IGRhcmtlbigkdmlicmFudC1waW5rLCA1JSk7XFxufVxcblxcbm1haW4ge1xcbiAgICBAaW5jbHVkZSBmbGV4KHJvdywgXFxcIlxcXCIsIFxcXCJcXFwiKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJG1lZGl1bS1waW5rO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR2aWJyYW50LXBpbms7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR2aWJyYW50LXBpbms7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG1lZGl1bS1waW5rO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1pc3Npb25zLWxpc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgcGFkZGluZzogLjNyZW07XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcXG5cXG4gICAgICAgICAgICAuYWN0aXZlLW1pc3Npb24ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwaW5rLCAxMCUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDE1JSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBcXFwiXFxcIik7XFxuXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGluaywgMTAlKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC5mYS1tYXAtcGluIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5mYS1tYXAtcGluIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHZpYnJhbnQtcGluaywgMTUlKTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnBpbm5lZCB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmZhLXgge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM3JlbSAuNHJlbSAuM3JlbSAuNHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHZpYnJhbnQtcGluaywgMjUlKTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdmlicmFudC1waW5rO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpYnJhbnQtcGluaztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNhZGQtbWlzc2lvbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDUlKTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChib2xkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHZpYnJhbnQtcGluaztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBcXFwiXFxcIiwgXFxcIlxcXCIpO1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtLXBpbms7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAub2JqZWN0aXZlcy1ib3gge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgICAgICAgICAgIC5vYmplY3RpdmVzIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDVweCk7XFxuICAgICAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHBpbms7XFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLm9iamVjdGl2ZS1lbGVtZW50IHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgXFxcIlxcXCIpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcGluaywgMTAlKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY3JlYW0sIDUlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggaW5zZXQgZGFya2VuKCRjcmVhbSwgMTUlKSwgMnB4IDJweCBpbnNldCBkYXJrZW4oJGNyZWFtLCAxNSUpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLW9iamVjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGluaywgNSUpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLm9iamVjdGl2ZS1ib3gge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vYmotdGV4dGRhdGUtYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjNyZW0gLjNyZW0gLjNyZW0gLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwaW5rLCAxMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAub2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLW9iamVjdGl2ZS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwaW5rLCA1JSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5taXNzaW9uLWZvcm0sXFxuICAgICAgICAgICAgLm9iamVjdGl2ZS1mb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNob3ctZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGZvcm0ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBkYXJrZW4oJHBpbmssIDEwJSk7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIsIGNlbnRlcik7XFxuICAgIFxcbiAgICAgICAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KGJvbGQpO1xcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgaW5wdXRcXG4gICAgICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgNSUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoYm9sZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuICAgICAgICAjYWRkLW9iamVjdGl2ZSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJG1haW5Gb250O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMCUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDUlKTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChib2xkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHdlaWdodChzZW1pLWJvbGQpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgfVxcblxcbiAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkbWVkaXVtLXBpbms7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCIkdmlicmFudC1waW5rOiBoc2woMCwgMTAwJSwgNzAlKTtcXG4kbWVkaXVtLXBpbms6IGhzbCgwLCAxMDAlLCA3NyUpO1xcbiRwaW5rOiBoc2woMCwgOTMlLCA4NCUpO1xcbiRzb2Z0LXBpbms6IGhzbCgyMywgMTAwJSwgOTMlKTtcXG4kY3JlYW06IGhzbCgyMywgMTAwJSwgOTclKTtcXG4kZ3JlZW46IGhzbCgxNzQsIDY2JSwgMzklKTtcXG4kbWFpbkZvbnQ6ICdFZHUgU0EgQmVnaW5uZXInLCBjdXJzaXZlO1xcbiRtb2JpbGUtd2lkdGg6IDM3NXB4O1xcbiRmb250LXdlaWdodHM6IChcXG4gICAgXFxcInJlZ3VsYXJcXFwiOiA0MDAsXFxuICAgIFxcXCJtZWRpdW1cXFwiOiA1MDAsXFxuICAgIFxcXCJzZW1pLWJvbGRcXFwiOiA2MDAsXFxuICAgIFxcXCJib2xkXFxcIjogNzAwXFxuKTtcXG5cXG5AZnVuY3Rpb24gd2VpZ2h0KCR3ZWlnaHQtbmFtZSkge1xcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGZvbnQtd2VpZ2h0cywgJHdlaWdodC1uYW1lKVxcbn07XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxuICAgICAgICBAY29udGVudDsgICAgICAgIFxcbiAgICB9XFxufVxcblxcbkBtaXhpbiBmbGV4KCRmbGV4LWRpcmVjdGlvbiwgJGFsaWduLCAkanVzdGlmeSkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xcbiAgICBhbGlnbi1pdGVtczogJGFsaWduO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNaXNzaW9uIGZyb20gJy4vbW9kdWxlcy9NaXNzaW9uJztcbmltcG9ydCBPYmplY3RpdmUgZnJvbSAnLi9tb2R1bGVzL09iamVjdGl2ZSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvU3RvcmFnZSc7XG5cbmNvbnN0IHF1ZXN0ID0gbmV3IFN0b3JhZ2UoKVxuXG5jb25zdCB0ZXN0T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRlc3QgT2JqZWN0aXZlXCIsIFwidGhpcyBpcyBmb3IgdGVzdGluZ1wiLCBcIjIwMjMtMDgtMTBcIilcbnF1ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIHRlc3RPYmplY3RpdmUpXG5jb25zdCBhbm90aGVyT2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlNlY29uZCBvYmplY3RpdmVcIiwgXCJzZWNvbmQgdGVzdFwiLCBcIjIwMjMtMDgtMTFcIilcbnF1ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIGFub3RoZXJPYmplY3RpdmUpXG5cbmNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm1cIilcblxuZnVuY3Rpb24gdG9nZ2xlRm9ybShidXR0b24pIHtcbiAgICBpZihidXR0b24udGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkFkZCBNaXNzaW9uXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzc2lvbi1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWZvcm1cIilcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlLWZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZS1mb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWZvcm1cIilcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzc2lvbi1mb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pIHtcbiAgICBpZihtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWVsZW1lbnRcIilcbiAgICAgICAgY29uc3QgbWlzc2lvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICBtaXNzaW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1tYXAtcGluXCIpXG4gICAgICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKVxuXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pc3Npb24tZWxlbWVudFwiKS5mb3JFYWNoKG1pc3Npb24gPT4ge1xuICAgICAgICAgICAgICAgIG1pc3Npb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1taXNzaW9uXCIpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS1tYXAtcGluXCIpLmZvckVhY2gocGluID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGluLmNsYXNzTGlzdC5yZW1vdmUoXCJwaW5uZWRcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgbWlzc2lvbkljb24uY2xhc3NMaXN0LmFkZChcInBpbm5lZFwiKVxuICAgICAgICAgICAgc2V0QWN0aXZlTWlzc2lvbihxdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKG1pc3Npb25UZXh0LnRleHRDb250ZW50KSlcbiAgICAgICAgICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kKG1pc3Npb25JY29uLCBtaXNzaW9uVGV4dClcbiAgICAgICAgcmV0dXJuIG1pc3Npb25FbGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWlzc2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbWlzc2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tZWxlbWVudFwiKVxuICAgICAgICBjb25zdCBtaXNzaW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIG1pc3Npb25JY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1hcC1waW5cIilcbiAgICAgICAgY29uc3QgbWlzc2lvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9IG1pc3Npb24uZ2V0TmFtZSgpXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgY29uc3QgZWxJZCA9IG1pc3Npb25UZXh0LnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVxuICAgICAgICBjbG9zZUJ0bi5pZCA9IGVsSWQuam9pbihcIlwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhcIilcbiAgICAgICAgXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBxdWVzdC5kZWxldGVNaXNzaW9uKG1pc3Npb24uZ2V0TmFtZSgpKVxuICAgICAgICAgICAgZGlzcGxheU1pc3Npb25zKHF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpXG4gICAgICAgICAgICBjbGVhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZXNcIikpXG4gICAgICAgICAgICBjb25zdCBub01pc3Npb25NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIG5vTWlzc2lvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VcIilcbiAgICAgICAgICAgIG5vTWlzc2lvbk1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBzZWxlY3QgYSBtaXNzaW9uLlwiXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZXNcIikuYXBwZW5kQ2hpbGQobm9NaXNzaW9uTWVzc2FnZSlcbiAgICAgICAgICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pc3Npb24tZWxlbWVudFwiKS5mb3JFYWNoKG1pc3Npb24gPT4ge1xuICAgICAgICAgICAgICAgIG1pc3Npb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1taXNzaW9uXCIpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS1tYXAtcGluXCIpLmZvckVhY2gocGluID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGluLmNsYXNzTGlzdC5yZW1vdmUoXCJwaW5uZWRcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgbWlzc2lvbkljb24uY2xhc3NMaXN0LmFkZChcInBpbm5lZFwiKVxuICAgICAgICAgICAgc2V0QWN0aXZlTWlzc2lvbihxdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKG1pc3Npb25UZXh0LnRleHRDb250ZW50KSlcbiAgICAgICAgICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFRPRE8gZW5hYmxlIG5hbWUgZWRpdGluZyg/KVxuXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZChtaXNzaW9uSWNvbiwgbWlzc2lvblRleHQsIGNsb3NlQnRuKVxuICAgICAgICByZXR1cm4gbWlzc2lvbkVsZW1lbnRcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSB7XG4gICAgY29uc3Qgb2JqZWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIG9iamVjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZS1lbGVtZW50XCIpXG5cbiAgICBjb25zdCBvYmpDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG9iakNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxuICAgIG9iakNoZWNrYm94LmlkID0gb2JqZWN0aXZlLmdldE5hbWUoKVxuXG4gICAgY29uc3Qgb2JqQ2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIG9iakNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG9iamVjdGl2ZS5nZXROYW1lKCkpXG5cbiAgICBjb25zdCBvYmplY3RpdmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgb2JqZWN0aXZlQm94LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtYm94XCIpXG5cbiAgICBjb25zdCB0ZXh0RGF0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0RGF0ZUJveC5jbGFzc0xpc3QuYWRkKFwib2JqLXRleHRkYXRlLWJveFwiKVxuXG4gICAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgb2JqZWN0aXZlVGV4dC50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXROYW1lKClcblxuICAgIGNvbnN0IG9iamVjdGl2ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIG9iamVjdGl2ZURhdGUudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpXG4gICAgXG4gICAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtZGVzY3JpcHRpb25cIilcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG5cbiAgICB0ZXh0RGF0ZUJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmotdGV4dGRhdGUtYm94XCIpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbC5jbG9zZXN0KFwiLm9iamVjdGl2ZS1ib3hcIikucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZGVzY3JpcHRpb25cIikpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW9iamVjdGl2ZVwiKVxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsICE9PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtb2JqZWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgZWwuY2xvc2VzdChcIi5vYmplY3RpdmUtYm94XCIpLnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtb2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRleHREYXRlQm94LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtb2JqZWN0aXZlXCIpXG4gICAgICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtb2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpXG4gICAgfSlcblxuICAgIGlmKG9iamVjdGl2ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIHRleHREYXRlQm94LmFwcGVuZChvYmplY3RpdmVUZXh0LCBvYmplY3RpdmVEYXRlKVxuICAgICAgICBvYmplY3RpdmVCb3guYXBwZW5kKHRleHREYXRlQm94LCBvYmplY3RpdmVEZXNjcmlwdGlvbilcbiAgICAgICAgb2JqZWN0aXZlRWxlbWVudC5hcHBlbmQob2JqQ2hlY2tib3gsIG9iakNoZWNrYm94TGFiZWwsIG9iamVjdGl2ZUJveClcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0RGF0ZUJveC5hcHBlbmQob2JqZWN0aXZlVGV4dCwgb2JqZWN0aXZlRGF0ZSlcbiAgICAgICAgb2JqZWN0aXZlQm94LmFwcGVuZCh0ZXh0RGF0ZUJveClcbiAgICAgICAgb2JqZWN0aXZlRWxlbWVudC5hcHBlbmQob2JqQ2hlY2tib3gsIG9iakNoZWNrYm94TGFiZWwsIG9iamVjdGl2ZUJveClcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4gb2JqZWN0aXZlRWxlbWVudFxuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNaXNzaW9ucyhtaXNzaW9uTGlzdCkge1xuICAgIGNvbnN0IGxpc3QgPSBtaXNzaW9uTGlzdFxuICAgIGNvbnN0IG1pc3Npb25zTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb25zLWxpc3RcIilcbiAgICBtaXNzaW9uc0xpc3RFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIlxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIGxpc3QpIHtcbiAgICAgICAgbWlzc2lvbnNMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNaXNzaW9uRWxlbWVudChtaXNzaW9uKSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlPYmplY3RpdmVzKG1pc3Npb24pIHtcbiAgICBjb25zdCBvYmplY3RpdmVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlc1wiKVxuICAgIGNvbnN0IG9iamVjdGl2ZUxpc3QgPSBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKVxuICAgIGNsZWFyKG9iamVjdGl2ZXNFbGVtZW50KVxuICAgIGZvcihjb25zdCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlTGlzdCkge1xuICAgICAgICBvYmplY3RpdmVzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVNaXNzaW9uKG1pc3Npb24pIHtcbiAgICBjb25zdCBvYmplY3RpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVzXCIpXG4gICAgaWYoIW1pc3Npb24pIHJldHVyblxuICAgIGlmIChtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY2xlYXIob2JqZWN0aXZlcylcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VcIilcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiVGhpcyBtaXNzaW9uIGhhcyBubyBvYmplY3RpdmVzIHlldC5cIlxuICAgICAgICBvYmplY3RpdmVzLmFwcGVuZENoaWxkKG1lc3NhZ2UpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXIob2JqZWN0aXZlcylcbiAgICAgICAgZGlzcGxheU9iamVjdGl2ZXMobWlzc2lvbilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIlxufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBkaXNwbGF5TWlzc2lvbnMocXVlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKSlcbiAgICBzZXRBY3RpdmVNaXNzaW9uKHF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb24tZWxlbWVudFwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW1pc3Npb25cIilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb24tZWxlbWVudFwiKS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwicGlubmVkXCIpXG59XG5cblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5TWlzc2lvbnMsXG4gICAgc2V0QWN0aXZlTWlzc2lvbixcbiAgICBjbGVhcixcbiAgICB0b2dnbGVGb3JtLFxuICAgIGxvYWRQYWdlLFxuICAgIHF1ZXN0XG59IiwiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRPYmplY3RpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXM7XG4gIH1cblxuICBzZXRPYmplY3RpdmVzKG9iamVjdGl2ZXMpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBvYmplY3RpdmVzO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gb2JqTmFtZSk7XG4gIH1cblxuICBhZGRPYmplY3RpdmUobmV3T2JqKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBuZXdPYmoubmFtZSkpIHtcbiAgICAgIHRoaXMub2JqZWN0aXZlcy5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSB0aGlzLm9iamVjdGl2ZXMuZmlsdGVyKChvYmopID0+IG9iai5uYW1lICE9PSBvYmpOYW1lKVxuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMl1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVswXVxuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3RNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IFtdXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRvZGF5XCIpKVxuICAgIH1cblxuICAgIHNldE1pc3Npb25zKG1pc3Npb25zKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBtaXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSlcbiAgICB9XG5cbiAgICBhZGRNaXNzaW9uKG5ld01pc3Npb24pIHtcbiAgICAgICAgaWYoIXRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBuZXdNaXNzaW9uLm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3TWlzc2lvbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSB0aGlzLm1pc3Npb25zLmZpbHRlcigobWlzc2lvbikgPT4gbWlzc2lvbi5uYW1lICE9PSBtaXNzaW9uTmFtZSlcbiAgICAgICAgLyogY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpICovXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHsgIFxuICAgIHNhdmVRdWVzdE1lbnUoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXN0bWVudVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICBnZXRRdWVzdE1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IFF1ZXN0TWVudSgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0bWVudVwiKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuc2V0TWlzc2lvbnMoXG4gICAgICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgICAgIC5tYXAobWlzc2lvbiA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIG5ldyBNaXNzaW9uKCksIG1pc3Npb25cbiAgICAgICAgICAgICkpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgLmZvckVhY2gobWlzc2lvbiA9PiBcbiAgICAgICAgICAgIG1pc3Npb24uc2V0T2JqZWN0aXZlcyhcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9PiBPYmplY3QuYXNzaWduKG5ldyBPYmplY3RpdmUsIG9iaikpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHF1ZXN0c01lbnVcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgcGFyYW1ldGVycyB3aXRoIC1OYW1lIGhhcyAuZ2V0TmFtZSgpIG9yIGl0IHdpbGwgZGVsZXRlIHdyb25nIGl0ZW1cblxuICAgIGFkZE1pc3Npb24obWlzc2lvbikge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmFkZE1pc3Npb24obWlzc2lvbilcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU1pc3Npb24ob2xkTWlzc2lvbk5hbWUsIG5ld01pc3Npb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihvbGRNaXNzaW9uTmFtZSkuc2V0TmFtZShuZXdNaXNzaW9uTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgYWRkT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5hZGRPYmplY3RpdmUob2JqZWN0aXZlKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5kZWxldGVPYmplY3RpdmUob2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgcmVuYW1lT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lLCBuZXdPYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlKG9iak5hbWUpLnNldE5hbWUobmV3T2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvU3RvcmFnZSdcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSdcbmltcG9ydCBNaXNzaW9uIGZyb20gJy4vbW9kdWxlcy9NaXNzaW9uJ1xuaW1wb3J0IE9iamVjdGl2ZSBmcm9tICcuL21vZHVsZXMvT2JqZWN0aXZlJ1xuXG4vLyBUT0RPIG1vdmUgbGlzdGVuZXJzIHRvIGNyZWF0b3IgZnVuY3Rpb25zXG5cblxuZG9tLmxvYWRQYWdlKClcblxuY29uc3Qgc2hvd0Zvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93LWZvcm0tYnV0dG9uXCIpXG5cbnNob3dGb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tLnRvZ2dsZUZvcm0pIH0pXG5cbi8vIEZvcm1zXG4gICAgLy8gTWlzc2lvblxuY29uc3QgbWlzc2lvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb24tZm9ybVwiKVxuY29uc3QgbWlzc2lvbk5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlzc2lvbk5hbWVcIilcbmNvbnN0IHN1Ym1pdE1pc3Npb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtbWlzc2lvblwiKVxuXG5zdWJtaXRNaXNzaW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihtaXNzaW9uTmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm5cbiAgICBjb25zdCBuZXdNaXNzaW9uID0gbmV3IE1pc3Npb24obWlzc2lvbk5hbWVJbnB1dC52YWx1ZSlcbiAgICBkb20ucXVlc3QuYWRkTWlzc2lvbihuZXdNaXNzaW9uKVxuICAgIGRvbS5kaXNwbGF5TWlzc2lvbnMoZG9tLnF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpXG4gICAgZG9tLnNldEFjdGl2ZU1pc3Npb24oZG9tLnF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24obmV3TWlzc2lvbi5nZXROYW1lKCkpKVxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taXNzaW9uLWVsZW1lbnRcIilcbiAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLTFdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcInBpbm5lZFwiKVxuICAgIG1pc3Npb25Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIilcbn0pXG5cbiAgICAvLyBPYmplY3RpdmVcbmNvbnN0IG9iamVjdGl2ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZS1mb3JtXCIpXG5jb25zdCBvYmpOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iak5hbWVcIilcbmNvbnN0IG9iakRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmpEZXNjcmlwdGlvblwiKVxuY29uc3Qgb2JqRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqRGF0ZVwiKVxuY29uc3Qgc2VsZWN0TWlzc2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqTWlzc2lvbk5hbWVcIilcbmNvbnN0IG9iamVjdGl2ZUZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1vYmplY3RpdmVcIilcbmNvbnN0IHN1Ym1pdE9iamVjdGl2ZUZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1vYmplY3RpdmVcIilcblxuZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG1pc3Npb25MaXN0KSB7XG4gICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqTWlzc2lvbk5hbWVcIilcbiAgICBzZWxlY3RFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIlxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIG1pc3Npb25MaXN0KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gbWlzc2lvbi5nZXROYW1lKClcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbWlzc2lvbi5nZXROYW1lKClcbiAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RFbGVtZW50XG59XG5cbm9iamVjdGl2ZUZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzZXRTZWxlY3Rpb24oZG9tLnF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpXG59KVxuXG5zdWJtaXRPYmplY3RpdmVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmKG9iak5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuXG4gICAgaWYob2JqRGF0ZS52YWx1ZSA9PT0gXCJcIikgcmV0dXJuXG4gICAgY29uc3QgbmV3T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShvYmpOYW1lSW5wdXQudmFsdWUsIG9iakRlc2NyaXB0aW9uLnZhbHVlLCBvYmpEYXRlLnZhbHVlKVxuICAgIGRvbS5xdWVzdC5hZGRPYmplY3RpdmUoc2VsZWN0TWlzc2lvbi52YWx1ZSwgbmV3T2JqZWN0aXZlKVxuICAgIGRvbS5zZXRBY3RpdmVNaXNzaW9uKGRvbS5xdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKHNlbGVjdE1pc3Npb24udmFsdWUpKVxuICAgIG9iamVjdGl2ZUZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=