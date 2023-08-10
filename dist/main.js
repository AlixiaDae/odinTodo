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
  margin-left: 0.5rem;
  position: relative;
}
main .content .objectives-box .objectives .objective-element .objective-box .obj-textdate-box {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
main .content .objectives-box .objectives .objective-element .objective-box:hover {
  cursor: pointer;
  border-radius: 5px;
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
  height: 40px;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/_resets.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    list-style-type: none;\n}","@import 'resets', 'variables';\n\nbody {\n    height: 100vh;\n    font-family: $mainFont;\n    color: $vibrant-pink;\n    @include flex(column, \"\", \"\")\n}\n\nheader {\n    text-align: center;\n    padding: 1rem;\n    font-size: 2rem;\n    background-color: $cream;\n    color: darken($vibrant-pink, 5%);\n}\n\nmain {\n    @include flex(row, \"\", \"\");\n    flex-grow: 1;\n    background-color: $cream;\n    padding: 1rem;\n\n    .sidebar {\n        width: 500px;\n        text-align: center;\n        border-top: 1px solid $vibrant-pink;\n        border-right: 1px solid $medium-pink;\n        border-bottom: 1px solid $vibrant-pink;\n        border-left: 1px solid $vibrant-pink;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        position: relative;\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $medium-pink;\n        }\n\n        .missions-list {\n            display: grid;\n            padding: .3rem;\n            grid-template-rows: repeat(10, 50px);\n            row-gap: 5px;\n\n            .active-mission {\n                background-color: lighten($pink, 10%);\n            }\n\n            li {\n                font-size: 1.5rem;\n                padding-left: 2rem;\n                gap: 10px;\n                color: lighten(black, 15%);\n                border-radius: 5px;\n                position: relative;\n                @include flex(row, center, \"\");\n\n                &:hover {\n                    cursor: pointer;\n                    background-color: lighten($pink, 10%);\n\n                    .fa-map-pin {\n                        transform: rotate(300deg);\n                        text-decoration: underline;\n                    }\n\n                    p {\n                        cursor: pointer;\n                        text-decoration: underline;\n                    }\n\n                }\n\n                .fa-map-pin {\n                    color: darken($vibrant-pink, 15%);\n                    transform: rotate(270deg);\n                }\n\n                .pinned {\n                    transform: rotate(300deg);\n                    text-decoration: underline;\n                }\n\n                .fa-x {\n                    position: absolute;\n                    right: 2rem;\n                    padding: .3rem .4rem .3rem .4rem;\n                    color: darken($vibrant-pink, 25%);\n                    border-radius: 25px;\n                    font-size: 12px;\n                    border: 2px solid $vibrant-pink;\n\n                    &:hover {\n                        color: whitesmoke;\n                        background-color: $vibrant-pink;\n                    }\n                }\n\n            }\n\n            \n        }\n\n        #add-mission {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n\n    .content {\n        width: 90%;\n        text-align: center;\n        position: relative;\n        border-top: 1px solid $vibrant-pink;\n        border-right: 1px solid $vibrant-pink;\n        border-bottom: 1px solid $vibrant-pink;\n        border-top-right-radius: 10px;\n        border-bottom-right-radius: 10px;\n        @include flex(column, \"\", \"\");\n\n        h2 {\n            padding: 1rem;\n            font-size: 2rem;\n            border-bottom: 1px solid $medium-pink;\n        }\n\n        .objectives-box {\n            height: 100%;\n            @include flex(column, center, center);\n\n            .objectives {\n                height: 100%;\n                width: 100%;\n                padding: 1rem;\n                color: black;\n                display: grid;\n                grid-template-rows: repeat(10, 45px);\n                row-gap: 5px;\n                \n                .message {\n                    font-size: 24px;\n                }\n\n                li {\n                    text-align: left;\n                    font-size: 1.5rem;\n                    border-bottom: 1px solid $pink;\n                    letter-spacing: 1.5px;\n                }\n\n                .objective-element {\n                    padding: .3rem;\n                    @include flex(row, center, \"\");\n\n                    input {\n                        width: 0;\n                        height: 0;\n                        visibility: hidden;\n                    }\n\n                    input:checked + label:after {\n                        background-color: darken($pink, 10%);\n                    }\n\n                    label {\n                        width: 30px;\n                        height: 30px;\n                        position: relative;\n                        background-color: darken($cream, 5%);\n                        border-radius: 200px;\n                        box-shadow: -2px -2px inset darken($cream, 15%), 2px 2px inset darken($cream, 15%);\n\n                        &:hover {\n                            cursor: pointer;\n                        }\n\n                        &:after {\n                            content: \"\";\n                            width: 20px;\n                            height: 20px;\n                            position: absolute;\n                            top: 5px;\n                            left: 5px;\n                            border-radius: 200px;\n                        }\n                    }\n\n                    .active-objective {\n                        background-color: lighten($pink, 5%);\n                    }\n\n                    .objective-box {\n                        width: 100%;\n                        margin-left: .5rem;\n                        position: relative;\n\n                        .obj-textdate-box {\n                            border-top-left-radius: 5px;\n                            border-top-right-radius: 5px;\n                            padding: .3rem .3rem .3rem .5rem;\n                            @include flex(row, center, space-between);\n                        }\n\n                        &:hover {\n                            cursor: pointer;\n                            border-radius: 5px;\n                            background-color: lighten($pink, 10%);\n                        }\n\n                        .objective-description {\n                            position: absolute;\n                            left: 0;\n                            right: 0;\n                            border-bottom-left-radius: 5px;\n                            border-bottom-right-radius: 5px;\n                            height: 0;\n                            visibility: hidden;\n                            background-color: $pink;\n                            z-index: 3;\n                            padding: .5rem;\n                            transition: all 0.5s ease;\n                            opacity: 0;\n                        }\n\n                        .active-objective-description {\n                            opacity: 1;\n                            \n                            transform: translateY(0);\n                            height: 50px;\n                            visibility: visible;\n                            background-color: darken($pink, 5%);\n                        }\n\n                    }\n                }\n            }\n\n            .mission-form,\n            .objective-form {\n                display: none;\n            }\n\n            .show-form {\n                display: flex;\n            }\n\n            form {\n                background-color: $pink;\n                margin-top: -100px;\n                padding: 1.5rem;\n                width: 350px;\n                gap: 15px;\n                position: absolute;\n                border-radius: 15px;\n                box-shadow: -3px -3px inset darken($pink, 10%);\n                @include flex(column, center, center);\n    \n                input {\n                    font-family: $mainFont;\n                    width: 100%;\n                    height: 40px;\n                    padding-left: 1rem;\n                    border-radius: 5px;\n                    font-size: 1rem;\n                    font-weight: weight(bold);\n                    letter-spacing: 2px;\n                }\n    \n                select {\n                    @extend input\n                }\n    \n                button {\n                    width: 100%;\n                    border: none;\n                    border-radius: 5px;\n                    font-family: $mainFont;\n                    font-size: 1rem;\n                    font-weight: weight(semi-bold);\n                    height: 35px;\n                    color: whitesmoke;\n                    background-color: $green;\n                    box-shadow: -3px -3px inset lighten($green, 10%);\n\n                    &:hover {\n                        cursor: pointer;\n                        background-color: lighten($green, 10%);\n                        box-shadow: -3px -3px inset lighten($green, 5%);\n                        font-weight: weight(bold);\n                    }\n                }\n            }\n    \n        }\n\n        \n        #add-objective {\n            position: absolute;\n            bottom: 1rem;\n            right: 1rem;\n            width: 170px;\n            border: none;\n            border-radius: 5px;\n            padding: .5rem;\n            font-family: $mainFont;\n            font-weight: weight(semi-bold);\n            font-size: 1.4rem;\n            background-color: $green;\n            color: whitesmoke;\n            box-shadow: -3px -3px inset lighten($green, 10%);\n\n            &:hover {\n                cursor: pointer;\n                background-color: lighten($green, 10%);\n                box-shadow: -3px -3px inset lighten($green, 5%);\n                font-weight: weight(bold);\n            }\n        }\n    }\n}\n\nfooter {\n    background-color: black;\n    color: whitesmoke;\n    padding: .8rem;\n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: weight(semi-bold);\n\n    &:hover {\n        cursor: default;\n    }\n\n    a {\n        text-decoration: none;\n        color: white;\n        &:hover {\n            color: $medium-pink;\n        }\n    }\n}","$vibrant-pink: hsl(0, 100%, 70%);\n$medium-pink: hsl(0, 100%, 77%);\n$pink: hsl(0, 93%, 84%);\n$soft-pink: hsl(23, 100%, 93%);\n$cream: hsl(23, 100%, 97%);\n$green: hsl(174, 66%, 39%);\n$mainFont: 'Edu SA Beginner', cursive;\n$mobile-width: 375px;\n$font-weights: (\n    \"regular\": 400,\n    \"medium\": 500,\n    \"semi-bold\": 600,\n    \"bold\": 700\n);\n\n@function weight($weight-name) {\n    @return map-get($font-weights, $weight-name)\n};\n\n@mixin mobile {\n    @media (max-width: $mobile-width) {\n        @content;        \n    }\n}\n\n@mixin flex($flex-direction, $align, $justify) {\n    display: flex;\n    flex-direction: $flex-direction;\n    align-items: $align;\n    justify-content: $justify;\n}"],"sourceRoot":""}]);
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
    const missionElements = document.querySelectorAll(".mission-element")
    _dom__WEBPACK_IMPORTED_MODULE_2__.setActiveMission(_dom__WEBPACK_IMPORTED_MODULE_2__.quest.getQuestMenu().getMission(selectMission.value))
    missionElements.forEach(mission => {
        if(mission.textContent === selectMission.value) {
            mission.classList.add("active-mission")
            mission.children[0].classList.add("pinned")
        } else {
            mission.classList.remove("active-mission")
            mission.children[0].classList.remove("pinned")
        }
    })
    objectiveForm.classList.remove("show-form")
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUtBQWlLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxlQUFlLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxhQUFhLGVBQWUsZUFBZSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxjQUFjLGVBQWUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsYUFBYSxlQUFlLGVBQWUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGVBQWUsZUFBZSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFB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QUNuQztBQUNBLDZCQUE2QiwwREFBUztBQUN0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNB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Qzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwREFBUztBQUN0QyxJQUFJLHVDQUFTO0FBQ2I7QUFDQSxJQUFJLGtEQUFvQixDQUFDLHVDQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL01pc3Npb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9RdWVzdE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBcIlwiO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IFwiXCI7XG59XG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMsIDEwMCUsIDk3JSk7XG4gIGNvbG9yOiAjZmY0ZDRkO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjMsIDEwMCUsIDk3JSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5tYWluIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDc3JSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAuc2lkZWJhciBoMiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3NyUpO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xuICByb3ctZ2FwOiA1cHg7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IC5hY3RpdmUtbWlzc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWUxZTE7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgZ2FwOiAxMHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWUxZTE7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpOmhvdmVyIC5mYS1tYXAtcGluIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpOmhvdmVyIHAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCBsaSAuZmEtbWFwLXBpbiB7XG4gIGNvbG9yOiAjZmYxYTFhO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxubWFpbiAuc2lkZWJhciAubWlzc2lvbnMtbGlzdCBsaSAucGlubmVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5tYWluIC5zaWRlYmFyIC5taXNzaW9ucy1saXN0IGxpIC5mYS14IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDAuNHJlbSAwLjNyZW0gMC40cmVtO1xuICBjb2xvcjogI2U2MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMTAwJSwgNzAlKTtcbn1cbm1haW4gLnNpZGViYXIgLm1pc3Npb25zLWxpc3QgbGkgLmZhLXg6aG92ZXIge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XG59XG5tYWluIC5zaWRlYmFyICNhZGQtbWlzc2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IDE3MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJFZHUgU0EgQmVnaW5uZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzQsIDY2JSwgMzklKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMmFjZmJmO1xufVxubWFpbiAuc2lkZWJhciAjYWRkLW1pc3Npb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWNmYmY7XG4gIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCAjMjZiYWFiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxubWFpbiAuY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3MCUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDcwJSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IFwiXCI7XG4gIGp1c3RpZnktY29udGVudDogXCJcIjtcbn1cbm1haW4gLmNvbnRlbnQgaDIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNzclKTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDVweCk7XG4gIHJvdy1nYXA6IDVweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgbGkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCA5MyUsIDg0JSk7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCB7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBcIlwiO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGlucHV0LCBtYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgZm9ybSBzZWxlY3QsIG1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IGZvcm0gLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IHNlbGVjdCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsIG1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCBmb3JtIHNlbGVjdDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsIG1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IGZvcm0gLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IHNlbGVjdDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3ZjdmO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IGxhYmVsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNmQ2O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgYm94LXNoYWRvdzogLTJweCAtMnB4IGluc2V0ICNmZmM2YTMsIDJweCAycHggaW5zZXQgI2ZmYzZhMztcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgLmFjdGl2ZS1vYmplY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjOWM5O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IC5vYmplY3RpdmUtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAub2JqZWN0aXZlLWJveCAub2JqLXRleHRkYXRlLWJveCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC4zcmVtIDAuM3JlbSAwLjNyZW0gMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAub2JqZWN0aXZlcyAub2JqZWN0aXZlLWVsZW1lbnQgLm9iamVjdGl2ZS1ib3g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTFlMTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5vYmplY3RpdmVzIC5vYmplY3RpdmUtZWxlbWVudCAub2JqZWN0aXZlLWJveCAub2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDkzJSwgODQlKTtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZXMgLm9iamVjdGl2ZS1lbGVtZW50IC5vYmplY3RpdmUtYm94IC5hY3RpdmUtb2JqZWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjk4OTg7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCAubWlzc2lvbi1mb3JtLFxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggLm9iamVjdGl2ZS1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1haW4gLmNvbnRlbnQgLm9iamVjdGl2ZXMtYm94IC5zaG93LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA5MyUsIDg0JSk7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICB3aWR0aDogMzUwcHg7XG4gIGdhcDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgI2ZhN2Y3ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIGlucHV0LCBtYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxubWFpbiAuY29udGVudCAub2JqZWN0aXZlcy1ib3ggZm9ybSBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzQsIDY2JSwgMzklKTtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyYWNmYmY7XG59XG5tYWluIC5jb250ZW50IC5vYmplY3RpdmVzLWJveCBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhY2ZiZjtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyNmJhYWI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5tYWluIC5jb250ZW50ICNhZGQtb2JqZWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTcwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkVkdSBTQSBCZWdpbm5lclwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3NCwgNjYlLCAzOSUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0ICMyYWNmYmY7XG59XG5tYWluIC5jb250ZW50ICNhZGQtb2JqZWN0aXZlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFjZmJmO1xuICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgIzI2YmFhYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5mb290ZXI6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDc3JSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fcmVzZXRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtF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RUR5U1ksbUNBQUE7QUFWcEI7QUFZb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBVnhCO0FBa0JRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUNDOVREO0VEK1RDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0NsVUo7RURtVUksaUJBQUE7RUFDQSxtQ0FBQTtBQWhCWjtBQWtCWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFoQmhCOztBQXNCQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBcUJJO0VBQ0ksZUFBQTtBQW5CUjtBQXNCSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQXBCUjtBQXFCUTtFQUNJLHdCQ3BXRTtBRGlWZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XCIsXCJAaW1wb3J0ICdyZXNldHMnLCAndmFyaWFibGVzJztcXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcXG4gICAgY29sb3I6ICR2aWJyYW50LXBpbms7XFxuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBcXFwiXFxcIiwgXFxcIlxcXCIpXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XFxuICAgIGNvbG9yOiBkYXJrZW4oJHZpYnJhbnQtcGluaywgNSUpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgQGluY2x1ZGUgZmxleChyb3csIFxcXCJcXFwiLCBcXFwiXFxcIik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyZWFtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHZpYnJhbnQtcGluaztcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRtZWRpdW0tcGluaztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkdmlicmFudC1waW5rO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICBoMiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRtZWRpdW0tcGluaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5taXNzaW9ucy1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgICAgICAgICByb3ctZ2FwOiA1cHg7XFxuXFxuICAgICAgICAgICAgLmFjdGl2ZS1taXNzaW9uIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGluaywgMTAlKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKGJsYWNrLCAxNSUpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgXFxcIlxcXCIpO1xcblxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHBpbmssIDEwJSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAuZmEtbWFwLXBpbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZmEtbWFwLXBpbiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR2aWJyYW50LXBpbmssIDE1JSk7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5waW5uZWQge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5mYS14IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjNyZW0gLjRyZW0gLjNyZW0gLjRyZW07XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCR2aWJyYW50LXBpbmssIDI1JSk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHZpYnJhbnQtcGluaztcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aWJyYW50LXBpbms7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAjYWRkLW1pc3Npb24ge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDFyZW07XFxuICAgICAgICAgICAgcmlnaHQ6IDFyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KHNlbWktYm9sZCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgMTAlKTtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRncmVlbiwgMTAlKTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCA1JSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoYm9sZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHZpYnJhbnQtcGluaztcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR2aWJyYW50LXBpbms7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHZpYnJhbnQtcGluaztcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgXFxcIlxcXCIsIFxcXCJcXFwiKTtcXG5cXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG1lZGl1bS1waW5rO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm9iamVjdGl2ZXMtYm94IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGNlbnRlciwgY2VudGVyKTtcXG5cXG4gICAgICAgICAgICAub2JqZWN0aXZlcyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQ1cHgpO1xcbiAgICAgICAgICAgICAgICByb3ctZ2FwOiA1cHg7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwaW5rO1xcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5vYmplY3RpdmUtZWxlbWVudCB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIFxcXCJcXFwiKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHBpbmssIDEwJSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNyZWFtLCA1JSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTJweCAtMnB4IGluc2V0IGRhcmtlbigkY3JlYW0sIDE1JSksIDJweCAycHggaW5zZXQgZGFya2VuKCRjcmVhbSwgMTUlKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZS1vYmplY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHBpbmssIDUlKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5vYmplY3RpdmUtYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vYmotdGV4dGRhdGUtYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM3JlbSAuM3JlbSAuM3JlbSAuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGluaywgMTAlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLm9iamVjdGl2ZS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZS1vYmplY3RpdmUtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcGluaywgNSUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAubWlzc2lvbi1mb3JtLFxcbiAgICAgICAgICAgIC5vYmplY3RpdmUtZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaG93LWZvcm0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBmb3JtIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICAgICAgICAgIGdhcDogMTVweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgZGFya2VuKCRwaW5rLCAxMCUpO1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xcbiAgICBcXG4gICAgICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodChib2xkKTtcXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kIGlucHV0XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWFpbkZvbnQ7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KHNlbWktYm9sZCk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgMTAlKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRncmVlbiwgMTAlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggaW5zZXQgbGlnaHRlbigkZ3JlZW4sIDUlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KGJvbGQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICAgICAgI2FkZC1vYmplY3RpdmUge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDFyZW07XFxuICAgICAgICAgICAgcmlnaHQ6IDFyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0KHNlbWktYm9sZCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCBpbnNldCBsaWdodGVuKCRncmVlbiwgMTAlKTtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRncmVlbiwgMTAlKTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAtM3B4IGluc2V0IGxpZ2h0ZW4oJGdyZWVuLCA1JSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoYm9sZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHQoc2VtaS1ib2xkKTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIH1cXG5cXG4gICAgYSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJG1lZGl1bS1waW5rO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiJHZpYnJhbnQtcGluazogaHNsKDAsIDEwMCUsIDcwJSk7XFxuJG1lZGl1bS1waW5rOiBoc2woMCwgMTAwJSwgNzclKTtcXG4kcGluazogaHNsKDAsIDkzJSwgODQlKTtcXG4kc29mdC1waW5rOiBoc2woMjMsIDEwMCUsIDkzJSk7XFxuJGNyZWFtOiBoc2woMjMsIDEwMCUsIDk3JSk7XFxuJGdyZWVuOiBoc2woMTc0LCA2NiUsIDM5JSk7XFxuJG1haW5Gb250OiAnRWR1IFNBIEJlZ2lubmVyJywgY3Vyc2l2ZTtcXG4kbW9iaWxlLXdpZHRoOiAzNzVweDtcXG4kZm9udC13ZWlnaHRzOiAoXFxuICAgIFxcXCJyZWd1bGFyXFxcIjogNDAwLFxcbiAgICBcXFwibWVkaXVtXFxcIjogNTAwLFxcbiAgICBcXFwic2VtaS1ib2xkXFxcIjogNjAwLFxcbiAgICBcXFwiYm9sZFxcXCI6IDcwMFxcbik7XFxuXFxuQGZ1bmN0aW9uIHdlaWdodCgkd2VpZ2h0LW5hbWUpIHtcXG4gICAgQHJldHVybiBtYXAtZ2V0KCRmb250LXdlaWdodHMsICR3ZWlnaHQtbmFtZSlcXG59O1xcblxcbkBtaXhpbiBtb2JpbGUge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcbiAgICAgICAgQGNvbnRlbnQ7ICAgICAgICBcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gZmxleCgkZmxleC1kaXJlY3Rpb24sICRhbGlnbiwgJGp1c3RpZnkpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcmVjdGlvbjtcXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTWlzc2lvbiBmcm9tICcuL21vZHVsZXMvTWlzc2lvbic7XG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gJy4vbW9kdWxlcy9PYmplY3RpdmUnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL1N0b3JhZ2UnO1xuXG5jb25zdCBxdWVzdCA9IG5ldyBTdG9yYWdlKClcblxuY29uc3QgdGVzdE9iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJUZXN0IE9iamVjdGl2ZVwiLCBcInRoaXMgaXMgZm9yIHRlc3RpbmdcIiwgXCIyMDIzLTA4LTEwXCIpXG5xdWVzdC5hZGRPYmplY3RpdmUoXCJUb2RheVwiLCB0ZXN0T2JqZWN0aXZlKVxuY29uc3QgYW5vdGhlck9iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJTZWNvbmQgb2JqZWN0aXZlXCIsIFwic2Vjb25kIHRlc3RcIiwgXCIyMDIzLTA4LTExXCIpXG5xdWVzdC5hZGRPYmplY3RpdmUoXCJUb2RheVwiLCBhbm90aGVyT2JqZWN0aXZlKVxuXG5jb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtXCIpXG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm0oYnV0dG9uKSB7XG4gICAgaWYoYnV0dG9uLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJBZGQgTWlzc2lvblwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb24tZm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1mb3JtXCIpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZS1mb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1mb3JtXCIpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3Npb24tZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNaXNzaW9uRWxlbWVudChtaXNzaW9uKSB7XG4gICAgaWYobWlzc2lvbi5nZXROYW1lKCkgPT09IFwiVG9kYXlcIikge1xuICAgICAgICBjb25zdCBtaXNzaW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvbi1lbGVtZW50XCIpXG4gICAgICAgIGNvbnN0IG1pc3Npb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgbWlzc2lvbkljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtbWFwLXBpblwiKVxuICAgICAgICBjb25zdCBtaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIG1pc3Npb25UZXh0LnRleHRDb250ZW50ID0gbWlzc2lvbi5nZXROYW1lKClcblxuICAgICAgICBtaXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taXNzaW9uLWVsZW1lbnRcIikuZm9yRWFjaChtaXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmEtbWFwLXBpblwiKS5mb3JFYWNoKHBpbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBpbi5jbGFzc0xpc3QucmVtb3ZlKFwicGlubmVkXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW1pc3Npb25cIilcbiAgICAgICAgICAgIG1pc3Npb25JY29uLmNsYXNzTGlzdC5hZGQoXCJwaW5uZWRcIilcbiAgICAgICAgICAgIHNldEFjdGl2ZU1pc3Npb24ocXVlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uVGV4dC50ZXh0Q29udGVudCkpXG4gICAgICAgICAgICBmb3Jtcy5mb3JFYWNoKGZvcm0gPT4ge1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZChtaXNzaW9uSWNvbiwgbWlzc2lvblRleHQpXG4gICAgICAgIHJldHVybiBtaXNzaW9uRWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWVsZW1lbnRcIilcbiAgICAgICAgY29uc3QgbWlzc2lvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICBtaXNzaW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1tYXAtcGluXCIpXG4gICAgICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKVxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIGNvbnN0IGVsSWQgPSBtaXNzaW9uVGV4dC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilcbiAgICAgICAgY2xvc2VCdG4uaWQgPSBlbElkLmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS14XCIpXG4gICAgICAgIFxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcXVlc3QuZGVsZXRlTWlzc2lvbihtaXNzaW9uLmdldE5hbWUoKSlcbiAgICAgICAgICAgIGRpc3BsYXlNaXNzaW9ucyhxdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpKVxuICAgICAgICAgICAgY2xlYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVzXCIpKVxuICAgICAgICAgICAgY29uc3Qgbm9NaXNzaW9uTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBub01pc3Npb25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpXG4gICAgICAgICAgICBub01pc3Npb25NZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGVhc2Ugc2VsZWN0IGEgbWlzc2lvbi5cIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVzXCIpLmFwcGVuZENoaWxkKG5vTWlzc2lvbk1lc3NhZ2UpXG4gICAgICAgICAgICBmb3Jtcy5mb3JFYWNoKGZvcm0gPT4ge1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBtaXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taXNzaW9uLWVsZW1lbnRcIikuZm9yRWFjaChtaXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmEtbWFwLXBpblwiKS5mb3JFYWNoKHBpbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBpbi5jbGFzc0xpc3QucmVtb3ZlKFwicGlubmVkXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW1pc3Npb25cIilcbiAgICAgICAgICAgIG1pc3Npb25JY29uLmNsYXNzTGlzdC5hZGQoXCJwaW5uZWRcIilcbiAgICAgICAgICAgIHNldEFjdGl2ZU1pc3Npb24ocXVlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uVGV4dC50ZXh0Q29udGVudCkpXG4gICAgICAgICAgICBmb3Jtcy5mb3JFYWNoKGZvcm0gPT4ge1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBUT0RPIGVuYWJsZSBuYW1lIGVkaXRpbmcoPylcblxuICAgICAgICBtaXNzaW9uRWxlbWVudC5hcHBlbmQobWlzc2lvbkljb24sIG1pc3Npb25UZXh0LCBjbG9zZUJ0bilcbiAgICAgICAgcmV0dXJuIG1pc3Npb25FbGVtZW50XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkge1xuICAgIGNvbnN0IG9iamVjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBvYmplY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtZWxlbWVudFwiKVxuXG4gICAgY29uc3Qgb2JqQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBvYmpDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcbiAgICBvYmpDaGVja2JveC5pZCA9IG9iamVjdGl2ZS5nZXROYW1lKClcblxuICAgIGNvbnN0IG9iakNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBvYmpDaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBvYmplY3RpdmUuZ2V0TmFtZSgpKVxuXG4gICAgY29uc3Qgb2JqZWN0aXZlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG9iamVjdGl2ZUJveC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWJveFwiKVxuXG4gICAgY29uc3QgdGV4dERhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dERhdGVCb3guY2xhc3NMaXN0LmFkZChcIm9iai10ZXh0ZGF0ZS1ib3hcIilcblxuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpXG5cbiAgICBjb25zdCBvYmplY3RpdmVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBvYmplY3RpdmVEYXRlLnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKVxuICAgIFxuICAgIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpXG4gICAgb2JqZWN0aXZlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKVxuXG4gICAgdGV4dERhdGVCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2JqLXRleHRkYXRlLWJveFwiKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGlmICghZWwuY2xvc2VzdChcIi5vYmplY3RpdmUtYm94XCIpLnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1vYmplY3RpdmVcIilcbiAgICAgICAgICAgIH0gZWxzZSBpZihlbCAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW9iamVjdGl2ZVwiKVxuICAgICAgICAgICAgICAgIGVsLmNsb3Nlc3QoXCIub2JqZWN0aXZlLWJveFwiKS5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZS1kZXNjcmlwdGlvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW9iamVjdGl2ZS1kZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0ZXh0RGF0ZUJveC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlLW9iamVjdGl2ZVwiKVxuICAgICAgICBvYmplY3RpdmVEZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlLW9iamVjdGl2ZS1kZXNjcmlwdGlvblwiKVxuICAgIH0pXG5cbiAgICBpZihvYmplY3RpdmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICB0ZXh0RGF0ZUJveC5hcHBlbmQob2JqZWN0aXZlVGV4dCwgb2JqZWN0aXZlRGF0ZSlcbiAgICAgICAgb2JqZWN0aXZlQm94LmFwcGVuZCh0ZXh0RGF0ZUJveCwgb2JqZWN0aXZlRGVzY3JpcHRpb24pXG4gICAgICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kKG9iakNoZWNrYm94LCBvYmpDaGVja2JveExhYmVsLCBvYmplY3RpdmVCb3gpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dERhdGVCb3guYXBwZW5kKG9iamVjdGl2ZVRleHQsIG9iamVjdGl2ZURhdGUpXG4gICAgICAgIG9iamVjdGl2ZUJveC5hcHBlbmQodGV4dERhdGVCb3gpXG4gICAgICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kKG9iakNoZWNrYm94LCBvYmpDaGVja2JveExhYmVsLCBvYmplY3RpdmVCb3gpXG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJuIG9iamVjdGl2ZUVsZW1lbnRcblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWlzc2lvbnMobWlzc2lvbkxpc3QpIHtcbiAgICBjb25zdCBsaXN0ID0gbWlzc2lvbkxpc3RcbiAgICBjb25zdCBtaXNzaW9uc0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXNzaW9ucy1saXN0XCIpXG4gICAgbWlzc2lvbnNMaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBmb3IoY29uc3QgbWlzc2lvbiBvZiBsaXN0KSB7XG4gICAgICAgIG1pc3Npb25zTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5T2JqZWN0aXZlcyhtaXNzaW9uKSB7XG4gICAgY29uc3Qgb2JqZWN0aXZlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZXNcIilcbiAgICBjb25zdCBvYmplY3RpdmVMaXN0ID0gbWlzc2lvbi5nZXRPYmplY3RpdmVzKClcbiAgICBjbGVhcihvYmplY3RpdmVzRWxlbWVudClcbiAgICBmb3IoY29uc3Qgb2JqZWN0aXZlIG9mIG9iamVjdGl2ZUxpc3QpIHtcbiAgICAgICAgb2JqZWN0aXZlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlTWlzc2lvbihtaXNzaW9uKSB7XG4gICAgY29uc3Qgb2JqZWN0aXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlc1wiKVxuICAgIGlmKCFtaXNzaW9uKSByZXR1cm5cbiAgICBpZiAobWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNsZWFyKG9iamVjdGl2ZXMpXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpXG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlRoaXMgbWlzc2lvbiBoYXMgbm8gb2JqZWN0aXZlcyB5ZXQuXCJcbiAgICAgICAgb2JqZWN0aXZlcy5hcHBlbmRDaGlsZChtZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyKG9iamVjdGl2ZXMpXG4gICAgICAgIGRpc3BsYXlPYmplY3RpdmVzKG1pc3Npb24pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCJcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgZGlzcGxheU1pc3Npb25zKHF1ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpXG4gICAgc2V0QWN0aXZlTWlzc2lvbihxdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKFwiVG9kYXlcIikpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXNzaW9uLWVsZW1lbnRcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1taXNzaW9uXCIpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXNzaW9uLWVsZW1lbnRcIikuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcInBpbm5lZFwiKVxufVxuXG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheU1pc3Npb25zLFxuICAgIHNldEFjdGl2ZU1pc3Npb24sXG4gICAgY2xlYXIsXG4gICAgdG9nZ2xlRm9ybSxcbiAgICBsb2FkUGFnZSxcbiAgICBxdWVzdFxufSIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzO1xuICB9XG5cbiAgc2V0T2JqZWN0aXZlcyhvYmplY3RpdmVzKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gb2JqZWN0aXZlcztcbiAgfVxuXG4gIGdldE9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG9iak5hbWUpO1xuICB9XG5cbiAgYWRkT2JqZWN0aXZlKG5ld09iaikge1xuICAgIGlmICghdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gbmV3T2JqLm5hbWUpKSB7XG4gICAgICB0aGlzLm9iamVjdGl2ZXMucHVzaChuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gdGhpcy5vYmplY3RpdmVzLmZpbHRlcigob2JqKSA9PiBvYmoubmFtZSAhPT0gb2JqTmFtZSlcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBzZXROYW1lKG9iak5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqTmFtZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXREYXRlRm9ybWF0dGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kdWVEYXRlID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRvZGF5XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzJdXG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzFdXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMF1cbiAgICAgICAgICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXG4gICAgICAgIH1cbiAgICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLXJldHVybiAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0TWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBbXVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICB9XG5cbiAgICBzZXRNaXNzaW9ucyhtaXNzaW9ucykge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gbWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpXG4gICAgfVxuXG4gICAgYWRkTWlzc2lvbihuZXdNaXNzaW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbmV3TWlzc2lvbi5uYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ld01pc3Npb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gdGhpcy5taXNzaW9ucy5maWx0ZXIoKG1pc3Npb24pID0+IG1pc3Npb24ubmFtZSAhPT0gbWlzc2lvbk5hbWUpXG4gICAgICAgIC8qIGNvbnN0IG1pc3Npb25Ub0RlbGV0ZSA9IHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSkgXG4gICAgICAgIHRoaXMubWlzc2lvbnMuc3BsaWNlKHRoaXMubWlzc2lvbnMuaW5kZXhPZihtaXNzaW9uVG9EZWxldGUpLCAxKSAqL1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZGF5TWlzc2lvbigpIHtcbiAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikub2JqZWN0aXZlcyA9IFtdXG5cbiAgICAgICAgdGhpcy5taXNzaW9ucy5mb3JFYWNoKChtaXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAobWlzc2lvbi5nZXROYW1lKCkgPT09IFwiVG9kYXlcIikgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCB0b2RheU9iamVjdGl2ZXMgPSBtaXNzaW9uLmdldFRvZGF5T2JqZWN0aXZlcygpXG4gICAgICAgICAgICB0b2RheU9iamVjdGl2ZXMuZm9yRWFjaCgob2JqZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0aXZlTmFtZSA9IGAke29iamVjdGl2ZS5nZXROYW1lKCl9YFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWlzc2lvbihcIlRvZGF5XCIpLmFkZE9iamVjdGl2ZShuZXcgT2JqZWN0aXZlKG9iamVjdGl2ZU5hbWUsIG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKCkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5pbXBvcnQgUXVlc3RNZW51IGZyb20gXCIuL1F1ZXN0TWVudVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7ICBcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHBhcmFtZXRlcnMgd2l0aCAtTmFtZSBoYXMgLmdldE5hbWUoKSBvciBpdCB3aWxsIGRlbGV0ZSB3cm9uZyBpdGVtXG5cbiAgICBhZGRNaXNzaW9uKG1pc3Npb24pIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5hZGRNaXNzaW9uKG1pc3Npb24pXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVNaXNzaW9uKG9sZE1pc3Npb25OYW1lLCBuZXdNaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24ob2xkTWlzc2lvbk5hbWUpLnNldE5hbWUobmV3TWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGFkZE9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuYWRkT2JqZWN0aXZlKG9iamVjdGl2ZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSwgbmV3T2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmdldE9iamVjdGl2ZShvYmpOYW1lKS5zZXROYW1lKG5ld09iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL1N0b3JhZ2UnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20nXG5pbXBvcnQgTWlzc2lvbiBmcm9tICcuL21vZHVsZXMvTWlzc2lvbidcbmltcG9ydCBPYmplY3RpdmUgZnJvbSAnLi9tb2R1bGVzL09iamVjdGl2ZSdcblxuLy8gVE9ETyBtb3ZlIGxpc3RlbmVycyB0byBjcmVhdG9yIGZ1bmN0aW9uc1xuXG5cbmRvbS5sb2FkUGFnZSgpXG5cbmNvbnN0IHNob3dGb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvdy1mb3JtLWJ1dHRvblwiKVxuXG5zaG93Rm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4geyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvbS50b2dnbGVGb3JtKSB9KVxuXG4vLyBGb3Jtc1xuICAgIC8vIE1pc3Npb25cbmNvbnN0IG1pc3Npb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXNzaW9uLWZvcm1cIilcbmNvbnN0IG1pc3Npb25OYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pc3Npb25OYW1lXCIpXG5jb25zdCBzdWJtaXRNaXNzaW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW1pc3Npb25cIilcblxuc3VibWl0TWlzc2lvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYobWlzc2lvbk5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuXG4gICAgY29uc3QgbmV3TWlzc2lvbiA9IG5ldyBNaXNzaW9uKG1pc3Npb25OYW1lSW5wdXQudmFsdWUpXG4gICAgZG9tLnF1ZXN0LmFkZE1pc3Npb24obmV3TWlzc2lvbilcbiAgICBkb20uZGlzcGxheU1pc3Npb25zKGRvbS5xdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpKVxuICAgIGRvbS5zZXRBY3RpdmVNaXNzaW9uKGRvbS5xdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKG5ld01pc3Npb24uZ2V0TmFtZSgpKSlcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWlzc2lvbi1lbGVtZW50XCIpXG4gICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0xXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW1pc3Npb25cIilcbiAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLTFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJwaW5uZWRcIilcbiAgICBtaXNzaW9uRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpXG59KVxuXG4gICAgLy8gT2JqZWN0aXZlXG5jb25zdCBvYmplY3RpdmVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmUtZm9ybVwiKVxuY29uc3Qgb2JqTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmpOYW1lXCIpXG5jb25zdCBvYmpEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqRGVzY3JpcHRpb25cIilcbmNvbnN0IG9iakRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iakRhdGVcIilcbmNvbnN0IHNlbGVjdE1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iak1pc3Npb25OYW1lXCIpXG5jb25zdCBvYmplY3RpdmVGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtb2JqZWN0aXZlXCIpXG5jb25zdCBzdWJtaXRPYmplY3RpdmVGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtb2JqZWN0aXZlXCIpXG5cbmZ1bmN0aW9uIHNldFNlbGVjdGlvbihtaXNzaW9uTGlzdCkge1xuICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iak1pc3Npb25OYW1lXCIpXG4gICAgc2VsZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBmb3IoY29uc3QgbWlzc2lvbiBvZiBtaXNzaW9uTGlzdCkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG1pc3Npb24uZ2V0TmFtZSgpXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG1pc3Npb24uZ2V0TmFtZSgpXG4gICAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0RWxlbWVudFxufVxuXG5vYmplY3RpdmVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2V0U2VsZWN0aW9uKGRvbS5xdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpKVxufSlcblxuc3VibWl0T2JqZWN0aXZlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZihvYmpOYW1lSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVyblxuICAgIGlmKG9iakRhdGUudmFsdWUgPT09IFwiXCIpIHJldHVyblxuICAgIGNvbnN0IG5ld09iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUob2JqTmFtZUlucHV0LnZhbHVlLCBvYmpEZXNjcmlwdGlvbi52YWx1ZSwgb2JqRGF0ZS52YWx1ZSlcbiAgICBkb20ucXVlc3QuYWRkT2JqZWN0aXZlKHNlbGVjdE1pc3Npb24udmFsdWUsIG5ld09iamVjdGl2ZSlcbiAgICBjb25zdCBtaXNzaW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pc3Npb24tZWxlbWVudFwiKVxuICAgIGRvbS5zZXRBY3RpdmVNaXNzaW9uKGRvbS5xdWVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKHNlbGVjdE1pc3Npb24udmFsdWUpKVxuICAgIG1pc3Npb25FbGVtZW50cy5mb3JFYWNoKG1pc3Npb24gPT4ge1xuICAgICAgICBpZihtaXNzaW9uLnRleHRDb250ZW50ID09PSBzZWxlY3RNaXNzaW9uLnZhbHVlKSB7XG4gICAgICAgICAgICBtaXNzaW9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgbWlzc2lvbi5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwicGlubmVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzaW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbWlzc2lvblwiKVxuICAgICAgICAgICAgbWlzc2lvbi5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKFwicGlubmVkXCIpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIG9iamVjdGl2ZUZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=