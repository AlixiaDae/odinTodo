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
            console.log(`${month}/${day}/${year}`)
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
    const fullDate = `0${dateMonth}/0${dateToday}/${dateYear}`
    if(obj.getDateFormatted() === "today" || obj.getDateFormatted() === fullDate) {
      return true
    } else {
      return false
    }
  }

  // Dummy Objectives
  
  const todayObjective = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Today objective", "todaaaay")
  test.addObjective("Today", todayObjective)
  const weekObjecetive = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("For the week", "weeeek", "2023-08-08")
  test.addObjective("This Week", weekObjecetive)
  // const tryingToToday = new Objective("Move to Today", "moving", "27/7/2023")
  // test.addObjective("Testing mission", tryingToToday)
  const missionsBox = document.querySelector('.missions');
  const objectivesBox = document.querySelector('.objectives');
  const emptyMessage = document.querySelector('.empty-obj-message');
  console.log(isToday(weekObjecetive))
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
    const objectiveElementBox = document.createElement('li')
    objectiveElementBox.classList.add("objective-box")
    const objectiveElement = document.createElement('div');
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

    const objectiveDescriptionBox = document.createElement("div")
    objectiveDescriptionBox.classList.add("objective-description")

    const objectiveDescription = document.createElement("div")
    
    if (objective.getDescription() === "") {
      objectiveDescription.textContent = "No description"
    } else {
      objectiveDescription.textContent = objective.getDescription()
    }
    // TODO listener/button to edit name, description, and date of objective

    objectiveElementBox.append(objectiveCheckBox, objectiveElement)
    objectiveElement.append(objectiveText, objectiveDescriptionBox)
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

    // TODO place descriptionbox inside a container with objective element to allow editing

    objectiveElement.addEventListener("click", (e) => {
      // Removes focus class from unselected objectives
      document.querySelectorAll(".objective").forEach(el => {
        if(el !== objectiveElement) {
          el.classList.remove("focus") 
        }
      })
      // Removes show class from unselected objectives, hiding their descriptions
      document.querySelectorAll(".objective-description").forEach(el => {
        if (el.closest(".objective").textContent !== objectiveElement.textContent) {
          el.classList.remove("show")
        } else {
          el.classList.toggle("show")
        }
      })
      handleClass(objectiveElement, "focus")
    })

    objectiveDescriptionBox.addEventListener("click", () => {
      
    })

    return objectiveElementBox;
  }

  function handleClass(element, className) {
    element.classList.toggle(className)
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
    checkStoredObjectives()
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
  console.log(test.getQuestMenu().getMissions())

  renderToday();  

  return main;
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwyRUFBMkU7O0FBRTNFO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsR0FBRzs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxpQ0FBaUM7QUFDL0UsOEZBQThGO0FBQzlGLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sSUFBSTtBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLFdBQVc7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixXQUFXO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUXVlc3RNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ZvbnRhd2Vzb21lL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRPYmplY3RpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXM7XG4gIH1cblxuICBzZXRPYmplY3RpdmVzKG9iamVjdGl2ZXMpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBvYmplY3RpdmVzO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gb2JqTmFtZSk7XG4gIH1cblxuICBhZGRPYmplY3RpdmUobmV3T2JqKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBuZXdPYmoubmFtZSkpIHtcbiAgICAgIHRoaXMub2JqZWN0aXZlcy5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSB0aGlzLm9iamVjdGl2ZXMuZmlsdGVyKChvYmopID0+IG9iai5uYW1lICE9PSBvYmpOYW1lKVxuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMl1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVswXVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YClcbiAgICAgICAgICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXG4gICAgICAgIH1cbiAgICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLXJldHVybiAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0TWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBbXVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVGhpcyBXZWVrXCIpKVxuICAgIH1cblxuICAgIHNldE1pc3Npb25zKG1pc3Npb25zKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBtaXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSlcbiAgICB9XG5cbiAgICBhZGRNaXNzaW9uKG5ld01pc3Npb24pIHtcbiAgICAgICAgaWYoIXRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBuZXdNaXNzaW9uLm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3TWlzc2lvbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSB0aGlzLm1pc3Npb25zLmZpbHRlcigobWlzc2lvbikgPT4gbWlzc2lvbi5uYW1lICE9PSBtaXNzaW9uTmFtZSlcbiAgICAgICAgLyogY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpICovXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgIGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7ICBcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHBhcmFtZXRlcnMgd2l0aCAtTmFtZSBoYXMgLmdldE5hbWUoKSBvciBpdCB3aWxsIGRlbGV0ZSB3cm9uZyBpdGVtXG5cbiAgICBhZGRNaXNzaW9uKG1pc3Npb24pIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5hZGRNaXNzaW9uKG1pc3Npb24pXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVNaXNzaW9uKG9sZE1pc3Npb25OYW1lLCBuZXdNaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24ob2xkTWlzc2lvbk5hbWUpLnNldE5hbWUobmV3TWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGFkZE9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuYWRkT2JqZWN0aXZlKG9iamVjdGl2ZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSwgbmV3T2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmdldE9iamVjdGl2ZShvYmpOYW1lKS5zZXROYW1lKG5ld09iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohXG4gKiBGb250IEF3ZXNvbWUgRnJlZSA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbVxuICogTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UvZnJlZSAoSWNvbnM6IENDIEJZIDQuMCwgRm9udHM6IFNJTCBPRkwgMS4xLCBDb2RlOiBNSVQgTGljZW5zZSlcbiAqIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLlxuICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfSwgX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gICAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3Vwcykge1xuICAgICAgcmV0dXJuIG5ldyBCYWJlbFJlZ0V4cChyZSwgdm9pZCAwLCBncm91cHMpO1xuICAgIH07XG5cbiAgICB2YXIgX3N1cGVyID0gUmVnRXhwLnByb3RvdHlwZSxcbiAgICAgICAgX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChyZSwgZmxhZ3MsIGdyb3Vwcykge1xuICAgICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgICByZXR1cm4gX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpLCBfc2V0UHJvdG90eXBlT2YoX3RoaXMsIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgICAgdmFyIGcgPSBfZ3JvdXBzLmdldChyZSk7XG5cbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhnKS5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgbmFtZSkge1xuICAgICAgICByZXR1cm4gZ3JvdXBzW25hbWVdID0gcmVzdWx0W2dbbmFtZV1dLCBncm91cHM7XG4gICAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHZhciByZXN1bHQgPSBfc3VwZXIuZXhlYy5jYWxsKHRoaXMsIHN0cik7XG5cbiAgICAgIHJldHVybiByZXN1bHQgJiYgKHJlc3VsdC5ncm91cHMgPSBidWlsZEdyb3VwcyhyZXN1bHQsIHRoaXMpKSwgcmVzdWx0O1xuICAgIH0sIEJhYmVsUmVnRXhwLnByb3RvdHlwZVtTeW1ib2wucmVwbGFjZV0gPSBmdW5jdGlvbiAoc3RyLCBzdWJzdGl0dXRpb24pIHtcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBzdWJzdGl0dXRpb24pIHtcbiAgICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24ucmVwbGFjZSgvXFwkPChbXj5dKyk+L2csIGZ1bmN0aW9uIChfLCBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHN1YnN0aXR1dGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgIT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAmJiAoYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncykpLnB1c2goYnVpbGRHcm91cHMoYXJncywgX3RoaXMpKSwgc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbik7XG4gICAgfSwgX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICAgIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICAgIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuXG4gICAgdmFyIF9zLCBfZTtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgaWYgKCFvKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuICB2YXIgX1dJTkRPVyA9IHt9O1xuICB2YXIgX0RPQ1VNRU5UID0ge307XG4gIHZhciBfTVVUQVRJT05fT0JTRVJWRVIgPSBudWxsO1xuICB2YXIgX1BFUkZPUk1BTkNFID0ge1xuICAgIG1hcms6IG5vb3AsXG4gICAgbWVhc3VyZTogbm9vcFxuICB9O1xuXG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBfV0lORE9XID0gd2luZG93O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSBfTVVUQVRJT05fT0JTRVJWRVIgPSBNdXRhdGlvbk9ic2VydmVyO1xuICAgIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnKSBfUEVSRk9STUFOQ0UgPSBwZXJmb3JtYW5jZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgX3JlZiA9IF9XSU5ET1cubmF2aWdhdG9yIHx8IHt9LFxuICAgICAgX3JlZiR1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudCxcbiAgICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xuICB2YXIgV0lORE9XID0gX1dJTkRPVztcbiAgdmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xuICB2YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG4gIHZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbiAgdmFyIElTX0JST1dTRVIgPSAhIVdJTkRPVy5kb2N1bWVudDtcbiAgdmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG4gIHZhciBfZmFtaWx5UHJveHksIF9mYW1pbHlQcm94eTIsIF9mYW1pbHlQcm94eTMsIF9mYW1pbHlQcm94eTQsIF9mYW1pbHlQcm94eTU7XG5cbiAgdmFyIE5BTUVTUEFDRV9JREVOVElGSUVSID0gJ19fX0ZPTlRfQVdFU09NRV9fXyc7XG4gIHZhciBVTklUU19JTl9HUklEID0gMTY7XG4gIHZhciBERUZBVUxUX0NTU19QUkVGSVggPSAnZmEnO1xuICB2YXIgREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyA9ICdzdmctaW5saW5lLS1mYSc7XG4gIHZhciBEQVRBX0ZBX0kyU1ZHID0gJ2RhdGEtZmEtaTJzdmcnO1xuICB2YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVCA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50JztcbiAgdmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORyA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50LXBlbmRpbmcnO1xuICB2YXIgREFUQV9QUkVGSVggPSAnZGF0YS1wcmVmaXgnO1xuICB2YXIgREFUQV9JQ09OID0gJ2RhdGEtaWNvbic7XG4gIHZhciBIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MgPSAnZm9udGF3ZXNvbWUtaTJzdmcnO1xuICB2YXIgTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMgPSAnYXN5bmMnO1xuICB2YXIgVEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMgPSBbJ0hUTUwnLCAnSEVBRCcsICdTVFlMRScsICdTQ1JJUFQnXTtcbiAgdmFyIFBST0RVQ1RJT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBcInByb2R1Y3Rpb25cIiA9PT0gJ3Byb2R1Y3Rpb24nO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0oKTtcbiAgdmFyIEZBTUlMWV9DTEFTU0lDID0gJ2NsYXNzaWMnO1xuICB2YXIgRkFNSUxZX1NIQVJQID0gJ3NoYXJwJztcbiAgdmFyIEZBTUlMSUVTID0gW0ZBTUlMWV9DTEFTU0lDLCBGQU1JTFlfU0hBUlBdO1xuXG4gIGZ1bmN0aW9uIGZhbWlseVByb3h5KG9iaikge1xuICAgIC8vIERlZmF1bHRzIHRvIHRoZSBjbGFzc2ljIGZhbWlseSBpZiBmYW1pbHkgaXMgbm90IGF2YWlsYWJsZVxuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0ID8gdGFyZ2V0W3Byb3BdIDogdGFyZ2V0W0ZBTUlMWV9DTEFTU0lDXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB2YXIgUFJFRklYX1RPX1NUWUxFID0gZmFtaWx5UHJveHkoKF9mYW1pbHlQcm94eSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5LCBGQU1JTFlfQ0xBU1NJQywge1xuICAgICdmYSc6ICdzb2xpZCcsXG4gICAgJ2Zhcyc6ICdzb2xpZCcsXG4gICAgJ2ZhLXNvbGlkJzogJ3NvbGlkJyxcbiAgICAnZmFyJzogJ3JlZ3VsYXInLFxuICAgICdmYS1yZWd1bGFyJzogJ3JlZ3VsYXInLFxuICAgICdmYWwnOiAnbGlnaHQnLFxuICAgICdmYS1saWdodCc6ICdsaWdodCcsXG4gICAgJ2ZhdCc6ICd0aGluJyxcbiAgICAnZmEtdGhpbic6ICd0aGluJyxcbiAgICAnZmFkJzogJ2R1b3RvbmUnLFxuICAgICdmYS1kdW90b25lJzogJ2R1b3RvbmUnLFxuICAgICdmYWInOiAnYnJhbmRzJyxcbiAgICAnZmEtYnJhbmRzJzogJ2JyYW5kcycsXG4gICAgJ2Zhayc6ICdraXQnLFxuICAgICdmYS1raXQnOiAna2l0J1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9mYW1pbHlQcm94eSwgRkFNSUxZX1NIQVJQLCB7XG4gICAgJ2ZhJzogJ3NvbGlkJyxcbiAgICAnZmFzcyc6ICdzb2xpZCcsXG4gICAgJ2ZhLXNvbGlkJzogJ3NvbGlkJyxcbiAgICAnZmFzcic6ICdyZWd1bGFyJyxcbiAgICAnZmEtcmVndWxhcic6ICdyZWd1bGFyJyxcbiAgICAnZmFzbCc6ICdsaWdodCcsXG4gICAgJ2ZhLWxpZ2h0JzogJ2xpZ2h0J1xuICB9KSwgX2ZhbWlseVByb3h5KSk7XG4gIHZhciBTVFlMRV9UT19QUkVGSVggPSBmYW1pbHlQcm94eSgoX2ZhbWlseVByb3h5MiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5MiwgRkFNSUxZX0NMQVNTSUMsIHtcbiAgICAnc29saWQnOiAnZmFzJyxcbiAgICAncmVndWxhcic6ICdmYXInLFxuICAgICdsaWdodCc6ICdmYWwnLFxuICAgICd0aGluJzogJ2ZhdCcsXG4gICAgJ2R1b3RvbmUnOiAnZmFkJyxcbiAgICAnYnJhbmRzJzogJ2ZhYicsXG4gICAgJ2tpdCc6ICdmYWsnXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5MiwgRkFNSUxZX1NIQVJQLCB7XG4gICAgJ3NvbGlkJzogJ2Zhc3MnLFxuICAgICdyZWd1bGFyJzogJ2Zhc3InLFxuICAgICdsaWdodCc6ICdmYXNsJ1xuICB9KSwgX2ZhbWlseVByb3h5MikpO1xuICB2YXIgUFJFRklYX1RPX0xPTkdfU1RZTEUgPSBmYW1pbHlQcm94eSgoX2ZhbWlseVByb3h5MyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5MywgRkFNSUxZX0NMQVNTSUMsIHtcbiAgICAnZmFiJzogJ2ZhLWJyYW5kcycsXG4gICAgJ2ZhZCc6ICdmYS1kdW90b25lJyxcbiAgICAnZmFrJzogJ2ZhLWtpdCcsXG4gICAgJ2ZhbCc6ICdmYS1saWdodCcsXG4gICAgJ2Zhcic6ICdmYS1yZWd1bGFyJyxcbiAgICAnZmFzJzogJ2ZhLXNvbGlkJyxcbiAgICAnZmF0JzogJ2ZhLXRoaW4nXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5MywgRkFNSUxZX1NIQVJQLCB7XG4gICAgJ2Zhc3MnOiAnZmEtc29saWQnLFxuICAgICdmYXNyJzogJ2ZhLXJlZ3VsYXInLFxuICAgICdmYXNsJzogJ2ZhLWxpZ2h0J1xuICB9KSwgX2ZhbWlseVByb3h5MykpO1xuICB2YXIgTE9OR19TVFlMRV9UT19QUkVGSVggPSBmYW1pbHlQcm94eSgoX2ZhbWlseVByb3h5NCA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5NCwgRkFNSUxZX0NMQVNTSUMsIHtcbiAgICAnZmEtYnJhbmRzJzogJ2ZhYicsXG4gICAgJ2ZhLWR1b3RvbmUnOiAnZmFkJyxcbiAgICAnZmEta2l0JzogJ2ZhaycsXG4gICAgJ2ZhLWxpZ2h0JzogJ2ZhbCcsXG4gICAgJ2ZhLXJlZ3VsYXInOiAnZmFyJyxcbiAgICAnZmEtc29saWQnOiAnZmFzJyxcbiAgICAnZmEtdGhpbic6ICdmYXQnXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5NCwgRkFNSUxZX1NIQVJQLCB7XG4gICAgJ2ZhLXNvbGlkJzogJ2Zhc3MnLFxuICAgICdmYS1yZWd1bGFyJzogJ2Zhc3InLFxuICAgICdmYS1saWdodCc6ICdmYXNsJ1xuICB9KSwgX2ZhbWlseVByb3h5NCkpO1xuICB2YXIgSUNPTl9TRUxFQ1RJT05fU1lOVEFYX1BBVFRFUk4gPSAvZmEoc3xyfGx8dHxkfGJ8a3xzc3xzcnxzbCk/W1xcLVxcIF0vOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5cbiAgdmFyIExBWUVSU19URVhUX0NMQVNTTkFNRSA9ICdmYS1sYXllcnMtdGV4dCc7XG4gIHZhciBGT05UX0ZBTUlMWV9QQVRURVJOID0gL0ZvbnQgP0F3ZXNvbWUgPyhbNTYgXSopKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8VGhpbnxEdW90b25lfEJyYW5kc3xGcmVlfFByb3xTaGFycHxLaXQpPy4qL2k7XG4gIHZhciBGT05UX1dFSUdIVF9UT19QUkVGSVggPSBmYW1pbHlQcm94eSgoX2ZhbWlseVByb3h5NSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5NSwgRkFNSUxZX0NMQVNTSUMsIHtcbiAgICAnOTAwJzogJ2ZhcycsXG4gICAgJzQwMCc6ICdmYXInLFxuICAgICdub3JtYWwnOiAnZmFyJyxcbiAgICAnMzAwJzogJ2ZhbCcsXG4gICAgJzEwMCc6ICdmYXQnXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5NSwgRkFNSUxZX1NIQVJQLCB7XG4gICAgJzkwMCc6ICdmYXNzJyxcbiAgICAnNDAwJzogJ2Zhc3InLFxuICAgICczMDAnOiAnZmFzbCdcbiAgfSksIF9mYW1pbHlQcm94eTUpKTtcbiAgdmFyIG9uZVRvVGVuID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgdmFyIG9uZVRvVHdlbnR5ID0gb25lVG9UZW4uY29uY2F0KFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0pO1xuICB2YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xuICB2YXIgRFVPVE9ORV9DTEFTU0VTID0ge1xuICAgIEdST1VQOiAnZHVvdG9uZS1ncm91cCcsXG4gICAgU1dBUF9PUEFDSVRZOiAnc3dhcC1vcGFjaXR5JyxcbiAgICBQUklNQVJZOiAncHJpbWFyeScsXG4gICAgU0VDT05EQVJZOiAnc2Vjb25kYXJ5J1xuICB9O1xuICB2YXIgcHJlZml4ZXMgPSBuZXcgU2V0KCk7XG4gIE9iamVjdC5rZXlzKFNUWUxFX1RPX1BSRUZJWFtGQU1JTFlfQ0xBU1NJQ10pLm1hcChwcmVmaXhlcy5hZGQuYmluZChwcmVmaXhlcykpO1xuICBPYmplY3Qua2V5cyhTVFlMRV9UT19QUkVGSVhbRkFNSUxZX1NIQVJQXSkubWFwKHByZWZpeGVzLmFkZC5iaW5kKHByZWZpeGVzKSk7XG4gIHZhciBSRVNFUlZFRF9DTEFTU0VTID0gW10uY29uY2F0KEZBTUlMSUVTLCBfdG9Db25zdW1hYmxlQXJyYXkocHJlZml4ZXMpLCBbJzJ4cycsICd4cycsICdzbScsICdsZycsICd4bCcsICcyeGwnLCAnYmVhdCcsICdib3JkZXInLCAnZmFkZScsICdiZWF0LWZhZGUnLCAnYm91bmNlJywgJ2ZsaXAtYm90aCcsICdmbGlwLWhvcml6b250YWwnLCAnZmxpcC12ZXJ0aWNhbCcsICdmbGlwJywgJ2Z3JywgJ2ludmVyc2UnLCAnbGF5ZXJzLWNvdW50ZXInLCAnbGF5ZXJzLXRleHQnLCAnbGF5ZXJzJywgJ2xpJywgJ3B1bGwtbGVmdCcsICdwdWxsLXJpZ2h0JywgJ3B1bHNlJywgJ3JvdGF0ZS0xODAnLCAncm90YXRlLTI3MCcsICdyb3RhdGUtOTAnLCAncm90YXRlLWJ5JywgJ3NoYWtlJywgJ3NwaW4tcHVsc2UnLCAnc3Bpbi1yZXZlcnNlJywgJ3NwaW4nLCAnc3RhY2stMXgnLCAnc3RhY2stMngnLCAnc3RhY2snLCAndWwnLCBEVU9UT05FX0NMQVNTRVMuR1JPVVAsIERVT1RPTkVfQ0xBU1NFUy5TV0FQX09QQUNJVFksIERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZLCBEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZXSkuY29uY2F0KG9uZVRvVGVuLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChuLCBcInhcIik7XG4gIH0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIFwidy1cIi5jb25jYXQobik7XG4gIH0pKTtcblxuICB2YXIgaW5pdGlhbCA9IFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRBdHRyQ29uZmlnKGF0dHIpIHtcbiAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFsnICsgYXR0ciArICddJyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgICAvLyBHZXR0aW5nIGFuIGVtcHR5IHN0cmluZyB3aWxsIG9jY3VyIGlmIHRoZSBhdHRyaWJ1dGUgaXMgc2V0IG9uIHRoZSBIVE1MIHRhZyBidXQgd2l0aG91dCBhIHZhbHVlXG4gICAgLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgaXQgc2hvdWxkIGJlIHRvZ2dsZWQgdG8gdHJ1ZVxuICAgIGlmICh2YWwgPT09ICcnKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodmFsID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHZhbCA9PT0gJ3RydWUnKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgaWYgKERPQ1VNRU5UICYmIHR5cGVvZiBET0NVTUVOVC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGF0dHJzID0gW1snZGF0YS1mYW1pbHktcHJlZml4JywgJ2ZhbWlseVByZWZpeCddLCBbJ2RhdGEtY3NzLXByZWZpeCcsICdjc3NQcmVmaXgnXSwgWydkYXRhLWZhbWlseS1kZWZhdWx0JywgJ2ZhbWlseURlZmF1bHQnXSwgWydkYXRhLXN0eWxlLWRlZmF1bHQnLCAnc3R5bGVEZWZhdWx0J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtYXV0by1hMTF5JywgJ2F1dG9BMTF5J10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzJywgJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICAgIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAgICBrZXkgPSBfcmVmMlsxXTtcblxuICAgICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcblxuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICBpbml0aWFsW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2RlZmF1bHQgPSB7XG4gICAgc3R5bGVEZWZhdWx0OiAnc29saWQnLFxuICAgIGZhbWlseURlZmF1bHQ6ICdjbGFzc2ljJyxcbiAgICBjc3NQcmVmaXg6IERFRkFVTFRfQ1NTX1BSRUZJWCxcbiAgICByZXBsYWNlbWVudENsYXNzOiBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTLFxuICAgIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICAgIGF1dG9BZGRDc3M6IHRydWUsXG4gICAgYXV0b0ExMXk6IHRydWUsXG4gICAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICAgIG9ic2VydmVNdXRhdGlvbnM6IHRydWUsXG4gICAgbXV0YXRlQXBwcm9hY2g6ICdhc3luYycsXG4gICAga2VlcE9yaWdpbmFsU291cmNlOiB0cnVlLFxuICAgIG1lYXN1cmVQZXJmb3JtYW5jZTogZmFsc2UsXG4gICAgc2hvd01pc3NpbmdJY29uczogdHJ1ZVxuICB9OyAvLyBmYW1pbHlQcmVmaXggaXMgZGVwcmVjYXRlZCBidXQgd2UgbXVzdCBzdGlsbCBzdXBwb3J0IGl0IGlmIHByZXNlbnRcblxuICBpZiAoaW5pdGlhbC5mYW1pbHlQcmVmaXgpIHtcbiAgICBpbml0aWFsLmNzc1ByZWZpeCA9IGluaXRpYWwuZmFtaWx5UHJlZml4O1xuICB9XG5cbiAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX2RlZmF1bHQpLCBpbml0aWFsKTtcblxuICBpZiAoIV9jb25maWcuYXV0b1JlcGxhY2VTdmcpIF9jb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICB2YXIgY29uZmlnID0ge307XG4gIE9iamVjdC5rZXlzKF9kZWZhdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uZmlnLCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgICAgX2NvbmZpZ1trZXldID0gdmFsO1xuXG4gICAgICAgIF9vbkNoYW5nZUNiLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKGNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2NvbmZpZ1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTsgLy8gZmFtaWx5UHJlZml4IGlzIGRlcHJlY2F0ZWQgYXMgb2YgNi4yLjAgYW5kIHNob3VsZCBiZSByZW1vdmVkIGluIDcuMC4wXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbmZpZywgJ2ZhbWlseVByZWZpeCcsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgX2NvbmZpZy5jc3NQcmVmaXggPSB2YWw7XG5cbiAgICAgIF9vbkNoYW5nZUNiLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihjb25maWcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY29uZmlnLmNzc1ByZWZpeDtcbiAgICB9XG4gIH0pO1xuICBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG4gIHZhciBfb25DaGFuZ2VDYiA9IFtdO1xuICBmdW5jdGlvbiBvbkNoYW5nZShjYikge1xuICAgIF9vbkNoYW5nZUNiLnB1c2goY2IpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9vbkNoYW5nZUNiLnNwbGljZShfb25DaGFuZ2VDYi5pbmRleE9mKGNiKSwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBkID0gVU5JVFNfSU5fR1JJRDtcbiAgdmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByb3RhdGU6IDAsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGZsaXBZOiBmYWxzZVxuICB9O1xuICBmdW5jdGlvbiBidW5rZXIoZm4pIHtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcykge1xuICAgIGlmICghY3NzIHx8ICFJU19ET00pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGUgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgICB2YXIgaGVhZENoaWxkcmVuID0gRE9DVU1FTlQuaGVhZC5jaGlsZE5vZGVzO1xuICAgIHZhciBiZWZvcmVDaGlsZCA9IG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gaGVhZENoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgICB2YXIgdGFnTmFtZSA9IChjaGlsZC50YWdOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBpZiAoWydTVFlMRScsICdMSU5LJ10uaW5kZXhPZih0YWdOYW1lKSA+IC0xKSB7XG4gICAgICAgIGJlZm9yZUNoaWxkID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRE9DVU1FTlQuaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGJlZm9yZUNoaWxkKTtcbiAgICByZXR1cm4gY3NzO1xuICB9XG4gIHZhciBpZFBvb2wgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICBmdW5jdGlvbiBuZXh0VW5pcXVlSWQoKSB7XG4gICAgdmFyIHNpemUgPSAxMjtcbiAgICB2YXIgaWQgPSAnJztcblxuICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICBpZCArPSBpZFBvb2xbTWF0aC5yYW5kb20oKSAqIDYyIHwgMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIGZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gKG9iaiB8fCBbXSkubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgZnVuY3Rpb24gY2xhc3NBcnJheShub2RlKSB7XG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICB9XG4gIGZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChhdHRyaWJ1dGVOYW1lLCBcIj1cXFwiXCIpLmNvbmNhdChodG1sRXNjYXBlKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLCBcIlxcXCIgXCIpO1xuICAgIH0sICcnKS50cmltKCk7XG4gIH1cbiAgZnVuY3Rpb24gam9pblN0eWxlcyhzdHlsZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoc3R5bGVOYW1lLCBcIjogXCIpLmNvbmNhdChzdHlsZXNbc3R5bGVOYW1lXS50cmltKCksIFwiO1wiKTtcbiAgICB9LCAnJyk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0uc2l6ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0uc2l6ZSB8fCB0cmFuc2Zvcm0ueCAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueCB8fCB0cmFuc2Zvcm0ueSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueSB8fCB0cmFuc2Zvcm0ucm90YXRlICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5yb3RhdGUgfHwgdHJhbnNmb3JtLmZsaXBYIHx8IHRyYW5zZm9ybS5mbGlwWTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcbiAgICB2YXIgb3V0ZXIgPSB7XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChjb250YWluZXJXaWR0aCAvIDIsIFwiIDI1NilcIilcbiAgICB9O1xuICAgIHZhciBpbm5lclRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAqIDMyLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAqIDMyLCBcIikgXCIpO1xuICAgIHZhciBpbm5lclNjYWxlID0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gICAgdmFyIGlubmVyUm90YXRlID0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiIDAgMClcIik7XG4gICAgdmFyIGlubmVyID0ge1xuICAgICAgdHJhbnNmb3JtOiBcIlwiLmNvbmNhdChpbm5lclRyYW5zbGF0ZSwgXCIgXCIpLmNvbmNhdChpbm5lclNjYWxlLCBcIiBcIikuY29uY2F0KGlubmVyUm90YXRlKVxuICAgIH07XG4gICAgdmFyIHBhdGggPSB7XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChpY29uV2lkdGggLyAyICogLTEsIFwiIC0yNTYpXCIpXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgb3V0ZXI6IG91dGVyLFxuICAgICAgaW5uZXI6IGlubmVyLFxuICAgICAgcGF0aDogcGF0aFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRm9yQ3NzKF9yZWYyKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IF9yZWYyLnRyYW5zZm9ybSxcbiAgICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgICAgd2lkdGggPSBfcmVmMiR3aWR0aCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJHdpZHRoLFxuICAgICAgICBfcmVmMiRoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgICAgX3JlZjIkc3RhcnRDZW50ZXJlZCA9IF9yZWYyLnN0YXJ0Q2VudGVyZWQsXG4gICAgICAgIHN0YXJ0Q2VudGVyZWQgPSBfcmVmMiRzdGFydENlbnRlcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN0YXJ0Q2VudGVyZWQ7XG4gICAgdmFyIHZhbCA9ICcnO1xuXG4gICAgaWYgKHN0YXJ0Q2VudGVyZWQgJiYgSVNfSUUpIHtcbiAgICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkIC0gd2lkdGggLyAyLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCAtIGhlaWdodCAvIDIsIFwiZW0pIFwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0Q2VudGVyZWQpIHtcbiAgICAgIHZhbCArPSBcInRyYW5zbGF0ZShjYWxjKC01MCUgKyBcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtKSwgY2FsYygtNTAlICsgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pKSBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkgXCIpO1xuICAgIH1cblxuICAgIHZhbCArPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gICAgdmFsICs9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcImRlZykgXCIpO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICB2YXIgYmFzZVN0eWxlcyA9IFwiOmhvc3QsOnJvb3R7LS1mYS1mb250LXNvbGlkOm5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFNvbGlkXFxcIjstLWZhLWZvbnQtcmVndWxhcjpub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBSZWd1bGFyXFxcIjstLWZhLWZvbnQtbGlnaHQ6bm9ybWFsIDMwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgTGlnaHRcXFwiOy0tZmEtZm9udC10aGluOm5vcm1hbCAxMDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFRoaW5cXFwiOy0tZmEtZm9udC1kdW90b25lOm5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IER1b3RvbmVcXFwiOy0tZmEtZm9udC1zaGFycC1zb2xpZDpub3JtYWwgOTAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBTaGFycFxcXCI7LS1mYS1mb250LXNoYXJwLXJlZ3VsYXI6bm9ybWFsIDQwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgU2hhcnBcXFwiOy0tZmEtZm9udC1zaGFycC1saWdodDpub3JtYWwgMzAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBTaGFycFxcXCI7LS1mYS1mb250LWJyYW5kczpub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBCcmFuZHNcXFwifXN2Zzpub3QoOmhvc3QpLnN2Zy1pbmxpbmUtLWZhLHN2Zzpub3QoOnJvb3QpLnN2Zy1pbmxpbmUtLWZhe292ZXJmbG93OnZpc2libGU7Ym94LXNpemluZzpjb250ZW50LWJveH0uc3ZnLWlubGluZS0tZmF7ZGlzcGxheTp2YXIoLS1mYS1kaXNwbGF5LGlubGluZS1ibG9jayk7aGVpZ2h0OjFlbTtvdmVyZmxvdzp2aXNpYmxlO3ZlcnRpY2FsLWFsaWduOi0uMTI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLTJ4c3t2ZXJ0aWNhbC1hbGlnbjouMWVtfS5zdmctaW5saW5lLS1mYS5mYS14c3t2ZXJ0aWNhbC1hbGlnbjowfS5zdmctaW5saW5lLS1mYS5mYS1zbXt2ZXJ0aWNhbC1hbGlnbjotLjA3MTQyODU3MDVlbX0uc3ZnLWlubGluZS0tZmEuZmEtbGd7dmVydGljYWwtYWxpZ246LS4yZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXhse3ZlcnRpY2FsLWFsaWduOi0uMjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtMnhse3ZlcnRpY2FsLWFsaWduOi0uMzEyNWVtfS5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnR7bWFyZ2luLXJpZ2h0OnZhcigtLWZhLXB1bGwtbWFyZ2luLC4zZW0pO3dpZHRoOmF1dG99LnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtcmlnaHR7bWFyZ2luLWxlZnQ6dmFyKC0tZmEtcHVsbC1tYXJnaW4sLjNlbSk7d2lkdGg6YXV0b30uc3ZnLWlubGluZS0tZmEuZmEtbGl7d2lkdGg6dmFyKC0tZmEtbGktd2lkdGgsMmVtKTt0b3A6LjI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLWZ3e3dpZHRoOnZhcigtLWZhLWZ3LXdpZHRoLDEuMjVlbSl9LmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmF7Ym90dG9tOjA7bGVmdDowO21hcmdpbjphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmZhLWxheWVycy1jb3VudGVyLC5mYS1sYXllcnMtdGV4dHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtbGF5ZXJze2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246LS4xMjVlbTt3aWR0aDoxZW19LmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmF7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5mYS1sYXllcnMtdGV4dHtsZWZ0OjUwJTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9LmZhLWxheWVycy1jb3VudGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tZmEtY291bnRlci1iYWNrZ3JvdW5kLWNvbG9yLCNmZjI1M2EpO2JvcmRlci1yYWRpdXM6dmFyKC0tZmEtY291bnRlci1ib3JkZXItcmFkaXVzLDFlbSk7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOnZhcigtLWZhLWludmVyc2UsI2ZmZik7bGluZS1oZWlnaHQ6dmFyKC0tZmEtY291bnRlci1saW5lLWhlaWdodCwxKTttYXgtd2lkdGg6dmFyKC0tZmEtY291bnRlci1tYXgtd2lkdGgsNWVtKTttaW4td2lkdGg6dmFyKC0tZmEtY291bnRlci1taW4td2lkdGgsMS41ZW0pO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOnZhcigtLWZhLWNvdW50ZXItcGFkZGluZywuMjVlbSAuNWVtKTtyaWdodDp2YXIoLS1mYS1yaWdodCwwKTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RvcDp2YXIoLS1mYS10b3AsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtY291bnRlci1zY2FsZSwuMjUpKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtY291bnRlci1zY2FsZSwuMjUpKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIHJpZ2h0O3RyYW5zZm9ybS1vcmlnaW46dG9wIHJpZ2h0fS5mYS1sYXllcnMtYm90dG9tLXJpZ2h0e2JvdHRvbTp2YXIoLS1mYS1ib3R0b20sMCk7cmlnaHQ6dmFyKC0tZmEtcmlnaHQsMCk7dG9wOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtbGF5ZXJzLXNjYWxlLC4yNSkpO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsLjI1KSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0e2JvdHRvbTp2YXIoLS1mYS1ib3R0b20sMCk7bGVmdDp2YXIoLS1mYS1sZWZ0LDApO3JpZ2h0OmF1dG87dG9wOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtbGF5ZXJzLXNjYWxlLC4yNSkpO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsLjI1KSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSBsZWZ0O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnR9LmZhLWxheWVycy10b3AtcmlnaHR7dG9wOnZhcigtLWZhLXRvcCwwKTtyaWdodDp2YXIoLS1mYS1yaWdodCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsLjI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwuMjUpKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIHJpZ2h0O3RyYW5zZm9ybS1vcmlnaW46dG9wIHJpZ2h0fS5mYS1sYXllcnMtdG9wLWxlZnR7bGVmdDp2YXIoLS1mYS1sZWZ0LDApO3JpZ2h0OmF1dG87dG9wOnZhcigtLWZhLXRvcCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsLjI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwuMjUpKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIGxlZnQ7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH0uZmEtMXh7Zm9udC1zaXplOjFlbX0uZmEtMnh7Zm9udC1zaXplOjJlbX0uZmEtM3h7Zm9udC1zaXplOjNlbX0uZmEtNHh7Zm9udC1zaXplOjRlbX0uZmEtNXh7Zm9udC1zaXplOjVlbX0uZmEtNnh7Zm9udC1zaXplOjZlbX0uZmEtN3h7Zm9udC1zaXplOjdlbX0uZmEtOHh7Zm9udC1zaXplOjhlbX0uZmEtOXh7Zm9udC1zaXplOjllbX0uZmEtMTB4e2ZvbnQtc2l6ZToxMGVtfS5mYS0yeHN7Zm9udC1zaXplOi42MjVlbTtsaW5lLWhlaWdodDouMWVtO3ZlcnRpY2FsLWFsaWduOi4yMjVlbX0uZmEteHN7Zm9udC1zaXplOi43NWVtO2xpbmUtaGVpZ2h0Oi4wODMzMzMzMzM3ZW07dmVydGljYWwtYWxpZ246LjEyNWVtfS5mYS1zbXtmb250LXNpemU6Ljg3NWVtO2xpbmUtaGVpZ2h0Oi4wNzE0Mjg1NzE4ZW07dmVydGljYWwtYWxpZ246LjA1MzU3MTQyOTVlbX0uZmEtbGd7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDouMDVlbTt2ZXJ0aWNhbC1hbGlnbjotLjA3NWVtfS5mYS14bHtmb250LXNpemU6MS41ZW07bGluZS1oZWlnaHQ6LjA0MTY2NjY2ODJlbTt2ZXJ0aWNhbC1hbGlnbjotLjEyNWVtfS5mYS0yeGx7Zm9udC1zaXplOjJlbTtsaW5lLWhlaWdodDouMDMxMjVlbTt2ZXJ0aWNhbC1hbGlnbjotLjE4NzVlbX0uZmEtZnd7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MS4yNWVtfS5mYS11bHtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW4tbGVmdDp2YXIoLS1mYS1saS1tYXJnaW4sMi41ZW0pO3BhZGRpbmctbGVmdDowfS5mYS11bD5saXtwb3NpdGlvbjpyZWxhdGl2ZX0uZmEtbGl7bGVmdDpjYWxjKHZhcigtLWZhLWxpLXdpZHRoLDJlbSkgKiAtMSk7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6dmFyKC0tZmEtbGktd2lkdGgsMmVtKTtsaW5lLWhlaWdodDppbmhlcml0fS5mYS1ib3JkZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWZhLWJvcmRlci1jb2xvciwjZWVlKTtib3JkZXItcmFkaXVzOnZhcigtLWZhLWJvcmRlci1yYWRpdXMsLjFlbSk7Ym9yZGVyLXN0eWxlOnZhcigtLWZhLWJvcmRlci1zdHlsZSxzb2xpZCk7Ym9yZGVyLXdpZHRoOnZhcigtLWZhLWJvcmRlci13aWR0aCwuMDhlbSk7cGFkZGluZzp2YXIoLS1mYS1ib3JkZXItcGFkZGluZywuMmVtIC4yNWVtIC4xNWVtKX0uZmEtcHVsbC1sZWZ0e2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OnZhcigtLWZhLXB1bGwtbWFyZ2luLC4zZW0pfS5mYS1wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0O21hcmdpbi1sZWZ0OnZhcigtLWZhLXB1bGwtbWFyZ2luLC4zZW0pfS5mYS1iZWF0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmEtYmVhdDthbmltYXRpb24tbmFtZTpmYS1iZWF0Oy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OnZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwwcyk7YW5pbWF0aW9uLWRlbGF5OnZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwwcyk7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTthbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMXMpO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMXMpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGVhc2UtaW4tb3V0KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsZWFzZS1pbi1vdXQpfS5mYS1ib3VuY2V7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYS1ib3VuY2U7YW5pbWF0aW9uLW5hbWU6ZmEtYm91bmNlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OnZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwwcyk7YW5pbWF0aW9uLWRlbGF5OnZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwwcyk7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTthbmltYXRpb24tZGlyZWN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sbm9ybWFsKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMXMpO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sMXMpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGN1YmljLWJlemllciguMjgsLjg0LC40MiwxKSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLGN1YmljLWJlemllciguMjgsLjg0LC40MiwxKSl9LmZhLWZhZGV7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYS1mYWRlO2FuaW1hdGlvbi1uYW1lOmZhLWZhZGU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTthbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpO2FuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsY3ViaWMtYmV6aWVyKC40LDAsLjYsMSkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxjdWJpYy1iZXppZXIoLjQsMCwuNiwxKSl9LmZhLWJlYXQtZmFkZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhLWJlYXQtZmFkZTthbmltYXRpb24tbmFtZTpmYS1iZWF0LWZhZGU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTthbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpO2FuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsY3ViaWMtYmV6aWVyKC40LDAsLjYsMSkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxjdWJpYy1iZXppZXIoLjQsMCwuNiwxKSl9LmZhLWZsaXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYS1mbGlwO2FuaW1hdGlvbi1uYW1lOmZhLWZsaXA7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTthbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpO2FuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsZWFzZS1pbi1vdXQpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxlYXNlLWluLW91dCl9LmZhLXNoYWtley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmEtc2hha2U7YW5pbWF0aW9uLW5hbWU6ZmEtc2hha2U7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTthbmltYXRpb24tZGVsYXk6dmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LDBzKTstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpO2FuaW1hdGlvbi1kaXJlY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbixub3JtYWwpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwxcyk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OnZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsaW5maW5pdGUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsbGluZWFyKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsbGluZWFyKX0uZmEtc3Bpbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhLXNwaW47YW5pbWF0aW9uLW5hbWU6ZmEtc3Bpbjstd2Via2l0LWFuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpO2FuaW1hdGlvbi1kZWxheTp2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksMHMpOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDJzKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDJzKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxsaW5lYXIpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxsaW5lYXIpfS5mYS1zcGluLXJldmVyc2V7LS1mYS1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2V9LmZhLXB1bHNlLC5mYS1zcGluLXB1bHNley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmEtc3BpbjthbmltYXRpb24tbmFtZTpmYS1zcGluOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLG5vcm1hbCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLDFzKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCxpbmZpbml0ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LGluZmluaXRlKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZyxzdGVwcyg4KSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLHN0ZXBzKDgpKX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuZmEtYmVhdCwuZmEtYmVhdC1mYWRlLC5mYS1ib3VuY2UsLmZhLWZhZGUsLmZhLWZsaXAsLmZhLXB1bHNlLC5mYS1zaGFrZSwuZmEtc3BpbiwuZmEtc3Bpbi1wdWxzZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMW1zO2FuaW1hdGlvbi1kZWxheTotMW1zOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFtczthbmltYXRpb24tZHVyYXRpb246MW1zOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTstd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6MHM7dHJhbnNpdGlvbi1kZWxheTowczstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MHM7dHJhbnNpdGlvbi1kdXJhdGlvbjowc319QC13ZWJraXQta2V5ZnJhbWVzIGZhLWJlYXR7MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYmVhdC1zY2FsZSwxLjI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJlYXQtc2NhbGUsMS4yNSkpfX1Aa2V5ZnJhbWVzIGZhLWJlYXR7MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYmVhdC1zY2FsZSwxLjI1KSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJlYXQtc2NhbGUsMS4yNSkpfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtYm91bmNlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApfTEwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteCwxLjEpLHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS15LC45KSkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXgsMS4xKSx2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteSwuOSkpIHRyYW5zbGF0ZVkoMCl9MzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXgsLjkpLHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXksMS4xKSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtaGVpZ2h0LC0uNWVtKSk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXgsLjkpLHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXksMS4xKSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtaGVpZ2h0LC0uNWVtKSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXgsMS4wNSksdmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteSwuOTUpKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS14LDEuMDUpLHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXksLjk1KSkgdHJhbnNsYXRlWSgwKX01NyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1yZWJvdW5kLC0uMTI1ZW0pKTt0cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1yZWJvdW5kLC0uMTI1ZW0pKX02NCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKX19QGtleWZyYW1lcyBmYS1ib3VuY2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCl9MTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS14LDEuMSksdmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXksLjkpKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteCwxLjEpLHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS15LC45KSkgdHJhbnNsYXRlWSgwKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteCwuOSksdmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteSwxLjEpKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1oZWlnaHQsLS41ZW0pKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteCwuOSksdmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteSwxLjEpKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1oZWlnaHQsLS41ZW0pKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteCwxLjA1KSx2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS15LC45NSkpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXgsMS4wNSksdmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteSwuOTUpKSB0cmFuc2xhdGVZKDApfTU3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLXJlYm91bmQsLS4xMjVlbSkpO3RyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLXJlYm91bmQsLS4xMjVlbSkpfTY0JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGVZKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtZmFkZXs1MCV7b3BhY2l0eTp2YXIoLS1mYS1mYWRlLW9wYWNpdHksLjQpfX1Aa2V5ZnJhbWVzIGZhLWZhZGV7NTAle29wYWNpdHk6dmFyKC0tZmEtZmFkZS1vcGFjaXR5LC40KX19QC13ZWJraXQta2V5ZnJhbWVzIGZhLWJlYXQtZmFkZXswJSwxMDAle29wYWNpdHk6dmFyKC0tZmEtYmVhdC1mYWRlLW9wYWNpdHksLjQpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKHZhcigtLWZhLWJlYXQtZmFkZS1zY2FsZSwxLjEyNSkpO3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1iZWF0LWZhZGUtc2NhbGUsMS4xMjUpKX19QGtleWZyYW1lcyBmYS1iZWF0LWZhZGV7MCUsMTAwJXtvcGFjaXR5OnZhcigtLWZhLWJlYXQtZmFkZS1vcGFjaXR5LC40KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSh2YXIoLS1mYS1iZWF0LWZhZGUtc2NhbGUsMS4xMjUpKTt0cmFuc2Zvcm06c2NhbGUodmFyKC0tZmEtYmVhdC1mYWRlLXNjYWxlLDEuMTI1KSl9fUAtd2Via2l0LWtleWZyYW1lcyBmYS1mbGlwezUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUzZCh2YXIoLS1mYS1mbGlwLXgsMCksdmFyKC0tZmEtZmxpcC15LDEpLHZhcigtLWZhLWZsaXAteiwwKSx2YXIoLS1mYS1mbGlwLWFuZ2xlLC0xODBkZWcpKTt0cmFuc2Zvcm06cm90YXRlM2QodmFyKC0tZmEtZmxpcC14LDApLHZhcigtLWZhLWZsaXAteSwxKSx2YXIoLS1mYS1mbGlwLXosMCksdmFyKC0tZmEtZmxpcC1hbmdsZSwtMTgwZGVnKSl9fUBrZXlmcmFtZXMgZmEtZmxpcHs1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlM2QodmFyKC0tZmEtZmxpcC14LDApLHZhcigtLWZhLWZsaXAteSwxKSx2YXIoLS1mYS1mbGlwLXosMCksdmFyKC0tZmEtZmxpcC1hbmdsZSwtMTgwZGVnKSk7dHJhbnNmb3JtOnJvdGF0ZTNkKHZhcigtLWZhLWZsaXAteCwwKSx2YXIoLS1mYS1mbGlwLXksMSksdmFyKC0tZmEtZmxpcC16LDApLHZhcigtLWZhLWZsaXAtYW5nbGUsLTE4MGRlZykpfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc2hha2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTVkZWcpfTQley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxNWRlZyl9MjQlLDgley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMThkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTE4ZGVnKX0xMiUsMjgley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxOGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxOGRlZyl9MTYley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMjJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTIyZGVnKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIyZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIyZGVnKX0zMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMmRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTJkZWcpfTM2JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTJkZWcpfTEwMCUsNDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfX1Aa2V5ZnJhbWVzIGZhLXNoYWtlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTE1ZGVnKX00JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpfTI0JSw4JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTE4ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xOGRlZyl9MTIlLDI4JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMThkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMThkZWcpfTE2JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTIyZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0yMmRlZyl9MjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMmRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMmRlZyl9MzIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTJkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEyZGVnKX0zNiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEyZGVnKX0xMDAlLDQwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX19QC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LmZhLXJvdGF0ZS05MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5mYS1yb3RhdGUtMTgwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uZmEtcm90YXRlLTI3MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LmZhLWZsaXAtaG9yaXpvbnRhbHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwxKTt0cmFuc2Zvcm06c2NhbGUoLTEsMSl9LmZhLWZsaXAtdmVydGljYWx7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwtMSk7dHJhbnNmb3JtOnNjYWxlKDEsLTEpfS5mYS1mbGlwLWJvdGgsLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2Fsey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLC0xKTt0cmFuc2Zvcm06c2NhbGUoLTEsLTEpfS5mYS1yb3RhdGUtYnl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKHZhcigtLWZhLXJvdGF0ZS1hbmdsZSxub25lKSk7dHJhbnNmb3JtOnJvdGF0ZSh2YXIoLS1mYS1yb3RhdGUtYW5nbGUsbm9uZSkpfS5mYS1zdGFja3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7aGVpZ2h0OjJlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyLjVlbX0uZmEtc3RhY2stMXgsLmZhLXN0YWNrLTJ4e2JvdHRvbTowO2xlZnQ6MDttYXJnaW46YXV0bztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO3otaW5kZXg6dmFyKC0tZmEtc3RhY2stei1pbmRleCxhdXRvKX0uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXh7aGVpZ2h0OjFlbTt3aWR0aDoxLjI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4e2hlaWdodDoyZW07d2lkdGg6Mi41ZW19LmZhLWludmVyc2V7Y29sb3I6dmFyKC0tZmEtaW52ZXJzZSwjZmZmKX0uZmEtc3Itb25seSwuc3Itb25seXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLDAsMCwwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9LmZhLXNyLW9ubHktZm9jdXNhYmxlOm5vdCg6Zm9jdXMpLC5zci1vbmx5LWZvY3VzYWJsZTpub3QoOmZvY3VzKXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLDAsMCwwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9LnN2Zy1pbmxpbmUtLWZhIC5mYS1wcmltYXJ5e2ZpbGw6dmFyKC0tZmEtcHJpbWFyeS1jb2xvcixjdXJyZW50Q29sb3IpO29wYWNpdHk6dmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LDEpfS5zdmctaW5saW5lLS1mYSAuZmEtc2Vjb25kYXJ5e2ZpbGw6dmFyKC0tZmEtc2Vjb25kYXJ5LWNvbG9yLGN1cnJlbnRDb2xvcik7b3BhY2l0eTp2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwuNCl9LnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtcHJpbWFyeXtvcGFjaXR5OnZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LC40KX0uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1zZWNvbmRhcnl7b3BhY2l0eTp2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksMSl9LnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeXtmaWxsOiMwMDB9LmZhLWR1b3RvbmUuZmEtaW52ZXJzZSwuZmFkLmZhLWludmVyc2V7Y29sb3I6dmFyKC0tZmEtaW52ZXJzZSwjZmZmKX1cIjtcblxuICBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIGRjcCA9IERFRkFVTFRfQ1NTX1BSRUZJWDtcbiAgICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgICB2YXIgZnAgPSBjb25maWcuY3NzUHJlZml4O1xuICAgIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICAgIHZhciBzID0gYmFzZVN0eWxlcztcblxuICAgIGlmIChmcCAhPT0gZGNwIHx8IHJjICE9PSBkcmMpIHtcbiAgICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkY3AsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgICB2YXIgY3VzdG9tUHJvcFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC0tXCIuY29uY2F0KGRjcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICAgIHZhciByUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkcmMpLCAnZycpO1xuICAgICAgcyA9IHMucmVwbGFjZShkUGF0dCwgXCIuXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoY3VzdG9tUHJvcFBhdHQsIFwiLS1cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShyUGF0dCwgXCIuXCIuY29uY2F0KHJjKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICB2YXIgX2Nzc0luc2VydGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ3NzKCkge1xuICAgIGlmIChjb25maWcuYXV0b0FkZENzcyAmJiAhX2Nzc0luc2VydGVkKSB7XG4gICAgICBpbnNlcnRDc3MoY3NzKCkpO1xuICAgICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB2YXIgSW5qZWN0Q1NTID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9tOiB7XG4gICAgICAgICAgY3NzOiBjc3MsXG4gICAgICAgICAgaW5zZXJ0Q3NzOiBlbnN1cmVDc3NcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJlZm9yZURPTUVsZW1lbnRDcmVhdGlvbjogZnVuY3Rpb24gYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uKCkge1xuICAgICAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVJMnN2ZzogZnVuY3Rpb24gYmVmb3JlSTJzdmcoKSB7XG4gICAgICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciB3ID0gV0lORE9XIHx8IHt9O1xuICBpZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXSA9IHt9O1xuICBpZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzID0ge307XG4gIGlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG4gIGlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zID0gW107XG4gIHZhciBuYW1lc3BhY2UgPSB3W05BTUVTUEFDRV9JREVOVElGSUVSXTtcblxuICB2YXIgZnVuY3Rpb25zID0gW107XG5cbiAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgRE9DVU1FTlQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbiAgICBsb2FkZWQgPSAxO1xuICAgIGZ1bmN0aW9ucy5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgbG9hZGVkID0gZmFsc2U7XG5cbiAgaWYgKElTX0RPTSkge1xuICAgIGxvYWRlZCA9IChET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoRE9DVU1FTlQucmVhZHlTdGF0ZSk7XG4gICAgaWYgKCFsb2FkZWQpIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBkb21yZWFkeSAoZm4pIHtcbiAgICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZnVuY3Rpb25zLnB1c2goZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgICB2YXIgdGFnID0gYWJzdHJhY3ROb2Rlcy50YWcsXG4gICAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdm9pZCAwID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICAgIF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9IGFic3RyYWN0Tm9kZXMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcblxuICAgIGlmICh0eXBlb2YgYWJzdHJhY3ROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBodG1sRXNjYXBlKGFic3RyYWN0Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZywgXCIgXCIpLmNvbmNhdChqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSwgXCI+XCIpLmNvbmNhdChjaGlsZHJlbi5tYXAodG9IdG1sKS5qb2luKCcnKSwgXCI8L1wiKS5jb25jYXQodGFnLCBcIj5cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaWNvbkZyb21NYXBwaW5nKG1hcHBpbmcsIHByZWZpeCwgaWNvbk5hbWUpIHtcbiAgICBpZiAobWFwcGluZyAmJiBtYXBwaW5nW3ByZWZpeF0gJiYgbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgaWNvbjogbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gICAqIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAgICovXG5cbiAgdmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNDb250ZXh0LCBhLCBiLCBjLCBkKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIFJlZHVjZVxuICAgKlxuICAgKiBBIGZhc3Qgb2JqZWN0IGAucmVkdWNlKClgIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICAgVGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAgICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICAgICAgICBUaGUgZmluYWwgcmVzdWx0LlxuICAgKi9cblxuXG4gIHZhciByZWR1Y2UgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0KHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgICBpLFxuICAgICAgICBrZXksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaSA9IDE7XG4gICAgICByZXN1bHQgPSBzdWJqZWN0W2tleXNbMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBpID0gMDtcbiAgICAgIHJlc3VsdCA9IGluaXRpYWxWYWx1ZTtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogdWNzMmRlY29kZSgpIGFuZCBjb2RlUG9pbnRBdCgpIGFyZSBib3RoIHdvcmtzIG9mIE1hdGhpYXMgQnluZW5zIGFuZCBsaWNlbnNlZCB1bmRlciBNSVRcbiAgICpcbiAgICogQ29weXJpZ2h0IE1hdGhpYXMgQnluZW5zIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvPlxuXG4gICAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuICAgKiBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbiAgICogXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4gICAqIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiAgICogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4gICAqIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xuICAgKiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gICAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gICAqIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbiAgICogTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICAgKiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbiAgICogV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gICAqL1xuICBmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblxuICAgICAgaWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXG4gICAgICAgIGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgICAgICAgb3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgY291bnRlci0tO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvSGV4KHVuaWNvZGUpIHtcbiAgICB2YXIgZGVjb2RlZCA9IHVjczJkZWNvZGUodW5pY29kZSk7XG4gICAgcmV0dXJuIGRlY29kZWQubGVuZ3RoID09PSAxID8gZGVjb2RlZFswXS50b1N0cmluZygxNikgOiBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIGNvZGVQb2ludEF0KHN0cmluZywgaW5kZXgpIHtcbiAgICB2YXIgc2l6ZSA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIHZhciBzZWNvbmQ7XG5cbiAgICBpZiAoZmlyc3QgPj0gMHhEODAwICYmIGZpcnN0IDw9IDB4REJGRiAmJiBzaXplID4gaW5kZXggKyAxKSB7XG4gICAgICBzZWNvbmQgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCArIDEpO1xuXG4gICAgICBpZiAoc2Vjb25kID49IDB4REMwMCAmJiBzZWNvbmQgPD0gMHhERkZGKSB7XG4gICAgICAgIHJldHVybiAoZmlyc3QgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaXJzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUljb25zKGljb25zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGljb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaWNvbk5hbWUpIHtcbiAgICAgIHZhciBpY29uID0gaWNvbnNbaWNvbk5hbWVdO1xuICAgICAgdmFyIGV4cGFuZGVkID0gISFpY29uLmljb247XG5cbiAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVJY29ucyhwcmVmaXgsIGljb25zKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIF9wYXJhbXMkc2tpcEhvb2tzID0gcGFyYW1zLnNraXBIb29rcyxcbiAgICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVJY29ucyhpY29ucyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nICYmICFza2lwSG9va3MpIHtcbiAgICAgIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrKHByZWZpeCwgbm9ybWFsaXplSWNvbnMoaWNvbnMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSksIG5vcm1hbGl6ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAgICogZm9yIGBmYXNgIHNvIHdlJ2xsIGVhc2UgdGhlIHVwZ3JhZGUgcHJvY2VzcyBmb3Igb3VyIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHkgZGVmaW5pbmdcbiAgICAgKiB0aGlzIGFzIHdlbGwuXG4gICAgICovXG5cblxuICAgIGlmIChwcmVmaXggPT09ICdmYXMnKSB7XG4gICAgICBkZWZpbmVJY29ucygnZmEnLCBpY29ucyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGR1b3RvbmVQYXRoUmUgPSBbLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGQ9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qcGF0aCBkPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIvLCB7XG4gICAgZDE6IDEsXG4gICAgZDI6IDJcbiAgfSksIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBjbGFzcz1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLipkPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIuKnBhdGggY2xhc3M9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qZD1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLywge1xuICAgIGNsczE6IDEsXG4gICAgZDE6IDIsXG4gICAgY2xzMjogMyxcbiAgICBkMjogNFxuICB9KSwgLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGNsYXNzPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIuKmQ9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi8sIHtcbiAgICBjbHMxOiAxLFxuICAgIGQxOiAyXG4gIH0pXTtcblxuICB2YXIgX0xPTkdfU1RZTEUsIF9QUkVGSVhFUywgX1BSRUZJWEVTX0ZPUl9GQU1JTFk7XG4gIHZhciBzdHlsZXMgPSBuYW1lc3BhY2Uuc3R5bGVzLFxuICAgICAgc2hpbXMgPSBuYW1lc3BhY2Uuc2hpbXM7XG4gIHZhciBMT05HX1NUWUxFID0gKF9MT05HX1NUWUxFID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfTE9OR19TVFlMRSwgRkFNSUxZX0NMQVNTSUMsIE9iamVjdC52YWx1ZXMoUFJFRklYX1RPX0xPTkdfU1RZTEVbRkFNSUxZX0NMQVNTSUNdKSksIF9kZWZpbmVQcm9wZXJ0eShfTE9OR19TVFlMRSwgRkFNSUxZX1NIQVJQLCBPYmplY3QudmFsdWVzKFBSRUZJWF9UT19MT05HX1NUWUxFW0ZBTUlMWV9TSEFSUF0pKSwgX0xPTkdfU1RZTEUpO1xuICB2YXIgX2RlZmF1bHRVc2FibGVQcmVmaXggPSBudWxsO1xuICB2YXIgX2J5VW5pY29kZSA9IHt9O1xuICB2YXIgX2J5TGlnYXR1cmUgPSB7fTtcbiAgdmFyIF9ieU9sZE5hbWUgPSB7fTtcbiAgdmFyIF9ieU9sZFVuaWNvZGUgPSB7fTtcbiAgdmFyIF9ieUFsaWFzID0ge307XG4gIHZhciBQUkVGSVhFUyA9IChfUFJFRklYRVMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9QUkVGSVhFUywgRkFNSUxZX0NMQVNTSUMsIE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRVtGQU1JTFlfQ0xBU1NJQ10pKSwgX2RlZmluZVByb3BlcnR5KF9QUkVGSVhFUywgRkFNSUxZX1NIQVJQLCBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEVbRkFNSUxZX1NIQVJQXSkpLCBfUFJFRklYRVMpO1xuXG4gIGZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xuICAgIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SWNvbk5hbWUoY3NzUHJlZml4LCBjbHMpIHtcbiAgICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgICB2YXIgcHJlZml4ID0gcGFydHNbMF07XG4gICAgdmFyIGljb25OYW1lID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgaWYgKHByZWZpeCA9PT0gY3NzUHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICAgIHJldHVybiBpY29uTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgIHZhciBsb29rdXAgPSBmdW5jdGlvbiBsb29rdXAocmVkdWNlcikge1xuICAgICAgcmV0dXJuIHJlZHVjZShzdHlsZXMsIGZ1bmN0aW9uIChvLCBzdHlsZSwgcHJlZml4KSB7XG4gICAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuXG4gICAgX2J5VW5pY29kZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgICAgaWYgKGljb25bM10pIHtcbiAgICAgICAgYWNjW2ljb25bM11dID0gaWNvbk5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpY29uWzJdKSB7XG4gICAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdudW1iZXInO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICAgIGFjY1thbGlhcy50b1N0cmluZygxNildID0gaWNvbk5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0pO1xuICAgIF9ieUxpZ2F0dXJlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbk5hbWU7XG5cbiAgICAgIGlmIChpY29uWzJdKSB7XG4gICAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICAgIGFjY1thbGlhc10gPSBpY29uTmFtZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSk7XG4gICAgX2J5QWxpYXMgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXTtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcbiAgICAgIGFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgYWNjW2FsaWFzXSA9IGljb25OYW1lO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0pOyAvLyBJZiB3ZSBoYXZlIGEgS2l0LCB3ZSBjYW4ndCBkZXRlcm1pbmUgaWYgcmVndWxhciBpcyBhdmFpbGFibGUgc2luY2Ugd2VcbiAgICAvLyBjb3VsZCBiZSBhdXRvLWZldGNoaW5nIGl0LiBXZSdsbCBoYXZlIHRvIGFzc3VtZSB0aGF0IGl0IGlzIGF2YWlsYWJsZS5cblxuICAgIHZhciBoYXNSZWd1bGFyID0gJ2ZhcicgaW4gc3R5bGVzIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmc7XG4gICAgdmFyIHNoaW1Mb29rdXBzID0gcmVkdWNlKHNoaW1zLCBmdW5jdGlvbiAoYWNjLCBzaGltKSB7XG4gICAgICB2YXIgbWF5YmVOYW1lTWF5YmVVbmljb2RlID0gc2hpbVswXTtcbiAgICAgIHZhciBwcmVmaXggPSBzaGltWzFdO1xuICAgICAgdmFyIGljb25OYW1lID0gc2hpbVsyXTtcblxuICAgICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIWhhc1JlZ3VsYXIpIHtcbiAgICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbWF5YmVOYW1lTWF5YmVVbmljb2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICBhY2MubmFtZXNbbWF5YmVOYW1lTWF5YmVVbmljb2RlXSA9IHtcbiAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICBpY29uTmFtZTogaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBtYXliZU5hbWVNYXliZVVuaWNvZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFjYy51bmljb2Rlc1ttYXliZU5hbWVNYXliZVVuaWNvZGUudG9TdHJpbmcoMTYpXSA9IHtcbiAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICBpY29uTmFtZTogaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICBuYW1lczoge30sXG4gICAgICB1bmljb2Rlczoge31cbiAgICB9KTtcbiAgICBfYnlPbGROYW1lID0gc2hpbUxvb2t1cHMubmFtZXM7XG4gICAgX2J5T2xkVW5pY29kZSA9IHNoaW1Mb29rdXBzLnVuaWNvZGVzO1xuICAgIF9kZWZhdWx0VXNhYmxlUHJlZml4ID0gZ2V0Q2Fub25pY2FsUHJlZml4KGNvbmZpZy5zdHlsZURlZmF1bHQsIHtcbiAgICAgIGZhbWlseTogY29uZmlnLmZhbWlseURlZmF1bHRcbiAgICB9KTtcbiAgfTtcbiAgb25DaGFuZ2UoZnVuY3Rpb24gKGMpIHtcbiAgICBfZGVmYXVsdFVzYWJsZVByZWZpeCA9IGdldENhbm9uaWNhbFByZWZpeChjLnN0eWxlRGVmYXVsdCwge1xuICAgICAgZmFtaWx5OiBjb25maWcuZmFtaWx5RGVmYXVsdFxuICAgIH0pO1xuICB9KTtcbiAgYnVpbGQoKTtcbiAgZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICAgIHJldHVybiAoX2J5VW5pY29kZVtwcmVmaXhdIHx8IHt9KVt1bmljb2RlXTtcbiAgfVxuICBmdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgICByZXR1cm4gKF9ieUxpZ2F0dXJlW3ByZWZpeF0gfHwge30pW2xpZ2F0dXJlXTtcbiAgfVxuICBmdW5jdGlvbiBieUFsaWFzKHByZWZpeCwgYWxpYXMpIHtcbiAgICByZXR1cm4gKF9ieUFsaWFzW3ByZWZpeF0gfHwge30pW2FsaWFzXTtcbiAgfVxuICBmdW5jdGlvbiBieU9sZE5hbWUobmFtZSkge1xuICAgIHJldHVybiBfYnlPbGROYW1lW25hbWVdIHx8IHtcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGljb25OYW1lOiBudWxsXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBieU9sZFVuaWNvZGUodW5pY29kZSkge1xuICAgIHZhciBvbGRVbmljb2RlID0gX2J5T2xkVW5pY29kZVt1bmljb2RlXTtcbiAgICB2YXIgbmV3VW5pY29kZSA9IGJ5VW5pY29kZSgnZmFzJywgdW5pY29kZSk7XG4gICAgcmV0dXJuIG9sZFVuaWNvZGUgfHwgKG5ld1VuaWNvZGUgPyB7XG4gICAgICBwcmVmaXg6ICdmYXMnLFxuICAgICAgaWNvbk5hbWU6IG5ld1VuaWNvZGVcbiAgICB9IDogbnVsbCkgfHwge1xuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgaWNvbk5hbWU6IG51bGxcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGdldERlZmF1bHRVc2FibGVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIF9kZWZhdWx0VXNhYmxlUHJlZml4O1xuICB9XG4gIHZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGljb25OYW1lOiBudWxsLFxuICAgICAgcmVzdDogW11cbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBnZXRDYW5vbmljYWxQcmVmaXgoc3R5bGVPclByZWZpeCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJGZhbWlseSA9IHBhcmFtcy5mYW1pbHksXG4gICAgICAgIGZhbWlseSA9IF9wYXJhbXMkZmFtaWx5ID09PSB2b2lkIDAgPyBGQU1JTFlfQ0xBU1NJQyA6IF9wYXJhbXMkZmFtaWx5O1xuICAgIHZhciBzdHlsZSA9IFBSRUZJWF9UT19TVFlMRVtmYW1pbHldW3N0eWxlT3JQcmVmaXhdO1xuICAgIHZhciBwcmVmaXggPSBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtzdHlsZU9yUHJlZml4XSB8fCBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtzdHlsZV07XG4gICAgdmFyIGRlZmluZWQgPSBzdHlsZU9yUHJlZml4IGluIG5hbWVzcGFjZS5zdHlsZXMgPyBzdHlsZU9yUHJlZml4IDogbnVsbDtcbiAgICByZXR1cm4gcHJlZml4IHx8IGRlZmluZWQgfHwgbnVsbDtcbiAgfVxuICB2YXIgUFJFRklYRVNfRk9SX0ZBTUlMWSA9IChfUFJFRklYRVNfRk9SX0ZBTUlMWSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX1BSRUZJWEVTX0ZPUl9GQU1JTFksIEZBTUlMWV9DTEFTU0lDLCBPYmplY3Qua2V5cyhQUkVGSVhfVE9fTE9OR19TVFlMRVtGQU1JTFlfQ0xBU1NJQ10pKSwgX2RlZmluZVByb3BlcnR5KF9QUkVGSVhFU19GT1JfRkFNSUxZLCBGQU1JTFlfU0hBUlAsIE9iamVjdC5rZXlzKFBSRUZJWF9UT19MT05HX1NUWUxFW0ZBTUlMWV9TSEFSUF0pKSwgX1BSRUZJWEVTX0ZPUl9GQU1JTFkpO1xuICBmdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICAgIHZhciBfZmFtUHJvcHM7XG5cbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyRza2lwTG9va3VwcyA9IHBhcmFtcy5za2lwTG9va3VwcyxcbiAgICAgICAgc2tpcExvb2t1cHMgPSBfcGFyYW1zJHNraXBMb29rdXBzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcExvb2t1cHM7XG4gICAgdmFyIGZhbVByb3BzID0gKF9mYW1Qcm9wcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbVByb3BzLCBGQU1JTFlfQ0xBU1NJQywgXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChGQU1JTFlfQ0xBU1NJQykpLCBfZGVmaW5lUHJvcGVydHkoX2ZhbVByb3BzLCBGQU1JTFlfU0hBUlAsIFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRkFNSUxZX1NIQVJQKSksIF9mYW1Qcm9wcyk7XG4gICAgdmFyIGdpdmVuUHJlZml4ID0gbnVsbDtcbiAgICB2YXIgZmFtaWx5ID0gRkFNSUxZX0NMQVNTSUM7XG5cbiAgICBpZiAodmFsdWVzLmluY2x1ZGVzKGZhbVByb3BzW0ZBTUlMWV9DTEFTU0lDXSkgfHwgdmFsdWVzLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBQUkVGSVhFU19GT1JfRkFNSUxZW0ZBTUlMWV9DTEFTU0lDXS5pbmNsdWRlcyh2KTtcbiAgICB9KSkge1xuICAgICAgZmFtaWx5ID0gRkFNSUxZX0NMQVNTSUM7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy5pbmNsdWRlcyhmYW1Qcm9wc1tGQU1JTFlfU0hBUlBdKSB8fCB2YWx1ZXMuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIFBSRUZJWEVTX0ZPUl9GQU1JTFlbRkFNSUxZX1NIQVJQXS5pbmNsdWRlcyh2KTtcbiAgICB9KSkge1xuICAgICAgZmFtaWx5ID0gRkFNSUxZX1NIQVJQO1xuICAgIH1cblxuICAgIHZhciBjYW5vbmljYWwgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgdmFyIGljb25OYW1lID0gZ2V0SWNvbk5hbWUoY29uZmlnLmNzc1ByZWZpeCwgY2xzKTtcblxuICAgICAgaWYgKHN0eWxlc1tjbHNdKSB7XG4gICAgICAgIGNscyA9IExPTkdfU1RZTEVbZmFtaWx5XS5pbmNsdWRlcyhjbHMpID8gTE9OR19TVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtjbHNdIDogY2xzO1xuICAgICAgICBnaXZlblByZWZpeCA9IGNscztcbiAgICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICAgIH0gZWxzZSBpZiAoUFJFRklYRVNbZmFtaWx5XS5pbmRleE9mKGNscykgPiAtMSkge1xuICAgICAgICBnaXZlblByZWZpeCA9IGNscztcbiAgICAgICAgYWNjLnByZWZpeCA9IGdldENhbm9uaWNhbFByZWZpeChjbHMsIHtcbiAgICAgICAgICBmYW1pbHk6IGZhbWlseVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvbk5hbWUpIHtcbiAgICAgICAgYWNjLmljb25OYW1lID0gaWNvbk5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzICE9PSBmYW1Qcm9wc1tGQU1JTFlfQ0xBU1NJQ10gJiYgY2xzICE9PSBmYW1Qcm9wc1tGQU1JTFlfU0hBUlBdKSB7XG4gICAgICAgIGFjYy5yZXN0LnB1c2goY2xzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFza2lwTG9va3VwcyAmJiBhY2MucHJlZml4ICYmIGFjYy5pY29uTmFtZSkge1xuICAgICAgICB2YXIgc2hpbSA9IGdpdmVuUHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGFjYy5pY29uTmFtZSkgOiB7fTtcbiAgICAgICAgdmFyIGFsaWFzSWNvbk5hbWUgPSBieUFsaWFzKGFjYy5wcmVmaXgsIGFjYy5pY29uTmFtZSk7XG5cbiAgICAgICAgaWYgKHNoaW0ucHJlZml4KSB7XG4gICAgICAgICAgZ2l2ZW5QcmVmaXggPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgYWNjLmljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBhbGlhc0ljb25OYW1lIHx8IGFjYy5pY29uTmFtZTtcbiAgICAgICAgYWNjLnByZWZpeCA9IHNoaW0ucHJlZml4IHx8IGFjYy5wcmVmaXg7XG5cbiAgICAgICAgaWYgKGFjYy5wcmVmaXggPT09ICdmYXInICYmICFzdHlsZXNbJ2ZhciddICYmIHN0eWxlc1snZmFzJ10gJiYgIWNvbmZpZy5hdXRvRmV0Y2hTdmcpIHtcbiAgICAgICAgICAvLyBBbGxvdyBhIGZhbGxiYWNrIGZyb20gdGhlIHJlZ3VsYXIgc3R5bGUgdG8gc29saWQgaWYgcmVndWxhciBpcyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgLy8gYnV0IG9ubHkgaWYgd2UgYXJlbid0IGF1dG8tZmV0Y2hpbmcgU1ZHc1xuICAgICAgICAgIGFjYy5wcmVmaXggPSAnZmFzJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcblxuICAgIGlmICh2YWx1ZXMuaW5jbHVkZXMoJ2ZhLWJyYW5kcycpIHx8IHZhbHVlcy5pbmNsdWRlcygnZmFiJykpIHtcbiAgICAgIGNhbm9uaWNhbC5wcmVmaXggPSAnZmFiJztcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmluY2x1ZGVzKCdmYS1kdW90b25lJykgfHwgdmFsdWVzLmluY2x1ZGVzKCdmYWQnKSkge1xuICAgICAgY2Fub25pY2FsLnByZWZpeCA9ICdmYWQnO1xuICAgIH1cblxuICAgIGlmICghY2Fub25pY2FsLnByZWZpeCAmJiBmYW1pbHkgPT09IEZBTUlMWV9TSEFSUCAmJiAoc3R5bGVzWydmYXNzJ10gfHwgY29uZmlnLmF1dG9GZXRjaFN2ZykpIHtcbiAgICAgIGNhbm9uaWNhbC5wcmVmaXggPSAnZmFzcyc7XG4gICAgICBjYW5vbmljYWwuaWNvbk5hbWUgPSBieUFsaWFzKGNhbm9uaWNhbC5wcmVmaXgsIGNhbm9uaWNhbC5pY29uTmFtZSkgfHwgY2Fub25pY2FsLmljb25OYW1lO1xuICAgIH1cblxuICAgIGlmIChjYW5vbmljYWwucHJlZml4ID09PSAnZmEnIHx8IGdpdmVuUHJlZml4ID09PSAnZmEnKSB7XG4gICAgICAvLyBUaGUgZmEgcHJlZml4IGlzIG5vdCBjYW5vbmljYWwuIFNvIGlmIGl0IGhhcyBtYWRlIGl0IHRocm91Z2ggdW50aWwgdGhpcyBwb2ludFxuICAgICAgLy8gd2Ugd2lsbCBzaGlmdCBpdCB0byB0aGUgY29ycmVjdCBwcmVmaXguXG4gICAgICBjYW5vbmljYWwucHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpIHx8ICdmYXMnO1xuICAgIH1cblxuICAgIHJldHVybiBjYW5vbmljYWw7XG4gIH1cblxuICB2YXIgTGlicmFyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJyYXJ5KTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMaWJyYXJ5LCBbe1xuICAgICAga2V5OiBcImFkZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuICAgICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF90aGlzLmRlZmluaXRpb25zW2tleV0gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSB8fCB7fSksIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgICBkZWZpbmVJY29ucyhrZXksIGFkZGl0aW9uc1trZXldKTsgLy8gVE9ETyBjYW4gd2Ugc3RvcCBkb2luZyB0aGlzPyBXZSBjYW4ndCBnZXQgdGhlIGljb25zIGJ5ICdmYS1zb2xpZCcgYW55IGxvbmdlciBzbyB0aGlzIHByb2JhYmx5IG5lZWRzIHRvIGNoYW5nZVxuXG4gICAgICAgICAgdmFyIGxvbmdQcmVmaXggPSBQUkVGSVhfVE9fTE9OR19TVFlMRVtGQU1JTFlfQ0xBU1NJQ11ba2V5XTtcbiAgICAgICAgICBpZiAobG9uZ1ByZWZpeCkgZGVmaW5lSWNvbnMobG9uZ1ByZWZpeCwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVsbERlZmluaXRpb25zKGFkZGl0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgICAgfSA6IGRlZmluaXRpb247XG4gICAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX25vcm1hbGl6ZWQka2V5LnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgICB2YXIgYWxpYXNlcyA9IGljb25bMl07XG4gICAgICAgICAgaWYgKCFhZGRpdGlvbnNbcHJlZml4XSkgYWRkaXRpb25zW3ByZWZpeF0gPSB7fTtcblxuICAgICAgICAgIGlmIChhbGlhc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhbGlhcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVthbGlhc10gPSBpY29uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVtpY29uTmFtZV0gPSBpY29uO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFkZGl0aW9ucztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTGlicmFyeTtcbiAgfSgpO1xuXG4gIHZhciBfcGx1Z2lucyA9IFtdO1xuICB2YXIgX2hvb2tzID0ge307XG4gIHZhciBwcm92aWRlcnMgPSB7fTtcbiAgdmFyIGRlZmF1bHRQcm92aWRlcktleXMgPSBPYmplY3Qua2V5cyhwcm92aWRlcnMpO1xuICBmdW5jdGlvbiByZWdpc3RlclBsdWdpbnMobmV4dFBsdWdpbnMsIF9yZWYpIHtcbiAgICB2YXIgb2JqID0gX3JlZi5taXhvdXRzVG87XG4gICAgX3BsdWdpbnMgPSBuZXh0UGx1Z2lucztcbiAgICBfaG9va3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwcm92aWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChkZWZhdWx0UHJvdmlkZXJLZXlzLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgIGRlbGV0ZSBwcm92aWRlcnNba107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHZhciBtaXhvdXQgPSBwbHVnaW4ubWl4b3V0ID8gcGx1Z2luLm1peG91dCgpIDoge307XG4gICAgICBPYmplY3Qua2V5cyhtaXhvdXQpLmZvckVhY2goZnVuY3Rpb24gKHRrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWl4b3V0W3RrXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9ialt0a10gPSBtaXhvdXRbdGtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90eXBlb2YobWl4b3V0W3RrXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMobWl4b3V0W3RrXSkuZm9yRWFjaChmdW5jdGlvbiAoc2spIHtcbiAgICAgICAgICAgIGlmICghb2JqW3RrXSkge1xuICAgICAgICAgICAgICBvYmpbdGtdID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialt0a11bc2tdID0gbWl4b3V0W3RrXVtza107XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGx1Z2luLmhvb2tzKSB7XG4gICAgICAgIHZhciBob29rcyA9IHBsdWdpbi5ob29rcygpO1xuICAgICAgICBPYmplY3Qua2V5cyhob29rcykuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICAgIGlmICghX2hvb2tzW2hvb2tdKSB7XG4gICAgICAgICAgICBfaG9va3NbaG9va10gPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfaG9va3NbaG9va10ucHVzaChob29rc1tob29rXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocGx1Z2luLnByb3ZpZGVzKSB7XG4gICAgICAgIHBsdWdpbi5wcm92aWRlcyhwcm92aWRlcnMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBjaGFpbkhvb2tzKGhvb2ssIGFjY3VtdWxhdG9yKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGhvb2tGbnMgPSBfaG9va3NbaG9va10gfHwgW107XG4gICAgaG9va0Zucy5mb3JFYWNoKGZ1bmN0aW9uIChob29rRm4pIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gaG9va0ZuLmFwcGx5KG51bGwsIFthY2N1bXVsYXRvcl0uY29uY2F0KGFyZ3MpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWNhbGxcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gY2FsbEhvb2tzKGhvb2spIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgaG9va0ZucyA9IF9ob29rc1tob29rXSB8fCBbXTtcbiAgICBob29rRm5zLmZvckVhY2goZnVuY3Rpb24gKGhvb2tGbikge1xuICAgICAgaG9va0ZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gY2FsbFByb3ZpZGVkKCkge1xuICAgIHZhciBob29rID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gcHJvdmlkZXJzW2hvb2tdID8gcHJvdmlkZXJzW2hvb2tdLmFwcGx5KG51bGwsIGFyZ3MpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZEljb25EZWZpbml0aW9uKGljb25Mb29rdXApIHtcbiAgICBpZiAoaWNvbkxvb2t1cC5wcmVmaXggPT09ICdmYScpIHtcbiAgICAgIGljb25Mb29rdXAucHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgdmFyIGljb25OYW1lID0gaWNvbkxvb2t1cC5pY29uTmFtZTtcbiAgICB2YXIgcHJlZml4ID0gaWNvbkxvb2t1cC5wcmVmaXggfHwgZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgIGlmICghaWNvbk5hbWUpIHJldHVybjtcbiAgICBpY29uTmFtZSA9IGJ5QWxpYXMocHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbk5hbWU7XG4gICAgcmV0dXJuIGljb25Gcm9tTWFwcGluZyhsaWJyYXJ5LmRlZmluaXRpb25zLCBwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uRnJvbU1hcHBpbmcobmFtZXNwYWNlLnN0eWxlcywgcHJlZml4LCBpY29uTmFtZSk7XG4gIH1cbiAgdmFyIGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpO1xuICB2YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICAgIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IGZhbHNlO1xuICAgIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG4gICAgY2FsbEhvb2tzKCdub0F1dG8nKTtcbiAgfTtcbiAgdmFyIGRvbSA9IHtcbiAgICBpMnN2ZzogZnVuY3Rpb24gaTJzdmcoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgaWYgKElTX0RPTSkge1xuICAgICAgICBjYWxsSG9va3MoJ2JlZm9yZUkyc3ZnJywgcGFyYW1zKTtcbiAgICAgICAgY2FsbFByb3ZpZGVkKCdwc2V1ZG9FbGVtZW50czJzdmcnLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gY2FsbFByb3ZpZGVkKCdpMnN2ZycsIHBhcmFtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ09wZXJhdGlvbiByZXF1aXJlcyBhIERPTSBvZiBzb21lIGtpbmQuJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDogZnVuY3Rpb24gd2F0Y2goKSB7XG4gICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290O1xuXG4gICAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSBmYWxzZSkge1xuICAgICAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dG9SZXBsYWNlKHtcbiAgICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgICB9KTtcbiAgICAgICAgY2FsbEhvb2tzKCd3YXRjaCcsIHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHZhciBwYXJzZSA9IHtcbiAgICBpY29uOiBmdW5jdGlvbiBpY29uKF9pY29uKSB7XG4gICAgICBpZiAoX2ljb24gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdHlwZW9mKF9pY29uKSA9PT0gJ29iamVjdCcgJiYgX2ljb24ucHJlZml4ICYmIF9pY29uLmljb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlZml4OiBfaWNvbi5wcmVmaXgsXG4gICAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMoX2ljb24ucHJlZml4LCBfaWNvbi5pY29uTmFtZSkgfHwgX2ljb24uaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX2ljb24pICYmIF9pY29uLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB2YXIgaWNvbk5hbWUgPSBfaWNvblsxXS5pbmRleE9mKCdmYS0nKSA9PT0gMCA/IF9pY29uWzFdLnNsaWNlKDMpIDogX2ljb25bMV07XG4gICAgICAgIHZhciBwcmVmaXggPSBnZXRDYW5vbmljYWxQcmVmaXgoX2ljb25bMF0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgIGljb25OYW1lOiBieUFsaWFzKHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25OYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgX2ljb24gPT09ICdzdHJpbmcnICYmIChfaWNvbi5pbmRleE9mKFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKSkgPiAtMSB8fCBfaWNvbi5tYXRjaChJQ09OX1NFTEVDVElPTl9TWU5UQVhfUEFUVEVSTikpKSB7XG4gICAgICAgIHZhciBjYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihfaWNvbi5zcGxpdCgnICcpLCB7XG4gICAgICAgICAgc2tpcExvb2t1cHM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlZml4OiBjYW5vbmljYWxJY29uLnByZWZpeCB8fCBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCksXG4gICAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMoY2Fub25pY2FsSWNvbi5wcmVmaXgsIGNhbm9uaWNhbEljb24uaWNvbk5hbWUpIHx8IGNhbm9uaWNhbEljb24uaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBfaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIF9wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmVmaXg6IF9wcmVmaXgsXG4gICAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMoX3ByZWZpeCwgX2ljb24pIHx8IF9pY29uXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgYXBpID0ge1xuICAgIG5vQXV0bzogbm9BdXRvLFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGRvbTogZG9tLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICAgIGZpbmRJY29uRGVmaW5pdGlvbjogZmluZEljb25EZWZpbml0aW9uLFxuICAgIHRvSHRtbDogdG9IdG1sXG4gIH07XG5cbiAgdmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3QsXG4gICAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJGF1dG9SZXBsYWNlU3Y7XG4gICAgaWYgKChPYmplY3Qua2V5cyhuYW1lc3BhY2Uuc3R5bGVzKS5sZW5ndGggPiAwIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmcpICYmIElTX0RPTSAmJiBjb25maWcuYXV0b1JlcGxhY2VTdmcpIGFwaS5kb20uaTJzdmcoe1xuICAgICAgbm9kZTogYXV0b1JlcGxhY2VTdmdSb290XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYm9vdHN0cmFwKHBsdWdpbnMpIHtcbiAgICBpZiAoSVNfQlJPV1NFUikge1xuICAgICAgaWYgKCFXSU5ET1cuRm9udEF3ZXNvbWUpIHtcbiAgICAgICAgV0lORE9XLkZvbnRBd2Vzb21lID0gYXBpO1xuICAgICAgfVxuXG4gICAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICAgIGNhbGxIb29rcygnYm9vdHN0cmFwJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBuYW1lc3BhY2UuaG9va3MgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmFtZXNwYWNlLmhvb2tzKSwge30sIHtcbiAgICAgIGFkZFBhY2s6IGZ1bmN0aW9uIGFkZFBhY2socHJlZml4LCBpY29ucykge1xuICAgICAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9KSwgaWNvbnMpO1xuICAgICAgICBidWlsZCgpO1xuICAgICAgICBhdXRvUmVwbGFjZSgpO1xuICAgICAgfSxcbiAgICAgIGFkZFBhY2tzOiBmdW5jdGlvbiBhZGRQYWNrcyhwYWNrcykge1xuICAgICAgICBwYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIHByZWZpeCA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICBpY29ucyA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSksIGljb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9LFxuICAgICAgYWRkU2hpbXM6IGZ1bmN0aW9uIGFkZFNoaW1zKHNoaW1zKSB7XG4gICAgICAgIHZhciBfbmFtZXNwYWNlJHNoaW1zO1xuXG4gICAgICAgIChfbmFtZXNwYWNlJHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zKS5wdXNoLmFwcGx5KF9uYW1lc3BhY2Ukc2hpbXMsIF90b0NvbnN1bWFibGVBcnJheShzaGltcykpO1xuXG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb21WYXJpYW50cyh2YWwsIGFic3RyYWN0Q3JlYXRvcikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdhYnN0cmFjdCcsIHtcbiAgICAgIGdldDogYWJzdHJhY3RDcmVhdG9yXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2h0bWwnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5hYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnbm9kZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNJY29uIChfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXMsXG4gICAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuXG4gICAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gbWFpbi5oZWlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgICB4OiB3aWR0aCAvIGhlaWdodCAvIDIsXG4gICAgICAgIHk6IDAuNVxuICAgICAgfTtcbiAgICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBqb2luU3R5bGVzKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBzdHlsZXMpLCB7fSwge1xuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6IFwiXCIuY29uY2F0KG9mZnNldC54ICsgdHJhbnNmb3JtLnggLyAxNiwgXCJlbSBcIikuY29uY2F0KG9mZnNldC55ICsgdHJhbnNmb3JtLnkgLyAxNiwgXCJlbVwiKVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzU3ltYm9sIChfcmVmKSB7XG4gICAgdmFyIHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG4gICAgdmFyIGlkID0gc3ltYm9sID09PSB0cnVlID8gXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogc3ltYm9sO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGF0dHJpYnV0ZXMpLCB7fSwge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9XVxuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHBhcmFtcykge1xuICAgIHZhciBfcGFyYW1zJGljb25zID0gcGFyYW1zLmljb25zLFxuICAgICAgICBtYWluID0gX3BhcmFtcyRpY29ucy5tYWluLFxuICAgICAgICBtYXNrID0gX3BhcmFtcyRpY29ucy5tYXNrLFxuICAgICAgICBwcmVmaXggPSBwYXJhbXMucHJlZml4LFxuICAgICAgICBpY29uTmFtZSA9IHBhcmFtcy5pY29uTmFtZSxcbiAgICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIG1hc2tJZCA9IHBhcmFtcy5tYXNrSWQsXG4gICAgICAgIHRpdGxlSWQgPSBwYXJhbXMudGl0bGVJZCxcbiAgICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgICB2YXIgX3JlZiA9IG1hc2suZm91bmQgPyBtYXNrIDogbWFpbixcbiAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICAgIHZhciBpc1VwbG9hZGVkSWNvbiA9IHByZWZpeCA9PT0gJ2Zhayc7XG4gICAgdmFyIGF0dHJDbGFzcyA9IFtjb25maWcucmVwbGFjZW1lbnRDbGFzcywgaWNvbk5hbWUgPyBcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6ICcnXS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBleHRyYS5jbGFzc2VzLmluZGV4T2YoYykgPT09IC0xO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMgIT09ICcnIHx8ICEhYztcbiAgICB9KS5jb25jYXQoZXh0cmEuY2xhc3Nlcykuam9pbignICcpO1xuICAgIHZhciBjb250ZW50ID0ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhLmF0dHJpYnV0ZXMpLCB7fSwge1xuICAgICAgICAnZGF0YS1wcmVmaXgnOiBwcmVmaXgsXG4gICAgICAgICdkYXRhLWljb24nOiBpY29uTmFtZSxcbiAgICAgICAgJ2NsYXNzJzogYXR0ckNsYXNzLFxuICAgICAgICAncm9sZSc6IGV4dHJhLmF0dHJpYnV0ZXMucm9sZSB8fCAnaW1nJyxcbiAgICAgICAgJ3htbG5zJzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICAgJ3ZpZXdCb3gnOiBcIjAgMCBcIi5jb25jYXQod2lkdGgsIFwiIFwiKS5jb25jYXQoaGVpZ2h0KVxuICAgICAgfSlcbiAgICB9O1xuICAgIHZhciB1cGxvYWRlZEljb25XaWR0aFN0eWxlID0gaXNVcGxvYWRlZEljb24gJiYgIX5leHRyYS5jbGFzc2VzLmluZGV4T2YoJ2ZhLWZ3JykgPyB7XG4gICAgICB3aWR0aDogXCJcIi5jb25jYXQod2lkdGggLyBoZWlnaHQgKiAxNiAqIDAuMDYyNSwgXCJlbVwiKVxuICAgIH0gOiB7fTtcblxuICAgIGlmICh3YXRjaGFibGUpIHtcbiAgICAgIGNvbnRlbnQuYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgY29udGVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgdGFnOiAndGl0bGUnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IGNvbnRlbnQuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gfHwgXCJ0aXRsZS1cIi5jb25jYXQodGl0bGVJZCB8fCBuZXh0VW5pcXVlSWQoKSlcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIGNvbnRlbnQuYXR0cmlidXRlcy50aXRsZTtcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZW50KSwge30sIHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgbWFpbjogbWFpbixcbiAgICAgIG1hc2s6IG1hc2ssXG4gICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICBzdHlsZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB1cGxvYWRlZEljb25XaWR0aFN0eWxlKSwgZXh0cmEuc3R5bGVzKVxuICAgIH0pO1xuXG4gICAgdmFyIF9yZWYyID0gbWFzay5mb3VuZCAmJiBtYWluLmZvdW5kID8gY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZUFic3RyYWN0TWFzaycsIGFyZ3MpIHx8IHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfSA6IGNhbGxQcm92aWRlZCgnZ2VuZXJhdGVBYnN0cmFjdEljb24nLCBhcmdzKSB8fCB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH0sXG4gICAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG4gICAgYXJncy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIGFyZ3MuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICByZXR1cm4gYXNTeW1ib2woYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhc0ljb24oYXJncyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1ha2VMYXllcnNUZXh0QWJzdHJhY3QocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHBhcmFtcy5oZWlnaHQsXG4gICAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgICAgX3BhcmFtcyR3YXRjaGFibGUyID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlMjtcblxuICAgIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhLmF0dHJpYnV0ZXMpLCB0aXRsZSA/IHtcbiAgICAgICd0aXRsZSc6IHRpdGxlXG4gICAgfSA6IHt9KSwge30sIHtcbiAgICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gICAgfSk7XG5cbiAgICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgICBhdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gICAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgICBzdHlsZXNbJ3RyYW5zZm9ybSddID0gdHJhbnNmb3JtRm9yQ3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgIHN0YXJ0Q2VudGVyZWQ6IHRydWUsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuICAgICAgc3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVzWyd0cmFuc2Zvcm0nXTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSBbXTtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gICAgfSk7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHZhbC5wdXNoKHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmEuYXR0cmlidXRlcyksIHRpdGxlID8ge1xuICAgICAgJ3RpdGxlJzogdGl0bGVcbiAgICB9IDoge30pLCB7fSwge1xuICAgICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgICB9KTtcblxuICAgIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoZXh0cmEuc3R5bGVzKTtcblxuICAgIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IFtdO1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgICB9KTtcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgdmFsLnB1c2goe1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICB2YXIgc3R5bGVzJDEgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuICBmdW5jdGlvbiBhc0ZvdW5kSWNvbihpY29uKSB7XG4gICAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgICB2YXIgaGVpZ2h0ID0gaWNvblsxXTtcblxuICAgIHZhciBfaWNvbiRzbGljZSA9IGljb24uc2xpY2UoNCksXG4gICAgICAgIF9pY29uJHNsaWNlMiA9IF9zbGljZWRUb0FycmF5KF9pY29uJHNsaWNlLCAxKSxcbiAgICAgICAgdmVjdG9yRGF0YSA9IF9pY29uJHNsaWNlMlswXTtcblxuICAgIHZhciBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZlY3RvckRhdGEpKSB7XG4gICAgICBlbGVtZW50ID0ge1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5HUk9VUClcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWSksXG4gICAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuUFJJTUFSWSksXG4gICAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMV1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50ID0ge1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZm91bmQ6IHRydWUsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGljb246IGVsZW1lbnRcbiAgICB9O1xuICB9XG4gIHZhciBtaXNzaW5nSWNvblJlc29sdXRpb25NaXhpbiA9IHtcbiAgICBmb3VuZDogZmFsc2UsXG4gICAgd2lkdGg6IDUxMixcbiAgICBoZWlnaHQ6IDUxMlxuICB9O1xuXG4gIGZ1bmN0aW9uIG1heWJlTm90aWZ5TWlzc2luZyhpY29uTmFtZSwgcHJlZml4KSB7XG4gICAgaWYgKCFQUk9EVUNUSU9OICYmICFjb25maWcuc2hvd01pc3NpbmdJY29ucyAmJiBpY29uTmFtZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkljb24gd2l0aCBuYW1lIFxcXCJcIi5jb25jYXQoaWNvbk5hbWUsIFwiXFxcIiBhbmQgcHJlZml4IFxcXCJcIikuY29uY2F0KHByZWZpeCwgXCJcXFwiIGlzIG1pc3NpbmcuXCIpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSB7XG4gICAgdmFyIGdpdmVuUHJlZml4ID0gcHJlZml4O1xuXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhJyAmJiBjb25maWcuc3R5bGVEZWZhdWx0ICE9PSBudWxsKSB7XG4gICAgICBwcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciB2YWwgPSB7XG4gICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDUxMixcbiAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgIGljb246IGNhbGxQcm92aWRlZCgnbWlzc2luZ0ljb25BYnN0cmFjdCcpIHx8IHt9XG4gICAgICB9O1xuXG4gICAgICBpZiAoZ2l2ZW5QcmVmaXggPT09ICdmYScpIHtcbiAgICAgICAgdmFyIHNoaW0gPSBieU9sZE5hbWUoaWNvbk5hbWUpIHx8IHt9O1xuICAgICAgICBpY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgaWNvbk5hbWU7XG4gICAgICAgIHByZWZpeCA9IHNoaW0ucHJlZml4IHx8IHByZWZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMVtwcmVmaXhdICYmIHN0eWxlcyQxW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICAgIHZhciBpY29uID0gc3R5bGVzJDFbcHJlZml4XVtpY29uTmFtZV07XG4gICAgICAgIHJldHVybiByZXNvbHZlKGFzRm91bmRJY29uKGljb24pKTtcbiAgICAgIH1cblxuICAgICAgbWF5YmVOb3RpZnlNaXNzaW5nKGljb25OYW1lLCBwcmVmaXgpO1xuICAgICAgcmVzb2x2ZShfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbWlzc2luZ0ljb25SZXNvbHV0aW9uTWl4aW4pLCB7fSwge1xuICAgICAgICBpY29uOiBjb25maWcuc2hvd01pc3NpbmdJY29ucyAmJiBpY29uTmFtZSA/IGNhbGxQcm92aWRlZCgnbWlzc2luZ0ljb25BYnN0cmFjdCcpIHx8IHt9IDoge31cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgdmFyIHAgPSBjb25maWcubWVhc3VyZVBlcmZvcm1hbmNlICYmIFBFUkZPUk1BTkNFICYmIFBFUkZPUk1BTkNFLm1hcmsgJiYgUEVSRk9STUFOQ0UubWVhc3VyZSA/IFBFUkZPUk1BTkNFIDoge1xuICAgIG1hcms6IG5vb3AkMSxcbiAgICBtZWFzdXJlOiBub29wJDFcbiAgfTtcbiAgdmFyIHByZWFtYmxlID0gXCJGQSBcXFwiNi40LjBcXFwiXCI7XG5cbiAgdmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICAgIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIikpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZW5kKG5hbWUpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gICAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xuICAgIHAubWVhc3VyZShcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgfTtcblxuICB2YXIgcGVyZiA9IHtcbiAgICBiZWdpbjogYmVnaW4sXG4gICAgZW5kOiBlbmRcbiAgfTtcblxuICB2YXIgbm9vcCQyID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4gIGZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gICAgdmFyIGkyc3ZnID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA6IG51bGw7XG4gICAgcmV0dXJuIHR5cGVvZiBpMnN2ZyA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNQcmVmaXhBbmRJY29uKG5vZGUpIHtcbiAgICB2YXIgcHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgOiBudWxsO1xuICAgIHZhciBpY29uID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0lDT04pIDogbnVsbDtcbiAgICByZXR1cm4gcHJlZml4ICYmIGljb247XG4gIH1cblxuICBmdW5jdGlvbiBoYXNCZWVuUmVwbGFjZWQobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUuY2xhc3NMaXN0ICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNvbmZpZy5yZXBsYWNlbWVudENsYXNzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE11dGF0b3IoKSB7XG4gICAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2U7XG4gICAgfVxuXG4gICAgdmFyIG11dGF0b3IgPSBtdXRhdG9yc1tjb25maWcuYXV0b1JlcGxhY2VTdmddO1xuICAgIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlModGFnKSB7XG4gICAgcmV0dXJuIERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcpIHtcbiAgICByZXR1cm4gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFNWRyhhYnN0cmFjdE9iaikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJGNlRm4gPSBwYXJhbXMuY2VGbixcbiAgICAgICAgY2VGbiA9IF9wYXJhbXMkY2VGbiA9PT0gdm9pZCAwID8gYWJzdHJhY3RPYmoudGFnID09PSAnc3ZnJyA/IGNyZWF0ZUVsZW1lbnROUyA6IGNyZWF0ZUVsZW1lbnQgOiBfcGFyYW1zJGNlRm47XG5cbiAgICBpZiAodHlwZW9mIGFic3RyYWN0T2JqID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIERPQ1VNRU5ULmNyZWF0ZVRleHROb2RlKGFic3RyYWN0T2JqKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gY2VGbihhYnN0cmFjdE9iai50YWcpO1xuICAgIE9iamVjdC5rZXlzKGFic3RyYWN0T2JqLmF0dHJpYnV0ZXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdGFnLnNldEF0dHJpYnV0ZShrZXksIGFic3RyYWN0T2JqLmF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgdmFyIGNoaWxkcmVuID0gYWJzdHJhY3RPYmouY2hpbGRyZW4gfHwgW107XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChjb252ZXJ0U1ZHKGNoaWxkLCB7XG4gICAgICAgIGNlRm46IGNlRm5cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9kZUFzQ29tbWVudChub2RlKSB7XG4gICAgdmFyIGNvbW1lbnQgPSBcIiBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIFwiKTtcbiAgICAvKiBCRUdJTi5BVFRSSUJVVElPTiAqL1xuXG4gICAgY29tbWVudCA9IFwiXCIuY29uY2F0KGNvbW1lbnQsIFwiRm9udCBBd2Vzb21lIGZvbnRhd2Vzb21lLmNvbSBcIik7XG4gICAgLyogRU5ELkFUVFJJQlVUSU9OICovXG5cbiAgICByZXR1cm4gY29tbWVudDtcbiAgfVxuXG4gIHZhciBtdXRhdG9ycyA9IHtcbiAgICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKG11dGF0aW9uKSB7XG4gICAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG11dGF0aW9uWzFdLmZvckVhY2goZnVuY3Rpb24gKF9hYnN0cmFjdCkge1xuICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udmVydFNWRyhfYWJzdHJhY3QpLCBub2RlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcpID09PSBudWxsICYmIGNvbmZpZy5rZWVwT3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgICAgICB2YXIgY29tbWVudCA9IERPQ1VNRU5ULmNyZWF0ZUNvbW1lbnQobm9kZUFzQ29tbWVudChub2RlKSk7XG4gICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21tZW50LCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBuZXN0OiBmdW5jdGlvbiBuZXN0KG11dGF0aW9uKSB7XG4gICAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgICAgdmFyIF9hYnN0cmFjdDIgPSBtdXRhdGlvblsxXTsgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVwbGFjZWQgbm9kZSB3ZSBkbyBub3Qgd2FudCB0byBjb250aW51ZSBuZXN0aW5nIHdpdGhpbiBpdC5cbiAgICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICAgIGlmICh+Y2xhc3NBcnJheShub2RlKS5pbmRleE9mKGNvbmZpZy5yZXBsYWNlbWVudENsYXNzKSkge1xuICAgICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JTdmcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLS4qXCIpKTtcbiAgICAgIGRlbGV0ZSBfYWJzdHJhY3QyWzBdLmF0dHJpYnV0ZXMuaWQ7XG5cbiAgICAgIGlmIChfYWJzdHJhY3QyWzBdLmF0dHJpYnV0ZXMuY2xhc3MpIHtcbiAgICAgICAgdmFyIHNwbGl0Q2xhc3NlcyA9IF9hYnN0cmFjdDJbMF0uYXR0cmlidXRlcy5jbGFzcy5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICAgICAgICBpZiAoY2xzID09PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRvTm9kZTogW10sXG4gICAgICAgICAgdG9Tdmc6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9hYnN0cmFjdDJbMF0uYXR0cmlidXRlcy5jbGFzcyA9IHNwbGl0Q2xhc3Nlcy50b1N2Zy5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKHNwbGl0Q2xhc3Nlcy50b05vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdJbm5lckhUTUwgPSBfYWJzdHJhY3QyLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgfSkuam9pbignXFxuJyk7XG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3SW5uZXJIVE1MO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBwZXJmb3JtT3BlcmF0aW9uU3luYyhvcCkge1xuICAgIG9wKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtKG11dGF0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQyO1xuXG4gICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZyYW1lID0gcGVyZm9ybU9wZXJhdGlvblN5bmM7XG5cbiAgICAgIGlmIChjb25maWcubXV0YXRlQXBwcm9hY2ggPT09IE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DKSB7XG4gICAgICAgIGZyYW1lID0gV0lORE9XLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBwZXJmb3JtT3BlcmF0aW9uU3luYztcbiAgICAgIH1cblxuICAgICAgZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbXV0YXRvciA9IGdldE11dGF0b3IoKTtcbiAgICAgICAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdtdXRhdGUnKTtcbiAgICAgICAgbXV0YXRpb25zLm1hcChtdXRhdG9yKTtcbiAgICAgICAgbWFyaygpO1xuICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRpc2FibGVPYnNlcnZhdGlvbigpIHtcbiAgICBkaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlT2JzZXJ2YXRpb24oKSB7XG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICB2YXIgbW8gPSBudWxsO1xuICBmdW5jdGlvbiBvYnNlcnZlKG9wdGlvbnMpIHtcbiAgICBpZiAoIU1VVEFUSU9OX09CU0VSVkVSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub2JzZXJ2ZU11dGF0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyR0cmVlQ2FsbGJhY2sgPSBvcHRpb25zLnRyZWVDYWxsYmFjayxcbiAgICAgICAgdHJlZUNhbGxiYWNrID0gX29wdGlvbnMkdHJlZUNhbGxiYWNrID09PSB2b2lkIDAgPyBub29wJDIgOiBfb3B0aW9ucyR0cmVlQ2FsbGJhY2ssXG4gICAgICAgIF9vcHRpb25zJG5vZGVDYWxsYmFjayA9IG9wdGlvbnMubm9kZUNhbGxiYWNrLFxuICAgICAgICBub2RlQ2FsbGJhY2sgPSBfb3B0aW9ucyRub2RlQ2FsbGJhY2sgPT09IHZvaWQgMCA/IG5vb3AkMiA6IF9vcHRpb25zJG5vZGVDYWxsYmFjayxcbiAgICAgICAgX29wdGlvbnMkcHNldWRvRWxlbWVuID0gb3B0aW9ucy5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrLFxuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gX29wdGlvbnMkcHNldWRvRWxlbWVuID09PSB2b2lkIDAgPyBub29wJDIgOiBfb3B0aW9ucyRwc2V1ZG9FbGVtZW4sXG4gICAgICAgIF9vcHRpb25zJG9ic2VydmVNdXRhdCA9IG9wdGlvbnMub2JzZXJ2ZU11dGF0aW9uc1Jvb3QsXG4gICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9vcHRpb25zJG9ic2VydmVNdXRhdDtcbiAgICBtbyA9IG5ldyBNVVRBVElPTl9PQlNFUlZFUihmdW5jdGlvbiAob2JqZWN0cykge1xuICAgICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgICB2YXIgZGVmYXVsdFByZWZpeCA9IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcbiAgICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXMubGVuZ3RoID4gMCAmJiAhaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXNbMF0pKSB7XG4gICAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSAmJiBjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLnRhcmdldCkgJiYgfkFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04uaW5kZXhPZihtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnICYmIGhhc1ByZWZpeEFuZEljb24obXV0YXRpb25SZWNvcmQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdmFyIF9nZXRDYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG11dGF0aW9uUmVjb3JkLnRhcmdldCkpLFxuICAgICAgICAgICAgICAgIHByZWZpeCA9IF9nZXRDYW5vbmljYWxJY29uLnByZWZpeCxcbiAgICAgICAgICAgICAgICBpY29uTmFtZSA9IF9nZXRDYW5vbmljYWxJY29uLmljb25OYW1lO1xuXG4gICAgICAgICAgICBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKERBVEFfUFJFRklYLCBwcmVmaXggfHwgZGVmYXVsdFByZWZpeCk7XG4gICAgICAgICAgICBpZiAoaWNvbk5hbWUpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoREFUQV9JQ09OLCBpY29uTmFtZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNCZWVuUmVwbGFjZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSkge1xuICAgICAgICAgICAgbm9kZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICAgIG1vLm9ic2VydmUob2JzZXJ2ZU11dGF0aW9uc1Jvb3QsIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKCFtbykgcmV0dXJuO1xuICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIHN0eWxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgdmFyIHZhbCA9IFtdO1xuXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICB2YWwgPSBzdHlsZS5zcGxpdCgnOycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgICAgICB2YXIgc3R5bGVzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlcy5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJvcCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYWNjW3Byb3BdID0gdmFsdWUuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gICAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gICAgdmFyIGlubmVyVGV4dCA9IG5vZGUuaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQgPyBub2RlLmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcblxuICAgIGlmICghdmFsLnByZWZpeCkge1xuICAgICAgdmFsLnByZWZpeCA9IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcbiAgICB9XG5cbiAgICBpZiAoZXhpc3RpbmdQcmVmaXggJiYgZXhpc3RpbmdJY29uTmFtZSkge1xuICAgICAgdmFsLnByZWZpeCA9IGV4aXN0aW5nUHJlZml4O1xuICAgICAgdmFsLmljb25OYW1lID0gZXhpc3RpbmdJY29uTmFtZTtcbiAgICB9XG5cbiAgICBpZiAodmFsLmljb25OYW1lICYmIHZhbC5wcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhbC5pY29uTmFtZSA9IGJ5TGlnYXR1cmUodmFsLnByZWZpeCwgbm9kZS5pbm5lclRleHQpIHx8IGJ5VW5pY29kZSh2YWwucHJlZml4LCB0b0hleChub2RlLmlubmVyVGV4dCkpO1xuICAgIH1cblxuICAgIGlmICghdmFsLmljb25OYW1lICYmIGNvbmZpZy5hdXRvRmV0Y2hTdmcgJiYgbm9kZS5maXJzdENoaWxkICYmIG5vZGUuZmlyc3RDaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHZhbC5pY29uTmFtZSA9IG5vZGUuZmlyc3RDaGlsZC5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IHRvQXJyYXkobm9kZS5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cikge1xuICAgICAgaWYgKGFjYy5uYW1lICE9PSAnY2xhc3MnICYmIGFjYy5uYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgdmFyIHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgdmFyIHRpdGxlSWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10aXRsZS1pZCcpO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgZXh0cmFBdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4dHJhQXR0cmlidXRlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGJsYW5rTWV0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbk5hbWU6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHRpdGxlSWQ6IG51bGwsXG4gICAgICBwcmVmaXg6IG51bGwsXG4gICAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgICAgc3ltYm9sOiBmYWxzZSxcbiAgICAgIG1hc2s6IHtcbiAgICAgICAgaWNvbk5hbWU6IG51bGwsXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgcmVzdDogW11cbiAgICAgIH0sXG4gICAgICBtYXNrSWQ6IG51bGwsXG4gICAgICBleHRyYToge1xuICAgICAgICBjbGFzc2VzOiBbXSxcbiAgICAgICAgc3R5bGVzOiB7fSxcbiAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHBhcnNlTWV0YShub2RlKSB7XG4gICAgdmFyIHBhcnNlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgc3R5bGVQYXJzZXI6IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIF9jbGFzc1BhcnNlciA9IGNsYXNzUGFyc2VyKG5vZGUpLFxuICAgICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgICAgcHJlZml4ID0gX2NsYXNzUGFyc2VyLnByZWZpeCxcbiAgICAgICAgZXh0cmFDbGFzc2VzID0gX2NsYXNzUGFyc2VyLnJlc3Q7XG5cbiAgICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgICB2YXIgcGx1Z2luTWV0YSA9IGNoYWluSG9va3MoJ3BhcnNlTm9kZUF0dHJpYnV0ZXMnLCB7fSwgbm9kZSk7XG4gICAgdmFyIGV4dHJhU3R5bGVzID0gcGFyc2VyLnN0eWxlUGFyc2VyID8gc3R5bGVQYXJzZXIobm9kZSkgOiBbXTtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoe1xuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdGl0bGU6IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpLFxuICAgICAgdGl0bGVJZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdGl0bGUtaWQnKSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICAgIG1hc2s6IHtcbiAgICAgICAgaWNvbk5hbWU6IG51bGwsXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgcmVzdDogW11cbiAgICAgIH0sXG4gICAgICBtYXNrSWQ6IG51bGwsXG4gICAgICBzeW1ib2w6IGZhbHNlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgY2xhc3NlczogZXh0cmFDbGFzc2VzLFxuICAgICAgICBzdHlsZXM6IGV4dHJhU3R5bGVzLFxuICAgICAgICBhdHRyaWJ1dGVzOiBleHRyYUF0dHJpYnV0ZXNcbiAgICAgIH1cbiAgICB9LCBwbHVnaW5NZXRhKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMkMiA9IG5hbWVzcGFjZS5zdHlsZXM7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gICAgdmFyIG5vZGVNZXRhID0gY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSAnbmVzdCcgPyBwYXJzZU1ldGEobm9kZSwge1xuICAgICAgc3R5bGVQYXJzZXI6IGZhbHNlXG4gICAgfSkgOiBwYXJzZU1ldGEobm9kZSk7XG5cbiAgICBpZiAofm5vZGVNZXRhLmV4dHJhLmNsYXNzZXMuaW5kZXhPZihMQVlFUlNfVEVYVF9DTEFTU05BTUUpKSB7XG4gICAgICByZXR1cm4gY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZUxheWVyc1RleHQnLCBub2RlLCBub2RlTWV0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbicsIG5vZGUsIG5vZGVNZXRhKTtcbiAgICB9XG4gIH1cblxuICB2YXIga25vd25QcmVmaXhlcyA9IG5ldyBTZXQoKTtcbiAgRkFNSUxJRVMubWFwKGZ1bmN0aW9uIChmYW1pbHkpIHtcbiAgICBrbm93blByZWZpeGVzLmFkZChcImZhLVwiLmNvbmNhdChmYW1pbHkpKTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRVtGQU1JTFlfQ0xBU1NJQ10pLm1hcChrbm93blByZWZpeGVzLmFkZC5iaW5kKGtub3duUHJlZml4ZXMpKTtcbiAgT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFW0ZBTUlMWV9TSEFSUF0pLm1hcChrbm93blByZWZpeGVzLmFkZC5iaW5kKGtub3duUHJlZml4ZXMpKTtcbiAga25vd25QcmVmaXhlcyA9IF90b0NvbnN1bWFibGVBcnJheShrbm93blByZWZpeGVzKTtcblxuICBmdW5jdGlvbiBvblRyZWUocm9vdCkge1xuICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICBpZiAoIUlTX0RPTSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHZhciBodG1sQ2xhc3NMaXN0ID0gRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcblxuICAgIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICAgIH07XG5cbiAgICB2YXIgaGNsUmVtb3ZlID0gZnVuY3Rpb24gaGNsUmVtb3ZlKHN1ZmZpeCkge1xuICAgICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QucmVtb3ZlKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgICB9O1xuXG4gICAgdmFyIHByZWZpeGVzID0gY29uZmlnLmF1dG9GZXRjaFN2ZyA/IGtub3duUHJlZml4ZXMgOiBGQU1JTElFUy5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBcImZhLVwiLmNvbmNhdChmKTtcbiAgICB9KS5jb25jYXQoT2JqZWN0LmtleXMoc3R5bGVzJDIpKTtcblxuICAgIGlmICghcHJlZml4ZXMuaW5jbHVkZXMoJ2ZhJykpIHtcbiAgICAgIHByZWZpeGVzLnB1c2goJ2ZhJyk7XG4gICAgfVxuXG4gICAgdmFyIHByZWZpeGVzRG9tUXVlcnkgPSBbXCIuXCIuY29uY2F0KExBWUVSU19URVhUX0NMQVNTTkFNRSwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIildLmNvbmNhdChwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBcIi5cIi5jb25jYXQocCwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIik7XG4gICAgfSkpLmpvaW4oJywgJyk7XG5cbiAgICBpZiAocHJlZml4ZXNEb21RdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNhbmRpZGF0ZXMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbChwcmVmaXhlc0RvbVF1ZXJ5KSk7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vb3BcbiAgICB9XG5cbiAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICAgIGhjbFJlbW92ZSgnY29tcGxldGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignb25UcmVlJyk7XG4gICAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtdXRhdGlvbiA9IGdlbmVyYXRlTXV0YXRpb24obm9kZSk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgICAgYWNjLnB1c2gobXV0YXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdNaXNzaW5nSWNvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBQcm9taXNlLmFsbChtdXRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkTXV0YXRpb25zKSB7XG4gICAgICAgIHBlcmZvcm0ocmVzb2x2ZWRNdXRhdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBoY2xBZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGhjbEFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICBoY2xSZW1vdmUoJ3BlbmRpbmcnKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICAgIG1hcmsoKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbWFyaygpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTm9kZShub2RlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICBwZXJmb3JtKFttdXRhdGlvbl0sIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVJY29ucyhuZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtYXliZUljb25EZWZpbml0aW9uKSB7XG4gICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBpY29uRGVmaW5pdGlvbiA9IChtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KS5pY29uID8gbWF5YmVJY29uRGVmaW5pdGlvbiA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KTtcbiAgICAgIHZhciBtYXNrID0gcGFyYW1zLm1hc2s7XG5cbiAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgIG1hc2sgPSAobWFzayB8fCB7fSkuaWNvbiA/IG1hc2sgOiBmaW5kSWNvbkRlZmluaXRpb24obWFzayB8fCB7fSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KGljb25EZWZpbml0aW9uLCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcGFyYW1zKSwge30sIHtcbiAgICAgICAgbWFzazogbWFza1xuICAgICAgfSkpO1xuICAgIH07XG4gIH1cblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGljb25EZWZpbml0aW9uKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0sXG4gICAgICAgIF9wYXJhbXMkc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICAgIF9wYXJhbXMkbWFzayA9IHBhcmFtcy5tYXNrLFxuICAgICAgICBtYXNrID0gX3BhcmFtcyRtYXNrID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrLFxuICAgICAgICBfcGFyYW1zJG1hc2tJZCA9IHBhcmFtcy5tYXNrSWQsXG4gICAgICAgIG1hc2tJZCA9IF9wYXJhbXMkbWFza0lkID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrSWQsXG4gICAgICAgIF9wYXJhbXMkdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICAgIF9wYXJhbXMkdGl0bGVJZCA9IHBhcmFtcy50aXRsZUlkLFxuICAgICAgICB0aXRsZUlkID0gX3BhcmFtcyR0aXRsZUlkID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZUlkLFxuICAgICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICAgIF9wYXJhbXMkYXR0cmlidXRlcyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlcztcbiAgICBpZiAoIWljb25EZWZpbml0aW9uKSByZXR1cm47XG4gICAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgICAgaWNvbk5hbWUgPSBpY29uRGVmaW5pdGlvbi5pY29uTmFtZSxcbiAgICAgICAgaWNvbiA9IGljb25EZWZpbml0aW9uLmljb247XG4gICAgcmV0dXJuIGRvbVZhcmlhbnRzKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHR5cGU6ICdpY29uJ1xuICAgIH0sIGljb25EZWZpbml0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbEhvb2tzKCdiZWZvcmVET01FbGVtZW50Q3JlYXRpb24nLCB7XG4gICAgICAgIGljb25EZWZpbml0aW9uOiBpY29uRGVmaW5pdGlvbixcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQodGl0bGVJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgICBhdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgICAgbWFzazogbWFzayA/IGFzRm91bmRJY29uKG1hc2suaWNvbikgOiB7XG4gICAgICAgICAgICBmb3VuZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIGljb246IHt9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSksIHRyYW5zZm9ybSksXG4gICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgICB0aXRsZUlkOiB0aXRsZUlkLFxuICAgICAgICBleHRyYToge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIFJlcGxhY2VFbGVtZW50cyA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGljb246IHJlc29sdmVJY29ucyhyZW5kZXIpXG4gICAgICB9O1xuICAgIH0sXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrczogZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrcyhhY2N1bXVsYXRvcikge1xuICAgICAgICAgIGFjY3VtdWxhdG9yLnRyZWVDYWxsYmFjayA9IG9uVHJlZTtcbiAgICAgICAgICBhY2N1bXVsYXRvci5ub2RlQ2FsbGJhY2sgPSBvbk5vZGU7XG4gICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycyQkMSkge1xuICAgICAgcHJvdmlkZXJzJCQxLmkyc3ZnID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZSxcbiAgICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIG9uVHJlZShub2RlLCBjYWxsYmFjayk7XG4gICAgICB9O1xuXG4gICAgICBwcm92aWRlcnMkJDEuZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uID0gZnVuY3Rpb24gKG5vZGUsIG5vZGVNZXRhKSB7XG4gICAgICAgIHZhciBpY29uTmFtZSA9IG5vZGVNZXRhLmljb25OYW1lLFxuICAgICAgICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgICAgICAgIHRpdGxlSWQgPSBub2RlTWV0YS50aXRsZUlkLFxuICAgICAgICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgICAgICAgc3ltYm9sID0gbm9kZU1ldGEuc3ltYm9sLFxuICAgICAgICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICAgICAgICBtYXNrSWQgPSBub2RlTWV0YS5tYXNrSWQsXG4gICAgICAgICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIFByb21pc2UuYWxsKFtmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSwgbWFzay5pY29uTmFtZSA/IGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KSA6IFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBmb3VuZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogNTEyLFxuICAgICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgICAgICBpY29uOiB7fVxuICAgICAgICAgIH0pXSkudGhlbihmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgICAgbWFpbiA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICAgIG1hc2sgPSBfcmVmMlsxXTtcblxuICAgICAgICAgICAgcmVzb2x2ZShbbm9kZSwgbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICAgICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICB0aXRsZUlkOiB0aXRsZUlkLFxuICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSldKTtcbiAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHByb3ZpZGVycyQkMS5nZW5lcmF0ZUFic3RyYWN0SWNvbiA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfcmVmMy5jaGlsZHJlbixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgbWFpbiA9IF9yZWYzLm1haW4sXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBfcmVmMy50cmFuc2Zvcm0sXG4gICAgICAgICAgICBzdHlsZXMgPSBfcmVmMy5zdHlsZXM7XG4gICAgICAgIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICAgICAgICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0Q2hpbGQ7XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgbmV4dENoaWxkID0gY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZUFic3RyYWN0VHJhbnNmb3JtR3JvdXBpbmcnLCB7XG4gICAgICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogbWFpbi53aWR0aCxcbiAgICAgICAgICAgIGljb25XaWR0aDogbWFpbi53aWR0aFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQgfHwgbWFpbi5pY29uKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIExheWVycyA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxheWVyOiBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgICAgICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgICB2YXIgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICAgICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzO1xuICAgICAgICAgIHJldHVybiBkb21WYXJpYW50cyh7XG4gICAgICAgICAgICB0eXBlOiAnbGF5ZXInXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbEhvb2tzKCdiZWZvcmVET01FbGVtZW50Q3JlYXRpb24nLCB7XG4gICAgICAgICAgICAgIGFzc2VtYmxlcjogYXNzZW1ibGVyLFxuICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIGFzc2VtYmxlcihmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhLmFic3RyYWN0KTtcbiAgICAgICAgICAgICAgfSkgOiBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhcmdzLmFic3RyYWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFtcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1sYXllcnNcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpLmpvaW4oJyAnKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgTGF5ZXJzQ291bnRlciA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50ZXI6IGZ1bmN0aW9uIGNvdW50ZXIoY29udGVudCkge1xuICAgICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgIHZhciBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgICAgICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlLFxuICAgICAgICAgICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICAgICAgICAgIF9wYXJhbXMkYXR0cmlidXRlcyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgICAgICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlcztcbiAgICAgICAgICByZXR1cm4gZG9tVmFyaWFudHMoe1xuICAgICAgICAgICAgdHlwZTogJ2NvdW50ZXInLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxIb29rcygnYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uJywge1xuICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdCh7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLWxheWVycy1jb3VudGVyXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIExheWVyc1RleHQgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBmdW5jdGlvbiB0ZXh0KGNvbnRlbnQpIHtcbiAgICAgICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgICAgICAgICAgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICAgICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgICAgICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgICAgICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gICAgICAgICAgcmV0dXJuIGRvbVZhcmlhbnRzKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsSG9va3MoJ2JlZm9yZURPTUVsZW1lbnRDcmVhdGlvbicsIHtcbiAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSksIHRyYW5zZm9ybSksXG4gICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1sYXllcnMtdGV4dFwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzJCQxKSB7XG4gICAgICBwcm92aWRlcnMkJDEuZ2VuZXJhdGVMYXllcnNUZXh0ID0gZnVuY3Rpb24gKG5vZGUsIG5vZGVNZXRhKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgICAgICAgdmFyIHdpZHRoID0gbnVsbDtcbiAgICAgICAgdmFyIGhlaWdodCA9IG51bGw7XG5cbiAgICAgICAgaWYgKElTX0lFKSB7XG4gICAgICAgICAgdmFyIGNvbXB1dGVkRm9udFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmZvbnRTaXplLCAxMCk7XG4gICAgICAgICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgd2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggLyBjb21wdXRlZEZvbnRTaXplO1xuICAgICAgICAgIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyBjb21wdXRlZEZvbnRTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5hdXRvQTExeSAmJiAhdGl0bGUpIHtcbiAgICAgICAgICBleHRyYS5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICAgICAgY29udGVudDogbm9kZS5pbm5lckhUTUwsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICAgIH0pXSk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgQ0xFQU5fQ09OVEVOVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIlxcXCJcIiwgJ3VnJyk7XG4gIHZhciBTRUNPTkRBUllfVU5JQ09ERV9SQU5HRSA9IFsxMTA1OTIwLCAxMTEyMzE5XTtcbiAgZnVuY3Rpb24gaGV4VmFsdWVGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGNsZWFuZWQgPSBjb250ZW50LnJlcGxhY2UoQ0xFQU5fQ09OVEVOVF9QQVRURVJOLCAnJyk7XG4gICAgdmFyIGNvZGVQb2ludCA9IGNvZGVQb2ludEF0KGNsZWFuZWQsIDApO1xuICAgIHZhciBpc1ByZXBlbmRUZW4gPSBjb2RlUG9pbnQgPj0gU0VDT05EQVJZX1VOSUNPREVfUkFOR0VbMF0gJiYgY29kZVBvaW50IDw9IFNFQ09OREFSWV9VTklDT0RFX1JBTkdFWzFdO1xuICAgIHZhciBpc0RvdWJsZWQgPSBjbGVhbmVkLmxlbmd0aCA9PT0gMiA/IGNsZWFuZWRbMF0gPT09IGNsZWFuZWRbMV0gOiBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGlzRG91YmxlZCA/IHRvSGV4KGNsZWFuZWRbMF0pIDogdG9IZXgoY2xlYW5lZCksXG4gICAgICBpc1NlY29uZGFyeTogaXNQcmVwZW5kVGVuIHx8IGlzRG91YmxlZFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgcG9zaXRpb24pIHtcbiAgICB2YXIgcGVuZGluZ0F0dHJpYnV0ZSA9IFwiXCIuY29uY2F0KERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORykuY29uY2F0KHBvc2l0aW9uLnJlcGxhY2UoJzonLCAnLScpKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgbm9kZSBpcyBhbHJlYWR5IGJlaW5nIHByb2Nlc3NlZFxuICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW4gPSB0b0FycmF5KG5vZGUuY2hpbGRyZW4pO1xuICAgICAgdmFyIGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zaXRpb247XG4gICAgICB9KVswXTtcbiAgICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3NpdGlvbik7XG4gICAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpLm1hdGNoKEZPTlRfRkFNSUxZX1BBVFRFUk4pO1xuICAgICAgdmFyIGZvbnRXZWlnaHQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC13ZWlnaHQnKTtcbiAgICAgIHZhciBjb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ICYmICFmb250RmFtaWx5KSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIGl0IGJ1dCB0aGUgY3VycmVudCBjb21wdXRlZCBzdHlsZSBkb2VzIG5vdCByZXN1bHQgaW4gYSBmb250LWZhbWlseSxcbiAgICAgICAgLy8gdGhhdCBwcm9iYWJseSBtZWFucyB0aGF0IGEgY2xhc3MgbmFtZSB0aGF0IHdhcyBwcmV2aW91c2x5IHByZXNlbnQgdG8gbWFrZSB0aGUgaWNvbiBoYXMgYmVlblxuICAgICAgICAvLyByZW1vdmVkLiBTbyB3ZSBub3cgc2hvdWxkIGRlbGV0ZSB0aGUgaWNvbi5cbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9IGVsc2UgaWYgKGZvbnRGYW1pbHkgJiYgY29udGVudCAhPT0gJ25vbmUnICYmIGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIHZhciBfY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG5cbiAgICAgICAgdmFyIGZhbWlseSA9IH5bJ1NoYXJwJ10uaW5kZXhPZihmb250RmFtaWx5WzJdKSA/IEZBTUlMWV9TSEFSUCA6IEZBTUlMWV9DTEFTU0lDO1xuICAgICAgICB2YXIgcHJlZml4ID0gflsnU29saWQnLCAnUmVndWxhcicsICdMaWdodCcsICdUaGluJywgJ0R1b3RvbmUnLCAnQnJhbmRzJywgJ0tpdCddLmluZGV4T2YoZm9udEZhbWlseVsyXSkgPyBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtmb250RmFtaWx5WzJdLnRvTG93ZXJDYXNlKCldIDogRk9OVF9XRUlHSFRfVE9fUFJFRklYW2ZhbWlseV1bZm9udFdlaWdodF07XG5cbiAgICAgICAgdmFyIF9oZXhWYWx1ZUZyb21Db250ZW50ID0gaGV4VmFsdWVGcm9tQ29udGVudChfY29udGVudCksXG4gICAgICAgICAgICBoZXhWYWx1ZSA9IF9oZXhWYWx1ZUZyb21Db250ZW50LnZhbHVlLFxuICAgICAgICAgICAgaXNTZWNvbmRhcnkgPSBfaGV4VmFsdWVGcm9tQ29udGVudC5pc1NlY29uZGFyeTtcblxuICAgICAgICB2YXIgaXNWNCA9IGZvbnRGYW1pbHlbMF0uc3RhcnRzV2l0aCgnRm9udEF3ZXNvbWUnKTtcbiAgICAgICAgdmFyIGljb25OYW1lID0gYnlVbmljb2RlKHByZWZpeCwgaGV4VmFsdWUpO1xuICAgICAgICB2YXIgaWNvbklkZW50aWZpZXIgPSBpY29uTmFtZTtcblxuICAgICAgICBpZiAoaXNWNCkge1xuICAgICAgICAgIHZhciBpY29uTmFtZTQgPSBieU9sZFVuaWNvZGUoaGV4VmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGljb25OYW1lNC5pY29uTmFtZSAmJiBpY29uTmFtZTQucHJlZml4KSB7XG4gICAgICAgICAgICBpY29uTmFtZSA9IGljb25OYW1lNC5pY29uTmFtZTtcbiAgICAgICAgICAgIHByZWZpeCA9IGljb25OYW1lNC5wcmVmaXg7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE9ubHkgY29udmVydCB0aGUgcHNldWRvIGVsZW1lbnQgaW4gdGhpcyA6OmJlZm9yZS86OmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAgIC8vIGFscmVhZHkgZG9uZSBzbyB3aXRoIHRoZSBzYW1lIHByZWZpeCBhbmQgaWNvbk5hbWVcblxuXG4gICAgICAgIGlmIChpY29uTmFtZSAmJiAhaXNTZWNvbmRhcnkgJiYgKCFhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9QUkVGSVgpICE9PSBwcmVmaXggfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfSUNPTikgIT09IGljb25JZGVudGlmaWVyKSkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUsIGljb25JZGVudGlmaWVyKTtcblxuICAgICAgICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBvbGQgb25lLCBzaW5jZSB3ZSdyZSByZXBsYWNpbmcgaXQgd2l0aCBhIG5ldyBvbmVcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtZXRhID0gYmxhbmtNZXRhKCk7XG4gICAgICAgICAgdmFyIGV4dHJhID0gbWV0YS5leHRyYTtcbiAgICAgICAgICBleHRyYS5hdHRyaWJ1dGVzW0RBVEFfRkFfUFNFVURPX0VMRU1FTlRdID0gcG9zaXRpb247XG4gICAgICAgICAgZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkudGhlbihmdW5jdGlvbiAobWFpbikge1xuICAgICAgICAgICAgdmFyIF9hYnN0cmFjdCA9IG1ha2VJbmxpbmVTdmdBYnN0cmFjdChfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbWV0YSksIHt9LCB7XG4gICAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgICBtYXNrOiBlbXB0eUNhbm9uaWNhbEljb24oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWU6IGljb25JZGVudGlmaWVyLFxuICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09ICc6OmJlZm9yZScpIHtcbiAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gX2Fic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShub2RlKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtyZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzo6YmVmb3JlJyksIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOjphZnRlcicpXSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzYWJsZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuaGVhZCAmJiAhflRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTLmluZGV4T2Yobm9kZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpICYmICFub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSAmJiAoIW5vZGUucGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudE5vZGUudGFnTmFtZSAhPT0gJ3N2ZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VhcmNoUHNldWRvRWxlbWVudHMocm9vdCkge1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBvcGVyYXRpb25zID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuZmlsdGVyKHByb2Nlc3NhYmxlKS5tYXAocmVwbGFjZSk7XG4gICAgICB2YXIgZW5kID0gcGVyZi5iZWdpbignc2VhcmNoUHNldWRvRWxlbWVudHMnKTtcbiAgICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgICAgUHJvbWlzZS5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIFBzZXVkb0VsZW1lbnRzID0ge1xuICAgIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3M6IGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3MoYWNjdW11bGF0b3IpIHtcbiAgICAgICAgICBhY2N1bXVsYXRvci5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gc2VhcmNoUHNldWRvRWxlbWVudHM7XG4gICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycyQkMSkge1xuICAgICAgcHJvdmlkZXJzJCQxLnBzZXVkb0VsZW1lbnRzMnN2ZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGU7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHNlYXJjaFBzZXVkb0VsZW1lbnRzKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX3Vud2F0Y2hlZCA9IGZhbHNlO1xuICB2YXIgTXV0YXRpb25PYnNlcnZlciQxID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9tOiB7XG4gICAgICAgICAgdW53YXRjaDogZnVuY3Rpb24gdW53YXRjaCgpIHtcbiAgICAgICAgICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICAgICAgX3Vud2F0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9vdHN0cmFwOiBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgICAgICAgb2JzZXJ2ZShjaGFpbkhvb2tzKCdtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzJywge30pKTtcbiAgICAgICAgfSxcbiAgICAgICAgbm9BdXRvOiBmdW5jdGlvbiBub0F1dG8oKSB7XG4gICAgICAgICAgZGlzY29ubmVjdCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaDogZnVuY3Rpb24gd2F0Y2gocGFyYW1zKSB7XG4gICAgICAgICAgdmFyIG9ic2VydmVNdXRhdGlvbnNSb290ID0gcGFyYW1zLm9ic2VydmVNdXRhdGlvbnNSb290O1xuXG4gICAgICAgICAgaWYgKF91bndhdGNoZWQpIHtcbiAgICAgICAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmUoY2hhaW5Ib29rcygnbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrcycsIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgcGFyc2VUcmFuc2Zvcm1TdHJpbmcgPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0ge1xuICAgICAgc2l6ZTogMTYsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIGZsaXBYOiBmYWxzZSxcbiAgICAgIGZsaXBZOiBmYWxzZSxcbiAgICAgIHJvdGF0ZTogMFxuICAgIH07XG4gICAgcmV0dXJuIHRyYW5zZm9ybVN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG4pIHtcbiAgICAgIHZhciBwYXJ0cyA9IG4udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpO1xuICAgICAgdmFyIGZpcnN0ID0gcGFydHNbMF07XG4gICAgICB2YXIgcmVzdCA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICdoJykge1xuICAgICAgICBhY2MuZmxpcFggPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICAgIGFjYy5mbGlwWSA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHJlc3QgPSBwYXJzZUZsb2F0KHJlc3QpO1xuXG4gICAgICBpZiAoaXNOYU4ocmVzdCkpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChmaXJzdCkge1xuICAgICAgICBjYXNlICdncm93JzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICBhY2Mucm90YXRlID0gYWNjLnJvdGF0ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdHJhbnNmb3JtKTtcbiAgfTtcbiAgdmFyIFBvd2VyVHJhbnNmb3JtcyA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcnNlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJzZU5vZGVBdHRyaWJ1dGVzOiBmdW5jdGlvbiBwYXJzZU5vZGVBdHRyaWJ1dGVzKGFjY3VtdWxhdG9yLCBub2RlKSB7XG4gICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRyYW5zZm9ybScpO1xuXG4gICAgICAgICAgaWYgKHRyYW5zZm9ybVN0cmluZykge1xuICAgICAgICAgICAgYWNjdW11bGF0b3IudHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzKSB7XG4gICAgICBwcm92aWRlcnMuZ2VuZXJhdGVBYnN0cmFjdFRyYW5zZm9ybUdyb3VwaW5nID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gX3JlZi5jb250YWluZXJXaWR0aCxcbiAgICAgICAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICAgICAgICB2YXIgb3V0ZXIgPSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoY29udGFpbmVyV2lkdGggLyAyLCBcIiAyNTYpXCIpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbm5lclRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAqIDMyLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAqIDMyLCBcIikgXCIpO1xuICAgICAgICB2YXIgaW5uZXJTY2FsZSA9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICAgICAgICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgICAgICAgdmFyIGlubmVyID0ge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJcIi5jb25jYXQoaW5uZXJUcmFuc2xhdGUsIFwiIFwiKS5jb25jYXQoaW5uZXJTY2FsZSwgXCIgXCIpLmNvbmNhdChpbm5lclJvdGF0ZSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhdGggPSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoaWNvbldpZHRoIC8gMiAqIC0xLCBcIiAtMjU2KVwiKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IHtcbiAgICAgICAgICBvdXRlcjogb3V0ZXIsXG4gICAgICAgICAgaW5uZXI6IGlubmVyLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMih7fSwgb3BlcmF0aW9ucy5vdXRlciksXG4gICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCBvcGVyYXRpb25zLmlubmVyKSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgICB0YWc6IG1haW4uaWNvbi50YWcsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBtYWluLmljb24uY2hpbGRyZW4sXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtYWluLmljb24uYXR0cmlidXRlcyksIG9wZXJhdGlvbnMucGF0aClcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBBTExfU1BBQ0UgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfTtcblxuICBmdW5jdGlvbiBmaWxsQmxhY2soX2Fic3RyYWN0KSB7XG4gICAgdmFyIGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gICAgaWYgKF9hYnN0cmFjdC5hdHRyaWJ1dGVzICYmIChfYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsIHx8IGZvcmNlKSkge1xuICAgICAgX2Fic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCA9ICdibGFjayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hYnN0cmFjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlR3JvdXAoX2Fic3RyYWN0Mikge1xuICAgIGlmIChfYWJzdHJhY3QyLnRhZyA9PT0gJ2cnKSB7XG4gICAgICByZXR1cm4gX2Fic3RyYWN0Mi5jaGlsZHJlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtfYWJzdHJhY3QyXTtcbiAgICB9XG4gIH1cblxuICB2YXIgTWFza3MgPSB7XG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyc2VOb2RlQXR0cmlidXRlczogZnVuY3Rpb24gcGFyc2VOb2RlQXR0cmlidXRlcyhhY2N1bXVsYXRvciwgbm9kZSkge1xuICAgICAgICAgIHZhciBtYXNrRGF0YSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2snKTtcbiAgICAgICAgICB2YXIgbWFzayA9ICFtYXNrRGF0YSA/IGVtcHR5Q2Fub25pY2FsSWNvbigpIDogZ2V0Q2Fub25pY2FsSWNvbihtYXNrRGF0YS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkudHJpbSgpO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGlmICghbWFzay5wcmVmaXgpIHtcbiAgICAgICAgICAgIG1hc2sucHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFjY3VtdWxhdG9yLm1hc2sgPSBtYXNrO1xuICAgICAgICAgIGFjY3VtdWxhdG9yLm1hc2tJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2staWQnKTtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzKSB7XG4gICAgICBwcm92aWRlcnMuZ2VuZXJhdGVBYnN0cmFjdE1hc2sgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICAgICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgICAgICAgZXhwbGljaXRNYXNrSWQgPSBfcmVmLm1hc2tJZCxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuICAgICAgICB2YXIgbWFpbldpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgICAgICAgIG1haW5QYXRoID0gbWFpbi5pY29uO1xuICAgICAgICB2YXIgbWFza1dpZHRoID0gbWFzay53aWR0aCxcbiAgICAgICAgICAgIG1hc2tQYXRoID0gbWFzay5pY29uO1xuICAgICAgICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBtYXNrV2lkdGgsXG4gICAgICAgICAgaWNvbldpZHRoOiBtYWluV2lkdGhcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBtYXNrUmVjdCA9IHtcbiAgICAgICAgICB0YWc6ICdyZWN0JyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQUxMX1NQQUNFKSwge30sIHtcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluID0gbWFpblBhdGguY2hpbGRyZW4gPyB7XG4gICAgICAgICAgY2hpbGRyZW46IG1haW5QYXRoLmNoaWxkcmVuLm1hcChmaWxsQmxhY2spXG4gICAgICAgIH0gOiB7fTtcbiAgICAgICAgdmFyIG1hc2tJbm5lckdyb3VwID0ge1xuICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCB0cmFucy5pbm5lciksXG4gICAgICAgICAgY2hpbGRyZW46IFtmaWxsQmxhY2soX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgICAgdGFnOiBtYWluUGF0aC50YWcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbWFpblBhdGguYXR0cmlidXRlcyksIHRyYW5zLnBhdGgpXG4gICAgICAgICAgfSwgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluKSldXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXNrT3V0ZXJHcm91cCA9IHtcbiAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMih7fSwgdHJhbnMub3V0ZXIpLFxuICAgICAgICAgIGNoaWxkcmVuOiBbbWFza0lubmVyR3JvdXBdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXNrSWQgPSBcIm1hc2stXCIuY29uY2F0KGV4cGxpY2l0TWFza0lkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICAgICAgdmFyIGNsaXBJZCA9IFwiY2xpcC1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgICB2YXIgbWFza1RhZyA9IHtcbiAgICAgICAgICB0YWc6ICdtYXNrJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQUxMX1NQQUNFKSwge30sIHtcbiAgICAgICAgICAgIGlkOiBtYXNrSWQsXG4gICAgICAgICAgICBtYXNrVW5pdHM6ICd1c2VyU3BhY2VPblVzZScsXG4gICAgICAgICAgICBtYXNrQ29udGVudFVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW46IFttYXNrUmVjdCwgbWFza091dGVyR3JvdXBdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZzID0ge1xuICAgICAgICAgIHRhZzogJ2RlZnMnLFxuICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgdGFnOiAnY2xpcFBhdGgnLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICBpZDogY2xpcElkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IGRlR3JvdXAobWFza1BhdGgpXG4gICAgICAgICAgfSwgbWFza1RhZ11cbiAgICAgICAgfTtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChkZWZzLCB7XG4gICAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgICAgICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgICAgICAgICB9LCBBTExfU1BBQ0UpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgTWlzc2luZ0ljb25JbmRpY2F0b3IgPSB7XG4gICAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycykge1xuICAgICAgdmFyIHJlZHVjZU1vdGlvbiA9IGZhbHNlO1xuXG4gICAgICBpZiAoV0lORE9XLm1hdGNoTWVkaWEpIHtcbiAgICAgICAgcmVkdWNlTW90aW9uID0gV0lORE9XLm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcbiAgICAgIH1cblxuICAgICAgcHJvdmlkZXJzLm1pc3NpbmdJY29uQWJzdHJhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIEZJTEwgPSB7XG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIEFOSU1BVElPTl9CQVNFID0ge1xuICAgICAgICAgIGF0dHJpYnV0ZVR5cGU6ICdYTUwnLFxuICAgICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gICAgICAgICAgZHVyOiAnMnMnXG4gICAgICAgIH07IC8vIFJpbmdcblxuICAgICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZJTEwpLCB7fSwge1xuICAgICAgICAgICAgZDogJ00xNTYuNSw0NDcuN2wtMTIuNiwyOS41Yy0xOC43LTkuNS0zNS45LTIxLjItNTEuNS0zNC45bDIyLjctMjIuN0MxMjcuNiw0MzAuNSwxNDEuNSw0NDAsMTU2LjUsNDQ3Ljd6IE00MC42LDI3Mkg4LjUgYzEuNCwyMS4yLDUuNCw0MS43LDExLjcsNjEuMUw1MCwzMjEuMkM0NS4xLDMwNS41LDQxLjgsMjg5LDQwLjYsMjcyeiBNNDAuNiwyNDBjMS40LTE4LjgsNS4yLTM3LDExLjEtNTQuMWwtMjkuNS0xMi42IEMxNC43LDE5NC4zLDEwLDIxNi43LDguNSwyNDBINDAuNnogTTY0LjMsMTU2LjVjNy44LTE0LjksMTcuMi0yOC44LDI4LjEtNDEuNUw2OS43LDkyLjNjLTEzLjcsMTUuNi0yNS41LDMyLjgtMzQuOSw1MS41IEw2NC4zLDE1Ni41eiBNMzk3LDQxOS42Yy0xMy45LDEyLTI5LjQsMjIuMy00Ni4xLDMwLjRsMTEuOSwyOS44YzIwLjctOS45LDM5LjgtMjIuNiw1Ni45LTM3LjZMMzk3LDQxOS42eiBNMTE1LDkyLjQgYzEzLjktMTIsMjkuNC0yMi4zLDQ2LjEtMzAuNGwtMTEuOS0yOS44Yy0yMC43LDkuOS0zOS44LDIyLjYtNTYuOCwzNy42TDExNSw5Mi40eiBNNDQ3LjcsMzU1LjVjLTcuOCwxNC45LTE3LjIsMjguOC0yOC4xLDQxLjUgbDIyLjcsMjIuN2MxMy43LTE1LjYsMjUuNS0zMi45LDM0LjktNTEuNUw0NDcuNywzNTUuNXogTTQ3MS40LDI3MmMtMS40LDE4LjgtNS4yLDM3LTExLjEsNTQuMWwyOS41LDEyLjYgYzcuNS0yMS4xLDEyLjItNDMuNSwxMy42LTY2LjhINDcxLjR6IE0zMjEuMiw0NjJjLTE1LjcsNS0zMi4yLDguMi00OS4yLDkuNHYzMi4xYzIxLjItMS40LDQxLjctNS40LDYxLjEtMTEuN0wzMjEuMiw0NjJ6IE0yNDAsNDcxLjRjLTE4LjgtMS40LTM3LTUuMi01NC4xLTExLjFsLTEyLjYsMjkuNWMyMS4xLDcuNSw0My41LDEyLjIsNjYuOCwxMy42VjQ3MS40eiBNNDYyLDE5MC44YzUsMTUuNyw4LjIsMzIuMiw5LjQsNDkuMmgzMi4xIGMtMS40LTIxLjItNS40LTQxLjctMTEuNy02MS4xTDQ2MiwxOTAuOHogTTkyLjQsMzk3Yy0xMi0xMy45LTIyLjMtMjkuNC0zMC40LTQ2LjFsLTI5LjgsMTEuOWM5LjksMjAuNywyMi42LDM5LjgsMzcuNiw1Ni45IEw5Mi40LDM5N3ogTTI3Miw0MC42YzE4LjgsMS40LDM2LjksNS4yLDU0LjEsMTEuMWwxMi42LTI5LjVDMzE3LjcsMTQuNywyOTUuMywxMCwyNzIsOC41VjQwLjZ6IE0xOTAuOCw1MCBjMTUuNy01LDMyLjItOC4yLDQ5LjItOS40VjguNWMtMjEuMiwxLjQtNDEuNyw1LjQtNjEuMSwxMS43TDE5MC44LDUweiBNNDQyLjMsOTIuM0w0MTkuNiwxMTVjMTIsMTMuOSwyMi4zLDI5LjQsMzAuNSw0Ni4xIGwyOS44LTExLjlDNDcwLDEyOC41LDQ1Ny4zLDEwOS40LDQ0Mi4zLDkyLjN6IE0zOTcsOTIuNGwyMi43LTIyLjdjLTE1LjYtMTMuNy0zMi44LTI1LjUtNTEuNS0zNC45bC0xMi42LDI5LjUgQzM3MC40LDcyLjEsMzg0LjQsODEuNSwzOTcsOTIuNHonXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBBTklNQVRJT05fQkFTRSksIHt9LCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogJ29wYWNpdHknXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBkb3QgPSB7XG4gICAgICAgICAgdGFnOiAnY2lyY2xlJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRklMTCksIHt9LCB7XG4gICAgICAgICAgICBjeDogJzI1NicsXG4gICAgICAgICAgICBjeTogJzM2NCcsXG4gICAgICAgICAgICByOiAnMjgnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFyZWR1Y2VNb3Rpb24pIHtcbiAgICAgICAgICBkb3QuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICB0YWc6ICdhbmltYXRlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBBTklNQVRJT05fQkFTRSksIHt9LCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgICAgICAgICAgdmFsdWVzOiAnMjg7MTQ7Mjg7Mjg7MTQ7Mjg7J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YWc6ICdhbmltYXRlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBPUEFDSVRZX0FOSU1BVEUpLCB7fSwge1xuICAgICAgICAgICAgICB2YWx1ZXM6ICcxOzA7MTsxOzA7MTsnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZ0NoaWxkcmVuLnB1c2goZG90KTtcbiAgICAgICAgZ0NoaWxkcmVuLnB1c2goe1xuICAgICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGSUxMKSwge30sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIGQ6ICdNMjYzLjcsMzEyaC0xNmMtNi42LDAtMTItNS40LTEyLTEyYzAtNzEsNzcuNC02My45LDc3LjQtMTA3LjhjMC0yMC0xNy44LTQwLjItNTcuNC00MC4yYy0yOS4xLDAtNDQuMyw5LjYtNTkuMiwyOC43IGMtMy45LDUtMTEuMSw2LTE2LjIsMi40bC0xMy4xLTkuMmMtNS42LTMuOS02LjktMTEuOC0yLjYtMTcuMmMyMS4yLTI3LjIsNDYuNC00NC43LDkxLjItNDQuN2M1Mi4zLDAsOTcuNCwyOS44LDk3LjQsODAuMiBjMCw2Ny42LTc3LjQsNjMuNS03Ny40LDEwNy44QzI3NS43LDMwNi42LDI3MC4zLDMxMiwyNjMuNywzMTJ6J1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkcmVuOiByZWR1Y2VNb3Rpb24gPyBbXSA6IFt7XG4gICAgICAgICAgICB0YWc6ICdhbmltYXRlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBPUEFDSVRZX0FOSU1BVEUpLCB7fSwge1xuICAgICAgICAgICAgICB2YWx1ZXM6ICcxOzA7MDswOzA7MTsnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVkdWNlTW90aW9uKSB7XG4gICAgICAgICAgLy8gRXhjbGFtYXRpb25cbiAgICAgICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGSUxMKSwge30sIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgT1BBQ0lUWV9BTklNQVRFKSwge30sIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnbWlzc2luZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBnQ2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBTdmdTeW1ib2xzID0ge1xuICAgIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcnNlTm9kZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uIHBhcnNlTm9kZUF0dHJpYnV0ZXMoYWNjdW11bGF0b3IsIG5vZGUpIHtcbiAgICAgICAgICB2YXIgc3ltYm9sRGF0YSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXN5bWJvbCcpO1xuICAgICAgICAgIHZhciBzeW1ib2wgPSBzeW1ib2xEYXRhID09PSBudWxsID8gZmFsc2UgOiBzeW1ib2xEYXRhID09PSAnJyA/IHRydWUgOiBzeW1ib2xEYXRhO1xuICAgICAgICAgIGFjY3VtdWxhdG9yWydzeW1ib2wnXSA9IHN5bWJvbDtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBwbHVnaW5zID0gW0luamVjdENTUywgUmVwbGFjZUVsZW1lbnRzLCBMYXllcnMsIExheWVyc0NvdW50ZXIsIExheWVyc1RleHQsIFBzZXVkb0VsZW1lbnRzLCBNdXRhdGlvbk9ic2VydmVyJDEsIFBvd2VyVHJhbnNmb3JtcywgTWFza3MsIE1pc3NpbmdJY29uSW5kaWNhdG9yLCBTdmdTeW1ib2xzXTtcblxuICByZWdpc3RlclBsdWdpbnMocGx1Z2lucywge1xuICAgIG1peG91dHNUbzogYXBpXG4gIH0pO1xuICBidW5rZXIoYm9vdHN0cmFwKTtcblxufSgpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWlzc2lvbiBmcm9tICcuL01pc3Npb24nO1xuaW1wb3J0IE9iamVjdGl2ZSBmcm9tICcuL09iamVjdGl2ZSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuaW1wb3J0ICcuL2Fzc2V0cy9mb250YXdlc29tZS9mb250YXdlc29tZSdcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgLy8gVE9ETyBjaGFuZ2UgdGVzdFxuICBjb25zdCB0ZXN0ID0gbmV3IFN0b3JhZ2UoKTtcbiAgXG4gIC8vIER1bW15IE1pc3Npb25zXG4gIGNvbnN0IG1pc3Npb24gPSBuZXcgTWlzc2lvbignVGVzdGluZyBtaXNzaW9uJyk7XG4gIHRlc3QuYWRkTWlzc2lvbihtaXNzaW9uKTtcblxuICAvLyBjaGVja3Mgc3RvcmFnZSBmb3Igb2JqZWN0aXZlcyBkdWUgdG9kYXkgYW5kIG1vdmVzIHRoZW0gdG8gVG9kYXkncyBtaXNzaW9uXG4gIGZ1bmN0aW9uIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpIHtcbiAgICBjb25zdCBzdG9yZWRUb2RvcyA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKVxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIHN0b3JlZFRvZG9zKSB7XG4gICAgICBjb25zdCBtaXNzaW9uT2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0T2JqZWN0aXZlcygpXG4gICAgICBmb3IoY29uc3Qgb2JqZWN0aXZlIG9mIG1pc3Npb25PYmplY3RpdmVzKSB7XG4gICAgICAgIGlmKGlzVG9kYXkob2JqZWN0aXZlKSkge1xuICAgICAgICAgIGNvbnN0IG9iak5hbWUgPSBvYmplY3RpdmUuZ2V0TmFtZSgpXG4gICAgICAgICAgY29uc3Qgb2JqRGVzY3JpcHRpb24gPSBvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICAgIGNvbnN0IG9iakRhdGUgPSBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpXG4gICAgICAgICAgY29uc3QgbmV3T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShvYmpOYW1lLCBvYmpEZXNjcmlwdGlvbiwgb2JqRGF0ZSlcbiAgICAgICAgICB0ZXN0LmRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uLmdldE5hbWUoKSwgb2JqZWN0aXZlLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIG5ld09iamVjdGl2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIG9iamVjdGl2ZSBpcyBkdWUgdG9kYXlcbiAgZnVuY3Rpb24gaXNUb2RheShvYmopIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRhdGVUb2RheSA9ICBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IGRhdGVNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBkYXRlWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IGZ1bGxEYXRlID0gYDAke2RhdGVNb250aH0vMCR7ZGF0ZVRvZGF5fS8ke2RhdGVZZWFyfWBcbiAgICBpZihvYmouZ2V0RGF0ZUZvcm1hdHRlZCgpID09PSBcInRvZGF5XCIgfHwgb2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gZnVsbERhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIER1bW15IE9iamVjdGl2ZXNcbiAgXG4gIGNvbnN0IHRvZGF5T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRvZGF5IG9iamVjdGl2ZVwiLCBcInRvZGFhYWF5XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdG9kYXlPYmplY3RpdmUpXG4gIGNvbnN0IHdlZWtPYmplY2V0aXZlID0gbmV3IE9iamVjdGl2ZShcIkZvciB0aGUgd2Vla1wiLCBcIndlZWVla1wiLCBcIjIwMjMtMDgtMDhcIilcbiAgdGVzdC5hZGRPYmplY3RpdmUoXCJUaGlzIFdlZWtcIiwgd2Vla09iamVjZXRpdmUpXG4gIC8vIGNvbnN0IHRyeWluZ1RvVG9kYXkgPSBuZXcgT2JqZWN0aXZlKFwiTW92ZSB0byBUb2RheVwiLCBcIm1vdmluZ1wiLCBcIjI3LzcvMjAyM1wiKVxuICAvLyB0ZXN0LmFkZE9iamVjdGl2ZShcIlRlc3RpbmcgbWlzc2lvblwiLCB0cnlpbmdUb1RvZGF5KVxuICBjb25zdCBtaXNzaW9uc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9ucycpO1xuICBjb25zdCBvYmplY3RpdmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9iamVjdGl2ZXMnKTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW9iai1tZXNzYWdlJyk7XG4gIGNvbnNvbGUubG9nKGlzVG9kYXkod2Vla09iamVjZXRpdmUpKVxuICAvLyBUT0RPIGFkZCBhIGNsb3NlIGJ1dHRvbiBvbiBmb3JtXG4gIC8vIEFkZCBtaXNzaW9uXG4gIGNvbnN0IGFkZE1pc3Npb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW1pc3Npb24nKTtcbiAgXG4gIGNvbnN0IG1pc3Npb25Gb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgbWlzc2lvbkZvcm1Cb3guY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tZm9ybS1ib3hcIilcblxuICBjb25zdCBtaXNzaW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgY29uc3QgbWlzc2lvbkZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgY29uc3QgbWlzc2lvbkZvcm1MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpXG4gIG1pc3Npb25Gb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWxlZ2VuZFwiKVxuICBtaXNzaW9uRm9ybUxlZ2VuZC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBNaXNzaW9uXCJcblxuICBjb25zdCBtaXNzaW9uTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG1pc3Npb25OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKVxuICBtaXNzaW9uTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJNaXNzaW9uIE5hbWU6XCJcblxuICBjb25zdCBtaXNzaW9uTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG1pc3Npb25OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG1pc3Npb25OYW1lSW5wdXQuaWQgPSBcIm5hbWVcIlxuICBtaXNzaW9uTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0aGUgbWlzc2lvbiBuYW1lXCJcblxuICBjb25zdCBjcmVhdGVNaXNzaW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBjcmVhdGVNaXNzaW9uQnRuLmlkID0gXCJjcmVhdGUtbWlzc2lvbi1idG5cIlxuICBjcmVhdGVNaXNzaW9uQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTWlzc2lvblwiXG5cbiAgY3JlYXRlTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBtaXNzaW9uTmFtZSA9IG1pc3Npb25OYW1lSW5wdXQudmFsdWVcbiAgICBpZiAobWlzc2lvbk5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG5ld01pc3Npb24gPSBuZXcgTWlzc2lvbihtaXNzaW9uTmFtZSlcbiAgICB0ZXN0LmFkZE1pc3Npb24obmV3TWlzc2lvbilcbiAgICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICByZW5kZXJNaXNzaW9ucygpXG4gIH0pXG4gIFxuICBtaXNzaW9uRm9ybUJveC5hcHBlbmRDaGlsZChtaXNzaW9uRm9ybSlcbiAgbWlzc2lvbkZvcm0uYXBwZW5kKG1pc3Npb25GaWVsZFNldClcbiAgbWlzc2lvbkZpZWxkU2V0LmFwcGVuZChtaXNzaW9uRm9ybUxlZ2VuZCwgbWlzc2lvbk5hbWVMYWJlbCwgY3JlYXRlTWlzc2lvbkJ0bilcbiAgbWlzc2lvbk5hbWVMYWJlbC5hcHBlbmRDaGlsZChtaXNzaW9uTmFtZUlucHV0KVxuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1pc3Npb25Gb3JtQm94KVxuXG4gIGFkZE1pc3Npb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZihtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICBtaXNzaW9uTmFtZUlucHV0LmZvY3VzKClcbiAgICB9XG4gIH0pXG4gIFxuXG4gIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm94XCIpXG4gIC8vIEFkZCBvYmplY3RpdmVcbiAgY29uc3QgYWRkT2JqZWN0aXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1vYmplY3RpdmUnKTtcblxuICBjb25zdCBvYmplY3RpdmVGb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBvYmplY3RpdmVGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICBvYmplY3RpdmVGb3JtQm94LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtZm9ybS1ib3hcIilcblxuICBjb25zdCBvYmplY3RpdmVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcblxuICBjb25zdCBvYmplY3RpdmVGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKVxuXG4gIGNvbnN0IG9iamVjdGl2ZUZvcm1MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpXG4gIG9iamVjdGl2ZUZvcm1MZWdlbmQuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZS1sZWdlbmRcIilcbiAgb2JqZWN0aXZlRm9ybUxlZ2VuZC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIG5ldyBvYmplY3RpdmVcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBvYmplY3RpdmVOYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib05hbWVcIilcbiAgb2JqZWN0aXZlTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJPYmplY3RpdmUgTmFtZTogXCJcblxuICBjb25zdCBvYmplY3RpdmVOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgb2JqZWN0aXZlTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICBvYmplY3RpdmVOYW1lSW5wdXQuaWQgPSBcIm9OYW1lXCJcbiAgb2JqZWN0aXZlTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0aGUgb2JqZWN0aXZlIG5hbWVcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvRGVzY3JpcHRpb25cIilcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiT2JqZWN0aXZlIERlc2NyaXB0aW9uOiBcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dC5pZCA9IFwib0Rlc2NyaXB0aW9uXCJcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiV2hhdCBpcyB0aGlzIG9iamVjdGl2ZSBhYm91dD9cIlxuXG4gIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBvYmplY3RpdmVEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib0R1ZURhdGVcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJPYmplY3RpdmUgRHVlIERhdGU6IFwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxuICBvYmplY3RpdmVEdWVEYXRlSW5wdXQuaWQgPSBcIm9EdWVEYXRlXCJcblxuICBjb25zdCBtaXNzaW9uUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgbWlzc2lvblBpY2tlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9NaXNzaW9uXCIpXG4gIG1pc3Npb25QaWNrZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTWlzc2lvbjogXCJcblxuICBjb25zdCBtaXNzaW9uUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gIG1pc3Npb25QaWNrZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwib01pc3Npb25cIilcbiAgbWlzc2lvblBpY2tlcklucHV0LmlkID0gXCJvTWlzc2lvblwiXG5cbiAgZm9yIChjb25zdCBtaXNzaW9uIG9mIHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKSkge1xuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7bWlzc2lvbi5nZXROYW1lKCl9YClcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHttaXNzaW9uLmdldE5hbWUoKX1gXG4gICAgICBtaXNzaW9uUGlja2VySW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbiAgICB9XG5cbiAgY29uc3QgY3JlYXRlT2JqZWN0aXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBjcmVhdGVPYmplY3RpdmVCdG4uaWQgPSBcImNyZWF0ZS1vYmplY3RpdmUtYnRuXCJcbiAgY3JlYXRlT2JqZWN0aXZlQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgT2JqZWN0aXZlXCJcblxuICBjcmVhdGVPYmplY3RpdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qgb2JqZWN0aXZlTmFtZSA9IG9iamVjdGl2ZU5hbWVJbnB1dC52YWx1ZVxuICAgIGlmIChvYmplY3RpdmVOYW1lID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb24gPSBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgY29uc3Qgb2JqZWN0aXZlRHVlRGF0ZSA9IG9iamVjdGl2ZUR1ZURhdGVJbnB1dC52YWx1ZVxuICAgIGNvbnN0IG9iamVjdGl2ZU1pc3Npb24gPSBtaXNzaW9uUGlja2VySW5wdXQudmFsdWVcbiAgICBjb25zdCBuZXdPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKG9iamVjdGl2ZU5hbWUsIG9iamVjdGl2ZURlc2NyaXB0aW9uLCBvYmplY3RpdmVEdWVEYXRlKVxuICAgIHRlc3QuYWRkT2JqZWN0aXZlKG9iamVjdGl2ZU1pc3Npb24sIG5ld09iamVjdGl2ZSlcbiAgICBvYmplY3RpdmVGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIHJlbmRlck1pc3Npb25zKClcbiAgICByZW5kZXJPYmplY3RpdmVzKHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uUGlja2VySW5wdXQudmFsdWUpKVxuICB9KVxuXG4gIG9iamVjdGl2ZUZvcm1Cb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlRm9ybSlcbiAgb2JqZWN0aXZlRm9ybS5hcHBlbmRDaGlsZChvYmplY3RpdmVGaWVsZHNldClcbiAgb2JqZWN0aXZlRmllbGRzZXQuYXBwZW5kKG9iamVjdGl2ZUZvcm1MZWdlbmQsIG9iamVjdGl2ZU5hbWVMYWJlbCwgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbCwgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsLCBtaXNzaW9uUGlja2VyTGFiZWwsIG1pc3Npb25QaWNrZXJJbnB1dCwgY3JlYXRlT2JqZWN0aXZlQnRuKVxuICBvYmplY3RpdmVOYW1lTGFiZWwuYXBwZW5kQ2hpbGQob2JqZWN0aXZlTmFtZUlucHV0KVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQpXG4gIG9iamVjdGl2ZUR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChvYmplY3RpdmVEdWVEYXRlSW5wdXQpXG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlRm9ybUJveClcblxuICBhZGRPYmplY3RpdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAob2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICBvYmplY3RpdmVOYW1lSW5wdXQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RpdmVGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgfSlcblxuICAvLyBjcmVhdGVzIG1pc3Npb24gZWxlbWVudCB1c2luZyBtaXNzaW9uIG9iamVjdFxuICBmdW5jdGlvbiBjcmVhdGVNaXNzaW9uRWxlbWVudChtaXNzaW9uKSB7XG4gICAgY29uc3QgbWlzc2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3Npb24nKTtcbiAgICBjb25zdCBtaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IGVkaXROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBlZGl0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVOYW1lXCIpXG4gICAgZWRpdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBtaXNzaW9uIG5hbWU6IFwiXG5cbiAgICBjb25zdCBlZGl0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZWRpdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgICBlZGl0TmFtZUlucHV0LmlkID0gXCJlTmFtZVwiXG4gICAgZWRpdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IG1pc3Npb24gbmFtZS4uLlwiXG5cbiAgICBlZGl0TmFtZUxhYmVsLmFwcGVuZENoaWxkKGVkaXROYW1lSW5wdXQpXG5cbiAgICBjb25zdCBkZWxldGVNaXNzaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIilcbiAgICBkZWxldGVNaXNzaW9uSW1nLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIilcbiAgICBkZWxldGVNaXNzaW9uSW1nLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXNxdWFyZS14bWFya1wiLCBcImZhLWxnXCIpXG5cbiAgICBtaXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlck9iamVjdGl2ZXMobWlzc2lvbik7XG4gICAgfSk7XG5cbiAgICBtaXNzaW9uRWxlbWVudC5hcHBlbmRDaGlsZChtaXNzaW9uVGV4dCk7XG5cbiAgICBpZiAobWlzc2lvblRleHQudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIiB8fCBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUaGlzIFdlZWtcIikge1xuICAgICAgcmV0dXJuIG1pc3Npb25FbGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZU1pc3Npb25JbWcpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbkltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVzdC5kZWxldGVNaXNzaW9uKG1pc3Npb25UZXh0LnRleHRDb250ZW50KVxuICAgICAgcmVuZGVyTWlzc2lvbnMoKVxuICAgIH0pXG5cbiAgICBtaXNzaW9uVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHwgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPT09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtaXNzaW9uRWxlbWVudC5yZW1vdmVDaGlsZChtaXNzaW9uVGV4dClcbiAgICAgIG1pc3Npb25FbGVtZW50LnJlbW92ZUNoaWxkKGRlbGV0ZU1pc3Npb25JbWcpXG4gICAgICBtaXNzaW9uRWxlbWVudC5hcHBlbmRDaGlsZChlZGl0TmFtZUxhYmVsKVxuICAgICAgZWRpdE5hbWVJbnB1dC5mb2N1cygpXG4gICAgfSlcblxuICAgIGVkaXROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGlmIChlZGl0TmFtZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3Qgb2xkTWlzc2lvbiA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LnJlbmFtZU1pc3Npb24ob2xkTWlzc2lvbi5nZXROYW1lKCksIGVkaXROYW1lSW5wdXQudmFsdWUpXG4gICAgICAgICAgcmVuZGVyTWlzc2lvbnMoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtaXNzaW9uRWxlbWVudDtcbiAgfVxuICAvLyBUT0RPIGFkZCBzdGF0dXMgdG8gb2JqZWN0aXZlP1xuICAvLyBDcmVhdGVzIG9iamVjdGl2ZSBlbGVtZW50IHVzaW5nIG9iamVjdGl2ZSBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUsIG1pc3Npb25OYW1lKSB7XG4gICAgY29uc3Qgb2JqZWN0aXZlRWxlbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBvYmplY3RpdmVFbGVtZW50Qm94LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtYm94XCIpXG4gICAgY29uc3Qgb2JqZWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9iamVjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb2JqZWN0aXZlJyk7XG4gICAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgb2JqZWN0aXZlVGV4dC50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBvYmplY3RpdmVDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG9iamVjdGl2ZUNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxuICAgIG9iamVjdGl2ZUNoZWNrQm94LmlkID0gb2JqZWN0aXZlLmdldE5hbWUoKVxuXG4gICAgb2JqZWN0aXZlQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChvYmplY3RpdmVDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgIHRlc3QuZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50KVxuICAgICAgICByZW5kZXJPYmplY3RpdmVzKHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlcygpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbkJveC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWRlc2NyaXB0aW9uXCIpXG5cbiAgICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBcbiAgICBpZiAob2JqZWN0aXZlLmdldERlc2NyaXB0aW9uKCkgPT09IFwiXCIpIHtcbiAgICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJObyBkZXNjcmlwdGlvblwiXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldERlc2NyaXB0aW9uKClcbiAgICB9XG4gICAgLy8gVE9ETyBsaXN0ZW5lci9idXR0b24gdG8gZWRpdCBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIGRhdGUgb2Ygb2JqZWN0aXZlXG5cbiAgICBvYmplY3RpdmVFbGVtZW50Qm94LmFwcGVuZChvYmplY3RpdmVDaGVja0JveCwgb2JqZWN0aXZlRWxlbWVudClcbiAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZChvYmplY3RpdmVUZXh0LCBvYmplY3RpdmVEZXNjcmlwdGlvbkJveClcbiAgICBvYmplY3RpdmVEZXNjcmlwdGlvbkJveC5hcHBlbmRDaGlsZChvYmplY3RpdmVEZXNjcmlwdGlvbilcblxuICAgIGlmIChvYmplY3RpdmUuZ2V0RHVlRGF0ZSgpICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBvYmplY3RpdmVEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgaWYgKG9iamVjdGl2ZS5nZXREdWVEYXRlKCkgPT09IFwidG9kYXlcIikge1xuICAgICAgICBvYmplY3RpdmVEdWVEYXRlLnRleHRDb250ZW50ID0gXCJUb2RheVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RpdmVEdWVEYXRlLnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldER1ZURhdGUoKVxuICAgICAgfVxuICAgICAgb2JqZWN0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3RpdmVEdWVEYXRlKVxuICAgIH1cblxuICAgIC8vIFRPRE8gcGxhY2UgZGVzY3JpcHRpb25ib3ggaW5zaWRlIGEgY29udGFpbmVyIHdpdGggb2JqZWN0aXZlIGVsZW1lbnQgdG8gYWxsb3cgZWRpdGluZ1xuXG4gICAgb2JqZWN0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vIFJlbW92ZXMgZm9jdXMgY2xhc3MgZnJvbSB1bnNlbGVjdGVkIG9iamVjdGl2ZXNcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2JqZWN0aXZlXCIpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZihlbCAhPT0gb2JqZWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c1wiKSBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIFJlbW92ZXMgc2hvdyBjbGFzcyBmcm9tIHVuc2VsZWN0ZWQgb2JqZWN0aXZlcywgaGlkaW5nIHRoZWlyIGRlc2NyaXB0aW9uc1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmplY3RpdmUtZGVzY3JpcHRpb25cIikuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5jbG9zZXN0KFwiLm9iamVjdGl2ZVwiKS50ZXh0Q29udGVudCAhPT0gb2JqZWN0aXZlRWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGhhbmRsZUNsYXNzKG9iamVjdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIilcbiAgICB9KVxuXG4gICAgb2JqZWN0aXZlRGVzY3JpcHRpb25Cb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gb2JqZWN0aXZlRWxlbWVudEJveDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck9iamVjdGl2ZXMoY2hvc2VuTWlzc2lvbikge1xuICAgIGNsZWFyKG9iamVjdGl2ZXNCb3gpXG4gICAgY29uc3Qgb2JqZWN0aXZlc0FycmF5ID0gY2hvc2VuTWlzc2lvbi5nZXRPYmplY3RpdmVzKCk7XG4gICAgLy8gaWYgYXJyYXkgaXMgZW1wdHkgY3JlYXRlIG1lc3NhZ2VcbiAgICBpZiAob2JqZWN0aXZlc0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlc0FycmF5KSB7XG4gICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlLCBjaG9zZW5NaXNzaW9uLmdldE5hbWUoKSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck1pc3Npb25zKCkge1xuICAgIGNsZWFyKG1pc3Npb25zQm94KTtcbiAgICBjaGVja1N0b3JlZE9iamVjdGl2ZXMoKVxuICAgIGNvbnN0IHF1ZXN0QXJyYXkgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCk7XG4gICAgZm9yIChjb25zdCBtaXNzaW9uIG9mIHF1ZXN0QXJyYXkpIHtcbiAgICAgIG1pc3Npb25zQm94LmFwcGVuZENoaWxkKGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pKTtcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXIgVG9kYXkncyBtaXNzaW9uIGFuZCBvYmplY3RpdmVzIHdoZW4gcGFnZSBsb2Fkc1xuICBmdW5jdGlvbiByZW5kZXJUb2RheSgpIHtcbiAgICBjaGVja1N0b3JlZE9iamVjdGl2ZXMoKVxuICAgIHJlbmRlck1pc3Npb25zKCk7XG4gICAgY29uc3QgdG9kYXkgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oJ1RvZGF5JykuZ2V0T2JqZWN0aXZlcygpO1xuICAgIGZvciAoY29uc3Qgb2JqZWN0aXZlIG9mIHRvZGF5KSB7XG4gICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlLCBcIlRvZGF5XCIpKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2codGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpKVxuXG4gIHJlbmRlclRvZGF5KCk7ICBcblxuICByZXR1cm4gbWFpbjtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=