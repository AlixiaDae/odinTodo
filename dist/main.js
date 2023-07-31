/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Mission.js":
/*!************************!*\
  !*** ./src/Mission.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/Objective.js":
/*!**************************!*\
  !*** ./src/Objective.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/QuestMenu.js":
/*!**************************!*\
  !*** ./src/QuestMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestMenu)
/* harmony export */ });
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/Objective.js");
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

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/Objective.js");
/* harmony import */ var _QuestMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestMenu */ "./src/QuestMenu.js");
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

/***/ }),

/***/ "./src/assets/fontawesome/fontawesome.js":
/*!***********************************************!*\
  !*** ./src/assets/fontawesome/fontawesome.js ***!
  \***********************************************/
/***/ (() => {

/* eslint-disable */
/*!
 * Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
(function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _wrapRegExp() {
    _wrapRegExp = function (re, groups) {
      return new BabelRegExp(re, void 0, groups);
    };

    var _super = RegExp.prototype,
        _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = new RegExp(re, flags);

      return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
    }

    function buildGroups(result, re) {
      var g = _groups.get(re);

      return Object.keys(g).reduce(function (groups, name) {
        return groups[name] = result[g[name]], groups;
      }, Object.create(null));
    }

    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
      var result = _super.exec.call(this, str);

      return result && (result.groups = buildGroups(result, this)), result;
    }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
      if ("string" == typeof substitution) {
        var groups = _groups.get(this);

        return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          return "$" + groups[name];
        }));
      }

      if ("function" == typeof substitution) {
        var _this = this;

        return _super[Symbol.replace].call(this, str, function () {
          var args = arguments;
          return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
        });
      }

      return _super[Symbol.replace].call(this, str, substitution);
    }, _wrapRegExp.apply(this, arguments);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/; // eslint-disable-line no-useless-escape

  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    styleDefault: 'solid',
    familyDefault: 'classic',
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  }; // familyPrefix is deprecated but we must still support it if present

  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }

  var _config = _objectSpread2(_objectSpread2({}, _default), initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach(function (key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set(val) {
        _config[key] = val;

        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config[key];
      }
    });
  }); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

  Object.defineProperty(config, 'familyPrefix', {
    enumerable: true,
    set: function set(val) {
      _config.cssPrefix = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);

    return function () {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = ":host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Solid\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Regular\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Light\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Thin\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}";

  function css() {
    var dcp = DEFAULT_CSS_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.cssPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dcp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var _cssInserted = false;

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css: css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  /**
   * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
   *
   * Copyright Mathias Bynens <https://mathiasbynens.be/>

   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:

   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // eslint-disable-line eqeqeq
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }

  function toHex(unicode) {
    var decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  function codePointAt(string, index) {
    var size = string.length;
    var first = string.charCodeAt(index);
    var second;

    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);

      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }

    return first;
  }

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
    d1: 1,
    d2: 2
  }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
    cls1: 1,
    d1: 2,
    cls2: 3,
    d2: 4
  }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
    cls1: 1,
    d1: 2
  })];

  var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
  var styles = namespace.styles,
      shims = namespace.shims;
  var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function getIconName(cssPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'number';
        });
        aliases.forEach(function (alias) {
          acc[alias.toString(16)] = iconName;
        });
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      acc[iconName] = iconName;

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'string';
        });
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
      }

      return acc;
    });
    _byAlias = lookup(function (acc, icon, iconName) {
      var aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
      return acc;
    }); // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.

    var hasRegular = 'far' in styles || config.autoFetchSvg;
    var shimLookups = reduce(shims, function (acc, shim) {
      var maybeNameMaybeUnicode = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      if (typeof maybeNameMaybeUnicode === 'string') {
        acc.names[maybeNameMaybeUnicode] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      if (typeof maybeNameMaybeUnicode === 'number') {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange(function (c) {
    _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    var oldUnicode = _byOldUnicode[unicode];
    var newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
      prefix: 'fas',
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalPrefix(styleOrPrefix) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$family = params.family,
        family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
    var style = PREFIX_TO_STYLE[family][styleOrPrefix];
    var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    return prefix || defined || null;
  }
  var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
  function getCanonicalIcon(values) {
    var _famProps;

    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups,
        skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
    var givenPrefix = null;
    var family = FAMILY_CLASSIC;

    if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
      return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
    })) {
      family = FAMILY_CLASSIC;
    }

    if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
      return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
    })) {
      family = FAMILY_SHARP;
    }

    var canonical = values.reduce(function (acc, cls) {
      var iconName = getIconName(config.cssPrefix, cls);

      if (styles[cls]) {
        cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
        givenPrefix = cls;
        acc.prefix = cls;
      } else if (PREFIXES[family].indexOf(cls) > -1) {
        givenPrefix = cls;
        acc.prefix = getCanonicalPrefix(cls, {
          family: family
        });
      } else if (iconName) {
        acc.iconName = iconName;
      } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
        acc.rest.push(cls);
      }

      if (!skipLookups && acc.prefix && acc.iconName) {
        var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
        var aliasIconName = byAlias(acc.prefix, acc.iconName);

        if (shim.prefix) {
          givenPrefix = null;
        }

        acc.iconName = shim.iconName || aliasIconName || acc.iconName;
        acc.prefix = shim.prefix || acc.prefix;

        if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
          // Allow a fallback from the regular style to solid if regular is not available
          // but only if we aren't auto-fetching SVGs
          acc.prefix = 'fas';
        }
      }

      return acc;
    }, emptyCanonicalIcon());

    if (values.includes('fa-brands') || values.includes('fab')) {
      canonical.prefix = 'fab';
    }

    if (values.includes('fa-duotone') || values.includes('fad')) {
      canonical.prefix = 'fad';
    }

    if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
      canonical.prefix = 'fass';
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }

    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }

    return canonical;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

          var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
          if (longPrefix) defineIcons(longPrefix, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          var aliases = icon[2];
          if (!additions[prefix]) additions[prefix] = {};

          if (aliases.length > 0) {
            aliases.forEach(function (alias) {
              if (typeof alias === 'string') {
                additions[prefix][alias] = icon;
              }
            });
          }

          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function (k) {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });

    _plugins.forEach(function (plugin) {
      var mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(function (tk) {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }

        if (_typeof(mixout[tk]) === 'object') {
          Object.keys(mixout[tk]).forEach(function (sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }

            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });

      if (plugin.hooks) {
        var hooks = plugin.hooks();
        Object.keys(hooks).forEach(function (hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }

          _hooks[hook].push(hooks[hook]);
        });
      }

      if (plugin.provides) {
        plugin.provides(providers);
      }
    });

    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }

    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return Promise.reject('Operation requires a DOM of some kind.');
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }

      if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }

      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix: prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }

      if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }

      if (typeof _icon === 'string') {
        var _prefix = getDefaultUsablePrefix();

        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    parse: parse,
    library: library,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function bootstrap(plugins) {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        callHooks('bootstrap');
      });
    }

    namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        build();
        autoReplace();
      },
      addPacks: function addPacks(packs) {
        packs.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prefix = _ref2[0],
              icons = _ref2[1];

          namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        });
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) {
      content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }

    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });

    var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    },
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread2({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var styles$1 = namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };

  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
  }

  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;

    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }

    return new Promise(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: callProvided('missingIconAbstract') || {}
      };

      if (givenPrefix === 'fa') {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }

      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
      }));
    });
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"6.4.0\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
  }

  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }

  function convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$ceFn = params.ceFn,
        ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }

    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child, {
        ceFn: ceFn
      }));
    });
    return tag;
  }

  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    /* BEGIN.ATTRIBUTION */

    comment = "".concat(comment, "Font Awesome fontawesome.com ");
    /* END.ATTRIBUTION */

    return comment;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];

      if (node.parentNode) {
        mutation[1].forEach(function (_abstract) {
          node.parentNode.insertBefore(convertSVG(_abstract), node);
        });

        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          var comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete _abstract2[0].attributes.id;

      if (_abstract2[0].attributes.class) {
        var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }

          return acc;
        }, {
          toNode: [],
          toSvg: []
        });

        _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

        if (splitClasses.toNode.length === 0) {
          node.removeAttribute('class');
        } else {
          node.setAttribute('class', splitClasses.toNode.join(' '));
        }
      }

      var newInnerHTML = _abstract2.map(function (a) {
        return toHtml(a);
      }).join('\n');

      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var _options$treeCallback = options.treeCallback,
        treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
        _options$nodeCallback = options.nodeCallback,
        nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
        _options$pseudoElemen = options.pseudoElementsCallback,
        pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.iconName && val.prefix) {
      return val;
    }

    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }

    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }

    return val;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      styleParser: true
    };

    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    var extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  var styles$2 = namespace.styles;

  function generateMutation(node) {
    var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }

  var knownPrefixes = new Set();
  FAMILIES.map(function (family) {
    knownPrefixes.add("fa-".concat(family));
  });
  Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
  Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
  knownPrefixes = _toConsumableArray(knownPrefixes);

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
      return "fa-".concat(f);
    }).concat(Object.keys(styles$2));

    if (!prefixes.includes('fa')) {
      prefixes.push('fa');
    }

    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return Promise.resolve();
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e.name === 'MissingIcon') {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new Promise(function (resolve, reject) {
      Promise.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function (e) {
        mark();
        reject(e);
      });
    });
  }

  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask: mask
      }));
    };
  }

  var render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), function () {
      callHooks('beforeDOMElementCreation', {
        iconDefinition: iconDefinition,
        params: params
      });

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;
        return onTree(node, callback);
      };

      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            titleId = nodeMeta.titleId,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
        return new Promise(function (resolve, reject) {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                main = _ref2[0],
                mask = _ref2[1];

            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              maskId: maskId,
              title: title,
              titleId: titleId,
              extra: extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };

      providers$$1.generateAbstractIcon = function (_ref3) {
        var children = _ref3.children,
            attributes = _ref3.attributes,
            main = _ref3.main,
            transform = _ref3.transform,
            styles = _ref3.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var nextChild;

        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main: main,
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }

        children.push(nextChild || main.icon);
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var Layers = {
    mixout: function mixout() {
      return {
        layer: function layer(assembler) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: 'layer'
          }, function () {
            callHooks('beforeDOMElementCreation', {
              assembler: assembler,
              params: params
            });
            var children = [];
            assembler(function (args) {
              Array.isArray(args) ? args.map(function (a) {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
              },
              children: children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout: function mixout() {
      return {
        counter: function counter(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'counter',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout: function mixout() {
      return {
        text: function text(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$transform = params.transform,
              transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
              _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'text',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersTextAbstract({
              content: content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }

        if (config.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }

        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          title: title,
          extra: extra,
          watchable: true
        })]);
      };
    }
  };

  var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  function hexValueFromContent(content) {
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    var codePoint = codePointAt(cleaned, 0);
    var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
        var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

        var _hexValueFromContent = hexValueFromContent(_content),
            hexValue = _hexValueFromContent.value,
            isSecondary = _hexValueFromContent.isSecondary;

        var isV4 = fontFamily[0].startsWith('FontAwesome');
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName;

        if (isV4) {
          var iconName4 = byOldUnicode(hexValue);

          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName


        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));

            var element = DOCUMENT.createElement('svg');

            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = _abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      Promise.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var PseudoElements = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.pseudoElements2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto: function noAuto() {
          disconnect();
        },
        watch: function watch(params) {
          var observeMutationsRoot = params.observeMutationsRoot;

          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot: observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute('data-fa-transform');

          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }

          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        var main = _ref.main,
            transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer: outer,
          inner: inner,
          path: path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(_abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (_abstract.attributes && (_abstract.attributes.fill || force)) {
      _abstract.attributes.fill = 'black';
    }

    return _abstract;
  }

  function deGroup(_abstract2) {
    if (_abstract2.tag === 'g') {
      return _abstract2.children;
    } else {
      return [_abstract2];
    }
  }

  var Masks = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute('data-fa-mask');
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
            return i.trim();
          }));

          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }

          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides: function provides(providers) {
      var reduceMotion = false;

      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      providers.missingIconAbstract = function () {
        var gChildren = [];
        var FILL = {
          fill: 'currentColor'
        };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        }; // Ring

        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        });

        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });

        var dot = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: []
        };

        if (!reduceMotion) {
          dot.children.push({
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          });
        }

        gChildren.push(dot);
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: reduceMotion ? [] : [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        });

        if (!reduceMotion) {
          // Exclamation
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: '0',
              d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
            }),
            children: [{
              tag: 'animate',
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: '0;0;1;1;0;0;'
              })
            }]
          });
        }

        return {
          tag: 'g',
          attributes: {
            'class': 'missing'
          },
          children: gChildren
        };
      };
    }
  };

  var SvgSymbols = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute('data-fa-symbol');
          var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  bunker(bootstrap);

}());


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/Objective.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _assets_fontawesome_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fontawesome/fontawesome */ "./src/assets/fontawesome/fontawesome.js");
/* harmony import */ var _assets_fontawesome_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fontawesome_fontawesome__WEBPACK_IMPORTED_MODULE_3__);





const UI = (() => {
  const main = document.querySelector('.main');
  const sidebar = document.querySelector('.sidebar')
  // TODO change test
  const test = new _Storage__WEBPACK_IMPORTED_MODULE_2__["default"]();
  
  // Dummy Missions
  const mission = new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"]('Testing mission');
  test.addMission(mission);

  // checks storage for objectives due today and moves them to Today's mission
  function checkStoredObjectives() {
    const storedTodos = test.getQuestMenu().getMissions()
    for(const mission of storedTodos) {
      const missionObjectives = mission.getObjectives()
      for(const objective of missionObjectives) {
        if(isToday(objective)) {
          const objName = objective.getName()
          const objDescription = objective.getDescription()
          const objDate = objective.getDateFormatted()
          const newObjective = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"](objName, objDescription, objDate)
          test.deleteObjective(mission.getName(), objective.getName())
          test.addObjective("Today", newObjective)
        }
      }
    }
  }

  // Check if objective is due today
  function isToday(obj) {
    const date = new Date()
    const dateToday =  date.getDate()
    const dateMonth = date.getMonth() + 1
    const dateYear = date.getFullYear()
    const fullDate = `${dateMonth}/${dateToday}/${dateYear}`
    if(obj.getDateFormatted() === "today" || obj.getDateFormatted() === fullDate) {
      return true
    } else {
      return false
    }
  }

  // Dummy Objectives
  
  const todayObjective = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Today objective", "todaaaay")
  test.addObjective("Today", todayObjective)
  const weekObjecetive = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("For the week", "weeeek", "2023-8-8")
  test.addObjective("This Week", weekObjecetive)
  // const tryingToToday = new Objective("Move to Today", "moving", "27/7/2023")
  // test.addObjective("Testing mission", tryingToToday)

  const missionsBox = document.querySelector('.missions');
  const objectivesBox = document.querySelector('.objectives');
  const emptyMessage = document.querySelector('.empty-obj-message');

  // TODO add a close button on form
  // Add mission
  const addMissionBtn = document.getElementById('add-mission');
  
  const missionFormBox = document.createElement("div")
  missionFormBox.style.display = "none"
  missionFormBox.classList.add("mission-form-box")

  const missionForm = document.createElement("form")

  const missionFieldSet = document.createElement("fieldset")

  const missionFormLegend = document.createElement("legend")
  missionFormLegend.classList.add("mission-legend")
  missionFormLegend.textContent = "Create New Mission"

  const missionNameLabel = document.createElement("label")
  missionNameLabel.setAttribute("for", "name")
  missionNameLabel.textContent = "Mission Name:"

  const missionNameInput = document.createElement("input")
  missionNameInput.setAttribute("autocomplete", "off")
  missionNameInput.id = "name"
  missionNameInput.placeholder = "Enter the mission name"

  const createMissionBtn = document.createElement("button")
  createMissionBtn.id = "create-mission-btn"
  createMissionBtn.textContent = "Create Mission"

  createMissionBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const missionName = missionNameInput.value
    if (missionNameInput.value === "") {
      return
    }
    const newMission = new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"](missionName)
    test.addMission(newMission)
    missionFormBox.style.display = "none"
    renderMissions()
  })
  
  missionFormBox.appendChild(missionForm)
  missionForm.append(missionFieldSet)
  missionFieldSet.append(missionFormLegend, missionNameLabel, createMissionBtn)
  missionNameLabel.appendChild(missionNameInput)
  sidebar.appendChild(missionFormBox)

  addMissionBtn.addEventListener("click", () => {
    if(missionFormBox.style.display === "block") {
      missionFormBox.style.display = "none"
    } else {
      missionFormBox.style.display = "block"
      missionNameInput.focus()
    }
  })
  

  const contentBox = document.querySelector(".content-box")
  // Add objective
  const addObjectiveBtn = document.getElementById('add-objective');

  const objectiveFormBox = document.createElement("div")
  objectiveFormBox.style.display = "none"
  objectiveFormBox.classList.add("objective-form-box")

  const objectiveForm = document.createElement("form")

  const objectiveFieldset = document.createElement("fieldset")

  const objectiveFormLegend = document.createElement("legend")
  objectiveFormLegend.classList.add("objective-legend")
  objectiveFormLegend.textContent = "Create new objective"

  const objectiveNameLabel = document.createElement("label")
  objectiveNameLabel.setAttribute("for", "oName")
  objectiveNameLabel.textContent = "Objective Name: "

  const objectiveNameInput = document.createElement("input")
  objectiveNameInput.setAttribute("autocomplete", "off")
  objectiveNameInput.id = "oName"
  objectiveNameInput.placeholder = "Enter the objective name"

  const objectiveDescriptionLabel = document.createElement("label")
  objectiveDescriptionLabel.setAttribute("for", "oDescription")
  objectiveDescriptionLabel.textContent = "Objective Description: "

  const objectiveDescriptionInput = document.createElement("input")
  objectiveDescriptionInput.setAttribute("autocomplete", "off")
  objectiveDescriptionInput.id = "oDescription"
  objectiveDescriptionInput.placeholder = "What is this objective about?"

  const objectiveDueDateLabel = document.createElement("label")
  objectiveDueDateLabel.setAttribute("for", "oDueDate")
  objectiveDueDateLabel.textContent = "Objective Due Date: "

  const objectiveDueDateInput = document.createElement("input")
  objectiveDueDateInput.setAttribute("type", "date")
  objectiveDueDateInput.id = "oDueDate"

  const missionPickerLabel = document.createElement("label")
  missionPickerLabel.setAttribute("for", "oMission")
  missionPickerLabel.textContent = "Mission: "

  const missionPickerInput = document.createElement("select")
  missionPickerInput.setAttribute("name", "oMission")
  missionPickerInput.id = "oMission"

  for (const mission of test.getQuestMenu().getMissions()) {
      const optionElement = document.createElement("option")
      optionElement.setAttribute("value", `${mission.getName()}`)
      optionElement.textContent = `${mission.getName()}`
      missionPickerInput.appendChild(optionElement)
    }

  const createObjectiveBtn = document.createElement("button")
  createObjectiveBtn.id = "create-objective-btn"
  createObjectiveBtn.textContent = "Create Objective"

  createObjectiveBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const objectiveName = objectiveNameInput.value
    if (objectiveName === "") {
      return
    }
    const objectiveDescription = objectiveDescriptionInput.value
    const objectiveDueDate = objectiveDueDateInput.value
    const objectiveMission = missionPickerInput.value
    const newObjective = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"](objectiveName, objectiveDescription, objectiveDueDate)
    test.addObjective(objectiveMission, newObjective)
    objectiveFormBox.style.display = "none"
    renderMissions()
    renderObjectives(test.getQuestMenu().getMission(missionPickerInput.value))
  })

  objectiveFormBox.appendChild(objectiveForm)
  objectiveForm.appendChild(objectiveFieldset)
  objectiveFieldset.append(objectiveFormLegend, objectiveNameLabel, objectiveDescriptionLabel, objectiveDueDateLabel, missionPickerLabel, missionPickerInput, createObjectiveBtn)
  objectiveNameLabel.appendChild(objectiveNameInput)
  objectiveDescriptionLabel.appendChild(objectiveDescriptionInput)
  objectiveDueDateLabel.appendChild(objectiveDueDateInput)
  contentBox.appendChild(objectiveFormBox)

  addObjectiveBtn.addEventListener("click", () => {
    if (objectiveFormBox.style.display === "none") {
      objectiveFormBox.style.display = "block"
      objectiveNameInput.focus()
    } else {
      objectiveFormBox.style.display = "none"
    }
  })

  // creates mission element using mission object
  function createMissionElement(mission) {
    const missionElement = document.createElement('li');
    missionElement.classList.add('mission');
    const missionText = document.createElement('h3');
    missionText.textContent = mission.getName();

    const editNameLabel = document.createElement("label")
    editNameLabel.setAttribute("for", "eName")
    editNameLabel.textContent = "Edit mission name: "

    const editNameInput = document.createElement("input")
    editNameInput.setAttribute("autocomplete", "off")
    editNameInput.id = "eName"
    editNameInput.placeholder = "New mission name..."

    editNameLabel.appendChild(editNameInput)

    const deleteMissionImg = document.createElement("i")
    deleteMissionImg.setAttribute("role", "button")
    deleteMissionImg.classList.add("fa-solid", "fa-square-xmark", "fa-lg")

    missionElement.addEventListener('click', () => {
      renderObjectives(mission);
    });

    missionElement.appendChild(missionText);

    if (missionText.textContent === "Today" || missionText.textContent === "This Week") {
      return missionElement
    } else {
      missionElement.appendChild(deleteMissionImg)
    }

    deleteMissionImg.addEventListener("click", () => {
      test.deleteMission(missionText.textContent)
      renderMissions()
    })

    missionText.addEventListener("click", () => {
      if (missionText.textContent === "Today" || missionText.textContent === "This Week") {
        return
      }
      missionElement.removeChild(missionText)
      missionElement.removeChild(deleteMissionImg)
      missionElement.appendChild(editNameLabel)
      editNameInput.focus()
    })

    editNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (editNameInput.value !== "") {
          const oldMission = test.getQuestMenu().getMission(mission.getName())
          test.renameMission(oldMission.getName(), editNameInput.value)
          renderMissions()
        }
      }
    })

    return missionElement;
  }
  // TODO add status to objective?
  // Creates objective element using objective object
  function createObjectiveElement(objective, missionName) {
    const objectiveElement = document.createElement('li');
    objectiveElement.classList.add('objective');
    const objectiveText = document.createElement('h4');
    objectiveText.textContent = objective.getName();

    const objectiveCheckBox = document.createElement("input")
    objectiveCheckBox.setAttribute("type", "checkbox")
    objectiveCheckBox.id = objective.getName()

    objectiveCheckBox.addEventListener("click", () => {
      if (objectiveCheckBox.checked) {
        test.deleteObjective(missionName, objectiveText.textContent)
        renderObjectives(test.getQuestMenu().getMission(missionName))
        console.log(test.getQuestMenu().getMission(missionName).getObjectives())
      }
    })

    // TODO animate description box

    const objectiveDescriptionBox = document.createElement("div")
    objectiveDescriptionBox.classList.add("objective-description")

    const objectiveDescription = document.createElement("div")
    
    // TODO add listener to expand obj to show description
    if (objective.getDescription() === "") {
      objectiveDescription.textContent = "No description"
    } else {
      objectiveDescription.textContent = objective.getDescription()
    }
    // TODO listener/button to edit name, description, and date of objective

    objectiveElement.append(objectiveCheckBox, objectiveText)
    objectiveDescriptionBox.appendChild(objectiveDescription)

    if (objective.getDueDate() !== "") {
      const objectiveDueDate = document.createElement("div")
      if (objective.getDueDate() === "today") {
        objectiveDueDate.textContent = "Today"
      } else {
        objectiveDueDate.textContent = objective.getDueDate()
      }
      objectiveElement.appendChild(objectiveDueDate)
    }

    return objectiveElement;
  }

  function clear(element) {
    element.innerHTML = '';
  }

  function renderObjectives(chosenMission) {
    clear(objectivesBox)
    const objectivesArray = chosenMission.getObjectives();
    // if array is empty create message
    if (objectivesArray.length !== 0) {
      emptyMessage.style.display = 'none';
    } else {
      emptyMessage.style.display = 'block';
    }
    for (const objective of objectivesArray) {
      objectivesBox.appendChild(createObjectiveElement(objective, chosenMission.getName()));
    }
  }

  function renderMissions() {
    clear(missionsBox);
    const questArray = test.getQuestMenu().getMissions();
    for (const mission of questArray) {
      missionsBox.appendChild(createMissionElement(mission));
    }
  }

  // render Today's mission and objectives when page loads
  function renderToday() {
    checkStoredObjectives()
    renderMissions();
    const today = test.getQuestMenu().getMission('Today').getObjectives();
    for (const objective of today) {
      objectivesBox.appendChild(createObjectiveElement(objective, "Today"));
    }
  }

  renderToday();  

  return main;
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkMsU0FBUzs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMkVBQTJFOztBQUUzRTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLEdBQUc7O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FB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QSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEIsY0FBYyxVQUFVO0FBQ3hCLGNBQWMsVUFBVTtBQUN4QixjQUFjLFVBQVU7QUFDeEIsY0FBYyx1QkFBdUI7QUFDckM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTixpRUFBaUUsZ0NBQWdDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSyxHQUFHO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxlQUFlO0FBQ2Y7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1GQUFtRixhQUFhO0FBQ2hHO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFO0FBQ0EsbUVBQW1FLDhCQUE4QjtBQUNqRyw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtGQUErRixlQUFlO0FBQzlHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsc0RBQXNELHNCQUFzQjtBQUM1RTtBQUNBLG1FQUFtRSxnQ0FBZ0M7QUFDbkc7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFQUFxRSxnQ0FBZ0M7QUFDckcsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixPQUFPO0FBQ1A7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0RBQWtELHVCQUF1QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTtBQUNBLE1BQU0sSUFBSSxLQUFLO0FBQ2Y7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7QUFDQSxNQUFNLElBQUksS0FBSztBQUNmO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsaUNBQWlDO0FBQy9FLDhGQUE4RjtBQUM5RixPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLElBQUk7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxXQUFXO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7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QXFDLGtCQUFrQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUXVlc3RNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ZvbnRhd2Vzb21lL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRPYmplY3RpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXM7XG4gIH1cblxuICBzZXRPYmplY3RpdmVzKG9iamVjdGl2ZXMpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBvYmplY3RpdmVzO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gb2JqTmFtZSk7XG4gIH1cblxuICBhZGRPYmplY3RpdmUobmV3T2JqKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBuZXdPYmoubmFtZSkpIHtcbiAgICAgIHRoaXMub2JqZWN0aXZlcy5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSB0aGlzLm9iamVjdGl2ZXMuZmlsdGVyKChvYmopID0+IG9iai5uYW1lICE9PSBvYmpOYW1lKVxuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMl1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVswXVxuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3RNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IFtdXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRvZGF5XCIpKVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUaGlzIFdlZWtcIikpXG4gICAgfVxuXG4gICAgc2V0TWlzc2lvbnMobWlzc2lvbnMpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IG1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKVxuICAgIH1cblxuICAgIGFkZE1pc3Npb24obmV3TWlzc2lvbikge1xuICAgICAgICBpZighdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG5ld01pc3Npb24ubmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXdNaXNzaW9uKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IHRoaXMubWlzc2lvbnMuZmlsdGVyKChtaXNzaW9uKSA9PiBtaXNzaW9uLm5hbWUgIT09IG1pc3Npb25OYW1lKVxuICAgICAgICAvKiBjb25zdCBtaXNzaW9uVG9EZWxldGUgPSB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpIFxuICAgICAgICB0aGlzLm1pc3Npb25zLnNwbGljZSh0aGlzLm1pc3Npb25zLmluZGV4T2YobWlzc2lvblRvRGVsZXRlKSwgMSkgKi9cbiAgICB9XG5cbiAgICB1cGRhdGVUb2RheU1pc3Npb24oKSB7XG4gICAgICAgIHRoaXMuZ2V0TWlzc2lvbihcIlRvZGF5XCIpLm9iamVjdGl2ZXMgPSBbXVxuXG4gICAgICAgIHRoaXMubWlzc2lvbnMuZm9yRWFjaCgobWlzc2lvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG1pc3Npb24uZ2V0TmFtZSgpID09PSBcIlRvZGF5XCIpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgdG9kYXlPYmplY3RpdmVzID0gbWlzc2lvbi5nZXRUb2RheU9iamVjdGl2ZXMoKVxuICAgICAgICAgICAgdG9kYXlPYmplY3RpdmVzLmZvckVhY2goKG9iamVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZU5hbWUgPSBgJHtvYmplY3RpdmUuZ2V0TmFtZSgpfWBcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5hZGRPYmplY3RpdmUobmV3IE9iamVjdGl2ZShvYmplY3RpdmVOYW1lLCBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuL01pc3Npb25cIlxuaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuaW1wb3J0IFF1ZXN0TWVudSBmcm9tIFwiLi9RdWVzdE1lbnVcIlxuXG5cbmV4cG9ydCAgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHsgIFxuICAgIHNhdmVRdWVzdE1lbnUoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXN0bWVudVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICBnZXRRdWVzdE1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IFF1ZXN0TWVudSgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0bWVudVwiKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuc2V0TWlzc2lvbnMoXG4gICAgICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgICAgIC5tYXAobWlzc2lvbiA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIG5ldyBNaXNzaW9uKCksIG1pc3Npb25cbiAgICAgICAgICAgICkpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgLmZvckVhY2gobWlzc2lvbiA9PiBcbiAgICAgICAgICAgIG1pc3Npb24uc2V0T2JqZWN0aXZlcyhcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9PiBPYmplY3QuYXNzaWduKG5ldyBPYmplY3RpdmUsIG9iaikpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHF1ZXN0c01lbnVcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgcGFyYW1ldGVycyB3aXRoIC1OYW1lIGhhcyAuZ2V0TmFtZSgpIG9yIGl0IHdpbGwgZGVsZXRlIHdyb25nIGl0ZW1cblxuICAgIGFkZE1pc3Npb24obWlzc2lvbikge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmFkZE1pc3Npb24obWlzc2lvbilcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU1pc3Npb24ob2xkTWlzc2lvbk5hbWUsIG5ld01pc3Npb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihvbGRNaXNzaW9uTmFtZSkuc2V0TmFtZShuZXdNaXNzaW9uTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgYWRkT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5hZGRPYmplY3RpdmUob2JqZWN0aXZlKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5kZWxldGVPYmplY3RpdmUob2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgcmVuYW1lT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lLCBuZXdPYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlKG9iak5hbWUpLnNldE5hbWUobmV3T2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiFcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxuICogQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9LCBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgICBfd3JhcFJlZ0V4cCA9IGZ1bmN0aW9uIChyZSwgZ3JvdXBzKSB7XG4gICAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB2b2lkIDAsIGdyb3Vwcyk7XG4gICAgfTtcblxuICAgIHZhciBfc3VwZXIgPSBSZWdFeHAucHJvdG90eXBlLFxuICAgICAgICBfZ3JvdXBzID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7XG5cbiAgICAgIHJldHVybiBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSksIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEdyb3VwcyhyZXN1bHQsIHJlKSB7XG4gICAgICB2YXIgZyA9IF9ncm91cHMuZ2V0KHJlKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV0sIGdyb3VwcztcbiAgICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgIH1cblxuICAgIHJldHVybiBfaW5oZXJpdHMoQmFiZWxSZWdFeHAsIFJlZ0V4cCksIEJhYmVsUmVnRXhwLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgdmFyIHJlc3VsdCA9IF9zdXBlci5leGVjLmNhbGwodGhpcywgc3RyKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdCAmJiAocmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcykpLCByZXN1bHQ7XG4gICAgfSwgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uIChzdHIsIHN1YnN0aXR1dGlvbikge1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHN1YnN0aXR1dGlvbikge1xuICAgICAgICB2YXIgZ3JvdXBzID0gX2dyb3Vwcy5nZXQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygc3Vic3RpdHV0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICByZXR1cm4gXCJvYmplY3RcIiAhPSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdICYmIChhcmdzID0gW10uc2xpY2UuY2FsbChhcmdzKSkucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpLCBzdWJzdGl0dXRpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9LCBfd3JhcFJlZ0V4cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgICByZXR1cm4gbztcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICAgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gICAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gICAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG5cbiAgICB2YXIgX3MsIF9lO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4gIHZhciBfV0lORE9XID0ge307XG4gIHZhciBfRE9DVU1FTlQgPSB7fTtcbiAgdmFyIF9NVVRBVElPTl9PQlNFUlZFUiA9IG51bGw7XG4gIHZhciBfUEVSRk9STUFOQ0UgPSB7XG4gICAgbWFyazogbm9vcCxcbiAgICBtZWFzdXJlOiBub29wXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIF9ET0NVTUVOVCA9IGRvY3VtZW50O1xuICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIF9NVVRBVElPTl9PQlNFUlZFUiA9IE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciBfcmVmID0gX1dJTkRPVy5uYXZpZ2F0b3IgfHwge30sXG4gICAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgICAgdXNlckFnZW50ID0gX3JlZiR1c2VyQWdlbnQgPT09IHZvaWQgMCA/ICcnIDogX3JlZiR1c2VyQWdlbnQ7XG4gIHZhciBXSU5ET1cgPSBfV0lORE9XO1xuICB2YXIgRE9DVU1FTlQgPSBfRE9DVU1FTlQ7XG4gIHZhciBNVVRBVElPTl9PQlNFUlZFUiA9IF9NVVRBVElPTl9PQlNFUlZFUjtcbiAgdmFyIFBFUkZPUk1BTkNFID0gX1BFUkZPUk1BTkNFO1xuICB2YXIgSVNfQlJPV1NFUiA9ICEhV0lORE9XLmRvY3VtZW50O1xuICB2YXIgSVNfRE9NID0gISFET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQgJiYgISFET0NVTUVOVC5oZWFkICYmIHR5cGVvZiBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBET0NVTUVOVC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xuICB2YXIgSVNfSUUgPSB+dXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSB8fCB+dXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbiAgdmFyIF9mYW1pbHlQcm94eSwgX2ZhbWlseVByb3h5MiwgX2ZhbWlseVByb3h5MywgX2ZhbWlseVByb3h5NCwgX2ZhbWlseVByb3h5NTtcblxuICB2YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbiAgdmFyIFVOSVRTX0lOX0dSSUQgPSAxNjtcbiAgdmFyIERFRkFVTFRfQ1NTX1BSRUZJWCA9ICdmYSc7XG4gIHZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbiAgdmFyIERBVEFfRkFfSTJTVkcgPSAnZGF0YS1mYS1pMnN2Zyc7XG4gIHZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xuICB2YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQtcGVuZGluZyc7XG4gIHZhciBEQVRBX1BSRUZJWCA9ICdkYXRhLXByZWZpeCc7XG4gIHZhciBEQVRBX0lDT04gPSAnZGF0YS1pY29uJztcbiAgdmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG4gIHZhciBNVVRBVElPTl9BUFBST0FDSF9BU1lOQyA9ICdhc3luYyc7XG4gIHZhciBUQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUyA9IFsnSFRNTCcsICdIRUFEJywgJ1NUWUxFJywgJ1NDUklQVCddO1xuICB2YXIgUFJPRFVDVElPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIFwicHJvZHVjdGlvblwiID09PSAncHJvZHVjdGlvbic7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSgpO1xuICB2YXIgRkFNSUxZX0NMQVNTSUMgPSAnY2xhc3NpYyc7XG4gIHZhciBGQU1JTFlfU0hBUlAgPSAnc2hhcnAnO1xuICB2YXIgRkFNSUxJRVMgPSBbRkFNSUxZX0NMQVNTSUMsIEZBTUlMWV9TSEFSUF07XG5cbiAgZnVuY3Rpb24gZmFtaWx5UHJveHkob2JqKSB7XG4gICAgLy8gRGVmYXVsdHMgdG8gdGhlIGNsYXNzaWMgZmFtaWx5IGlmIGZhbWlseSBpcyBub3QgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgPyB0YXJnZXRbcHJvcF0gOiB0YXJnZXRbRkFNSUxZX0NMQVNTSUNdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHZhciBQUkVGSVhfVE9fU1RZTEUgPSBmYW1pbHlQcm94eSgoX2ZhbWlseVByb3h5ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHksIEZBTUlMWV9DTEFTU0lDLCB7XG4gICAgJ2ZhJzogJ3NvbGlkJyxcbiAgICAnZmFzJzogJ3NvbGlkJyxcbiAgICAnZmEtc29saWQnOiAnc29saWQnLFxuICAgICdmYXInOiAncmVndWxhcicsXG4gICAgJ2ZhLXJlZ3VsYXInOiAncmVndWxhcicsXG4gICAgJ2ZhbCc6ICdsaWdodCcsXG4gICAgJ2ZhLWxpZ2h0JzogJ2xpZ2h0JyxcbiAgICAnZmF0JzogJ3RoaW4nLFxuICAgICdmYS10aGluJzogJ3RoaW4nLFxuICAgICdmYWQnOiAnZHVvdG9uZScsXG4gICAgJ2ZhLWR1b3RvbmUnOiAnZHVvdG9uZScsXG4gICAgJ2ZhYic6ICdicmFuZHMnLFxuICAgICdmYS1icmFuZHMnOiAnYnJhbmRzJyxcbiAgICAnZmFrJzogJ2tpdCcsXG4gICAgJ2ZhLWtpdCc6ICdraXQnXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5LCBGQU1JTFlfU0hBUlAsIHtcbiAgICAnZmEnOiAnc29saWQnLFxuICAgICdmYXNzJzogJ3NvbGlkJyxcbiAgICAnZmEtc29saWQnOiAnc29saWQnLFxuICAgICdmYXNyJzogJ3JlZ3VsYXInLFxuICAgICdmYS1yZWd1bGFyJzogJ3JlZ3VsYXInLFxuICAgICdmYXNsJzogJ2xpZ2h0JyxcbiAgICAnZmEtbGlnaHQnOiAnbGlnaHQnXG4gIH0pLCBfZmFtaWx5UHJveHkpKTtcbiAgdmFyIFNUWUxFX1RPX1BSRUZJWCA9IGZhbWlseVByb3h5KChfZmFtaWx5UHJveHkyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHkyLCBGQU1JTFlfQ0xBU1NJQywge1xuICAgICdzb2xpZCc6ICdmYXMnLFxuICAgICdyZWd1bGFyJzogJ2ZhcicsXG4gICAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICAgJ3RoaW4nOiAnZmF0JyxcbiAgICAnZHVvdG9uZSc6ICdmYWQnLFxuICAgICdicmFuZHMnOiAnZmFiJyxcbiAgICAna2l0JzogJ2ZhaydcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHkyLCBGQU1JTFlfU0hBUlAsIHtcbiAgICAnc29saWQnOiAnZmFzcycsXG4gICAgJ3JlZ3VsYXInOiAnZmFzcicsXG4gICAgJ2xpZ2h0JzogJ2Zhc2wnXG4gIH0pLCBfZmFtaWx5UHJveHkyKSk7XG4gIHZhciBQUkVGSVhfVE9fTE9OR19TVFlMRSA9IGZhbWlseVByb3h5KChfZmFtaWx5UHJveHkzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHkzLCBGQU1JTFlfQ0xBU1NJQywge1xuICAgICdmYWInOiAnZmEtYnJhbmRzJyxcbiAgICAnZmFkJzogJ2ZhLWR1b3RvbmUnLFxuICAgICdmYWsnOiAnZmEta2l0JyxcbiAgICAnZmFsJzogJ2ZhLWxpZ2h0JyxcbiAgICAnZmFyJzogJ2ZhLXJlZ3VsYXInLFxuICAgICdmYXMnOiAnZmEtc29saWQnLFxuICAgICdmYXQnOiAnZmEtdGhpbidcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHkzLCBGQU1JTFlfU0hBUlAsIHtcbiAgICAnZmFzcyc6ICdmYS1zb2xpZCcsXG4gICAgJ2Zhc3InOiAnZmEtcmVndWxhcicsXG4gICAgJ2Zhc2wnOiAnZmEtbGlnaHQnXG4gIH0pLCBfZmFtaWx5UHJveHkzKSk7XG4gIHZhciBMT05HX1NUWUxFX1RPX1BSRUZJWCA9IGZhbWlseVByb3h5KChfZmFtaWx5UHJveHk0ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk0LCBGQU1JTFlfQ0xBU1NJQywge1xuICAgICdmYS1icmFuZHMnOiAnZmFiJyxcbiAgICAnZmEtZHVvdG9uZSc6ICdmYWQnLFxuICAgICdmYS1raXQnOiAnZmFrJyxcbiAgICAnZmEtbGlnaHQnOiAnZmFsJyxcbiAgICAnZmEtcmVndWxhcic6ICdmYXInLFxuICAgICdmYS1zb2xpZCc6ICdmYXMnLFxuICAgICdmYS10aGluJzogJ2ZhdCdcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk0LCBGQU1JTFlfU0hBUlAsIHtcbiAgICAnZmEtc29saWQnOiAnZmFzcycsXG4gICAgJ2ZhLXJlZ3VsYXInOiAnZmFzcicsXG4gICAgJ2ZhLWxpZ2h0JzogJ2Zhc2wnXG4gIH0pLCBfZmFtaWx5UHJveHk0KSk7XG4gIHZhciBJQ09OX1NFTEVDVElPTl9TWU5UQVhfUEFUVEVSTiA9IC9mYShzfHJ8bHx0fGR8YnxrfHNzfHNyfHNsKT9bXFwtXFwgXS87IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcblxuICB2YXIgTEFZRVJTX1RFWFRfQ0xBU1NOQU1FID0gJ2ZhLWxheWVycy10ZXh0JztcbiAgdmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCA/QXdlc29tZSA/KFs1NiBdKikoU29saWR8UmVndWxhcnxMaWdodHxUaGlufER1b3RvbmV8QnJhbmRzfEZyZWV8UHJvfFNoYXJwfEtpdCk/LiovaTtcbiAgdmFyIEZPTlRfV0VJR0hUX1RPX1BSRUZJWCA9IGZhbWlseVByb3h5KChfZmFtaWx5UHJveHk1ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk1LCBGQU1JTFlfQ0xBU1NJQywge1xuICAgICc5MDAnOiAnZmFzJyxcbiAgICAnNDAwJzogJ2ZhcicsXG4gICAgJ25vcm1hbCc6ICdmYXInLFxuICAgICczMDAnOiAnZmFsJyxcbiAgICAnMTAwJzogJ2ZhdCdcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk1LCBGQU1JTFlfU0hBUlAsIHtcbiAgICAnOTAwJzogJ2Zhc3MnLFxuICAgICc0MDAnOiAnZmFzcicsXG4gICAgJzMwMCc6ICdmYXNsJ1xuICB9KSwgX2ZhbWlseVByb3h5NSkpO1xuICB2YXIgb25lVG9UZW4gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICB2YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG4gIHZhciBBVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OID0gWydjbGFzcycsICdkYXRhLXByZWZpeCcsICdkYXRhLWljb24nLCAnZGF0YS1mYS10cmFuc2Zvcm0nLCAnZGF0YS1mYS1tYXNrJ107XG4gIHZhciBEVU9UT05FX0NMQVNTRVMgPSB7XG4gICAgR1JPVVA6ICdkdW90b25lLWdyb3VwJyxcbiAgICBTV0FQX09QQUNJVFk6ICdzd2FwLW9wYWNpdHknLFxuICAgIFBSSU1BUlk6ICdwcmltYXJ5JyxcbiAgICBTRUNPTkRBUlk6ICdzZWNvbmRhcnknXG4gIH07XG4gIHZhciBwcmVmaXhlcyA9IG5ldyBTZXQoKTtcbiAgT2JqZWN0LmtleXMoU1RZTEVfVE9fUFJFRklYW0ZBTUlMWV9DTEFTU0lDXSkubWFwKHByZWZpeGVzLmFkZC5iaW5kKHByZWZpeGVzKSk7XG4gIE9iamVjdC5rZXlzKFNUWUxFX1RPX1BSRUZJWFtGQU1JTFlfU0hBUlBdKS5tYXAocHJlZml4ZXMuYWRkLmJpbmQocHJlZml4ZXMpKTtcbiAgdmFyIFJFU0VSVkVEX0NMQVNTRVMgPSBbXS5jb25jYXQoRkFNSUxJRVMsIF90b0NvbnN1bWFibGVBcnJheShwcmVmaXhlcyksIFsnMnhzJywgJ3hzJywgJ3NtJywgJ2xnJywgJ3hsJywgJzJ4bCcsICdiZWF0JywgJ2JvcmRlcicsICdmYWRlJywgJ2JlYXQtZmFkZScsICdib3VuY2UnLCAnZmxpcC1ib3RoJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ2ZsaXAnLCAnZncnLCAnaW52ZXJzZScsICdsYXllcnMtY291bnRlcicsICdsYXllcnMtdGV4dCcsICdsYXllcnMnLCAnbGknLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAncHVsc2UnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ3JvdGF0ZS05MCcsICdyb3RhdGUtYnknLCAnc2hha2UnLCAnc3Bpbi1wdWxzZScsICdzcGluLXJldmVyc2UnLCAnc3BpbicsICdzdGFjay0xeCcsICdzdGFjay0yeCcsICdzdGFjaycsICd1bCcsIERVT1RPTkVfQ0xBU1NFUy5HUk9VUCwgRFVPVE9ORV9DTEFTU0VTLlNXQVBfT1BBQ0lUWSwgRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlksIERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlldKS5jb25jYXQob25lVG9UZW4ubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbiAgfSkpLmNvbmNhdChvbmVUb1R3ZW50eS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gXCJ3LVwiLmNvbmNhdChuKTtcbiAgfSkpO1xuXG4gIHZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldEF0dHJDb25maWcoYXR0cikge1xuICAgIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAgIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgICAvLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGlzIGlzIGFuIGluZGljYXRpb24gdGhhdCBpdCBzaG91bGQgYmUgdG9nZ2xlZCB0byB0cnVlXG4gICAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodmFsID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBpZiAoRE9DVU1FTlQgJiYgdHlwZW9mIERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYXR0cnMgPSBbWydkYXRhLWZhbWlseS1wcmVmaXgnLCAnZmFtaWx5UHJlZml4J10sIFsnZGF0YS1jc3MtcHJlZml4JywgJ2Nzc1ByZWZpeCddLCBbJ2RhdGEtZmFtaWx5LWRlZmF1bHQnLCAnZmFtaWx5RGVmYXVsdCddLCBbJ2RhdGEtc3R5bGUtZGVmYXVsdCcsICdzdHlsZURlZmF1bHQnXSwgWydkYXRhLXJlcGxhY2VtZW50LWNsYXNzJywgJ3JlcGxhY2VtZW50Q2xhc3MnXSwgWydkYXRhLWF1dG8tcmVwbGFjZS1zdmcnLCAnYXV0b1JlcGxhY2VTdmcnXSwgWydkYXRhLWF1dG8tYWRkLWNzcycsICdhdXRvQWRkQ3NzJ10sIFsnZGF0YS1hdXRvLWExMXknLCAnYXV0b0ExMXknXSwgWydkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMnLCAnc2VhcmNoUHNldWRvRWxlbWVudHMnXSwgWydkYXRhLW9ic2VydmUtbXV0YXRpb25zJywgJ29ic2VydmVNdXRhdGlvbnMnXSwgWydkYXRhLW11dGF0ZS1hcHByb2FjaCcsICdtdXRhdGVBcHByb2FjaCddLCBbJ2RhdGEta2VlcC1vcmlnaW5hbC1zb3VyY2UnLCAna2VlcE9yaWdpbmFsU291cmNlJ10sIFsnZGF0YS1tZWFzdXJlLXBlcmZvcm1hbmNlJywgJ21lYXN1cmVQZXJmb3JtYW5jZSddLCBbJ2RhdGEtc2hvdy1taXNzaW5nLWljb25zJywgJ3Nob3dNaXNzaW5nSWNvbnMnXV07XG4gICAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgYXR0ciA9IF9yZWYyWzBdLFxuICAgICAgICAgIGtleSA9IF9yZWYyWzFdO1xuXG4gICAgICB2YXIgdmFsID0gY29lcmNlKGdldEF0dHJDb25maWcoYXR0cikpO1xuXG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgIGluaXRpYWxba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfZGVmYXVsdCA9IHtcbiAgICBzdHlsZURlZmF1bHQ6ICdzb2xpZCcsXG4gICAgZmFtaWx5RGVmYXVsdDogJ2NsYXNzaWMnLFxuICAgIGNzc1ByZWZpeDogREVGQVVMVF9DU1NfUFJFRklYLFxuICAgIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gICAgYXV0b1JlcGxhY2VTdmc6IHRydWUsXG4gICAgYXV0b0FkZENzczogdHJ1ZSxcbiAgICBhdXRvQTExeTogdHJ1ZSxcbiAgICBzZWFyY2hQc2V1ZG9FbGVtZW50czogZmFsc2UsXG4gICAgb2JzZXJ2ZU11dGF0aW9uczogdHJ1ZSxcbiAgICBtdXRhdGVBcHByb2FjaDogJ2FzeW5jJyxcbiAgICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gICAgbWVhc3VyZVBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgICBzaG93TWlzc2luZ0ljb25zOiB0cnVlXG4gIH07IC8vIGZhbWlseVByZWZpeCBpcyBkZXByZWNhdGVkIGJ1dCB3ZSBtdXN0IHN0aWxsIHN1cHBvcnQgaXQgaWYgcHJlc2VudFxuXG4gIGlmIChpbml0aWFsLmZhbWlseVByZWZpeCkge1xuICAgIGluaXRpYWwuY3NzUHJlZml4ID0gaW5pdGlhbC5mYW1pbHlQcmVmaXg7XG4gIH1cblxuICB2YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfZGVmYXVsdCksIGluaXRpYWwpO1xuXG4gIGlmICghX2NvbmZpZy5hdXRvUmVwbGFjZVN2ZykgX2NvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG4gIHZhciBjb25maWcgPSB7fTtcbiAgT2JqZWN0LmtleXMoX2RlZmF1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25maWcsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICBfY29uZmlnW2tleV0gPSB2YWw7XG5cbiAgICAgICAgX29uQ2hhbmdlQ2IuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICByZXR1cm4gY2IoY29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pOyAvLyBmYW1pbHlQcmVmaXggaXMgZGVwcmVjYXRlZCBhcyBvZiA2LjIuMCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQgaW4gNy4wLjBcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uZmlnLCAnZmFtaWx5UHJlZml4Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICBfY29uZmlnLmNzc1ByZWZpeCA9IHZhbDtcblxuICAgICAgX29uQ2hhbmdlQ2IuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiKGNvbmZpZyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jb25maWcuY3NzUHJlZml4O1xuICAgIH1cbiAgfSk7XG4gIFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyA9IGNvbmZpZztcbiAgdmFyIF9vbkNoYW5nZUNiID0gW107XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGNiKSB7XG4gICAgX29uQ2hhbmdlQ2IucHVzaChjYik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX29uQ2hhbmdlQ2Iuc3BsaWNlKF9vbkNoYW5nZUNiLmluZGV4T2YoY2IpLCAxKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGQgPSBVTklUU19JTl9HUklEO1xuICB2YXIgbWVhbmluZ2xlc3NUcmFuc2Zvcm0gPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJvdGF0ZTogMCxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgZmxpcFk6IGZhbHNlXG4gIH07XG4gIGZ1bmN0aW9uIGJ1bmtlcihmbikge1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpbnNlcnRDc3MoY3NzKSB7XG4gICAgaWYgKCFjc3MgfHwgIUlTX0RPTSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICAgIHZhciBoZWFkQ2hpbGRyZW4gPSBET0NVTUVOVC5oZWFkLmNoaWxkTm9kZXM7XG4gICAgdmFyIGJlZm9yZUNoaWxkID0gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSBoZWFkQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIHZhciBjaGlsZCA9IGhlYWRDaGlsZHJlbltpXTtcbiAgICAgIHZhciB0YWdOYW1lID0gKGNoaWxkLnRhZ05hbWUgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGlmIChbJ1NUWUxFJywgJ0xJTksnXS5pbmRleE9mKHRhZ05hbWUpID4gLTEpIHtcbiAgICAgICAgYmVmb3JlQ2hpbGQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBET0NVTUVOVC5oZWFkLmluc2VydEJlZm9yZShzdHlsZSwgYmVmb3JlQ2hpbGQpO1xuICAgIHJldHVybiBjc3M7XG4gIH1cbiAgdmFyIGlkUG9vbCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIGZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgICB2YXIgc2l6ZSA9IDEyO1xuICAgIHZhciBpZCA9ICcnO1xuXG4gICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgIGlkICs9IGlkUG9vbFtNYXRoLnJhbmRvbSgpICogNjIgfCAwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAob2JqIHx8IFtdKS5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmdW5jdGlvbiBjbGFzc0FycmF5KG5vZGUpIHtcbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiB0b0FycmF5KG5vZGUuY2xhc3NMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIH1cbiAgZnVuY3Rpb24gam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cmlidXRlTmFtZSkge1xuICAgICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KGF0dHJpYnV0ZU5hbWUsIFwiPVxcXCJcIikuY29uY2F0KGh0bWxFc2NhcGUoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSksIFwiXFxcIiBcIik7XG4gICAgfSwgJycpLnRyaW0oKTtcbiAgfVxuICBmdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZU5hbWUpIHtcbiAgICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChzdHlsZU5hbWUsIFwiOiBcIikuY29uY2F0KHN0eWxlc1tzdHlsZU5hbWVdLnRyaW0oKSwgXCI7XCIpO1xuICAgIH0sICcnKTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybS5zaXplICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5zaXplIHx8IHRyYW5zZm9ybS54ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS54IHx8IHRyYW5zZm9ybS55ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS55IHx8IHRyYW5zZm9ybS5yb3RhdGUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnJvdGF0ZSB8fCB0cmFuc2Zvcm0uZmxpcFggfHwgdHJhbnNmb3JtLmZsaXBZO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUZvclN2ZyhfcmVmKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICAgIHZhciBvdXRlciA9IHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICAgIH07XG4gICAgdmFyIGlubmVyVHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54ICogMzIsIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS55ICogMzIsIFwiKSBcIik7XG4gICAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgICB2YXIgaW5uZXIgPSB7XG4gICAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gICAgfTtcbiAgICB2YXIgcGF0aCA9IHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBvdXRlcjogb3V0ZXIsXG4gICAgICBpbm5lcjogaW5uZXIsXG4gICAgICBwYXRoOiBwYXRoXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Gb3JDc3MoX3JlZjIpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgICBfcmVmMiR3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgICB3aWR0aCA9IF9yZWYyJHdpZHRoID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkd2lkdGgsXG4gICAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjIkaGVpZ2h0ID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkaGVpZ2h0LFxuICAgICAgICBfcmVmMiRzdGFydENlbnRlcmVkID0gX3JlZjIuc3RhcnRDZW50ZXJlZCxcbiAgICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgICB2YXIgdmFsID0gJyc7XG5cbiAgICBpZiAoc3RhcnRDZW50ZXJlZCAmJiBJU19JRSkge1xuICAgICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMiwgXCJlbSkgXCIpO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRDZW50ZXJlZCkge1xuICAgICAgdmFsICs9IFwidHJhbnNsYXRlKGNhbGMoLTUwJSArIFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0pLCBjYWxjKC01MCUgKyBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkpIFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSBcIik7XG4gICAgfVxuXG4gICAgdmFsICs9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgICB2YWwgKz0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiZGVnKSBcIik7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHZhciBiYXNlU3R5bGVzID0gXCI6aG9zdCw6cm9vdHstLWZhLWZvbnQtc29saWQ6bm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgU29saWRcXFwiOy0tZmEtZm9udC1yZWd1bGFyOm5vcm1hbCA0MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFJlZ3VsYXJcXFwiOy0tZmEtZm9udC1saWdodDpub3JtYWwgMzAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBMaWdodFxcXCI7LS1mYS1mb250LXRoaW46bm9ybWFsIDEwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgVGhpblxcXCI7LS1mYS1mb250LWR1b3RvbmU6bm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgRHVvdG9uZVxcXCI7LS1mYS1mb250LXNoYXJwLXNvbGlkOm5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFNoYXJwXFxcIjstLWZhLWZvbnQtc2hhcnAtcmVndWxhcjpub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBTaGFycFxcXCI7LS1mYS1mb250LXNoYXJwLWxpZ2h0Om5vcm1hbCAzMDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFNoYXJwXFxcIjstLWZhLWZvbnQtYnJhbmRzOm5vcm1hbCA0MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IEJyYW5kc1xcXCJ9c3ZnOm5vdCg6aG9zdCkuc3ZnLWlubGluZS0tZmEsc3ZnOm5vdCg6cm9vdCkuc3ZnLWlubGluZS0tZmF7b3ZlcmZsb3c6dmlzaWJsZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zdmctaW5saW5lLS1mYXtkaXNwbGF5OnZhcigtLWZhLWRpc3BsYXksaW5saW5lLWJsb2NrKTtoZWlnaHQ6MWVtO292ZXJmbG93OnZpc2libGU7dmVydGljYWwtYWxpZ246LS4xMjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtMnhze3ZlcnRpY2FsLWFsaWduOi4xZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXhze3ZlcnRpY2FsLWFsaWduOjB9LnN2Zy1pbmxpbmUtLWZhLmZhLXNte3ZlcnRpY2FsLWFsaWduOi0uMDcxNDI4NTcwNWVtfS5zdmctaW5saW5lLS1mYS5mYS1sZ3t2ZXJ0aWNhbC1hbGlnbjotLjJlbX0uc3ZnLWlubGluZS0tZmEuZmEteGx7dmVydGljYWwtYWxpZ246LS4yNWVtfS5zdmctaW5saW5lLS1mYS5mYS0yeGx7dmVydGljYWwtYWxpZ246LS4zMTI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtbGVmdHttYXJnaW4tcmlnaHQ6dmFyKC0tZmEtcHVsbC1tYXJnaW4sLjNlbSk7d2lkdGg6YXV0b30uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodHttYXJnaW4tbGVmdDp2YXIoLS1mYS1wdWxsLW1hcmdpbiwuM2VtKTt3aWR0aDphdXRvfS5zdmctaW5saW5lLS1mYS5mYS1saXt3aWR0aDp2YXIoLS1mYS1saS13aWR0aCwyZW0pO3RvcDouMjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtZnd7d2lkdGg6dmFyKC0tZmEtZnctd2lkdGgsMS4yNWVtKX0uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYXtib3R0b206MDtsZWZ0OjA7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0uZmEtbGF5ZXJzLWNvdW50ZXIsLmZhLWxheWVycy10ZXh0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyfS5mYS1sYXllcnN7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjFlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjotLjEyNWVtO3dpZHRoOjFlbX0uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9LmZhLWxheWVycy10ZXh0e2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0uZmEtbGF5ZXJzLWNvdW50ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1mYS1jb3VudGVyLWJhY2tncm91bmQtY29sb3IsI2ZmMjUzYSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1mYS1jb3VudGVyLWJvcmRlci1yYWRpdXMsMWVtKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6dmFyKC0tZmEtaW52ZXJzZSwjZmZmKTtsaW5lLWhlaWdodDp2YXIoLS1mYS1jb3VudGVyLWxpbmUtaGVpZ2h0LDEpO21heC13aWR0aDp2YXIoLS1mYS1jb3VudGVyLW1heC13aWR0aCw1ZW0pO21pbi13aWR0aDp2YXIoLS1mYS1jb3VudGVyLW1pbi13aWR0aCwxLjVlbSk7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6dmFyKC0tZmEtY291bnRlci1wYWRkaW5nLC4yNWVtIC41ZW0pO3JpZ2h0OnZhcigtLWZhLXJpZ2h0LDApO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dG9wOnZhcigtLWZhLXRvcCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1jb3VudGVyLXNjYWxlLC4yNSkpO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1jb3VudGVyLXNjYWxlLC4yNSkpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHQ7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9LmZhLWxheWVycy1ib3R0b20tcmlnaHR7Ym90dG9tOnZhcigtLWZhLWJvdHRvbSwwKTtyaWdodDp2YXIoLS1mYS1yaWdodCwwKTt0b3A6YXV0bzstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsLjI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwuMjUpKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Ym90dG9tIHJpZ2h0O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIHJpZ2h0fS5mYS1sYXllcnMtYm90dG9tLWxlZnR7Ym90dG9tOnZhcigtLWZhLWJvdHRvbSwwKTtsZWZ0OnZhcigtLWZhLWxlZnQsMCk7cmlnaHQ6YXV0bzt0b3A6YXV0bzstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsLjI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwuMjUpKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnQ7dHJhbnNmb3JtLW9yaWdpbjpib3R0b20gbGVmdH0uZmEtbGF5ZXJzLXRvcC1yaWdodHt0b3A6dmFyKC0tZmEtdG9wLDApO3JpZ2h0OnZhcigtLWZhLXJpZ2h0LDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwuMjUpKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtbGF5ZXJzLXNjYWxlLC4yNSkpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHQ7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9LmZhLWxheWVycy10b3AtbGVmdHtsZWZ0OnZhcigtLWZhLWxlZnQsMCk7cmlnaHQ6YXV0bzt0b3A6dmFyKC0tZmEtdG9wLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwuMjUpKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtbGF5ZXJzLXNjYWxlLC4yNSkpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBsZWZ0fS5mYS0xeHtmb250LXNpemU6MWVtfS5mYS0yeHtmb250LXNpemU6MmVtfS5mYS0zeHtmb250LXNpemU6M2VtfS5mYS00eHtmb250LXNpemU6NGVtfS5mYS01eHtmb250LXNpemU6NWVtfS5mYS02eHtmb250LXNpemU6NmVtfS5mYS03eHtmb250LXNpemU6N2VtfS5mYS04eHtmb250LXNpemU6OGVtfS5mYS05eHtmb250LXNpemU6OWVtfS5mYS0xMHh7Zm9udC1zaXplOjEwZW19LmZhLTJ4c3tmb250LXNpemU6LjYyNWVtO2xpbmUtaGVpZ2h0Oi4xZW07dmVydGljYWwtYWxpZ246LjIyNWVtfS5mYS14c3tmb250LXNpemU6Ljc1ZW07bGluZS1oZWlnaHQ6LjA4MzMzMzMzMzdlbTt2ZXJ0aWNhbC1hbGlnbjouMTI1ZW19LmZhLXNte2ZvbnQtc2l6ZTouODc1ZW07bGluZS1oZWlnaHQ6LjA3MTQyODU3MThlbTt2ZXJ0aWNhbC1hbGlnbjouMDUzNTcxNDI5NWVtfS5mYS1sZ3tmb250LXNpemU6MS4yNWVtO2xpbmUtaGVpZ2h0Oi4wNWVtO3ZlcnRpY2FsLWFsaWduOi0uMDc1ZW19LmZhLXhse2ZvbnQtc2l6ZToxLjVlbTtsaW5lLWhlaWdodDouMDQxNjY2NjY4MmVtO3ZlcnRpY2FsLWFsaWduOi0uMTI1ZW19LmZhLTJ4bHtmb250LXNpemU6MmVtO2xpbmUtaGVpZ2h0Oi4wMzEyNWVtO3ZlcnRpY2FsLWFsaWduOi0uMTg3NWVtfS5mYS1md3t0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjI1ZW19LmZhLXVse2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1sZWZ0OnZhcigtLWZhLWxpLW1hcmdpbiwyLjVlbSk7cGFkZGluZy1sZWZ0OjB9LmZhLXVsPmxpe3Bvc2l0aW9uOnJlbGF0aXZlfS5mYS1saXtsZWZ0OmNhbGModmFyKC0tZmEtbGktd2lkdGgsMmVtKSAqIC0xKTtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDp2YXIoLS1mYS1saS13aWR0aCwyZW0pO2xpbmUtaGVpZ2h0OmluaGVyaXR9LmZhLWJvcmRlcntib3JkZXItY29sb3I6dmFyKC0tZmEtYm9yZGVyLWNvbG9yLCNlZWUpO2JvcmRlci1yYWRpdXM6dmFyKC0tZmEtYm9yZGVyLXJhZGl1cywuMWVtKTtib3JkZXItc3R5bGU6dmFyKC0tZmEtYm9yZGVyLXN0eWxlLHNvbGlkKTtib3JkZXItd2lkdGg6dmFyKC0tZmEtYm9yZGVyLXdpZHRoLC4wOGVtKTtwYWRkaW5nOnZhcigtLWZhLWJvcmRlci1wYWRkaW5nLC4yZW0gLjI1ZW0gLjE1ZW0pfS5mYS1wdWxsLWxlZnR7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6dmFyKC0tZmEtcHVsbC1tYXJnaW4sLjNlbSl9LmZhLXB1bGwtcmlnaHR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6dmFyKC0tZmEtcHVsbC1tYXJnaW4sLjNlbSl9LmZhLWJlYXR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYS1iZWF0O2FuaW1hdGlvbi1uYW1lOmZhLWJlYXQ7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTthbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpO2FuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsZWFzZS1pbi1vdXQpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxlYXNlLWluLW91dCl9LmZhLWJvdW5jZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhLWJvdW5jZTthbmltYXRpb24tbmFtZTpmYS1ib3VuY2U7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTthbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpO2FuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsY3ViaWMtYmV6aWVyKC4yOCwuODQsLjQyLDEpKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsY3ViaWMtYmV6aWVyKC4yOCwuODQsLjQyLDEpKX0uZmEtZmFkZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhLWZhZGU7YW5pbWF0aW9uLW5hbWU6ZmEtZmFkZTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxjdWJpYy1iZXppZXIoLjQsMCwuNiwxKSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGN1YmljLWJlemllciguNCwwLC42LDEpKX0uZmEtYmVhdC1mYWRley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmEtYmVhdC1mYWRlO2FuaW1hdGlvbi1uYW1lOmZhLWJlYXQtZmFkZTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxjdWJpYy1iZXppZXIoLjQsMCwuNiwxKSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGN1YmljLWJlemllciguNCwwLC42LDEpKX0uZmEtZmxpcHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhLWZsaXA7YW5pbWF0aW9uLW5hbWU6ZmEtZmxpcDstd2Via2l0LWFuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxlYXNlLWluLW91dCk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGVhc2UtaW4tb3V0KX0uZmEtc2hha2V7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYS1zaGFrZTthbmltYXRpb24tbmFtZTpmYS1zaGFrZTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxsaW5lYXIpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxsaW5lYXIpfS5mYS1zcGluey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmEtc3BpbjthbmltYXRpb24tbmFtZTpmYS1zcGluOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OnZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwwcyk7YW5pbWF0aW9uLWRlbGF5OnZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwwcyk7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTthbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMnMpO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMnMpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGxpbmVhcik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGxpbmVhcil9LmZhLXNwaW4tcmV2ZXJzZXstLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX0uZmEtcHVsc2UsLmZhLXNwaW4tcHVsc2V7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYS1zcGluO2FuaW1hdGlvbi1uYW1lOmZhLXNwaW47LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTthbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMXMpO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMXMpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLHN0ZXBzKDgpKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsc3RlcHMoOCkpfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5mYS1iZWF0LC5mYS1iZWF0LWZhZGUsLmZhLWJvdW5jZSwuZmEtZmFkZSwuZmEtZmxpcCwuZmEtcHVsc2UsLmZhLXNoYWtlLC5mYS1zcGluLC5mYS1zcGluLXB1bHNley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xbXM7YW5pbWF0aW9uLWRlbGF5Oi0xbXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MW1zO2FuaW1hdGlvbi1kdXJhdGlvbjoxbXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjE7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxOy13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTowczt0cmFuc2l0aW9uLWRlbGF5OjBzOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowczt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtYmVhdHswJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1iZWF0LXNjYWxlLDEuMjUpKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYmVhdC1zY2FsZSwxLjI1KSl9fUBrZXlmcmFtZXMgZmEtYmVhdHswJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1iZWF0LXNjYWxlLDEuMjUpKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYmVhdC1zY2FsZSwxLjI1KSl9fUAtd2Via2l0LWtleWZyYW1lcyBmYS1ib3VuY2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCl9MTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS14LDEuMSksdmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXksLjkpKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteCwxLjEpLHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS15LC45KSkgdHJhbnNsYXRlWSgwKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteCwuOSksdmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteSwxLjEpKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1oZWlnaHQsLS41ZW0pKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteCwuOSksdmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteSwxLjEpKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1oZWlnaHQsLS41ZW0pKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteCwxLjA1KSx2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS15LC45NSkpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXgsMS4wNSksdmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteSwuOTUpKSB0cmFuc2xhdGVZKDApfTU3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLXJlYm91bmQsLS4xMjVlbSkpO3RyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLXJlYm91bmQsLS4xMjVlbSkpfTY0JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApfX1Aa2V5ZnJhbWVzIGZhLWJvdW5jZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKX0xMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXgsMS4xKSx2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteSwuOSkpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS14LDEuMSksdmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXksLjkpKSB0cmFuc2xhdGVZKDApfTMwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS14LC45KSx2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS15LDEuMSkpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLWhlaWdodCwtLjVlbSkpO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS14LC45KSx2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS15LDEuMSkpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLWhlaWdodCwtLjVlbSkpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS14LDEuMDUpLHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXksLjk1KSkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteCwxLjA1KSx2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS15LC45NSkpIHRyYW5zbGF0ZVkoMCl9NTcley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtcmVib3VuZCwtLjEyNWVtKSk7dHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtcmVib3VuZCwtLjEyNWVtKSl9NjQley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCl9fUAtd2Via2l0LWtleWZyYW1lcyBmYS1mYWRlezUwJXtvcGFjaXR5OnZhcigtLWZhLWZhZGUtb3BhY2l0eSwuNCl9fUBrZXlmcmFtZXMgZmEtZmFkZXs1MCV7b3BhY2l0eTp2YXIoLS1mYS1mYWRlLW9wYWNpdHksLjQpfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtYmVhdC1mYWRlezAlLDEwMCV7b3BhY2l0eTp2YXIoLS1mYS1iZWF0LWZhZGUtb3BhY2l0eSwuNCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYmVhdC1mYWRlLXNjYWxlLDEuMTI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJlYXQtZmFkZS1zY2FsZSwxLjEyNSkpfX1Aa2V5ZnJhbWVzIGZhLWJlYXQtZmFkZXswJSwxMDAle29wYWNpdHk6dmFyKC0tZmEtYmVhdC1mYWRlLW9wYWNpdHksLjQpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJlYXQtZmFkZS1zY2FsZSwxLjEyNSkpO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1iZWF0LWZhZGUtc2NhbGUsMS4xMjUpKX19QC13ZWJraXQta2V5ZnJhbWVzIGZhLWZsaXB7NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZTNkKHZhcigtLWZhLWZsaXAteCwwKSx2YXIoLS1mYS1mbGlwLXksMSksdmFyKC0tZmEtZmxpcC16LDApLHZhcigtLWZhLWZsaXAtYW5nbGUsLTE4MGRlZykpO3RyYW5zZm9ybTpyb3RhdGUzZCh2YXIoLS1mYS1mbGlwLXgsMCksdmFyKC0tZmEtZmxpcC15LDEpLHZhcigtLWZhLWZsaXAteiwwKSx2YXIoLS1mYS1mbGlwLWFuZ2xlLC0xODBkZWcpKX19QGtleWZyYW1lcyBmYS1mbGlwezUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUzZCh2YXIoLS1mYS1mbGlwLXgsMCksdmFyKC0tZmEtZmxpcC15LDEpLHZhcigtLWZhLWZsaXAteiwwKSx2YXIoLS1mYS1mbGlwLWFuZ2xlLC0xODBkZWcpKTt0cmFuc2Zvcm06cm90YXRlM2QodmFyKC0tZmEtZmxpcC14LDApLHZhcigtLWZhLWZsaXAteSwxKSx2YXIoLS1mYS1mbGlwLXosMCksdmFyKC0tZmEtZmxpcC1hbmdsZSwtMTgwZGVnKSl9fUAtd2Via2l0LWtleWZyYW1lcyBmYS1zaGFrZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xNWRlZyl9NCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE1ZGVnKX0yNCUsOCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xOGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMThkZWcpfTEyJSwyOCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4ZGVnKX0xNiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0yMmRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMjJkZWcpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjJkZWcpfTMyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEyZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMmRlZyl9MzYley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMmRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMmRlZyl9MTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9fUBrZXlmcmFtZXMgZmEtc2hha2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTVkZWcpfTQley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxNWRlZyl9MjQlLDgley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMThkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTE4ZGVnKX0xMiUsMjgley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxOGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxOGRlZyl9MTYley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMjJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTIyZGVnKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIyZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIyZGVnKX0zMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMmRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTJkZWcpfTM2JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTJkZWcpfTEwMCUsNDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBmYS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uZmEtcm90YXRlLTkwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmZhLXJvdGF0ZS0xODB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5mYS1yb3RhdGUtMjcwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0uZmEtZmxpcC1ob3Jpem9udGFsey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwxKX0uZmEtZmxpcC12ZXJ0aWNhbHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC0xKTt0cmFuc2Zvcm06c2NhbGUoMSwtMSl9LmZhLWZsaXAtYm90aCwuZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWx7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsLTEpO3RyYW5zZm9ybTpzY2FsZSgtMSwtMSl9LmZhLXJvdGF0ZS1ieXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUodmFyKC0tZmEtcm90YXRlLWFuZ2xlLG5vbmUpKTt0cmFuc2Zvcm06cm90YXRlKHZhcigtLWZhLXJvdGF0ZS1hbmdsZSxub25lKSl9LmZhLXN0YWNre2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6MmVtO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjIuNWVtfS5mYS1zdGFjay0xeCwuZmEtc3RhY2stMnh7Ym90dG9tOjA7bGVmdDowO21hcmdpbjphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDp2YXIoLS1mYS1zdGFjay16LWluZGV4LGF1dG8pfS5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeHtoZWlnaHQ6MWVtO3dpZHRoOjEuMjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMnh7aGVpZ2h0OjJlbTt3aWR0aDoyLjVlbX0uZmEtaW52ZXJzZXtjb2xvcjp2YXIoLS1mYS1pbnZlcnNlLCNmZmYpfS5mYS1zci1vbmx5LC5zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsMCwwLDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH0uZmEtc3Itb25seS1mb2N1c2FibGU6bm90KDpmb2N1cyksLnNyLW9ubHktZm9jdXNhYmxlOm5vdCg6Zm9jdXMpe3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsMCwwLDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH0uc3ZnLWlubGluZS0tZmEgLmZhLXByaW1hcnl7ZmlsbDp2YXIoLS1mYS1wcmltYXJ5LWNvbG9yLGN1cnJlbnRDb2xvcik7b3BhY2l0eTp2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksMSl9LnN2Zy1pbmxpbmUtLWZhIC5mYS1zZWNvbmRhcnl7ZmlsbDp2YXIoLS1mYS1zZWNvbmRhcnktY29sb3IsY3VycmVudENvbG9yKTtvcGFjaXR5OnZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LC40KX0uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1wcmltYXJ5e29wYWNpdHk6dmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksLjQpfS5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXNlY29uZGFyeXtvcGFjaXR5OnZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwxKX0uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtcHJpbWFyeSwuc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtc2Vjb25kYXJ5e2ZpbGw6IzAwMH0uZmEtZHVvdG9uZS5mYS1pbnZlcnNlLC5mYWQuZmEtaW52ZXJzZXtjb2xvcjp2YXIoLS1mYS1pbnZlcnNlLCNmZmYpfVwiO1xuXG4gIGZ1bmN0aW9uIGNzcygpIHtcbiAgICB2YXIgZGNwID0gREVGQVVMVF9DU1NfUFJFRklYO1xuICAgIHZhciBkcmMgPSBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTO1xuICAgIHZhciBmcCA9IGNvbmZpZy5jc3NQcmVmaXg7XG4gICAgdmFyIHJjID0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3M7XG4gICAgdmFyIHMgPSBiYXNlU3R5bGVzO1xuXG4gICAgaWYgKGZwICE9PSBkY3AgfHwgcmMgIT09IGRyYykge1xuICAgICAgdmFyIGRQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRjcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICAgIHZhciBjdXN0b21Qcm9wUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLS1cIi5jb25jYXQoZGNwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCBcIi5cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShjdXN0b21Qcm9wUGF0dCwgXCItLVwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKHJQYXR0LCBcIi5cIi5jb25jYXQocmMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIHZhciBfY3NzSW5zZXJ0ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDc3MoKSB7XG4gICAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICAgIGluc2VydENzcyhjc3MoKSk7XG4gICAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBJbmplY3RDU1MgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb206IHtcbiAgICAgICAgICBjc3M6IGNzcyxcbiAgICAgICAgICBpbnNlcnRDc3M6IGVuc3VyZUNzc1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uOiBmdW5jdGlvbiBiZWZvcmVET01FbGVtZW50Q3JlYXRpb24oKSB7XG4gICAgICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUkyc3ZnOiBmdW5jdGlvbiBiZWZvcmVJMnN2ZygpIHtcbiAgICAgICAgICBlbnN1cmVDc3MoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHcgPSBXSU5ET1cgfHwge307XG4gIGlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0pIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdID0ge307XG4gIGlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbiAgaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MgPSB7fTtcbiAgaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMgPSBbXTtcbiAgdmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG4gIHZhciBmdW5jdGlvbnMgPSBbXTtcblxuICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgZnVuY3Rpb25zLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcblxuICBpZiAoSVNfRE9NKSB7XG4gICAgbG9hZGVkID0gKERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChET0NVTUVOVC5yZWFkeVN0YXRlKTtcbiAgICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbXJlYWR5IChmbikge1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG4gIH1cblxuICBmdW5jdGlvbiB0b0h0bWwoYWJzdHJhY3ROb2Rlcykge1xuICAgIHZhciB0YWcgPSBhYnN0cmFjdE5vZGVzLnRhZyxcbiAgICAgICAgX2Fic3RyYWN0Tm9kZXMkYXR0cmliID0gYWJzdHJhY3ROb2Rlcy5hdHRyaWJ1dGVzLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX2Fic3RyYWN0Tm9kZXMkYXR0cmliID09PSB2b2lkIDAgPyB7fSA6IF9hYnN0cmFjdE5vZGVzJGF0dHJpYixcbiAgICAgICAgX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID0gYWJzdHJhY3ROb2Rlcy5jaGlsZHJlbixcbiAgICAgICAgY2hpbGRyZW4gPSBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPT09IHZvaWQgMCA/IFtdIDogX2Fic3RyYWN0Tm9kZXMkY2hpbGRyO1xuXG4gICAgaWYgKHR5cGVvZiBhYnN0cmFjdE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGh0bWxFc2NhcGUoYWJzdHJhY3ROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIjxcIi5jb25jYXQodGFnLCBcIiBcIikuY29uY2F0KGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpLCBcIj5cIikuY29uY2F0KGNoaWxkcmVuLm1hcCh0b0h0bWwpLmpvaW4oJycpLCBcIjwvXCIpLmNvbmNhdCh0YWcsIFwiPlwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpY29uRnJvbU1hcHBpbmcobWFwcGluZywgcHJlZml4LCBpY29uTmFtZSkge1xuICAgIGlmIChtYXBwaW5nICYmIG1hcHBpbmdbcHJlZml4XSAmJiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICBpY29uOiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBoZWxwZXIgdG8gYmluZCBhIGZ1bmN0aW9uIGtub3duIHRvIGhhdmUgNCBhcmd1bWVudHNcbiAgICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICAgKi9cblxuICB2YXIgYmluZEludGVybmFsNCA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqICMgUmVkdWNlXG4gICAqXG4gICAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICAgVGhlIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAgICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gICAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICAgKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gICAqL1xuXG5cbiAgdmFyIHJlZHVjZSA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICAgIGksXG4gICAgICAgIGtleSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpID0gMTtcbiAgICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgPSAwO1xuICAgICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiB1Y3MyZGVjb2RlKCkgYW5kIGNvZGVQb2ludEF0KCkgYXJlIGJvdGggd29ya3Mgb2YgTWF0aGlhcyBCeW5lbnMgYW5kIGxpY2Vuc2VkIHVuZGVyIE1JVFxuICAgKlxuICAgKiBDb3B5cmlnaHQgTWF0aGlhcyBCeW5lbnMgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS8+XG5cbiAgICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG4gICAqIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuICAgKiBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbiAgICogd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuICAgKiBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbiAgICogcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG4gICAqIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICAgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICAgKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAgICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuICAgKiBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4gICAqIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuICAgKiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAgICovXG4gIGZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICAgIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXG4gICAgICBpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cbiAgICAgICAgaWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICAgICAgICBvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9IZXgodW5pY29kZSkge1xuICAgIHZhciBkZWNvZGVkID0gdWNzMmRlY29kZSh1bmljb2RlKTtcbiAgICByZXR1cm4gZGVjb2RlZC5sZW5ndGggPT09IDEgPyBkZWNvZGVkWzBdLnRvU3RyaW5nKDE2KSA6IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY29kZVBvaW50QXQoc3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBzaXplID0gc3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgdmFyIHNlY29uZDtcblxuICAgIGlmIChmaXJzdCA+PSAweEQ4MDAgJiYgZmlyc3QgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHNlY29uZCA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG5cbiAgICAgIGlmIChzZWNvbmQgPj0gMHhEQzAwICYmIHNlY29uZCA8PSAweERGRkYpIHtcbiAgICAgICAgcmV0dXJuIChmaXJzdCAtIDB4RDgwMCkgKiAweDQwMCArIHNlY29uZCAtIDB4REMwMCArIDB4MTAwMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplSWNvbnMoaWNvbnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgICAgdmFyIGljb24gPSBpY29uc1tpY29uTmFtZV07XG4gICAgICB2YXIgZXhwYW5kZWQgPSAhIWljb24uaWNvbjtcblxuICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgIGFjY1tpY29uLmljb25OYW1lXSA9IGljb24uaWNvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmluZUljb25zKHByZWZpeCwgaWNvbnMpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyRza2lwSG9va3MgPSBwYXJhbXMuc2tpcEhvb2tzLFxuICAgICAgICBza2lwSG9va3MgPSBfcGFyYW1zJHNraXBIb29rcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHNraXBIb29rcztcbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUljb25zKGljb25zKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2sgPT09ICdmdW5jdGlvbicgJiYgIXNraXBIb29rcykge1xuICAgICAgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2socHJlZml4LCBub3JtYWxpemVJY29ucyhpY29ucykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9KSwgbm9ybWFsaXplZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvbnQgQXdlc29tZSA0IHVzZWQgdGhlIHByZWZpeCBvZiBgZmFgIGZvciBhbGwgaWNvbnMuIFdpdGggdGhlIGludHJvZHVjdGlvblxuICAgICAqIG9mIG5ldyBzdHlsZXMgd2UgbmVlZGVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVtLiBQcmVmaXggYGZhYCBpcyBub3cgYW4gYWxpYXNcbiAgICAgKiBmb3IgYGZhc2Agc28gd2UnbGwgZWFzZSB0aGUgdXBncmFkZSBwcm9jZXNzIGZvciBvdXIgdXNlcnMgYnkgYXV0b21hdGljYWxseSBkZWZpbmluZ1xuICAgICAqIHRoaXMgYXMgd2VsbC5cbiAgICAgKi9cblxuXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcycpIHtcbiAgICAgIGRlZmluZUljb25zKCdmYScsIGljb25zKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZHVvdG9uZVBhdGhSZSA9IFsvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggZD1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLipwYXRoIGQ9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi8sIHtcbiAgICBkMTogMSxcbiAgICBkMjogMlxuICB9KSwgLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGNsYXNzPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIuKmQ9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qcGF0aCBjbGFzcz1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLipkPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIvLCB7XG4gICAgY2xzMTogMSxcbiAgICBkMTogMixcbiAgICBjbHMyOiAzLFxuICAgIGQyOiA0XG4gIH0pLCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggY2xhc3M9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qZD1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLywge1xuICAgIGNsczE6IDEsXG4gICAgZDE6IDJcbiAgfSldO1xuXG4gIHZhciBfTE9OR19TVFlMRSwgX1BSRUZJWEVTLCBfUFJFRklYRVNfRk9SX0ZBTUlMWTtcbiAgdmFyIHN0eWxlcyA9IG5hbWVzcGFjZS5zdHlsZXMsXG4gICAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbiAgdmFyIExPTkdfU1RZTEUgPSAoX0xPTkdfU1RZTEUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9MT05HX1NUWUxFLCBGQU1JTFlfQ0xBU1NJQywgT2JqZWN0LnZhbHVlcyhQUkVGSVhfVE9fTE9OR19TVFlMRVtGQU1JTFlfQ0xBU1NJQ10pKSwgX2RlZmluZVByb3BlcnR5KF9MT05HX1NUWUxFLCBGQU1JTFlfU0hBUlAsIE9iamVjdC52YWx1ZXMoUFJFRklYX1RPX0xPTkdfU1RZTEVbRkFNSUxZX1NIQVJQXSkpLCBfTE9OR19TVFlMRSk7XG4gIHZhciBfZGVmYXVsdFVzYWJsZVByZWZpeCA9IG51bGw7XG4gIHZhciBfYnlVbmljb2RlID0ge307XG4gIHZhciBfYnlMaWdhdHVyZSA9IHt9O1xuICB2YXIgX2J5T2xkTmFtZSA9IHt9O1xuICB2YXIgX2J5T2xkVW5pY29kZSA9IHt9O1xuICB2YXIgX2J5QWxpYXMgPSB7fTtcbiAgdmFyIFBSRUZJWEVTID0gKF9QUkVGSVhFUyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX1BSRUZJWEVTLCBGQU1JTFlfQ0xBU1NJQywgT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFW0ZBTUlMWV9DTEFTU0lDXSkpLCBfZGVmaW5lUHJvcGVydHkoX1BSRUZJWEVTLCBGQU1JTFlfU0hBUlAsIE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRVtGQU1JTFlfU0hBUlBdKSksIF9QUkVGSVhFUyk7XG5cbiAgZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gICAgcmV0dXJuIH5SRVNFUlZFRF9DTEFTU0VTLmluZGV4T2YobmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJY29uTmFtZShjc3NQcmVmaXgsIGNscykge1xuICAgIHZhciBwYXJ0cyA9IGNscy5zcGxpdCgnLScpO1xuICAgIHZhciBwcmVmaXggPSBwYXJ0c1swXTtcbiAgICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICBpZiAocHJlZml4ID09PSBjc3NQcmVmaXggJiYgaWNvbk5hbWUgIT09ICcnICYmICFpc1Jlc2VydmVkKGljb25OYW1lKSkge1xuICAgICAgcmV0dXJuIGljb25OYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgdmFyIGJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgdmFyIGxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChyZWR1Y2VyKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKHN0eWxlcywgZnVuY3Rpb24gKG8sIHN0eWxlLCBwcmVmaXgpIHtcbiAgICAgICAgb1twcmVmaXhdID0gcmVkdWNlKHN0eWxlLCByZWR1Y2VyLCB7fSk7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSwge30pO1xuICAgIH07XG5cbiAgICBfYnlVbmljb2RlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgICBpZiAoaWNvblszXSkge1xuICAgICAgICBhY2NbaWNvblszXV0gPSBpY29uTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGljb25bMl0pIHtcbiAgICAgICAgdmFyIGFsaWFzZXMgPSBpY29uWzJdLmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ251bWJlcic7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgYWNjW2FsaWFzLnRvU3RyaW5nKDE2KV0gPSBpY29uTmFtZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSk7XG4gICAgX2J5TGlnYXR1cmUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcblxuICAgICAgaWYgKGljb25bMl0pIHtcbiAgICAgICAgdmFyIGFsaWFzZXMgPSBpY29uWzJdLmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgYWNjW2FsaWFzXSA9IGljb25OYW1lO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9KTtcbiAgICBfYnlBbGlhcyA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgICAgdmFyIGFsaWFzZXMgPSBpY29uWzJdO1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICBhY2NbYWxpYXNdID0gaWNvbk5hbWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSk7IC8vIElmIHdlIGhhdmUgYSBLaXQsIHdlIGNhbid0IGRldGVybWluZSBpZiByZWd1bGFyIGlzIGF2YWlsYWJsZSBzaW5jZSB3ZVxuICAgIC8vIGNvdWxkIGJlIGF1dG8tZmV0Y2hpbmcgaXQuIFdlJ2xsIGhhdmUgdG8gYXNzdW1lIHRoYXQgaXQgaXMgYXZhaWxhYmxlLlxuXG4gICAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXMgfHwgY29uZmlnLmF1dG9GZXRjaFN2ZztcbiAgICB2YXIgc2hpbUxvb2t1cHMgPSByZWR1Y2Uoc2hpbXMsIGZ1bmN0aW9uIChhY2MsIHNoaW0pIHtcbiAgICAgIHZhciBtYXliZU5hbWVNYXliZVVuaWNvZGUgPSBzaGltWzBdO1xuICAgICAgdmFyIHByZWZpeCA9IHNoaW1bMV07XG4gICAgICB2YXIgaWNvbk5hbWUgPSBzaGltWzJdO1xuXG4gICAgICBpZiAocHJlZml4ID09PSAnZmFyJyAmJiAhaGFzUmVndWxhcikge1xuICAgICAgICBwcmVmaXggPSAnZmFzJztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBtYXliZU5hbWVNYXliZVVuaWNvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGFjYy5uYW1lc1ttYXliZU5hbWVNYXliZVVuaWNvZGVdID0ge1xuICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG1heWJlTmFtZU1heWJlVW5pY29kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWNjLnVuaWNvZGVzW21heWJlTmFtZU1heWJlVW5pY29kZS50b1N0cmluZygxNildID0ge1xuICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgIG5hbWVzOiB7fSxcbiAgICAgIHVuaWNvZGVzOiB7fVxuICAgIH0pO1xuICAgIF9ieU9sZE5hbWUgPSBzaGltTG9va3Vwcy5uYW1lcztcbiAgICBfYnlPbGRVbmljb2RlID0gc2hpbUxvb2t1cHMudW5pY29kZXM7XG4gICAgX2RlZmF1bHRVc2FibGVQcmVmaXggPSBnZXRDYW5vbmljYWxQcmVmaXgoY29uZmlnLnN0eWxlRGVmYXVsdCwge1xuICAgICAgZmFtaWx5OiBjb25maWcuZmFtaWx5RGVmYXVsdFxuICAgIH0pO1xuICB9O1xuICBvbkNoYW5nZShmdW5jdGlvbiAoYykge1xuICAgIF9kZWZhdWx0VXNhYmxlUHJlZml4ID0gZ2V0Q2Fub25pY2FsUHJlZml4KGMuc3R5bGVEZWZhdWx0LCB7XG4gICAgICBmYW1pbHk6IGNvbmZpZy5mYW1pbHlEZWZhdWx0XG4gICAgfSk7XG4gIH0pO1xuICBidWlsZCgpO1xuICBmdW5jdGlvbiBieVVuaWNvZGUocHJlZml4LCB1bmljb2RlKSB7XG4gICAgcmV0dXJuIChfYnlVbmljb2RlW3ByZWZpeF0gfHwge30pW3VuaWNvZGVdO1xuICB9XG4gIGZ1bmN0aW9uIGJ5TGlnYXR1cmUocHJlZml4LCBsaWdhdHVyZSkge1xuICAgIHJldHVybiAoX2J5TGlnYXR1cmVbcHJlZml4XSB8fCB7fSlbbGlnYXR1cmVdO1xuICB9XG4gIGZ1bmN0aW9uIGJ5QWxpYXMocHJlZml4LCBhbGlhcykge1xuICAgIHJldHVybiAoX2J5QWxpYXNbcHJlZml4XSB8fCB7fSlbYWxpYXNdO1xuICB9XG4gIGZ1bmN0aW9uIGJ5T2xkTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgaWNvbk5hbWU6IG51bGxcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGJ5T2xkVW5pY29kZSh1bmljb2RlKSB7XG4gICAgdmFyIG9sZFVuaWNvZGUgPSBfYnlPbGRVbmljb2RlW3VuaWNvZGVdO1xuICAgIHZhciBuZXdVbmljb2RlID0gYnlVbmljb2RlKCdmYXMnLCB1bmljb2RlKTtcbiAgICByZXR1cm4gb2xkVW5pY29kZSB8fCAobmV3VW5pY29kZSA/IHtcbiAgICAgIHByZWZpeDogJ2ZhcycsXG4gICAgICBpY29uTmFtZTogbmV3VW5pY29kZVxuICAgIH0gOiBudWxsKSB8fCB7XG4gICAgICBwcmVmaXg6IG51bGwsXG4gICAgICBpY29uTmFtZTogbnVsbFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpIHtcbiAgICByZXR1cm4gX2RlZmF1bHRVc2FibGVQcmVmaXg7XG4gIH1cbiAgdmFyIGVtcHR5Q2Fub25pY2FsSWNvbiA9IGZ1bmN0aW9uIGVtcHR5Q2Fub25pY2FsSWNvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgaWNvbk5hbWU6IG51bGwsXG4gICAgICByZXN0OiBbXVxuICAgIH07XG4gIH07XG4gIGZ1bmN0aW9uIGdldENhbm9uaWNhbFByZWZpeChzdHlsZU9yUHJlZml4KSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIF9wYXJhbXMkZmFtaWx5ID0gcGFyYW1zLmZhbWlseSxcbiAgICAgICAgZmFtaWx5ID0gX3BhcmFtcyRmYW1pbHkgPT09IHZvaWQgMCA/IEZBTUlMWV9DTEFTU0lDIDogX3BhcmFtcyRmYW1pbHk7XG4gICAgdmFyIHN0eWxlID0gUFJFRklYX1RPX1NUWUxFW2ZhbWlseV1bc3R5bGVPclByZWZpeF07XG4gICAgdmFyIHByZWZpeCA9IFNUWUxFX1RPX1BSRUZJWFtmYW1pbHldW3N0eWxlT3JQcmVmaXhdIHx8IFNUWUxFX1RPX1BSRUZJWFtmYW1pbHldW3N0eWxlXTtcbiAgICB2YXIgZGVmaW5lZCA9IHN0eWxlT3JQcmVmaXggaW4gbmFtZXNwYWNlLnN0eWxlcyA/IHN0eWxlT3JQcmVmaXggOiBudWxsO1xuICAgIHJldHVybiBwcmVmaXggfHwgZGVmaW5lZCB8fCBudWxsO1xuICB9XG4gIHZhciBQUkVGSVhFU19GT1JfRkFNSUxZID0gKF9QUkVGSVhFU19GT1JfRkFNSUxZID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfUFJFRklYRVNfRk9SX0ZBTUlMWSwgRkFNSUxZX0NMQVNTSUMsIE9iamVjdC5rZXlzKFBSRUZJWF9UT19MT05HX1NUWUxFW0ZBTUlMWV9DTEFTU0lDXSkpLCBfZGVmaW5lUHJvcGVydHkoX1BSRUZJWEVTX0ZPUl9GQU1JTFksIEZBTUlMWV9TSEFSUCwgT2JqZWN0LmtleXMoUFJFRklYX1RPX0xPTkdfU1RZTEVbRkFNSUxZX1NIQVJQXSkpLCBfUFJFRklYRVNfRk9SX0ZBTUlMWSk7XG4gIGZ1bmN0aW9uIGdldENhbm9uaWNhbEljb24odmFsdWVzKSB7XG4gICAgdmFyIF9mYW1Qcm9wcztcblxuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJHNraXBMb29rdXBzID0gcGFyYW1zLnNraXBMb29rdXBzLFxuICAgICAgICBza2lwTG9va3VwcyA9IF9wYXJhbXMkc2tpcExvb2t1cHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwTG9va3VwcztcbiAgICB2YXIgZmFtUHJvcHMgPSAoX2ZhbVByb3BzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtUHJvcHMsIEZBTUlMWV9DTEFTU0lDLCBcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1cIikuY29uY2F0KEZBTUlMWV9DTEFTU0lDKSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtUHJvcHMsIEZBTUlMWV9TSEFSUCwgXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChGQU1JTFlfU0hBUlApKSwgX2ZhbVByb3BzKTtcbiAgICB2YXIgZ2l2ZW5QcmVmaXggPSBudWxsO1xuICAgIHZhciBmYW1pbHkgPSBGQU1JTFlfQ0xBU1NJQztcblxuICAgIGlmICh2YWx1ZXMuaW5jbHVkZXMoZmFtUHJvcHNbRkFNSUxZX0NMQVNTSUNdKSB8fCB2YWx1ZXMuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIFBSRUZJWEVTX0ZPUl9GQU1JTFlbRkFNSUxZX0NMQVNTSUNdLmluY2x1ZGVzKHYpO1xuICAgIH0pKSB7XG4gICAgICBmYW1pbHkgPSBGQU1JTFlfQ0xBU1NJQztcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmluY2x1ZGVzKGZhbVByb3BzW0ZBTUlMWV9TSEFSUF0pIHx8IHZhbHVlcy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gUFJFRklYRVNfRk9SX0ZBTUlMWVtGQU1JTFlfU0hBUlBdLmluY2x1ZGVzKHYpO1xuICAgIH0pKSB7XG4gICAgICBmYW1pbHkgPSBGQU1JTFlfU0hBUlA7XG4gICAgfVxuXG4gICAgdmFyIGNhbm9uaWNhbCA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWcuY3NzUHJlZml4LCBjbHMpO1xuXG4gICAgICBpZiAoc3R5bGVzW2Nsc10pIHtcbiAgICAgICAgY2xzID0gTE9OR19TVFlMRVtmYW1pbHldLmluY2x1ZGVzKGNscykgPyBMT05HX1NUWUxFX1RPX1BSRUZJWFtmYW1pbHldW2Nsc10gOiBjbHM7XG4gICAgICAgIGdpdmVuUHJlZml4ID0gY2xzO1xuICAgICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgICAgfSBlbHNlIGlmIChQUkVGSVhFU1tmYW1pbHldLmluZGV4T2YoY2xzKSA+IC0xKSB7XG4gICAgICAgIGdpdmVuUHJlZml4ID0gY2xzO1xuICAgICAgICBhY2MucHJlZml4ID0gZ2V0Q2Fub25pY2FsUHJlZml4KGNscywge1xuICAgICAgICAgIGZhbWlseTogZmFtaWx5XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpY29uTmFtZSkge1xuICAgICAgICBhY2MuaWNvbk5hbWUgPSBpY29uTmFtZTtcbiAgICAgIH0gZWxzZSBpZiAoY2xzICE9PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMgIT09IGZhbVByb3BzW0ZBTUlMWV9DTEFTU0lDXSAmJiBjbHMgIT09IGZhbVByb3BzW0ZBTUlMWV9TSEFSUF0pIHtcbiAgICAgICAgYWNjLnJlc3QucHVzaChjbHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNraXBMb29rdXBzICYmIGFjYy5wcmVmaXggJiYgYWNjLmljb25OYW1lKSB7XG4gICAgICAgIHZhciBzaGltID0gZ2l2ZW5QcmVmaXggPT09ICdmYScgPyBieU9sZE5hbWUoYWNjLmljb25OYW1lKSA6IHt9O1xuICAgICAgICB2YXIgYWxpYXNJY29uTmFtZSA9IGJ5QWxpYXMoYWNjLnByZWZpeCwgYWNjLmljb25OYW1lKTtcblxuICAgICAgICBpZiAoc2hpbS5wcmVmaXgpIHtcbiAgICAgICAgICBnaXZlblByZWZpeCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBhY2MuaWNvbk5hbWUgPSBzaGltLmljb25OYW1lIHx8IGFsaWFzSWNvbk5hbWUgfHwgYWNjLmljb25OYW1lO1xuICAgICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcblxuICAgICAgICBpZiAoYWNjLnByZWZpeCA9PT0gJ2ZhcicgJiYgIXN0eWxlc1snZmFyJ10gJiYgc3R5bGVzWydmYXMnXSAmJiAhY29uZmlnLmF1dG9GZXRjaFN2Zykge1xuICAgICAgICAgIC8vIEFsbG93IGEgZmFsbGJhY2sgZnJvbSB0aGUgcmVndWxhciBzdHlsZSB0byBzb2xpZCBpZiByZWd1bGFyIGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAvLyBidXQgb25seSBpZiB3ZSBhcmVuJ3QgYXV0by1mZXRjaGluZyBTVkdzXG4gICAgICAgICAgYWNjLnByZWZpeCA9ICdmYXMnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgZW1wdHlDYW5vbmljYWxJY29uKCkpO1xuXG4gICAgaWYgKHZhbHVlcy5pbmNsdWRlcygnZmEtYnJhbmRzJykgfHwgdmFsdWVzLmluY2x1ZGVzKCdmYWInKSkge1xuICAgICAgY2Fub25pY2FsLnByZWZpeCA9ICdmYWInO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMuaW5jbHVkZXMoJ2ZhLWR1b3RvbmUnKSB8fCB2YWx1ZXMuaW5jbHVkZXMoJ2ZhZCcpKSB7XG4gICAgICBjYW5vbmljYWwucHJlZml4ID0gJ2ZhZCc7XG4gICAgfVxuXG4gICAgaWYgKCFjYW5vbmljYWwucHJlZml4ICYmIGZhbWlseSA9PT0gRkFNSUxZX1NIQVJQICYmIChzdHlsZXNbJ2Zhc3MnXSB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSkge1xuICAgICAgY2Fub25pY2FsLnByZWZpeCA9ICdmYXNzJztcbiAgICAgIGNhbm9uaWNhbC5pY29uTmFtZSA9IGJ5QWxpYXMoY2Fub25pY2FsLnByZWZpeCwgY2Fub25pY2FsLmljb25OYW1lKSB8fCBjYW5vbmljYWwuaWNvbk5hbWU7XG4gICAgfVxuXG4gICAgaWYgKGNhbm9uaWNhbC5wcmVmaXggPT09ICdmYScgfHwgZ2l2ZW5QcmVmaXggPT09ICdmYScpIHtcbiAgICAgIC8vIFRoZSBmYSBwcmVmaXggaXMgbm90IGNhbm9uaWNhbC4gU28gaWYgaXQgaGFzIG1hZGUgaXQgdGhyb3VnaCB1bnRpbCB0aGlzIHBvaW50XG4gICAgICAvLyB3ZSB3aWxsIHNoaWZ0IGl0IHRvIHRoZSBjb3JyZWN0IHByZWZpeC5cbiAgICAgIGNhbm9uaWNhbC5wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCkgfHwgJ2Zhcyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbm9uaWNhbDtcbiAgfVxuXG4gIHZhciBMaWJyYXJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaWJyYXJ5KCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpYnJhcnkpO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExpYnJhcnksIFt7XG4gICAgICBrZXk6IFwiYWRkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhZGRpdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UodGhpcy5fcHVsbERlZmluaXRpb25zLCB7fSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGFkZGl0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9KSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICAgIGRlZmluZUljb25zKGtleSwgYWRkaXRpb25zW2tleV0pOyAvLyBUT0RPIGNhbiB3ZSBzdG9wIGRvaW5nIHRoaXM/IFdlIGNhbid0IGdldCB0aGUgaWNvbnMgYnkgJ2ZhLXNvbGlkJyBhbnkgbG9uZ2VyIHNvIHRoaXMgcHJvYmFibHkgbmVlZHMgdG8gY2hhbmdlXG5cbiAgICAgICAgICB2YXIgbG9uZ1ByZWZpeCA9IFBSRUZJWF9UT19MT05HX1NUWUxFW0ZBTUlMWV9DTEFTU0lDXVtrZXldO1xuICAgICAgICAgIGlmIChsb25nUHJlZml4KSBkZWZpbmVJY29ucyhsb25nUHJlZml4LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlc2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3B1bGxEZWZpbml0aW9uc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wdWxsRGVmaW5pdGlvbnMoYWRkaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gZGVmaW5pdGlvbi5wcmVmaXggJiYgZGVmaW5pdGlvbi5pY29uTmFtZSAmJiBkZWZpbml0aW9uLmljb24gPyB7XG4gICAgICAgICAgMDogZGVmaW5pdGlvblxuICAgICAgICB9IDogZGVmaW5pdGlvbjtcbiAgICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgX25vcm1hbGl6ZWQka2V5ID0gbm9ybWFsaXplZFtrZXldLFxuICAgICAgICAgICAgICBwcmVmaXggPSBfbm9ybWFsaXplZCRrZXkucHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZSA9IF9ub3JtYWxpemVkJGtleS5pY29uTmFtZSxcbiAgICAgICAgICAgICAgaWNvbiA9IF9ub3JtYWxpemVkJGtleS5pY29uO1xuICAgICAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXTtcbiAgICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuXG4gICAgICAgICAgaWYgKGFsaWFzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGFsaWFzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2FsaWFzXSA9IGljb247XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWRkaXRpb25zO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMaWJyYXJ5O1xuICB9KCk7XG5cbiAgdmFyIF9wbHVnaW5zID0gW107XG4gIHZhciBfaG9va3MgPSB7fTtcbiAgdmFyIHByb3ZpZGVycyA9IHt9O1xuICB2YXIgZGVmYXVsdFByb3ZpZGVyS2V5cyA9IE9iamVjdC5rZXlzKHByb3ZpZGVycyk7XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2lucyhuZXh0UGx1Z2lucywgX3JlZikge1xuICAgIHZhciBvYmogPSBfcmVmLm1peG91dHNUbztcbiAgICBfcGx1Z2lucyA9IG5leHRQbHVnaW5zO1xuICAgIF9ob29rcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVycykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKGRlZmF1bHRQcm92aWRlcktleXMuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgZGVsZXRlIHByb3ZpZGVyc1trXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIG1peG91dCA9IHBsdWdpbi5taXhvdXQgPyBwbHVnaW4ubWl4b3V0KCkgOiB7fTtcbiAgICAgIE9iamVjdC5rZXlzKG1peG91dCkuZm9yRWFjaChmdW5jdGlvbiAodGspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtaXhvdXRbdGtdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb2JqW3RrXSA9IG1peG91dFt0a107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3R5cGVvZihtaXhvdXRbdGtdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhtaXhvdXRbdGtdKS5mb3JFYWNoKGZ1bmN0aW9uIChzaykge1xuICAgICAgICAgICAgaWYgKCFvYmpbdGtdKSB7XG4gICAgICAgICAgICAgIG9ialt0a10gPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqW3RrXVtza10gPSBtaXhvdXRbdGtdW3NrXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwbHVnaW4uaG9va3MpIHtcbiAgICAgICAgdmFyIGhvb2tzID0gcGx1Z2luLmhvb2tzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGhvb2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgaWYgKCFfaG9va3NbaG9va10pIHtcbiAgICAgICAgICAgIF9ob29rc1tob29rXSA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9ob29rc1tob29rXS5wdXNoKGhvb2tzW2hvb2tdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ucHJvdmlkZXMpIHtcbiAgICAgICAgcGx1Z2luLnByb3ZpZGVzKHByb3ZpZGVycyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGZ1bmN0aW9uIGNoYWluSG9va3MoaG9vaywgYWNjdW11bGF0b3IpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgaG9va0ZucyA9IF9ob29rc1tob29rXSB8fCBbXTtcbiAgICBob29rRm5zLmZvckVhY2goZnVuY3Rpb24gKGhvb2tGbikge1xuICAgICAgYWNjdW11bGF0b3IgPSBob29rRm4uYXBwbHkobnVsbCwgW2FjY3VtdWxhdG9yXS5jb25jYXQoYXJncykpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY2FsbFxuICAgIH0pO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuICBmdW5jdGlvbiBjYWxsSG9va3MoaG9vaykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBob29rRm5zID0gX2hvb2tzW2hvb2tdIHx8IFtdO1xuICAgIGhvb2tGbnMuZm9yRWFjaChmdW5jdGlvbiAoaG9va0ZuKSB7XG4gICAgICBob29rRm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBjYWxsUHJvdmlkZWQoKSB7XG4gICAgdmFyIGhvb2sgPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBwcm92aWRlcnNbaG9va10gPyBwcm92aWRlcnNbaG9va10uYXBwbHkobnVsbCwgYXJncykgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWNvbkRlZmluaXRpb24oaWNvbkxvb2t1cCkge1xuICAgIGlmIChpY29uTG9va3VwLnByZWZpeCA9PT0gJ2ZhJykge1xuICAgICAgaWNvbkxvb2t1cC5wcmVmaXggPSAnZmFzJztcbiAgICB9XG5cbiAgICB2YXIgaWNvbk5hbWUgPSBpY29uTG9va3VwLmljb25OYW1lO1xuICAgIHZhciBwcmVmaXggPSBpY29uTG9va3VwLnByZWZpeCB8fCBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gICAgaWYgKCFpY29uTmFtZSkgcmV0dXJuO1xuICAgIGljb25OYW1lID0gYnlBbGlhcyhwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uTmFtZTtcbiAgICByZXR1cm4gaWNvbkZyb21NYXBwaW5nKGxpYnJhcnkuZGVmaW5pdGlvbnMsIHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25Gcm9tTWFwcGluZyhuYW1lc3BhY2Uuc3R5bGVzLCBwcmVmaXgsIGljb25OYW1lKTtcbiAgfVxuICB2YXIgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG4gIHZhciBub0F1dG8gPSBmdW5jdGlvbiBub0F1dG8oKSB7XG4gICAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gZmFsc2U7XG4gICAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgICBjYWxsSG9va3MoJ25vQXV0bycpO1xuICB9O1xuICB2YXIgZG9tID0ge1xuICAgIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBpZiAoSVNfRE9NKSB7XG4gICAgICAgIGNhbGxIb29rcygnYmVmb3JlSTJzdmcnLCBwYXJhbXMpO1xuICAgICAgICBjYWxsUHJvdmlkZWQoJ3BzZXVkb0VsZW1lbnRzMnN2ZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBjYWxsUHJvdmlkZWQoJ2kyc3ZnJywgcGFyYW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnT3BlcmF0aW9uIHJlcXVpcmVzIGEgRE9NIG9mIHNvbWUga2luZC4nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiBmdW5jdGlvbiB3YXRjaCgpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdmFyIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3Q7XG5cbiAgICAgIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gdHJ1ZTtcbiAgICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXV0b1JlcGxhY2Uoe1xuICAgICAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdDogYXV0b1JlcGxhY2VTdmdSb290XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsSG9va3MoJ3dhdGNoJywgcGFyYW1zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIHBhcnNlID0ge1xuICAgIGljb246IGZ1bmN0aW9uIGljb24oX2ljb24pIHtcbiAgICAgIGlmIChfaWNvbiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKF90eXBlb2YoX2ljb24pID09PSAnb2JqZWN0JyAmJiBfaWNvbi5wcmVmaXggJiYgX2ljb24uaWNvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmVmaXg6IF9pY29uLnByZWZpeCxcbiAgICAgICAgICBpY29uTmFtZTogYnlBbGlhcyhfaWNvbi5wcmVmaXgsIF9pY29uLmljb25OYW1lKSB8fCBfaWNvbi5pY29uTmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShfaWNvbikgJiYgX2ljb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHZhciBpY29uTmFtZSA9IF9pY29uWzFdLmluZGV4T2YoJ2ZhLScpID09PSAwID8gX2ljb25bMV0uc2xpY2UoMykgOiBfaWNvblsxXTtcbiAgICAgICAgdmFyIHByZWZpeCA9IGdldENhbm9uaWNhbFByZWZpeChfaWNvblswXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMocHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBfaWNvbiA9PT0gJ3N0cmluZycgJiYgKF9pY29uLmluZGV4T2YoXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpKSA+IC0xIHx8IF9pY29uLm1hdGNoKElDT05fU0VMRUNUSU9OX1NZTlRBWF9QQVRURVJOKSkpIHtcbiAgICAgICAgdmFyIGNhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKF9pY29uLnNwbGl0KCcgJyksIHtcbiAgICAgICAgICBza2lwTG9va3VwczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmVmaXg6IGNhbm9uaWNhbEljb24ucHJlZml4IHx8IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKSxcbiAgICAgICAgICBpY29uTmFtZTogYnlBbGlhcyhjYW5vbmljYWxJY29uLnByZWZpeCwgY2Fub25pY2FsSWNvbi5pY29uTmFtZSkgfHwgY2Fub25pY2FsSWNvbi5pY29uTmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIF9pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgX3ByZWZpeCA9IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZWZpeDogX3ByZWZpeCxcbiAgICAgICAgICBpY29uTmFtZTogYnlBbGlhcyhfcHJlZml4LCBfaWNvbikgfHwgX2ljb25cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHZhciBhcGkgPSB7XG4gICAgbm9BdXRvOiBub0F1dG8sXG4gICAgY29uZmlnOiBjb25maWcsXG4gICAgZG9tOiBkb20sXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIGxpYnJhcnk6IGxpYnJhcnksXG4gICAgZmluZEljb25EZWZpbml0aW9uOiBmaW5kSWNvbkRlZmluaXRpb24sXG4gICAgdG9IdG1sOiB0b0h0bWxcbiAgfTtcblxuICB2YXIgYXV0b1JlcGxhY2UgPSBmdW5jdGlvbiBhdXRvUmVwbGFjZSgpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgICAgYXV0b1JlcGxhY2VTdmdSb290ID0gX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkYXV0b1JlcGxhY2VTdjtcbiAgICBpZiAoKE9iamVjdC5rZXlzKG5hbWVzcGFjZS5zdHlsZXMpLmxlbmd0aCA+IDAgfHwgY29uZmlnLmF1dG9GZXRjaFN2ZykgJiYgSVNfRE9NICYmIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZykgYXBpLmRvbS5pMnN2Zyh7XG4gICAgICBub2RlOiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBib290c3RyYXAocGx1Z2lucykge1xuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICBpZiAoIVdJTkRPVy5Gb250QXdlc29tZSkge1xuICAgICAgICBXSU5ET1cuRm9udEF3ZXNvbWUgPSBhcGk7XG4gICAgICB9XG5cbiAgICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICAgICAgY2FsbEhvb2tzKCdib290c3RyYXAnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5hbWVzcGFjZS5ob29rcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBuYW1lc3BhY2UuaG9va3MpLCB7fSwge1xuICAgICAgYWRkUGFjazogZnVuY3Rpb24gYWRkUGFjayhwcmVmaXgsIGljb25zKSB7XG4gICAgICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30pLCBpY29ucyk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9LFxuICAgICAgYWRkUGFja3M6IGZ1bmN0aW9uIGFkZFBhY2tzKHBhY2tzKSB7XG4gICAgICAgIHBhY2tzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX3JlZjJbMF0sXG4gICAgICAgICAgICAgIGljb25zID0gX3JlZjJbMV07XG5cbiAgICAgICAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9KSwgaWNvbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICAgIH0sXG4gICAgICBhZGRTaGltczogZnVuY3Rpb24gYWRkU2hpbXMoc2hpbXMpIHtcbiAgICAgICAgdmFyIF9uYW1lc3BhY2Ukc2hpbXM7XG5cbiAgICAgICAgKF9uYW1lc3BhY2Ukc2hpbXMgPSBuYW1lc3BhY2Uuc2hpbXMpLnB1c2guYXBwbHkoX25hbWVzcGFjZSRzaGltcywgX3RvQ29uc3VtYWJsZUFycmF5KHNoaW1zKSk7XG5cbiAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbVZhcmlhbnRzKHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHZhbC5odG1sO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBhc0ljb24gKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcyxcbiAgICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG5cbiAgICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkgJiYgbWFpbi5mb3VuZCAmJiAhbWFzay5mb3VuZCkge1xuICAgICAgdmFyIHdpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBtYWluLmhlaWdodDtcbiAgICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICAgIHg6IHdpZHRoIC8gaGVpZ2h0IC8gMixcbiAgICAgICAgeTogMC41XG4gICAgICB9O1xuICAgICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IGpvaW5TdHlsZXMoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHN0eWxlcyksIHt9LCB7XG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogXCJcIi5jb25jYXQob2Zmc2V0LnggKyB0cmFuc2Zvcm0ueCAvIDE2LCBcImVtIFwiKS5jb25jYXQob2Zmc2V0LnkgKyB0cmFuc2Zvcm0ueSAvIDE2LCBcImVtXCIpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt7XG4gICAgICB0YWc6ICdzdmcnLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNTeW1ib2wgKF9yZWYpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICAgIGljb25OYW1lID0gX3JlZi5pY29uTmFtZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBzeW1ib2wgPSBfcmVmLnN5bWJvbDtcbiAgICB2YXIgaWQgPSBzeW1ib2wgPT09IHRydWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiBzeW1ib2w7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0YWc6ICdzdmcnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IG5vbmU7J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdzeW1ib2wnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgYXR0cmlidXRlcyksIHt9LCB7XG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH1dXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlSW5saW5lU3ZnQWJzdHJhY3QocGFyYW1zKSB7XG4gICAgdmFyIF9wYXJhbXMkaWNvbnMgPSBwYXJhbXMuaWNvbnMsXG4gICAgICAgIG1haW4gPSBfcGFyYW1zJGljb25zLm1haW4sXG4gICAgICAgIG1hc2sgPSBfcGFyYW1zJGljb25zLm1hc2ssXG4gICAgICAgIHByZWZpeCA9IHBhcmFtcy5wcmVmaXgsXG4gICAgICAgIGljb25OYW1lID0gcGFyYW1zLmljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgICBzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgICAgdGl0bGVJZCA9IHBhcmFtcy50aXRsZUlkLFxuICAgICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcblxuICAgIHZhciBfcmVmID0gbWFzay5mb3VuZCA/IG1hc2sgOiBtYWluLFxuICAgICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gICAgdmFyIGlzVXBsb2FkZWRJY29uID0gcHJlZml4ID09PSAnZmFrJztcbiAgICB2YXIgYXR0ckNsYXNzID0gW2NvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBpY29uTmFtZSA/IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogJyddLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGV4dHJhLmNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTE7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyAhPT0gJycgfHwgISFjO1xuICAgIH0pLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG4gICAgdmFyIGNvbnRlbnQgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmEuYXR0cmlidXRlcyksIHt9LCB7XG4gICAgICAgICdkYXRhLXByZWZpeCc6IHByZWZpeCxcbiAgICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAgICdyb2xlJzogZXh0cmEuYXR0cmlidXRlcy5yb2xlIHx8ICdpbWcnLFxuICAgICAgICAneG1sbnMnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgICAndmlld0JveCc6IFwiMCAwIFwiLmNvbmNhdCh3aWR0aCwgXCIgXCIpLmNvbmNhdChoZWlnaHQpXG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHVwbG9hZGVkSWNvbldpZHRoU3R5bGUgPSBpc1VwbG9hZGVkSWNvbiAmJiAhfmV4dHJhLmNsYXNzZXMuaW5kZXhPZignZmEtZncnKSA/IHtcbiAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdCh3aWR0aCAvIGhlaWdodCAqIDE2ICogMC4wNjI1LCBcImVtXCIpXG4gICAgfSA6IHt9O1xuXG4gICAgaWYgKHdhdGNoYWJsZSkge1xuICAgICAgY29udGVudC5hdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjb250ZW50LmNoaWxkcmVuLnB1c2goe1xuICAgICAgICB0YWc6ICd0aXRsZScsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSB8fCBcInRpdGxlLVwiLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgY29udGVudC5hdHRyaWJ1dGVzLnRpdGxlO1xuICAgIH1cblxuICAgIHZhciBhcmdzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRlbnQpLCB7fSwge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICBtYWluOiBtYWluLFxuICAgICAgbWFzazogbWFzayxcbiAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgIHN0eWxlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHVwbG9hZGVkSWNvbldpZHRoU3R5bGUpLCBleHRyYS5zdHlsZXMpXG4gICAgfSk7XG5cbiAgICB2YXIgX3JlZjIgPSBtYXNrLmZvdW5kICYmIG1haW4uZm91bmQgPyBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlQWJzdHJhY3RNYXNrJywgYXJncykgfHwge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9IDogY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZUFic3RyYWN0SWNvbicsIGFyZ3MpIHx8IHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfSxcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgYXJncy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblxuICAgIGlmIChzeW1ib2wpIHtcbiAgICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgICB3aWR0aCA9IHBhcmFtcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCxcbiAgICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZTIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGUyO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmEuYXR0cmlidXRlcyksIHRpdGxlID8ge1xuICAgICAgJ3RpdGxlJzogdGl0bGVcbiAgICB9IDoge30pLCB7fSwge1xuICAgICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgICB9KTtcblxuICAgIGlmICh3YXRjaGFibGUpIHtcbiAgICAgIGF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZDIoe30sIGV4dHJhLnN0eWxlcyk7XG5cbiAgICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3Moe1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3RhcnRDZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSk7XG4gICAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICAgIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IFtdO1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgICB9KTtcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgdmFsLnB1c2goe1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdChwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmE7XG5cbiAgICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYS5hdHRyaWJ1dGVzKSwgdGl0bGUgPyB7XG4gICAgICAndGl0bGUnOiB0aXRsZVxuICAgIH0gOiB7fSksIHt9LCB7XG4gICAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICAgIH0pO1xuXG4gICAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuXG4gICAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgICB9XG5cbiAgICB2YXIgdmFsID0gW107XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRyZW46IFtjb250ZW50XVxuICAgIH0pO1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICB2YWwucHVzaCh7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHZhciBzdHlsZXMkMSA9IG5hbWVzcGFjZS5zdHlsZXM7XG4gIGZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgICB2YXIgd2lkdGggPSBpY29uWzBdO1xuICAgIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuXG4gICAgdmFyIF9pY29uJHNsaWNlID0gaWNvbi5zbGljZSg0KSxcbiAgICAgICAgX2ljb24kc2xpY2UyID0gX3NsaWNlZFRvQXJyYXkoX2ljb24kc2xpY2UsIDEpLFxuICAgICAgICB2ZWN0b3JEYXRhID0gX2ljb24kc2xpY2UyWzBdO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmVjdG9yRGF0YSkpIHtcbiAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLkdST1VQKVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZKSxcbiAgICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZKSxcbiAgICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgICAgZDogdmVjdG9yRGF0YVsxXVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBmb3VuZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgaWNvbjogZWxlbWVudFxuICAgIH07XG4gIH1cbiAgdmFyIG1pc3NpbmdJY29uUmVzb2x1dGlvbk1peGluID0ge1xuICAgIGZvdW5kOiBmYWxzZSxcbiAgICB3aWR0aDogNTEyLFxuICAgIGhlaWdodDogNTEyXG4gIH07XG5cbiAgZnVuY3Rpb24gbWF5YmVOb3RpZnlNaXNzaW5nKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgICBpZiAoIVBST0RVQ1RJT04gJiYgIWNvbmZpZy5zaG93TWlzc2luZ0ljb25zICYmIGljb25OYW1lKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSWNvbiB3aXRoIG5hbWUgXFxcIlwiLmNvbmNhdChpY29uTmFtZSwgXCJcXFwiIGFuZCBwcmVmaXggXFxcIlwiKS5jb25jYXQocHJlZml4LCBcIlxcXCIgaXMgbWlzc2luZy5cIikpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgICB2YXIgZ2l2ZW5QcmVmaXggPSBwcmVmaXg7XG5cbiAgICBpZiAocHJlZml4ID09PSAnZmEnICYmIGNvbmZpZy5zdHlsZURlZmF1bHQgIT09IG51bGwpIHtcbiAgICAgIHByZWZpeCA9IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHZhbCA9IHtcbiAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNTEyLFxuICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgaWNvbjogY2FsbFByb3ZpZGVkKCdtaXNzaW5nSWNvbkFic3RyYWN0JykgfHwge31cbiAgICAgIH07XG5cbiAgICAgIGlmIChnaXZlblByZWZpeCA9PT0gJ2ZhJykge1xuICAgICAgICB2YXIgc2hpbSA9IGJ5T2xkTmFtZShpY29uTmFtZSkgfHwge307XG4gICAgICAgIGljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgICAgcHJlZml4ID0gc2hpbS5wcmVmaXggfHwgcHJlZml4O1xuICAgICAgfVxuXG4gICAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmIHN0eWxlcyQxW3ByZWZpeF0gJiYgc3R5bGVzJDFbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgICAgdmFyIGljb24gPSBzdHlsZXMkMVtwcmVmaXhdW2ljb25OYW1lXTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoYXNGb3VuZEljb24oaWNvbikpO1xuICAgICAgfVxuXG4gICAgICBtYXliZU5vdGlmeU1pc3NpbmcoaWNvbk5hbWUsIHByZWZpeCk7XG4gICAgICByZXNvbHZlKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtaXNzaW5nSWNvblJlc29sdXRpb25NaXhpbiksIHt9LCB7XG4gICAgICAgIGljb246IGNvbmZpZy5zaG93TWlzc2luZ0ljb25zICYmIGljb25OYW1lID8gY2FsbFByb3ZpZGVkKCdtaXNzaW5nSWNvbkFic3RyYWN0JykgfHwge30gOiB7fVxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIG5vb3AkMSA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuICB2YXIgcCA9IGNvbmZpZy5tZWFzdXJlUGVyZm9ybWFuY2UgJiYgUEVSRk9STUFOQ0UgJiYgUEVSRk9STUFOQ0UubWFyayAmJiBQRVJGT1JNQU5DRS5tZWFzdXJlID8gUEVSRk9STUFOQ0UgOiB7XG4gICAgbWFyazogbm9vcCQxLFxuICAgIG1lYXN1cmU6IG5vb3AkMVxuICB9O1xuICB2YXIgcHJlYW1ibGUgPSBcIkZBIFxcXCI2LjQuMFxcXCJcIjtcblxuICB2YXIgYmVnaW4gPSBmdW5jdGlvbiBiZWdpbihuYW1lKSB7XG4gICAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlbmQobmFtZSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKG5hbWUpIHtcbiAgICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG4gICAgcC5tZWFzdXJlKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIiksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xuICB9O1xuXG4gIHZhciBwZXJmID0ge1xuICAgIGJlZ2luOiBiZWdpbixcbiAgICBlbmQ6IGVuZFxuICB9O1xuXG4gIHZhciBub29wJDIgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgZnVuY3Rpb24gaXNXYXRjaGVkKG5vZGUpIHtcbiAgICB2YXIgaTJzdmcgPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcpIDogbnVsbDtcbiAgICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc1ByZWZpeEFuZEljb24obm9kZSkge1xuICAgIHZhciBwcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfUFJFRklYKSA6IG51bGw7XG4gICAgdmFyIGljb24gPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfSUNPTikgOiBudWxsO1xuICAgIHJldHVybiBwcmVmaXggJiYgaWNvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0JlZW5SZXBsYWNlZChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgICB9XG5cbiAgICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZy5hdXRvUmVwbGFjZVN2Z107XG4gICAgcmV0dXJuIG11dGF0b3IgfHwgbXV0YXRvcnMucmVwbGFjZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyh0YWcpIHtcbiAgICByZXR1cm4gRE9DVU1FTlQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xuICAgIHJldHVybiBET0NVTUVOVC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0U1ZHKGFic3RyYWN0T2JqKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIF9wYXJhbXMkY2VGbiA9IHBhcmFtcy5jZUZuLFxuICAgICAgICBjZUZuID0gX3BhcmFtcyRjZUZuID09PSB2b2lkIDAgPyBhYnN0cmFjdE9iai50YWcgPT09ICdzdmcnID8gY3JlYXRlRWxlbWVudE5TIDogY3JlYXRlRWxlbWVudCA6IF9wYXJhbXMkY2VGbjtcblxuICAgIGlmICh0eXBlb2YgYWJzdHJhY3RPYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gRE9DVU1FTlQuY3JlYXRlVGV4dE5vZGUoYWJzdHJhY3RPYmopO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSBjZUZuKGFic3RyYWN0T2JqLnRhZyk7XG4gICAgT2JqZWN0LmtleXMoYWJzdHJhY3RPYmouYXR0cmlidXRlcyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB0YWcuc2V0QXR0cmlidXRlKGtleSwgYWJzdHJhY3RPYmouYXR0cmlidXRlc1trZXldKTtcbiAgICB9KTtcbiAgICB2YXIgY2hpbGRyZW4gPSBhYnN0cmFjdE9iai5jaGlsZHJlbiB8fCBbXTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGNvbnZlcnRTVkcoY2hpbGQsIHtcbiAgICAgICAgY2VGbjogY2VGblxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBmdW5jdGlvbiBub2RlQXNDb21tZW50KG5vZGUpIHtcbiAgICB2YXIgY29tbWVudCA9IFwiIFwiLmNvbmNhdChub2RlLm91dGVySFRNTCwgXCIgXCIpO1xuICAgIC8qIEJFR0lOLkFUVFJJQlVUSU9OICovXG5cbiAgICBjb21tZW50ID0gXCJcIi5jb25jYXQoY29tbWVudCwgXCJGb250IEF3ZXNvbWUgZm9udGF3ZXNvbWUuY29tIFwiKTtcbiAgICAvKiBFTkQuQVRUUklCVVRJT04gKi9cblxuICAgIHJldHVybiBjb21tZW50O1xuICB9XG5cbiAgdmFyIG11dGF0b3JzID0ge1xuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobXV0YXRpb24pIHtcbiAgICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbXV0YXRpb25bMV0uZm9yRWFjaChmdW5jdGlvbiAoX2Fic3RyYWN0KSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb252ZXJ0U1ZHKF9hYnN0cmFjdCksIG5vZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgPT09IG51bGwgJiYgY29uZmlnLmtlZXBPcmlnaW5hbFNvdXJjZSkge1xuICAgICAgICAgIHZhciBjb21tZW50ID0gRE9DVU1FTlQuY3JlYXRlQ29tbWVudChub2RlQXNDb21tZW50KG5vZGUpKTtcbiAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbW1lbnQsIG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgICB2YXIgX2Fic3RyYWN0MiA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgICAgLy8gU2hvcnQtY2lyY3VpdCB0byB0aGUgc3RhbmRhcmQgcmVwbGFjZW1lbnRcblxuICAgICAgaWYgKH5jbGFzc0FycmF5KG5vZGUpLmluZGV4T2YoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MpKSB7XG4gICAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvclN2ZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItLipcIikpO1xuICAgICAgZGVsZXRlIF9hYnN0cmFjdDJbMF0uYXR0cmlidXRlcy5pZDtcblxuICAgICAgaWYgKF9hYnN0cmFjdDJbMF0uYXR0cmlidXRlcy5jbGFzcykge1xuICAgICAgICB2YXIgc3BsaXRDbGFzc2VzID0gX2Fic3RyYWN0MlswXS5hdHRyaWJ1dGVzLmNsYXNzLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgICAgIGlmIChjbHMgPT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzIHx8IGNscy5tYXRjaChmb3JTdmcpKSB7XG4gICAgICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2MudG9Ob2RlLnB1c2goY2xzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdG9Ob2RlOiBbXSxcbiAgICAgICAgICB0b1N2ZzogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2Fic3RyYWN0MlswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoc3BsaXRDbGFzc2VzLnRvTm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzcGxpdENsYXNzZXMudG9Ob2RlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0lubmVySFRNTCA9IF9hYnN0cmFjdDIubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRywgJycpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb25TeW5jKG9wKSB7XG4gICAgb3AoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG5cbiAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZnJhbWUgPSBwZXJmb3JtT3BlcmF0aW9uU3luYztcblxuICAgICAgaWYgKGNvbmZpZy5tdXRhdGVBcHByb2FjaCA9PT0gTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMpIHtcbiAgICAgICAgZnJhbWUgPSBXSU5ET1cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuICAgICAgfVxuXG4gICAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuICAgICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIHZhciBtbyA9IG51bGw7XG4gIGZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICAgIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5vYnNlcnZlTXV0YXRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zJHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgICB0cmVlQ2FsbGJhY2sgPSBfb3B0aW9ucyR0cmVlQ2FsbGJhY2sgPT09IHZvaWQgMCA/IG5vb3AkMiA6IF9vcHRpb25zJHRyZWVDYWxsYmFjayxcbiAgICAgICAgX29wdGlvbnMkbm9kZUNhbGxiYWNrID0gb3B0aW9ucy5ub2RlQ2FsbGJhY2ssXG4gICAgICAgIG5vZGVDYWxsYmFjayA9IF9vcHRpb25zJG5vZGVDYWxsYmFjayA9PT0gdm9pZCAwID8gbm9vcCQyIDogX29wdGlvbnMkbm9kZUNhbGxiYWNrLFxuICAgICAgICBfb3B0aW9ucyRwc2V1ZG9FbGVtZW4gPSBvcHRpb25zLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2ssXG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sgPSBfb3B0aW9ucyRwc2V1ZG9FbGVtZW4gPT09IHZvaWQgMCA/IG5vb3AkMiA6IF9vcHRpb25zJHBzZXVkb0VsZW1lbixcbiAgICAgICAgX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID0gb3B0aW9ucy5vYnNlcnZlTXV0YXRpb25zUm9vdCxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICAgIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBkZWZhdWx0UHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgICAgdG9BcnJheShvYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZCkge1xuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJlZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlICYmIGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycgJiYgaGFzUHJlZml4QW5kSWNvbihtdXRhdGlvblJlY29yZC50YXJnZXQpKSB7XG4gICAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICAgIGljb25OYW1lID0gX2dldENhbm9uaWNhbEljb24uaWNvbk5hbWU7XG5cbiAgICAgICAgICAgIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoREFUQV9QUkVGSVgsIHByZWZpeCB8fCBkZWZhdWx0UHJlZml4KTtcbiAgICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZShEQVRBX0lDT04sIGljb25OYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0JlZW5SZXBsYWNlZChtdXRhdGlvblJlY29yZC50YXJnZXQpKSB7XG4gICAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIW1vKSByZXR1cm47XG4gICAgbW8uZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVQYXJzZXIgKG5vZGUpIHtcbiAgICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB2YXIgdmFsID0gW107XG5cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIHZhbCA9IHN0eWxlLnNwbGl0KCc7JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgICB2YXIgcHJvcCA9IHN0eWxlc1swXTtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzLnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY2NbcHJvcF0gPSB2YWx1ZS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xhc3NQYXJzZXIgKG5vZGUpIHtcbiAgICB2YXIgZXhpc3RpbmdQcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcbiAgICB2YXIgZXhpc3RpbmdJY29uTmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKTtcbiAgICB2YXIgaW5uZXJUZXh0ID0gbm9kZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCA/IG5vZGUuaW5uZXJUZXh0LnRyaW0oKSA6ICcnO1xuICAgIHZhciB2YWwgPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobm9kZSkpO1xuXG4gICAgaWYgKCF2YWwucHJlZml4KSB7XG4gICAgICB2YWwucHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICAgIH1cblxuICAgIGlmICh2YWwuaWNvbk5hbWUgJiYgdmFsLnByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID4gMCkge1xuICAgICAgdmFsLmljb25OYW1lID0gYnlMaWdhdHVyZSh2YWwucHJlZml4LCBub2RlLmlubmVyVGV4dCkgfHwgYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWwuaWNvbk5hbWUgJiYgY29uZmlnLmF1dG9GZXRjaFN2ZyAmJiBub2RlLmZpcnN0Q2hpbGQgJiYgbm9kZS5maXJzdENoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdmFsLmljb25OYW1lID0gbm9kZS5maXJzdENoaWxkLmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dHJpYnV0ZXNQYXJzZXIgKG5vZGUpIHtcbiAgICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gdG9BcnJheShub2RlLmF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyKSB7XG4gICAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICB2YXIgdGl0bGVJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRpdGxlLWlkJyk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICBleHRyYUF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXh0cmFBdHRyaWJ1dGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxhbmtNZXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uTmFtZTogbnVsbCxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgdGl0bGVJZDogbnVsbCxcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIHRyYW5zZm9ybTogbWVhbmluZ2xlc3NUcmFuc2Zvcm0sXG4gICAgICBzeW1ib2w6IGZhbHNlLFxuICAgICAgbWFzazoge1xuICAgICAgICBpY29uTmFtZTogbnVsbCxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICByZXN0OiBbXVxuICAgICAgfSxcbiAgICAgIG1hc2tJZDogbnVsbCxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGNsYXNzZXM6IFtdLFxuICAgICAgICBzdHlsZXM6IHt9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gcGFyc2VNZXRhKG5vZGUpIHtcbiAgICB2YXIgcGFyc2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBzdHlsZVBhcnNlcjogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICAgIGljb25OYW1lID0gX2NsYXNzUGFyc2VyLmljb25OYW1lLFxuICAgICAgICBwcmVmaXggPSBfY2xhc3NQYXJzZXIucHJlZml4LFxuICAgICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcblxuICAgIHZhciBleHRyYUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzUGFyc2VyKG5vZGUpO1xuICAgIHZhciBwbHVnaW5NZXRhID0gY2hhaW5Ib29rcygncGFyc2VOb2RlQXR0cmlidXRlcycsIHt9LCBub2RlKTtcbiAgICB2YXIgZXh0cmFTdHlsZXMgPSBwYXJzZXIuc3R5bGVQYXJzZXIgPyBzdHlsZVBhcnNlcihub2RlKSA6IFtdO1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7XG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgICB0aXRsZUlkOiBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10aXRsZS1pZCcpLFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgICAgbWFzazoge1xuICAgICAgICBpY29uTmFtZTogbnVsbCxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICByZXN0OiBbXVxuICAgICAgfSxcbiAgICAgIG1hc2tJZDogbnVsbCxcbiAgICAgIHN5bWJvbDogZmFsc2UsXG4gICAgICBleHRyYToge1xuICAgICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICAgIHN0eWxlczogZXh0cmFTdHlsZXMsXG4gICAgICAgIGF0dHJpYnV0ZXM6IGV4dHJhQXR0cmlidXRlc1xuICAgICAgfVxuICAgIH0sIHBsdWdpbk1ldGEpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcblxuICBmdW5jdGlvbiBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpIHtcbiAgICB2YXIgbm9kZU1ldGEgPSBjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09ICduZXN0JyA/IHBhcnNlTWV0YShub2RlLCB7XG4gICAgICBzdHlsZVBhcnNlcjogZmFsc2VcbiAgICB9KSA6IHBhcnNlTWV0YShub2RlKTtcblxuICAgIGlmICh+bm9kZU1ldGEuZXh0cmEuY2xhc3Nlcy5pbmRleE9mKExBWUVSU19URVhUX0NMQVNTTkFNRSkpIHtcbiAgICAgIHJldHVybiBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlTGF5ZXJzVGV4dCcsIG5vZGUsIG5vZGVNZXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNhbGxQcm92aWRlZCgnZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uJywgbm9kZSwgbm9kZU1ldGEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBrbm93blByZWZpeGVzID0gbmV3IFNldCgpO1xuICBGQU1JTElFUy5tYXAoZnVuY3Rpb24gKGZhbWlseSkge1xuICAgIGtub3duUHJlZml4ZXMuYWRkKFwiZmEtXCIuY29uY2F0KGZhbWlseSkpO1xuICB9KTtcbiAgT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFW0ZBTUlMWV9DTEFTU0lDXSkubWFwKGtub3duUHJlZml4ZXMuYWRkLmJpbmQoa25vd25QcmVmaXhlcykpO1xuICBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEVbRkFNSUxZX1NIQVJQXSkubWFwKGtub3duUHJlZml4ZXMuYWRkLmJpbmQoa25vd25QcmVmaXhlcykpO1xuICBrbm93blByZWZpeGVzID0gX3RvQ29uc3VtYWJsZUFycmF5KGtub3duUHJlZml4ZXMpO1xuXG4gIGZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIGlmICghSVNfRE9NKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gICAgdmFyIGhjbEFkZCA9IGZ1bmN0aW9uIGhjbEFkZChzdWZmaXgpIHtcbiAgICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gICAgfTtcblxuICAgIHZhciBoY2xSZW1vdmUgPSBmdW5jdGlvbiBoY2xSZW1vdmUoc3VmZml4KSB7XG4gICAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICAgIH07XG5cbiAgICB2YXIgcHJlZml4ZXMgPSBjb25maWcuYXV0b0ZldGNoU3ZnID8ga25vd25QcmVmaXhlcyA6IEZBTUlMSUVTLm1hcChmdW5jdGlvbiAoZikge1xuICAgICAgcmV0dXJuIFwiZmEtXCIuY29uY2F0KGYpO1xuICAgIH0pLmNvbmNhdChPYmplY3Qua2V5cyhzdHlsZXMkMikpO1xuXG4gICAgaWYgKCFwcmVmaXhlcy5pbmNsdWRlcygnZmEnKSkge1xuICAgICAgcHJlZml4ZXMucHVzaCgnZmEnKTtcbiAgICB9XG5cbiAgICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIFwiLlwiLmNvbmNhdChwLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKTtcbiAgICB9KSkuam9pbignLCAnKTtcblxuICAgIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHZhciBjYW5kaWRhdGVzID0gW107XG5cbiAgICB0cnkge1xuICAgICAgY2FuZGlkYXRlcyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHByZWZpeGVzRG9tUXVlcnkpKTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gbm9vcFxuICAgIH1cblxuICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhjbEFkZCgncGVuZGluZycpO1xuICAgICAgaGNsUmVtb3ZlKCdjb21wbGV0ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcbiAgICB2YXIgbXV0YXRpb25zID0gY2FuZGlkYXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICAgICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgICBhY2MucHVzaChtdXRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ01pc3NpbmdJY29uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIFByb21pc2UuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgICAgbWFyaygpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ob2RlKG5vZGUpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgZ2VuZXJhdGVNdXRhdGlvbihub2RlKS50aGVuKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1heWJlSWNvbkRlZmluaXRpb24pIHtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuICAgICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQoaWNvbkRlZmluaXRpb24sIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBwYXJhbXMpLCB7fSwge1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoaWNvbkRlZmluaXRpb24pIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgICBzeW1ib2wgPSBfcGFyYW1zJHN5bWJvbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHN5bWJvbCxcbiAgICAgICAgX3BhcmFtcyRtYXNrID0gcGFyYW1zLm1hc2ssXG4gICAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICAgIF9wYXJhbXMkbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgICAgbWFza0lkID0gX3BhcmFtcyRtYXNrSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2tJZCxcbiAgICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgICAgX3BhcmFtcyR0aXRsZUlkID0gcGFyYW1zLnRpdGxlSWQsXG4gICAgICAgIHRpdGxlSWQgPSBfcGFyYW1zJHRpdGxlSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlSWQsXG4gICAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlcyxcbiAgICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgICBfcGFyYW1zJHN0eWxlcyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICAgIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcbiAgICB2YXIgcHJlZml4ID0gaWNvbkRlZmluaXRpb24ucHJlZml4LFxuICAgICAgICBpY29uTmFtZSA9IGljb25EZWZpbml0aW9uLmljb25OYW1lLFxuICAgICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcbiAgICByZXR1cm4gZG9tVmFyaWFudHMoX29iamVjdFNwcmVhZDIoe1xuICAgICAgdHlwZTogJ2ljb24nXG4gICAgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsSG9va3MoJ2JlZm9yZURPTUVsZW1lbnRDcmVhdGlvbicsIHtcbiAgICAgICAgaWNvbkRlZmluaXRpb246IGljb25EZWZpbml0aW9uLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICAgIGF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICBtYWluOiBhc0ZvdW5kSWNvbihpY29uKSxcbiAgICAgICAgICBtYXNrOiBtYXNrID8gYXNGb3VuZEljb24obWFzay5pY29uKSA6IHtcbiAgICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgaWNvbjoge31cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtKSwgdHJhbnNmb3JtKSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgbWFza0lkOiBtYXNrSWQsXG4gICAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB2YXIgUmVwbGFjZUVsZW1lbnRzID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbjogcmVzb2x2ZUljb25zKHJlbmRlcilcbiAgICAgIH07XG4gICAgfSxcbiAgICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzOiBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzKGFjY3VtdWxhdG9yKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3IudHJlZUNhbGxiYWNrID0gb25UcmVlO1xuICAgICAgICAgIGFjY3VtdWxhdG9yLm5vZGVDYWxsYmFjayA9IG9uTm9kZTtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzJCQxKSB7XG4gICAgICBwcm92aWRlcnMkJDEuaTJzdmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHZhciBfcGFyYW1zJG5vZGUgPSBwYXJhbXMubm9kZSxcbiAgICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgICAgX3BhcmFtcyRjYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gX3BhcmFtcyRjYWxsYmFjayA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcGFyYW1zJGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gb25UcmVlKG5vZGUsIGNhbGxiYWNrKTtcbiAgICAgIH07XG5cbiAgICAgIHByb3ZpZGVycyQkMS5nZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24gPSBmdW5jdGlvbiAobm9kZSwgbm9kZU1ldGEpIHtcbiAgICAgICAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICAgICAgICB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgICAgICAgdGl0bGVJZCA9IG5vZGVNZXRhLnRpdGxlSWQsXG4gICAgICAgICAgICBwcmVmaXggPSBub2RlTWV0YS5wcmVmaXgsXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBzeW1ib2wgPSBub2RlTWV0YS5zeW1ib2wsXG4gICAgICAgICAgICBtYXNrID0gbm9kZU1ldGEubWFzayxcbiAgICAgICAgICAgIG1hc2tJZCA9IG5vZGVNZXRhLm1hc2tJZCxcbiAgICAgICAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgUHJvbWlzZS5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBtYXNrLmljb25OYW1lID8gZmluZEljb24obWFzay5pY29uTmFtZSwgbWFzay5wcmVmaXgpIDogUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgICAgIGljb246IHt9XG4gICAgICAgICAgfSldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgICAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KV0pO1xuICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcHJvdmlkZXJzJCQxLmdlbmVyYXRlQWJzdHJhY3RJY29uID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWYzLmNoaWxkcmVuLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBtYWluID0gX3JlZjMubWFpbixcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IF9yZWYzLnRyYW5zZm9ybSxcbiAgICAgICAgICAgIHN0eWxlcyA9IF9yZWYzLnN0eWxlcztcbiAgICAgICAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gICAgICAgIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRDaGlsZDtcblxuICAgICAgICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICBuZXh0Q2hpbGQgPSBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlQWJzdHJhY3RUcmFuc2Zvcm1Hcm91cGluZycsIHtcbiAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBtYWluLndpZHRoLFxuICAgICAgICAgICAgaWNvbldpZHRoOiBtYWluLndpZHRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZHJlbi5wdXNoKG5leHRDaGlsZCB8fCBtYWluLmljb24pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgTGF5ZXJzID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF5ZXI6IGZ1bmN0aW9uIGxheWVyKGFzc2VtYmxlcikge1xuICAgICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgIHZhciBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXM7XG4gICAgICAgICAgcmV0dXJuIGRvbVZhcmlhbnRzKHtcbiAgICAgICAgICAgIHR5cGU6ICdsYXllcidcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsSG9va3MoJ2JlZm9yZURPTUVsZW1lbnRDcmVhdGlvbicsIHtcbiAgICAgICAgICAgICAgYXNzZW1ibGVyOiBhc3NlbWJsZXIsXG4gICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgYXNzZW1ibGVyKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoYXJncykgPyBhcmdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGEuYWJzdHJhY3QpO1xuICAgICAgICAgICAgICB9KSA6IGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGFyZ3MuYWJzdHJhY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBjbGFzczogW1wiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLWxheWVyc1wiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSkuam9pbignICcpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBMYXllcnNDb3VudGVyID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRlcjogZnVuY3Rpb24gY291bnRlcihjb250ZW50KSB7XG4gICAgICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgICAgdmFyIF9wYXJhbXMkdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgICAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICAgICAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgICAgICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlcyxcbiAgICAgICAgICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICBfcGFyYW1zJHN0eWxlcyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICAgICAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICAgICAgICAgIHJldHVybiBkb21WYXJpYW50cyh7XG4gICAgICAgICAgICB0eXBlOiAnY291bnRlcicsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbEhvb2tzKCdiZWZvcmVET01FbGVtZW50Q3JlYXRpb24nLCB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHtcbiAgICAgICAgICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItbGF5ZXJzLWNvdW50ZXJcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgTGF5ZXJzVGV4dCA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uIHRleHQoY29udGVudCkge1xuICAgICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICAgICAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgICAgICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgICAgICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlLFxuICAgICAgICAgICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICAgICAgICAgIF9wYXJhbXMkYXR0cmlidXRlcyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgICAgICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlcztcbiAgICAgICAgICByZXR1cm4gZG9tVmFyaWFudHMoe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxIb29rcygnYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uJywge1xuICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtKSwgdHJhbnNmb3JtKSxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLWxheWVycy10ZXh0XCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMkJDEpIHtcbiAgICAgIHByb3ZpZGVycyQkMS5nZW5lcmF0ZUxheWVyc1RleHQgPSBmdW5jdGlvbiAobm9kZSwgbm9kZU1ldGEpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICAgICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICAgICAgICB2YXIgd2lkdGggPSBudWxsO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICAgICAgICBpZiAoSVNfSUUpIHtcbiAgICAgICAgICB2YXIgY29tcHV0ZWRGb250U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUsIDEwKTtcbiAgICAgICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB3aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLmF1dG9BMTF5ICYmICF0aXRsZSkge1xuICAgICAgICAgIGV4dHJhLmF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtub2RlLCBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgICAgICBjb250ZW50OiBub2RlLmlubmVySFRNTCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgfSldKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBDTEVBTl9DT05URU5UX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXFxcIlwiLCAndWcnKTtcbiAgdmFyIFNFQ09OREFSWV9VTklDT0RFX1JBTkdFID0gWzExMDU5MjAsIDExMTIzMTldO1xuICBmdW5jdGlvbiBoZXhWYWx1ZUZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgY2xlYW5lZCA9IGNvbnRlbnQucmVwbGFjZShDTEVBTl9DT05URU5UX1BBVFRFUk4sICcnKTtcbiAgICB2YXIgY29kZVBvaW50ID0gY29kZVBvaW50QXQoY2xlYW5lZCwgMCk7XG4gICAgdmFyIGlzUHJlcGVuZFRlbiA9IGNvZGVQb2ludCA+PSBTRUNPTkRBUllfVU5JQ09ERV9SQU5HRVswXSAmJiBjb2RlUG9pbnQgPD0gU0VDT05EQVJZX1VOSUNPREVfUkFOR0VbMV07XG4gICAgdmFyIGlzRG91YmxlZCA9IGNsZWFuZWQubGVuZ3RoID09PSAyID8gY2xlYW5lZFswXSA9PT0gY2xlYW5lZFsxXSA6IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaXNEb3VibGVkID8gdG9IZXgoY2xlYW5lZFswXSkgOiB0b0hleChjbGVhbmVkKSxcbiAgICAgIGlzU2Vjb25kYXJ5OiBpc1ByZXBlbmRUZW4gfHwgaXNEb3VibGVkXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCBwb3NpdGlvbikge1xuICAgIHZhciBwZW5kaW5nQXR0cmlidXRlID0gXCJcIi5jb25jYXQoREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HKS5jb25jYXQocG9zaXRpb24ucmVwbGFjZSgnOicsICctJykpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgICB2YXIgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID09PSBwb3NpdGlvbjtcbiAgICAgIH0pWzBdO1xuICAgICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JykubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuXG4gICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgJiYgIWZvbnRGYW1pbHkpIHtcbiAgICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgICAvLyB0aGF0IHByb2JhYmx5IG1lYW5zIHRoYXQgYSBjbGFzcyBuYW1lIHRoYXQgd2FzIHByZXZpb3VzbHkgcHJlc2VudCB0byBtYWtlIHRoZSBpY29uIGhhcyBiZWVuXG4gICAgICAgIC8vIHJlbW92ZWQuIFNvIHdlIG5vdyBzaG91bGQgZGVsZXRlIHRoZSBpY29uLlxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseSAmJiBjb250ZW50ICE9PSAnbm9uZScgJiYgY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgdmFyIF9jb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgICB2YXIgZmFtaWx5ID0gflsnU2hhcnAnXS5pbmRleE9mKGZvbnRGYW1pbHlbMl0pID8gRkFNSUxZX1NIQVJQIDogRkFNSUxZX0NMQVNTSUM7XG4gICAgICAgIHZhciBwcmVmaXggPSB+WydTb2xpZCcsICdSZWd1bGFyJywgJ0xpZ2h0JywgJ1RoaW4nLCAnRHVvdG9uZScsICdCcmFuZHMnLCAnS2l0J10uaW5kZXhPZihmb250RmFtaWx5WzJdKSA/IFNUWUxFX1RPX1BSRUZJWFtmYW1pbHldW2ZvbnRGYW1pbHlbMl0udG9Mb3dlckNhc2UoKV0gOiBGT05UX1dFSUdIVF9UT19QUkVGSVhbZmFtaWx5XVtmb250V2VpZ2h0XTtcblxuICAgICAgICB2YXIgX2hleFZhbHVlRnJvbUNvbnRlbnQgPSBoZXhWYWx1ZUZyb21Db250ZW50KF9jb250ZW50KSxcbiAgICAgICAgICAgIGhleFZhbHVlID0gX2hleFZhbHVlRnJvbUNvbnRlbnQudmFsdWUsXG4gICAgICAgICAgICBpc1NlY29uZGFyeSA9IF9oZXhWYWx1ZUZyb21Db250ZW50LmlzU2Vjb25kYXJ5O1xuXG4gICAgICAgIHZhciBpc1Y0ID0gZm9udEZhbWlseVswXS5zdGFydHNXaXRoKCdGb250QXdlc29tZScpO1xuICAgICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICAgIHZhciBpY29uSWRlbnRpZmllciA9IGljb25OYW1lO1xuXG4gICAgICAgIGlmIChpc1Y0KSB7XG4gICAgICAgICAgdmFyIGljb25OYW1lNCA9IGJ5T2xkVW5pY29kZShoZXhWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoaWNvbk5hbWU0Lmljb25OYW1lICYmIGljb25OYW1lNC5wcmVmaXgpIHtcbiAgICAgICAgICAgIGljb25OYW1lID0gaWNvbk5hbWU0Lmljb25OYW1lO1xuICAgICAgICAgICAgcHJlZml4ID0gaWNvbk5hbWU0LnByZWZpeDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gT25seSBjb252ZXJ0IHRoZSBwc2V1ZG8gZWxlbWVudCBpbiB0aGlzIDo6YmVmb3JlLzo6YWZ0ZXIgcG9zaXRpb24gaW50byBhbiBpY29uIGlmIHdlIGhhdmVuJ3RcbiAgICAgICAgLy8gYWxyZWFkeSBkb25lIHNvIHdpdGggdGhlIHNhbWUgcHJlZml4IGFuZCBpY29uTmFtZVxuXG5cbiAgICAgICAgaWYgKGljb25OYW1lICYmICFpc1NlY29uZGFyeSAmJiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbklkZW50aWZpZXIpKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSwgaWNvbklkZW50aWZpZXIpO1xuXG4gICAgICAgICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIG9sZCBvbmUsIHNpbmNlIHdlJ3JlIHJlcGxhY2luZyBpdCB3aXRoIGEgbmV3IG9uZVxuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1ldGEgPSBibGFua01ldGEoKTtcbiAgICAgICAgICB2YXIgZXh0cmEgPSBtZXRhLmV4dHJhO1xuICAgICAgICAgIGV4dHJhLmF0dHJpYnV0ZXNbREFUQV9GQV9QU0VVRE9fRUxFTUVOVF0gPSBwb3NpdGlvbjtcbiAgICAgICAgICBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KS50aGVuKGZ1bmN0aW9uIChtYWluKSB7XG4gICAgICAgICAgICB2YXIgX2Fic3RyYWN0ID0gbWFrZUlubGluZVN2Z0Fic3RyYWN0KF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtZXRhKSwge30sIHtcbiAgICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICAgICAgICAgIG1hc2s6IGVtcHR5Q2Fub25pY2FsSWNvbigpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZTogaWNvbklkZW50aWZpZXIsXG4gICAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJzo6YmVmb3JlJykge1xuICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBfYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKG5vZGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3JlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOjpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6OmFmdGVyJyldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NhYmxlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWFyY2hQc2V1ZG9FbGVtZW50cyhyb290KSB7XG4gICAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIG9wZXJhdGlvbnMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpKS5maWx0ZXIocHJvY2Vzc2FibGUpLm1hcChyZXBsYWNlKTtcbiAgICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICBQcm9taXNlLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZW5kKCk7XG4gICAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZW5kKCk7XG4gICAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgUHNldWRvRWxlbWVudHMgPSB7XG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrczogZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrcyhhY2N1bXVsYXRvcikge1xuICAgICAgICAgIGFjY3VtdWxhdG9yLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sgPSBzZWFyY2hQc2V1ZG9FbGVtZW50cztcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzJCQxKSB7XG4gICAgICBwcm92aWRlcnMkJDEucHNldWRvRWxlbWVudHMyc3ZnID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZTtcblxuICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBfdW53YXRjaGVkID0gZmFsc2U7XG4gIHZhciBNdXRhdGlvbk9ic2VydmVyJDEgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb206IHtcbiAgICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiB1bndhdGNoKCkge1xuICAgICAgICAgICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICAgICAgICBfdW53YXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib290c3RyYXA6IGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgICAgICAgICBvYnNlcnZlKGNoYWluSG9va3MoJ211dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3MnLCB7fSkpO1xuICAgICAgICB9LFxuICAgICAgICBub0F1dG86IGZ1bmN0aW9uIG5vQXV0bygpIHtcbiAgICAgICAgICBkaXNjb25uZWN0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiBmdW5jdGlvbiB3YXRjaChwYXJhbXMpIHtcbiAgICAgICAgICB2YXIgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBwYXJhbXMub2JzZXJ2ZU11dGF0aW9uc1Jvb3Q7XG5cbiAgICAgICAgICBpZiAoX3Vud2F0Y2hlZCkge1xuICAgICAgICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZShjaGFpbkhvb2tzKCdtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzJywge1xuICAgICAgICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdDogb2JzZXJ2ZU11dGF0aW9uc1Jvb3RcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICAgIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgICBzaXplOiAxNixcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgZmxpcFg6IGZhbHNlLFxuICAgICAgZmxpcFk6IGZhbHNlLFxuICAgICAgcm90YXRlOiAwXG4gICAgfTtcbiAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgICB2YXIgZmlyc3QgPSBwYXJ0c1swXTtcbiAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAndicpIHtcbiAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICAgIGNhc2UgJ2dyb3cnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nocmluayc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0cmFuc2Zvcm0pO1xuICB9O1xuICB2YXIgUG93ZXJUcmFuc2Zvcm1zID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyc2U6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcnNlTm9kZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uIHBhcnNlTm9kZUF0dHJpYnV0ZXMoYWNjdW11bGF0b3IsIG5vZGUpIHtcbiAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICBpZiAodHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRvci50cmFuc2Zvcm0gPSBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMpIHtcbiAgICAgIHByb3ZpZGVycy5nZW5lcmF0ZUFic3RyYWN0VHJhbnNmb3JtR3JvdXBpbmcgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgICAgaWNvbldpZHRoID0gX3JlZi5pY29uV2lkdGg7XG4gICAgICAgIHZhciBvdXRlciA9IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChjb250YWluZXJXaWR0aCAvIDIsIFwiIDI1NilcIilcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGlubmVyVHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54ICogMzIsIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS55ICogMzIsIFwiKSBcIik7XG4gICAgICAgIHZhciBpbm5lclNjYWxlID0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gICAgICAgIHZhciBpbm5lclJvdGF0ZSA9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcIiAwIDApXCIpO1xuICAgICAgICB2YXIgaW5uZXIgPSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLmNvbmNhdChpbm5lclRyYW5zbGF0ZSwgXCIgXCIpLmNvbmNhdChpbm5lclNjYWxlLCBcIiBcIikuY29uY2F0KGlubmVyUm90YXRlKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcGF0aCA9IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChpY29uV2lkdGggLyAyICogLTEsIFwiIC0yNTYpXCIpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0ge1xuICAgICAgICAgIG91dGVyOiBvdXRlcixcbiAgICAgICAgICBpbm5lcjogaW5uZXIsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCBvcGVyYXRpb25zLm91dGVyKSxcbiAgICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoe30sIG9wZXJhdGlvbnMuaW5uZXIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICAgIHRhZzogbWFpbi5pY29uLnRhZyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzKSwgb3BlcmF0aW9ucy5wYXRoKVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIEFMTF9TUEFDRSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZpbGxCbGFjayhfYWJzdHJhY3QpIHtcbiAgICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgICBpZiAoX2Fic3RyYWN0LmF0dHJpYnV0ZXMgJiYgKF9hYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgfHwgZm9yY2UpKSB7XG4gICAgICBfYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsID0gJ2JsYWNrJztcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fic3RyYWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVHcm91cChfYWJzdHJhY3QyKSB7XG4gICAgaWYgKF9hYnN0cmFjdDIudGFnID09PSAnZycpIHtcbiAgICAgIHJldHVybiBfYWJzdHJhY3QyLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW19hYnN0cmFjdDJdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBNYXNrcyA9IHtcbiAgICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJzZU5vZGVBdHRyaWJ1dGVzOiBmdW5jdGlvbiBwYXJzZU5vZGVBdHRyaWJ1dGVzKGFjY3VtdWxhdG9yLCBub2RlKSB7XG4gICAgICAgICAgdmFyIG1hc2tEYXRhID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzaycpO1xuICAgICAgICAgIHZhciBtYXNrID0gIW1hc2tEYXRhID8gZW1wdHlDYW5vbmljYWxJY29uKCkgOiBnZXRDYW5vbmljYWxJY29uKG1hc2tEYXRhLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gaS50cmltKCk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgaWYgKCFtYXNrLnByZWZpeCkge1xuICAgICAgICAgICAgbWFzay5wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWNjdW11bGF0b3IubWFzayA9IG1hc2s7XG4gICAgICAgICAgYWNjdW11bGF0b3IubWFza0lkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzay1pZCcpO1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMpIHtcbiAgICAgIHByb3ZpZGVycy5nZW5lcmF0ZUFic3RyYWN0TWFzayA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgICAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICAgICAgICBleHBsaWNpdE1hc2tJZCA9IF9yZWYubWFza0lkLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gICAgICAgIHZhciBtYWluV2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gICAgICAgIHZhciBtYXNrV2lkdGggPSBtYXNrLndpZHRoLFxuICAgICAgICAgICAgbWFza1BhdGggPSBtYXNrLmljb247XG4gICAgICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgY29udGFpbmVyV2lkdGg6IG1hc2tXaWR0aCxcbiAgICAgICAgICBpY29uV2lkdGg6IG1haW5XaWR0aFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1hc2tSZWN0ID0ge1xuICAgICAgICAgIHRhZzogJ3JlY3QnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBBTExfU1BBQ0UpLCB7fSwge1xuICAgICAgICAgICAgZmlsbDogJ3doaXRlJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4gPSBtYWluUGF0aC5jaGlsZHJlbiA/IHtcbiAgICAgICAgICBjaGlsZHJlbjogbWFpblBhdGguY2hpbGRyZW4ubWFwKGZpbGxCbGFjaylcbiAgICAgICAgfSA6IHt9O1xuICAgICAgICB2YXIgbWFza0lubmVyR3JvdXAgPSB7XG4gICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoe30sIHRyYW5zLmlubmVyKSxcbiAgICAgICAgICBjaGlsZHJlbjogW2ZpbGxCbGFjayhfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgICB0YWc6IG1haW5QYXRoLnRhZyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtYWluUGF0aC5hdHRyaWJ1dGVzKSwgdHJhbnMucGF0aClcbiAgICAgICAgICB9LCBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4pKV1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1hc2tPdXRlckdyb3VwID0ge1xuICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCB0cmFucy5vdXRlciksXG4gICAgICAgICAgY2hpbGRyZW46IFttYXNrSW5uZXJHcm91cF1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1hc2tJZCA9IFwibWFzay1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgICB2YXIgY2xpcElkID0gXCJjbGlwLVwiLmNvbmNhdChleHBsaWNpdE1hc2tJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gICAgICAgIHZhciBtYXNrVGFnID0ge1xuICAgICAgICAgIHRhZzogJ21hc2snLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBBTExfU1BBQ0UpLCB7fSwge1xuICAgICAgICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgICAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgICAgICAgIG1hc2tDb250ZW50VW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlZnMgPSB7XG4gICAgICAgICAgdGFnOiAnZGVmcycsXG4gICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICB0YWc6ICdjbGlwUGF0aCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgIGlkOiBjbGlwSWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogZGVHcm91cChtYXNrUGF0aClcbiAgICAgICAgICB9LCBtYXNrVGFnXVxuICAgICAgICB9O1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGRlZnMsIHtcbiAgICAgICAgICB0YWc6ICdyZWN0JyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgICdjbGlwLXBhdGgnOiBcInVybCgjXCIuY29uY2F0KGNsaXBJZCwgXCIpXCIpLFxuICAgICAgICAgICAgbWFzazogXCJ1cmwoI1wiLmNvbmNhdChtYXNrSWQsIFwiKVwiKVxuICAgICAgICAgIH0sIEFMTF9TUEFDRSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBNaXNzaW5nSWNvbkluZGljYXRvciA9IHtcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzKSB7XG4gICAgICB2YXIgcmVkdWNlTW90aW9uID0gZmFsc2U7XG5cbiAgICAgIGlmIChXSU5ET1cubWF0Y2hNZWRpYSkge1xuICAgICAgICByZWR1Y2VNb3Rpb24gPSBXSU5ET1cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzO1xuICAgICAgfVxuXG4gICAgICBwcm92aWRlcnMubWlzc2luZ0ljb25BYnN0cmFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdDaGlsZHJlbiA9IFtdO1xuICAgICAgICB2YXIgRklMTCA9IHtcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICAgICAgICB9O1xuICAgICAgICB2YXIgQU5JTUFUSU9OX0JBU0UgPSB7XG4gICAgICAgICAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJyxcbiAgICAgICAgICBkdXI6ICcycydcbiAgICAgICAgfTsgLy8gUmluZ1xuXG4gICAgICAgIGdDaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRklMTCksIHt9LCB7XG4gICAgICAgICAgICBkOiAnTTE1Ni41LDQ0Ny43bC0xMi42LDI5LjVjLTE4LjctOS41LTM1LjktMjEuMi01MS41LTM0LjlsMjIuNy0yMi43QzEyNy42LDQzMC41LDE0MS41LDQ0MCwxNTYuNSw0NDcuN3ogTTQwLjYsMjcySDguNSBjMS40LDIxLjIsNS40LDQxLjcsMTEuNyw2MS4xTDUwLDMyMS4yQzQ1LjEsMzA1LjUsNDEuOCwyODksNDAuNiwyNzJ6IE00MC42LDI0MGMxLjQtMTguOCw1LjItMzcsMTEuMS01NC4xbC0yOS41LTEyLjYgQzE0LjcsMTk0LjMsMTAsMjE2LjcsOC41LDI0MEg0MC42eiBNNjQuMywxNTYuNWM3LjgtMTQuOSwxNy4yLTI4LjgsMjguMS00MS41TDY5LjcsOTIuM2MtMTMuNywxNS42LTI1LjUsMzIuOC0zNC45LDUxLjUgTDY0LjMsMTU2LjV6IE0zOTcsNDE5LjZjLTEzLjksMTItMjkuNCwyMi4zLTQ2LjEsMzAuNGwxMS45LDI5LjhjMjAuNy05LjksMzkuOC0yMi42LDU2LjktMzcuNkwzOTcsNDE5LjZ6IE0xMTUsOTIuNCBjMTMuOS0xMiwyOS40LTIyLjMsNDYuMS0zMC40bC0xMS45LTI5LjhjLTIwLjcsOS45LTM5LjgsMjIuNi01Ni44LDM3LjZMMTE1LDkyLjR6IE00NDcuNywzNTUuNWMtNy44LDE0LjktMTcuMiwyOC44LTI4LjEsNDEuNSBsMjIuNywyMi43YzEzLjctMTUuNiwyNS41LTMyLjksMzQuOS01MS41TDQ0Ny43LDM1NS41eiBNNDcxLjQsMjcyYy0xLjQsMTguOC01LjIsMzctMTEuMSw1NC4xbDI5LjUsMTIuNiBjNy41LTIxLjEsMTIuMi00My41LDEzLjYtNjYuOEg0NzEuNHogTTMyMS4yLDQ2MmMtMTUuNyw1LTMyLjIsOC4yLTQ5LjIsOS40djMyLjFjMjEuMi0xLjQsNDEuNy01LjQsNjEuMS0xMS43TDMyMS4yLDQ2MnogTTI0MCw0NzEuNGMtMTguOC0xLjQtMzctNS4yLTU0LjEtMTEuMWwtMTIuNiwyOS41YzIxLjEsNy41LDQzLjUsMTIuMiw2Ni44LDEzLjZWNDcxLjR6IE00NjIsMTkwLjhjNSwxNS43LDguMiwzMi4yLDkuNCw0OS4yaDMyLjEgYy0xLjQtMjEuMi01LjQtNDEuNy0xMS43LTYxLjFMNDYyLDE5MC44eiBNOTIuNCwzOTdjLTEyLTEzLjktMjIuMy0yOS40LTMwLjQtNDYuMWwtMjkuOCwxMS45YzkuOSwyMC43LDIyLjYsMzkuOCwzNy42LDU2LjkgTDkyLjQsMzk3eiBNMjcyLDQwLjZjMTguOCwxLjQsMzYuOSw1LjIsNTQuMSwxMS4xbDEyLjYtMjkuNUMzMTcuNywxNC43LDI5NS4zLDEwLDI3Miw4LjVWNDAuNnogTTE5MC44LDUwIGMxNS43LTUsMzIuMi04LjIsNDkuMi05LjRWOC41Yy0yMS4yLDEuNC00MS43LDUuNC02MS4xLDExLjdMMTkwLjgsNTB6IE00NDIuMyw5Mi4zTDQxOS42LDExNWMxMiwxMy45LDIyLjMsMjkuNCwzMC41LDQ2LjEgbDI5LjgtMTEuOUM0NzAsMTI4LjUsNDU3LjMsMTA5LjQsNDQyLjMsOTIuM3ogTTM5Nyw5Mi40bDIyLjctMjIuN2MtMTUuNi0xMy43LTMyLjgtMjUuNS01MS41LTM0LjlsLTEyLjYsMjkuNSBDMzcwLjQsNzIuMSwzODQuNCw4MS41LDM5Nyw5Mi40eidcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgT1BBQ0lUWV9BTklNQVRFID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEFOSU1BVElPTl9CQVNFKSwge30sIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnb3BhY2l0eSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGRvdCA9IHtcbiAgICAgICAgICB0YWc6ICdjaXJjbGUnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGSUxMKSwge30sIHtcbiAgICAgICAgICAgIGN4OiAnMjU2JyxcbiAgICAgICAgICAgIGN5OiAnMzY0JyxcbiAgICAgICAgICAgIHI6ICcyOCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXJlZHVjZU1vdGlvbikge1xuICAgICAgICAgIGRvdC5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEFOSU1BVElPTl9CQVNFKSwge30sIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJ3InLFxuICAgICAgICAgICAgICB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIE9QQUNJVFlfQU5JTUFURSksIHt9LCB7XG4gICAgICAgICAgICAgIHZhbHVlczogJzE7MDsxOzE7MDsxOydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBnQ2hpbGRyZW4ucHVzaChkb3QpO1xuICAgICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZJTEwpLCB7fSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgZDogJ00yNjMuNywzMTJoLTE2Yy02LjYsMC0xMi01LjQtMTItMTJjMC03MSw3Ny40LTYzLjksNzcuNC0xMDcuOGMwLTIwLTE3LjgtNDAuMi01Ny40LTQwLjJjLTI5LjEsMC00NC4zLDkuNi01OS4yLDI4LjcgYy0zLjksNS0xMS4xLDYtMTYuMiwyLjRsLTEzLjEtOS4yYy01LjYtMy45LTYuOS0xMS44LTIuNi0xNy4yYzIxLjItMjcuMiw0Ni40LTQ0LjcsOTEuMi00NC43YzUyLjMsMCw5Ny40LDI5LjgsOTcuNCw4MC4yIGMwLDY3LjYtNzcuNCw2My41LTc3LjQsMTA3LjhDMjc1LjcsMzA2LjYsMjcwLjMsMzEyLDI2My43LDMxMnonXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW46IHJlZHVjZU1vdGlvbiA/IFtdIDogW3tcbiAgICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIE9QQUNJVFlfQU5JTUFURSksIHt9LCB7XG4gICAgICAgICAgICAgIHZhbHVlczogJzE7MDswOzA7MDsxOydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZWR1Y2VNb3Rpb24pIHtcbiAgICAgICAgICAvLyBFeGNsYW1hdGlvblxuICAgICAgICAgIGdDaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZJTEwpLCB7fSwge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICAgIGQ6ICdNMjMyLjUsMTM0LjVsNywxNjhjMC4zLDYuNCw1LjYsMTEuNSwxMiwxMS41aDljNi40LDAsMTEuNy01LjEsMTItMTEuNWw3LTE2OGMwLjMtNi44LTUuMi0xMi41LTEyLTEyLjVoLTIzIEMyMzcuNywxMjIsMjMyLjIsMTI3LjcsMjMyLjUsMTM0LjV6J1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICAgICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBPUEFDSVRZX0FOSU1BVEUpLCB7fSwge1xuICAgICAgICAgICAgICAgIHZhbHVlczogJzA7MDsxOzE7MDswOydcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdtaXNzaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IGdDaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIFN2Z1N5bWJvbHMgPSB7XG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyc2VOb2RlQXR0cmlidXRlczogZnVuY3Rpb24gcGFyc2VOb2RlQXR0cmlidXRlcyhhY2N1bXVsYXRvciwgbm9kZSkge1xuICAgICAgICAgIHZhciBzeW1ib2xEYXRhID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG4gICAgICAgICAgdmFyIHN5bWJvbCA9IHN5bWJvbERhdGEgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbERhdGEgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbERhdGE7XG4gICAgICAgICAgYWNjdW11bGF0b3JbJ3N5bWJvbCddID0gc3ltYm9sO1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBsdWdpbnMgPSBbSW5qZWN0Q1NTLCBSZXBsYWNlRWxlbWVudHMsIExheWVycywgTGF5ZXJzQ291bnRlciwgTGF5ZXJzVGV4dCwgUHNldWRvRWxlbWVudHMsIE11dGF0aW9uT2JzZXJ2ZXIkMSwgUG93ZXJUcmFuc2Zvcm1zLCBNYXNrcywgTWlzc2luZ0ljb25JbmRpY2F0b3IsIFN2Z1N5bWJvbHNdO1xuXG4gIHJlZ2lzdGVyUGx1Z2lucyhwbHVnaW5zLCB7XG4gICAgbWl4b3V0c1RvOiBhcGlcbiAgfSk7XG4gIGJ1bmtlcihib290c3RyYXApO1xuXG59KCkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNaXNzaW9uIGZyb20gJy4vTWlzc2lvbic7XG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gJy4vT2JqZWN0aXZlJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgJy4vYXNzZXRzL2ZvbnRhd2Vzb21lL2ZvbnRhd2Vzb21lJ1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAvLyBUT0RPIGNoYW5nZSB0ZXN0XG4gIGNvbnN0IHRlc3QgPSBuZXcgU3RvcmFnZSgpO1xuICBcbiAgLy8gRHVtbXkgTWlzc2lvbnNcbiAgY29uc3QgbWlzc2lvbiA9IG5ldyBNaXNzaW9uKCdUZXN0aW5nIG1pc3Npb24nKTtcbiAgdGVzdC5hZGRNaXNzaW9uKG1pc3Npb24pO1xuXG4gIC8vIGNoZWNrcyBzdG9yYWdlIGZvciBvYmplY3RpdmVzIGR1ZSB0b2RheSBhbmQgbW92ZXMgdGhlbSB0byBUb2RheSdzIG1pc3Npb25cbiAgZnVuY3Rpb24gY2hlY2tTdG9yZWRPYmplY3RpdmVzKCkge1xuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpXG4gICAgZm9yKGNvbnN0IG1pc3Npb24gb2Ygc3RvcmVkVG9kb3MpIHtcbiAgICAgIGNvbnN0IG1pc3Npb25PYmplY3RpdmVzID0gbWlzc2lvbi5nZXRPYmplY3RpdmVzKClcbiAgICAgIGZvcihjb25zdCBvYmplY3RpdmUgb2YgbWlzc2lvbk9iamVjdGl2ZXMpIHtcbiAgICAgICAgaWYoaXNUb2RheShvYmplY3RpdmUpKSB7XG4gICAgICAgICAgY29uc3Qgb2JqTmFtZSA9IG9iamVjdGl2ZS5nZXROYW1lKClcbiAgICAgICAgICBjb25zdCBvYmpEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG4gICAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKClcbiAgICAgICAgICBjb25zdCBuZXdPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKG9iak5hbWUsIG9iakRlc2NyaXB0aW9uLCBvYmpEYXRlKVxuICAgICAgICAgIHRlc3QuZGVsZXRlT2JqZWN0aXZlKG1pc3Npb24uZ2V0TmFtZSgpLCBvYmplY3RpdmUuZ2V0TmFtZSgpKVxuICAgICAgICAgIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgbmV3T2JqZWN0aXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgb2JqZWN0aXZlIGlzIGR1ZSB0b2RheVxuICBmdW5jdGlvbiBpc1RvZGF5KG9iaikge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF0ZVRvZGF5ID0gIGRhdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZGF0ZU1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IGRhdGVZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgZnVsbERhdGUgPSBgJHtkYXRlTW9udGh9LyR7ZGF0ZVRvZGF5fS8ke2RhdGVZZWFyfWBcbiAgICBpZihvYmouZ2V0RGF0ZUZvcm1hdHRlZCgpID09PSBcInRvZGF5XCIgfHwgb2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gZnVsbERhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIER1bW15IE9iamVjdGl2ZXNcbiAgXG4gIGNvbnN0IHRvZGF5T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRvZGF5IG9iamVjdGl2ZVwiLCBcInRvZGFhYWF5XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdG9kYXlPYmplY3RpdmUpXG4gIGNvbnN0IHdlZWtPYmplY2V0aXZlID0gbmV3IE9iamVjdGl2ZShcIkZvciB0aGUgd2Vla1wiLCBcIndlZWVla1wiLCBcIjIwMjMtOC04XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGhpcyBXZWVrXCIsIHdlZWtPYmplY2V0aXZlKVxuICAvLyBjb25zdCB0cnlpbmdUb1RvZGF5ID0gbmV3IE9iamVjdGl2ZShcIk1vdmUgdG8gVG9kYXlcIiwgXCJtb3ZpbmdcIiwgXCIyNy83LzIwMjNcIilcbiAgLy8gdGVzdC5hZGRPYmplY3RpdmUoXCJUZXN0aW5nIG1pc3Npb25cIiwgdHJ5aW5nVG9Ub2RheSlcblxuICBjb25zdCBtaXNzaW9uc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9ucycpO1xuICBjb25zdCBvYmplY3RpdmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9iamVjdGl2ZXMnKTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW9iai1tZXNzYWdlJyk7XG5cbiAgLy8gVE9ETyBhZGQgYSBjbG9zZSBidXR0b24gb24gZm9ybVxuICAvLyBBZGQgbWlzc2lvblxuICBjb25zdCBhZGRNaXNzaW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1taXNzaW9uJyk7XG4gIFxuICBjb25zdCBtaXNzaW9uRm9ybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIG1pc3Npb25Gb3JtQm94LmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWZvcm0tYm94XCIpXG5cbiAgY29uc3QgbWlzc2lvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gIGNvbnN0IG1pc3Npb25GaWVsZFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKVxuXG4gIGNvbnN0IG1pc3Npb25Gb3JtTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKVxuICBtaXNzaW9uRm9ybUxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvbi1sZWdlbmRcIilcbiAgbWlzc2lvbkZvcm1MZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOZXcgTWlzc2lvblwiXG5cbiAgY29uc3QgbWlzc2lvbk5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBtaXNzaW9uTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIilcbiAgbWlzc2lvbk5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWlzc2lvbiBOYW1lOlwiXG5cbiAgY29uc3QgbWlzc2lvbk5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBtaXNzaW9uTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICBtaXNzaW9uTmFtZUlucHV0LmlkID0gXCJuYW1lXCJcbiAgbWlzc2lvbk5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGhlIG1pc3Npb24gbmFtZVwiXG5cbiAgY29uc3QgY3JlYXRlTWlzc2lvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY3JlYXRlTWlzc2lvbkJ0bi5pZCA9IFwiY3JlYXRlLW1pc3Npb24tYnRuXCJcbiAgY3JlYXRlTWlzc2lvbkJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE1pc3Npb25cIlxuXG4gIGNyZWF0ZU1pc3Npb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgbWlzc2lvbk5hbWUgPSBtaXNzaW9uTmFtZUlucHV0LnZhbHVlXG4gICAgaWYgKG1pc3Npb25OYW1lSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBuZXdNaXNzaW9uID0gbmV3IE1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgdGVzdC5hZGRNaXNzaW9uKG5ld01pc3Npb24pXG4gICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICB9KVxuICBcbiAgbWlzc2lvbkZvcm1Cb3guYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm0pXG4gIG1pc3Npb25Gb3JtLmFwcGVuZChtaXNzaW9uRmllbGRTZXQpXG4gIG1pc3Npb25GaWVsZFNldC5hcHBlbmQobWlzc2lvbkZvcm1MZWdlbmQsIG1pc3Npb25OYW1lTGFiZWwsIGNyZWF0ZU1pc3Npb25CdG4pXG4gIG1pc3Npb25OYW1lTGFiZWwuYXBwZW5kQ2hpbGQobWlzc2lvbk5hbWVJbnB1dClcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChtaXNzaW9uRm9ybUJveClcblxuICBhZGRNaXNzaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYobWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgbWlzc2lvbk5hbWVJbnB1dC5mb2N1cygpXG4gICAgfVxuICB9KVxuICBcblxuICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJveFwiKVxuICAvLyBBZGQgb2JqZWN0aXZlXG4gIGNvbnN0IGFkZE9iamVjdGl2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtb2JqZWN0aXZlJyk7XG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgb2JqZWN0aXZlRm9ybUJveC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWZvcm0tYm94XCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICBjb25zdCBvYmplY3RpdmVGb3JtTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKVxuICBvYmplY3RpdmVGb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtbGVnZW5kXCIpXG4gIG9iamVjdGl2ZUZvcm1MZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBuZXcgb2JqZWN0aXZlXCJcblxuICBjb25zdCBvYmplY3RpdmVOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgb2JqZWN0aXZlTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9OYW1lXCIpXG4gIG9iamVjdGl2ZU5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiT2JqZWN0aXZlIE5hbWU6IFwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG9iamVjdGl2ZU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgb2JqZWN0aXZlTmFtZUlucHV0LmlkID0gXCJvTmFtZVwiXG4gIG9iamVjdGl2ZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGhlIG9iamVjdGl2ZSBuYW1lXCJcblxuICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib0Rlc2NyaXB0aW9uXCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZSBEZXNjcmlwdGlvbjogXCJcblxuICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQuaWQgPSBcIm9EZXNjcmlwdGlvblwiXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIldoYXQgaXMgdGhpcyBvYmplY3RpdmUgYWJvdXQ/XCJcblxuICBjb25zdCBvYmplY3RpdmVEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9EdWVEYXRlXCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiT2JqZWN0aXZlIER1ZSBEYXRlOiBcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBvYmplY3RpdmVEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUlucHV0LmlkID0gXCJvRHVlRGF0ZVwiXG5cbiAgY29uc3QgbWlzc2lvblBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG1pc3Npb25QaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvTWlzc2lvblwiKVxuICBtaXNzaW9uUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIk1pc3Npb246IFwiXG5cbiAgY29uc3QgbWlzc2lvblBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICBtaXNzaW9uUGlja2VySW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm9NaXNzaW9uXCIpXG4gIG1pc3Npb25QaWNrZXJJbnB1dC5pZCA9IFwib01pc3Npb25cIlxuXG4gIGZvciAoY29uc3QgbWlzc2lvbiBvZiB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpIHtcbiAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgICBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke21pc3Npb24uZ2V0TmFtZSgpfWApXG4gICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gYCR7bWlzc2lvbi5nZXROYW1lKCl9YFxuICAgICAgbWlzc2lvblBpY2tlcklucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG4gICAgfVxuXG4gIGNvbnN0IGNyZWF0ZU9iamVjdGl2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY3JlYXRlT2JqZWN0aXZlQnRuLmlkID0gXCJjcmVhdGUtb2JqZWN0aXZlLWJ0blwiXG4gIGNyZWF0ZU9iamVjdGl2ZUJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE9iamVjdGl2ZVwiXG5cbiAgY3JlYXRlT2JqZWN0aXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG9iamVjdGl2ZU5hbWUgPSBvYmplY3RpdmVOYW1lSW5wdXQudmFsdWVcbiAgICBpZiAob2JqZWN0aXZlTmFtZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uID0gb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGUgPSBvYmplY3RpdmVEdWVEYXRlSW5wdXQudmFsdWVcbiAgICBjb25zdCBvYmplY3RpdmVNaXNzaW9uID0gbWlzc2lvblBpY2tlcklucHV0LnZhbHVlXG4gICAgY29uc3QgbmV3T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShvYmplY3RpdmVOYW1lLCBvYmplY3RpdmVEZXNjcmlwdGlvbiwgb2JqZWN0aXZlRHVlRGF0ZSlcbiAgICB0ZXN0LmFkZE9iamVjdGl2ZShvYmplY3RpdmVNaXNzaW9uLCBuZXdPYmplY3RpdmUpXG4gICAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICByZW5kZXJNaXNzaW9ucygpXG4gICAgcmVuZGVyT2JqZWN0aXZlcyh0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24obWlzc2lvblBpY2tlcklucHV0LnZhbHVlKSlcbiAgfSlcblxuICBvYmplY3RpdmVGb3JtQm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZUZvcm0pXG4gIG9iamVjdGl2ZUZvcm0uYXBwZW5kQ2hpbGQob2JqZWN0aXZlRmllbGRzZXQpXG4gIG9iamVjdGl2ZUZpZWxkc2V0LmFwcGVuZChvYmplY3RpdmVGb3JtTGVnZW5kLCBvYmplY3RpdmVOYW1lTGFiZWwsIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwsIG9iamVjdGl2ZUR1ZURhdGVMYWJlbCwgbWlzc2lvblBpY2tlckxhYmVsLCBtaXNzaW9uUGlja2VySW5wdXQsIGNyZWF0ZU9iamVjdGl2ZUJ0bilcbiAgb2JqZWN0aXZlTmFtZUxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZU5hbWVJbnB1dClcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0KVxuICBvYmplY3RpdmVEdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQob2JqZWN0aXZlRHVlRGF0ZUlucHV0KVxuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZUZvcm1Cb3gpXG5cbiAgYWRkT2JqZWN0aXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgb2JqZWN0aXZlTmFtZUlucHV0LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gIH0pXG5cbiAgLy8gY3JlYXRlcyBtaXNzaW9uIGVsZW1lbnQgdXNpbmcgbWlzc2lvbiBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikge1xuICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzaW9uJyk7XG4gICAgY29uc3QgbWlzc2lvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1pc3Npb25UZXh0LnRleHRDb250ZW50ID0gbWlzc2lvbi5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBlZGl0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZWRpdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlTmFtZVwiKVxuICAgIGVkaXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkVkaXQgbWlzc2lvbiBuYW1lOiBcIlxuXG4gICAgY29uc3QgZWRpdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGVkaXROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gICAgZWRpdE5hbWVJbnB1dC5pZCA9IFwiZU5hbWVcIlxuICAgIGVkaXROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBtaXNzaW9uIG5hbWUuLi5cIlxuXG4gICAgZWRpdE5hbWVMYWJlbC5hcHBlbmRDaGlsZChlZGl0TmFtZUlucHV0KVxuXG4gICAgY29uc3QgZGVsZXRlTWlzc2lvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXG4gICAgZGVsZXRlTWlzc2lvbkltZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpXG4gICAgZGVsZXRlTWlzc2lvbkltZy5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1zcXVhcmUteG1hcmtcIiwgXCJmYS1sZ1wiKVxuXG4gICAgbWlzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJPYmplY3RpdmVzKG1pc3Npb24pO1xuICAgIH0pO1xuXG4gICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWlzc2lvblRleHQpO1xuXG4gICAgaWYgKG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHwgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPT09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICAgIHJldHVybiBtaXNzaW9uRWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzaW9uRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVNaXNzaW9uSW1nKVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb25JbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlc3QuZGVsZXRlTWlzc2lvbihtaXNzaW9uVGV4dC50ZXh0Q29udGVudClcbiAgICAgIHJlbmRlck1pc3Npb25zKClcbiAgICB9KVxuXG4gICAgbWlzc2lvblRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiIHx8IG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbWlzc2lvbkVsZW1lbnQucmVtb3ZlQ2hpbGQobWlzc2lvblRleHQpXG4gICAgICBtaXNzaW9uRWxlbWVudC5yZW1vdmVDaGlsZChkZWxldGVNaXNzaW9uSW1nKVxuICAgICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdE5hbWVMYWJlbClcbiAgICAgIGVkaXROYW1lSW5wdXQuZm9jdXMoKVxuICAgIH0pXG5cbiAgICBlZGl0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBpZiAoZWRpdE5hbWVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IG9sZE1pc3Npb24gPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24obWlzc2lvbi5nZXROYW1lKCkpXG4gICAgICAgICAgdGVzdC5yZW5hbWVNaXNzaW9uKG9sZE1pc3Npb24uZ2V0TmFtZSgpLCBlZGl0TmFtZUlucHV0LnZhbHVlKVxuICAgICAgICAgIHJlbmRlck1pc3Npb25zKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbWlzc2lvbkVsZW1lbnQ7XG4gIH1cbiAgLy8gVE9ETyBhZGQgc3RhdHVzIHRvIG9iamVjdGl2ZT9cbiAgLy8gQ3JlYXRlcyBvYmplY3RpdmUgZWxlbWVudCB1c2luZyBvYmplY3RpdmUgb2JqZWN0XG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlLCBtaXNzaW9uTmFtZSkge1xuICAgIGNvbnN0IG9iamVjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG9iamVjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb2JqZWN0aXZlJyk7XG4gICAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgb2JqZWN0aXZlVGV4dC50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBvYmplY3RpdmVDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG9iamVjdGl2ZUNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxuICAgIG9iamVjdGl2ZUNoZWNrQm94LmlkID0gb2JqZWN0aXZlLmdldE5hbWUoKVxuXG4gICAgb2JqZWN0aXZlQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChvYmplY3RpdmVDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgIHRlc3QuZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50KVxuICAgICAgICByZW5kZXJPYmplY3RpdmVzKHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlcygpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUT0RPIGFuaW1hdGUgZGVzY3JpcHRpb24gYm94XG5cbiAgICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbkJveC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpXG5cbiAgICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBcbiAgICAvLyBUT0RPIGFkZCBsaXN0ZW5lciB0byBleHBhbmQgb2JqIHRvIHNob3cgZGVzY3JpcHRpb25cbiAgICBpZiAob2JqZWN0aXZlLmdldERlc2NyaXB0aW9uKCkgPT09IFwiXCIpIHtcbiAgICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJObyBkZXNjcmlwdGlvblwiXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldERlc2NyaXB0aW9uKClcbiAgICB9XG4gICAgLy8gVE9ETyBsaXN0ZW5lci9idXR0b24gdG8gZWRpdCBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIGRhdGUgb2Ygb2JqZWN0aXZlXG5cbiAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZChvYmplY3RpdmVDaGVja0JveCwgb2JqZWN0aXZlVGV4dClcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbkJveC5hcHBlbmRDaGlsZChvYmplY3RpdmVEZXNjcmlwdGlvbilcblxuICAgIGlmIChvYmplY3RpdmUuZ2V0RHVlRGF0ZSgpICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBvYmplY3RpdmVEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgaWYgKG9iamVjdGl2ZS5nZXREdWVEYXRlKCkgPT09IFwidG9kYXlcIikge1xuICAgICAgICBvYmplY3RpdmVEdWVEYXRlLnRleHRDb250ZW50ID0gXCJUb2RheVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RpdmVEdWVEYXRlLnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldER1ZURhdGUoKVxuICAgICAgfVxuICAgICAgb2JqZWN0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3RpdmVEdWVEYXRlKVxuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJPYmplY3RpdmVzKGNob3Nlbk1pc3Npb24pIHtcbiAgICBjbGVhcihvYmplY3RpdmVzQm94KVxuICAgIGNvbnN0IG9iamVjdGl2ZXNBcnJheSA9IGNob3Nlbk1pc3Npb24uZ2V0T2JqZWN0aXZlcygpO1xuICAgIC8vIGlmIGFycmF5IGlzIGVtcHR5IGNyZWF0ZSBtZXNzYWdlXG4gICAgaWYgKG9iamVjdGl2ZXNBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgb2JqZWN0aXZlIG9mIG9iamVjdGl2ZXNBcnJheSkge1xuICAgICAgb2JqZWN0aXZlc0JveC5hcHBlbmRDaGlsZChjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSwgY2hvc2VuTWlzc2lvbi5nZXROYW1lKCkpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXNzaW9ucygpIHtcbiAgICBjbGVhcihtaXNzaW9uc0JveCk7XG4gICAgY29uc3QgcXVlc3RBcnJheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKTtcbiAgICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgcXVlc3RBcnJheSkge1xuICAgICAgbWlzc2lvbnNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbmRlciBUb2RheSdzIG1pc3Npb24gYW5kIG9iamVjdGl2ZXMgd2hlbiBwYWdlIGxvYWRzXG4gIGZ1bmN0aW9uIHJlbmRlclRvZGF5KCkge1xuICAgIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpXG4gICAgcmVuZGVyTWlzc2lvbnMoKTtcbiAgICBjb25zdCB0b2RheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbignVG9kYXknKS5nZXRPYmplY3RpdmVzKCk7XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2YgdG9kYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUsIFwiVG9kYXlcIikpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvZGF5KCk7ICBcblxuICByZXR1cm4gbWFpbjtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=