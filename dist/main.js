/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Mission.js":
/*!************************!*\
  !*** ./src/Mission.js ***!
  \************************/
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

/***/ "./src/Objective.js":
/*!**************************!*\
  !*** ./src/Objective.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Objective)
/* harmony export */ });
class Objective {
    constructor(name, description, dueDate = "today") {
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

    getDateFormatted() {
        if (this.dueDate === "today") {
            return "today"
        } else {
            const day = this.dueDate.split('/')[0]
            const month = this.dueDate.split('/')[1]
            const year = this.dueDate.split('/')[2]
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
        const missionToDelete = this.missions.find(mission => mission.getName() === missionName) 
        this.missions.splice(this.missions.indexOf(missionToDelete), 1)
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

/***/ "./src/close.png":
/*!***********************!*\
  !*** ./src/close.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c623043a998c86047c46.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/Objective.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close.png */ "./src/close.png");





const UI = (() => {
  const main = document.querySelector('.main');
  const sidebar = document.querySelector('.sidebar')
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
  const weekObjecetive = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("For the week", "weeeek", "8/8/2023")
  test.addObjective("This Week", weekObjecetive)
  const tryingToToday = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("Move to Today", "moving", "27/7/2023")
  test.addObjective("Testing mission", tryingToToday)

  const missionsBox = document.querySelector('.missions');
  const objectivesBox = document.querySelector('.objectives');
  const emptyMessage = document.querySelector('.empty-obj-message');

  const addMissionBtn = document.getElementById('add-mission');
  const addObjectiveBtn = document.getElementById('add-objective');
  // TODO add mission using button
  
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
    const newMission = new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"](missionName)
    test.addMission(newMission)
    missionFormBox.style.display = "none"
    renderMissions()
  })
  
  missionFormBox.appendChild(missionForm)
  missionForm.append(missionFieldSet)
  missionFieldSet.append(missionFormLegend, missionNameLabel, missionNameInput, createMissionBtn)
  sidebar.appendChild(missionFormBox)

  addMissionBtn.addEventListener("click", () => {
    if(missionFormBox.style.display === "block") {
      missionFormBox.style.display = "none"
    } else {
      missionFormBox.style.display = "block"
    }
  })
  
  // TODO add objective using button
  // TODO create form for objective submission

  // TODO enable editing of mission name(?)
  // creates mission element using mission object
  function createMissionElement(mission) {
    const missionElement = document.createElement('li');
    missionElement.classList.add('mission');
    missionElement.setAttribute('role', 'button');
    const missionText = document.createElement('h3');
    missionText.textContent = mission.getName();

    

    missionElement.addEventListener('click', () => {
      renderObjectives(mission);
    });

    missionElement.appendChild(missionText);
    createDeleteBtn(mission.getName(), missionElement)

    return missionElement;
  }

  function createDeleteBtn(missionName, parentElement) {
    if(missionName !== "Today" && missionName !== "This Week") {
      const deleteMissionBtn = document.createElement("button")
      deleteMissionBtn.type = "button"
      const deleteMissionImg = document.createElement("img")
      deleteMissionImg.classList.add("delete-img")
      deleteMissionImg.src = _close_png__WEBPACK_IMPORTED_MODULE_3__

      deleteMissionBtn.addEventListener("click", () => {
        test.deleteMission(mission.getName())
        renderMissions()
      })
      deleteMissionBtn.appendChild(deleteMissionImg)
      parentElement.appendChild(deleteMissionBtn)
    } 
  }



  // creates objective element using objective object
  function createObjectiveElement(objective) {
    const objectiveElement = document.createElement('li');
    objectiveElement.classList.add('objective');
    const objectiveText = document.createElement('h4');
    objectiveText.textContent = objective.getName();

    // TODO add checkbox to delete objective after finished
    // TODO add duedate
    // TODO add listener to expand obj to show description
    // TODO listener/button to edit name, description, and date of objective

    objectiveElement.appendChild(objectiveText);

    return objectiveElement;
  }

  function clear(element) {
    element.textContent = '';
  }

  function renderObjectives(chosenMission) {
    clear(objectivesBox);
    const objectivesArray = chosenMission.getObjectives();
    // if array is empty create message
    if (objectivesArray.length !== 0) {
      emptyMessage.style.display = 'none';
    } else {
      emptyMessage.style.display = 'block';
    }
    for (const objective of objectivesArray) {
      objectivesBox.appendChild(createObjectiveElement(objective));
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
      objectivesBox.appendChild(createObjectiveElement(objective));
    }
  }

  renderToday();
  // console.log(test.getQuestMenu().missions);
     

  return main;
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztBQUN0QztBQUNBLDZCQUE2QixrREFBUztBQUN0QztBQUNBLDRCQUE0QixrREFBUztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUNBQUM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01pc3Npb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvT2JqZWN0aXZlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1F1ZXN0TWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldE9iamVjdGl2ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcztcbiAgfVxuXG4gIHNldE9iamVjdGl2ZXMob2JqZWN0aXZlcykge1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IG9iamVjdGl2ZXM7XG4gIH1cblxuICBnZXRPYmplY3RpdmUob2JqTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBvYmpOYW1lKTtcbiAgfVxuXG4gIGFkZE9iamVjdGl2ZShuZXdPYmopIHtcbiAgICBpZiAoIXRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG5ld09iai5uYW1lKSkge1xuICAgICAgdGhpcy5vYmplY3RpdmVzLnB1c2gobmV3T2JqKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVPYmplY3RpdmUob2JqTmFtZSkge1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IHRoaXMub2JqZWN0aXZlcy5maWx0ZXIoKG9iaikgPT4gb2JqLm5hbWUgIT09IG9iak5hbWUpXG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBcInRvZGF5XCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBzZXROYW1lKG9iak5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqTmFtZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMF1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVsyXVxuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3RNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IFtdXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRvZGF5XCIpKVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUaGlzIFdlZWtcIikpXG4gICAgfVxuXG4gICAgc2V0TWlzc2lvbnMobWlzc2lvbnMpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IG1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKVxuICAgIH1cblxuICAgIGFkZE1pc3Npb24obmV3TWlzc2lvbikge1xuICAgICAgICBpZighdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG5ld01pc3Npb24ubmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXdNaXNzaW9uKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgIGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7ICBcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHBhcmFtZXRlcnMgd2l0aCAtTmFtZSBoYXMgLmdldE5hbWUoKSBvciBpdCB3aWxsIGRlbGV0ZSB3cm9uZyBpdGVtXG5cbiAgICBhZGRNaXNzaW9uKG1pc3Npb24pIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5hZGRNaXNzaW9uKG1pc3Npb24pXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBhZGRPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iamVjdGl2ZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmFkZE9iamVjdGl2ZShvYmplY3RpdmUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUsIG5ld09iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5nZXRPYmplY3RpdmUob2JqTmFtZSkuc2V0TmFtZShuZXdPYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBNaXNzaW9uIGZyb20gJy4vTWlzc2lvbic7XG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gJy4vT2JqZWN0aXZlJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgWCBmcm9tICcuL2Nsb3NlLnBuZydcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgY29uc3QgdGVzdCA9IG5ldyBTdG9yYWdlKCk7XG5cbiAgLy8gRHVtbXkgTWlzc2lvbnNcbiAgY29uc3QgbWlzc2lvbiA9IG5ldyBNaXNzaW9uKCdUZXN0aW5nIG1pc3Npb24nKTtcbiAgdGVzdC5hZGRNaXNzaW9uKG1pc3Npb24pO1xuXG4gIC8vIGNoZWNrcyBzdG9yYWdlIGZvciBvYmplY3RpdmVzIGR1ZSB0b2RheSBhbmQgbW92ZXMgdGhlbSB0byBUb2RheSdzIG1pc3Npb25cbiAgZnVuY3Rpb24gY2hlY2tTdG9yZWRPYmplY3RpdmVzKCkge1xuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpXG4gICAgZm9yKGNvbnN0IG1pc3Npb24gb2Ygc3RvcmVkVG9kb3MpIHtcbiAgICAgIGNvbnN0IG1pc3Npb25PYmplY3RpdmVzID0gbWlzc2lvbi5nZXRPYmplY3RpdmVzKClcbiAgICAgIGZvcihjb25zdCBvYmplY3RpdmUgb2YgbWlzc2lvbk9iamVjdGl2ZXMpIHtcbiAgICAgICAgaWYoaXNUb2RheShvYmplY3RpdmUpKSB7XG4gICAgICAgICAgY29uc3Qgb2JqTmFtZSA9IG9iamVjdGl2ZS5nZXROYW1lKClcbiAgICAgICAgICBjb25zdCBvYmpEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG4gICAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKClcbiAgICAgICAgICBjb25zdCBuZXdPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKG9iak5hbWUsIG9iakRlc2NyaXB0aW9uLCBvYmpEYXRlKVxuICAgICAgICAgIHRlc3QuZGVsZXRlT2JqZWN0aXZlKG1pc3Npb24uZ2V0TmFtZSgpLCBvYmplY3RpdmUuZ2V0TmFtZSgpKVxuICAgICAgICAgIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgbmV3T2JqZWN0aXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgb2JqZWN0aXZlIGlzIGR1ZSB0b2RheVxuICBmdW5jdGlvbiBpc1RvZGF5KG9iaikge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF0ZVRvZGF5ID0gIGRhdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZGF0ZU1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IGRhdGVZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgZnVsbERhdGUgPSBgJHtkYXRlTW9udGh9LyR7ZGF0ZVRvZGF5fS8ke2RhdGVZZWFyfWBcbiAgICBpZihvYmouZ2V0RGF0ZUZvcm1hdHRlZCgpID09PSBcInRvZGF5XCIgfHwgb2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gZnVsbERhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIER1bW15IE9iamVjdGl2ZXNcbiAgXG4gIGNvbnN0IHRvZGF5T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRvZGF5IG9iamVjdGl2ZVwiLCBcInRvZGFhYWF5XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdG9kYXlPYmplY3RpdmUpXG4gIGNvbnN0IHdlZWtPYmplY2V0aXZlID0gbmV3IE9iamVjdGl2ZShcIkZvciB0aGUgd2Vla1wiLCBcIndlZWVla1wiLCBcIjgvOC8yMDIzXCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGhpcyBXZWVrXCIsIHdlZWtPYmplY2V0aXZlKVxuICBjb25zdCB0cnlpbmdUb1RvZGF5ID0gbmV3IE9iamVjdGl2ZShcIk1vdmUgdG8gVG9kYXlcIiwgXCJtb3ZpbmdcIiwgXCIyNy83LzIwMjNcIilcbiAgdGVzdC5hZGRPYmplY3RpdmUoXCJUZXN0aW5nIG1pc3Npb25cIiwgdHJ5aW5nVG9Ub2RheSlcblxuICBjb25zdCBtaXNzaW9uc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9ucycpO1xuICBjb25zdCBvYmplY3RpdmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9iamVjdGl2ZXMnKTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW9iai1tZXNzYWdlJyk7XG5cbiAgY29uc3QgYWRkTWlzc2lvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbWlzc2lvbicpO1xuICBjb25zdCBhZGRPYmplY3RpdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW9iamVjdGl2ZScpO1xuICAvLyBUT0RPIGFkZCBtaXNzaW9uIHVzaW5nIGJ1dHRvblxuICBcbiAgY29uc3QgbWlzc2lvbkZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICBtaXNzaW9uRm9ybUJveC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvbi1mb3JtLWJveFwiKVxuXG4gIGNvbnN0IG1pc3Npb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcblxuICBjb25zdCBtaXNzaW9uRmllbGRTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICBjb25zdCBtaXNzaW9uRm9ybUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIilcbiAgbWlzc2lvbkZvcm1MZWdlbmQuY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tbGVnZW5kXCIpXG4gIG1pc3Npb25Gb3JtTGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IE1pc3Npb25cIlxuXG4gIGNvbnN0IG1pc3Npb25OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgbWlzc2lvbk5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpXG4gIG1pc3Npb25OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk1pc3Npb24gTmFtZTpcIlxuXG4gIGNvbnN0IG1pc3Npb25OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgbWlzc2lvbk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgbWlzc2lvbk5hbWVJbnB1dC5pZCA9IFwibmFtZVwiXG4gIG1pc3Npb25OYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRoZSBtaXNzaW9uIG5hbWVcIlxuXG4gIGNvbnN0IGNyZWF0ZU1pc3Npb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGNyZWF0ZU1pc3Npb25CdG4uaWQgPSBcImNyZWF0ZS1taXNzaW9uLWJ0blwiXG4gIGNyZWF0ZU1pc3Npb25CdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBNaXNzaW9uXCJcblxuICBjcmVhdGVNaXNzaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG1pc3Npb25OYW1lID0gbWlzc2lvbk5hbWVJbnB1dC52YWx1ZVxuICAgIGNvbnN0IG5ld01pc3Npb24gPSBuZXcgTWlzc2lvbihtaXNzaW9uTmFtZSlcbiAgICB0ZXN0LmFkZE1pc3Npb24obmV3TWlzc2lvbilcbiAgICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICByZW5kZXJNaXNzaW9ucygpXG4gIH0pXG4gIFxuICBtaXNzaW9uRm9ybUJveC5hcHBlbmRDaGlsZChtaXNzaW9uRm9ybSlcbiAgbWlzc2lvbkZvcm0uYXBwZW5kKG1pc3Npb25GaWVsZFNldClcbiAgbWlzc2lvbkZpZWxkU2V0LmFwcGVuZChtaXNzaW9uRm9ybUxlZ2VuZCwgbWlzc2lvbk5hbWVMYWJlbCwgbWlzc2lvbk5hbWVJbnB1dCwgY3JlYXRlTWlzc2lvbkJ0bilcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChtaXNzaW9uRm9ybUJveClcblxuICBhZGRNaXNzaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYobWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cbiAgfSlcbiAgXG4gIC8vIFRPRE8gYWRkIG9iamVjdGl2ZSB1c2luZyBidXR0b25cbiAgLy8gVE9ETyBjcmVhdGUgZm9ybSBmb3Igb2JqZWN0aXZlIHN1Ym1pc3Npb25cblxuICAvLyBUT0RPIGVuYWJsZSBlZGl0aW5nIG9mIG1pc3Npb24gbmFtZSg/KVxuICAvLyBjcmVhdGVzIG1pc3Npb24gZWxlbWVudCB1c2luZyBtaXNzaW9uIG9iamVjdFxuICBmdW5jdGlvbiBjcmVhdGVNaXNzaW9uRWxlbWVudChtaXNzaW9uKSB7XG4gICAgY29uc3QgbWlzc2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3Npb24nKTtcbiAgICBtaXNzaW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgY29uc3QgbWlzc2lvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1pc3Npb25UZXh0LnRleHRDb250ZW50ID0gbWlzc2lvbi5nZXROYW1lKCk7XG5cbiAgICBcblxuICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyT2JqZWN0aXZlcyhtaXNzaW9uKTtcbiAgICB9KTtcblxuICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZENoaWxkKG1pc3Npb25UZXh0KTtcbiAgICBjcmVhdGVEZWxldGVCdG4obWlzc2lvbi5nZXROYW1lKCksIG1pc3Npb25FbGVtZW50KVxuXG4gICAgcmV0dXJuIG1pc3Npb25FbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKG1pc3Npb25OYW1lLCBwYXJlbnRFbGVtZW50KSB7XG4gICAgaWYobWlzc2lvbk5hbWUgIT09IFwiVG9kYXlcIiAmJiBtaXNzaW9uTmFtZSAhPT0gXCJUaGlzIFdlZWtcIikge1xuICAgICAgY29uc3QgZGVsZXRlTWlzc2lvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgIGRlbGV0ZU1pc3Npb25CdG4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICAgIGNvbnN0IGRlbGV0ZU1pc3Npb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICBkZWxldGVNaXNzaW9uSW1nLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaW1nXCIpXG4gICAgICBkZWxldGVNaXNzaW9uSW1nLnNyYyA9IFhcblxuICAgICAgZGVsZXRlTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0ZXN0LmRlbGV0ZU1pc3Npb24obWlzc2lvbi5nZXROYW1lKCkpXG4gICAgICAgIHJlbmRlck1pc3Npb25zKClcbiAgICAgIH0pXG4gICAgICBkZWxldGVNaXNzaW9uQnRuLmFwcGVuZENoaWxkKGRlbGV0ZU1pc3Npb25JbWcpXG4gICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZU1pc3Npb25CdG4pXG4gICAgfSBcbiAgfVxuXG5cblxuICAvLyBjcmVhdGVzIG9iamVjdGl2ZSBlbGVtZW50IHVzaW5nIG9iamVjdGl2ZSBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpIHtcbiAgICBjb25zdCBvYmplY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvYmplY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdGl2ZScpO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpO1xuXG4gICAgLy8gVE9ETyBhZGQgY2hlY2tib3ggdG8gZGVsZXRlIG9iamVjdGl2ZSBhZnRlciBmaW5pc2hlZFxuICAgIC8vIFRPRE8gYWRkIGR1ZWRhdGVcbiAgICAvLyBUT0RPIGFkZCBsaXN0ZW5lciB0byBleHBhbmQgb2JqIHRvIHNob3cgZGVzY3JpcHRpb25cbiAgICAvLyBUT0RPIGxpc3RlbmVyL2J1dHRvbiB0byBlZGl0IG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgZGF0ZSBvZiBvYmplY3RpdmVcblxuICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG5cbiAgICByZXR1cm4gb2JqZWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJPYmplY3RpdmVzKGNob3Nlbk1pc3Npb24pIHtcbiAgICBjbGVhcihvYmplY3RpdmVzQm94KTtcbiAgICBjb25zdCBvYmplY3RpdmVzQXJyYXkgPSBjaG9zZW5NaXNzaW9uLmdldE9iamVjdGl2ZXMoKTtcbiAgICAvLyBpZiBhcnJheSBpcyBlbXB0eSBjcmVhdGUgbWVzc2FnZVxuICAgIGlmIChvYmplY3RpdmVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlbXB0eU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiBvYmplY3RpdmVzQXJyYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXNzaW9ucygpIHtcbiAgICBjbGVhcihtaXNzaW9uc0JveCk7XG4gICAgY29uc3QgcXVlc3RBcnJheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKTtcbiAgICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgcXVlc3RBcnJheSkge1xuICAgICAgbWlzc2lvbnNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gcmVuZGVyIFRvZGF5J3MgbWlzc2lvbiBhbmQgb2JqZWN0aXZlcyB3aGVuIHBhZ2UgbG9hZHNcbiAgZnVuY3Rpb24gcmVuZGVyVG9kYXkoKSB7XG4gICAgY2hlY2tTdG9yZWRPYmplY3RpdmVzKClcbiAgICByZW5kZXJNaXNzaW9ucygpO1xuICAgIGNvbnN0IHRvZGF5ID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKCdUb2RheScpLmdldE9iamVjdGl2ZXMoKTtcbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiB0b2RheSkge1xuICAgICAgb2JqZWN0aXZlc0JveC5hcHBlbmRDaGlsZChjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvZGF5KCk7XG4gIC8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkubWlzc2lvbnMpO1xuICAgICBcblxuICByZXR1cm4gbWFpbjtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=