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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission */ "./src/Mission.js");
/* harmony import */ var _Objective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objective */ "./src/Objective.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");




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
    console.log(storedTodos)
    for(const mission of storedTodos) {
      const missionObjectives = mission.getObjectives()
      for(const objective of missionObjectives) {
        if(isToday(objective)) {
          console.log(`this ${objective.getName()} is for today`)
          const objName = objective.getName()
          const objDescription = objective.getDescription()
          const objDate = objective.getDateFormatted()
          const newObjective = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"](objName, objDescription, objDate)
          console.log(objective.getName())
          test.deleteObjective(mission.getName(), objective.getName())
          test.addObjective("Today", newObjective)
          console.log(mission)
        }
      }
    }
    console.log(test.getQuestMenu())
  }

  // Check if objective is due today
  function isToday(obj) {
    const date = new Date()
    const dateToday =  date.getDate()
    const dateMonth = date.getMonth() + 1
    const dateYear = date.getFullYear()
    const fullDate = `${dateMonth}/${dateToday}/${dateYear}`
    console.log(fullDate)
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
  
  // TODO create form for mission submission
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

    return missionElement;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUXVlc3RNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldE9iamVjdGl2ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcztcbiAgfVxuXG4gIHNldE9iamVjdGl2ZXMob2JqZWN0aXZlcykge1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IG9iamVjdGl2ZXM7XG4gIH1cblxuICBnZXRPYmplY3RpdmUob2JqTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBvYmpOYW1lKTtcbiAgfVxuXG4gIGFkZE9iamVjdGl2ZShuZXdPYmopIHtcbiAgICBpZiAoIXRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG5ld09iai5uYW1lKSkge1xuICAgICAgdGhpcy5vYmplY3RpdmVzLnB1c2gobmV3T2JqKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVPYmplY3RpdmUob2JqTmFtZSkge1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IHRoaXMub2JqZWN0aXZlcy5maWx0ZXIoKG9iaikgPT4gb2JqLm5hbWUgIT09IG9iak5hbWUpXG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBcInRvZGF5XCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBzZXROYW1lKG9iak5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqTmFtZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMF1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVsyXVxuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3RNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IFtdXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRvZGF5XCIpKVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUaGlzIFdlZWtcIikpXG4gICAgfVxuXG4gICAgc2V0TWlzc2lvbnMobWlzc2lvbnMpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IG1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKVxuICAgIH1cblxuICAgIGFkZE1pc3Npb24obmV3TWlzc2lvbikge1xuICAgICAgICBpZighdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG5ld01pc3Npb24ubmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXdNaXNzaW9uKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgIGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7ICBcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHBhcmFtZXRlcnMgd2l0aCAtTmFtZSBoYXMgLmdldE5hbWUoKSBvciBpdCB3aWxsIGRlbGV0ZSB3cm9uZyBpdGVtXG5cbiAgICBhZGRNaXNzaW9uKG1pc3Npb24pIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5hZGRNaXNzaW9uKG1pc3Npb24pXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBhZGRPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iamVjdGl2ZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmFkZE9iamVjdGl2ZShvYmplY3RpdmUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUsIG5ld09iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5nZXRPYmplY3RpdmUob2JqTmFtZSkuc2V0TmFtZShuZXdPYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWlzc2lvbiBmcm9tICcuL01pc3Npb24nO1xuaW1wb3J0IE9iamVjdGl2ZSBmcm9tICcuL09iamVjdGl2ZSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICBjb25zdCB0ZXN0ID0gbmV3IFN0b3JhZ2UoKTtcblxuICAvLyBEdW1teSBNaXNzaW9uc1xuICBjb25zdCBtaXNzaW9uID0gbmV3IE1pc3Npb24oJ1Rlc3RpbmcgbWlzc2lvbicpO1xuICB0ZXN0LmFkZE1pc3Npb24obWlzc2lvbik7XG5cbiAgLy8gY2hlY2tzIHN0b3JhZ2UgZm9yIG9iamVjdGl2ZXMgZHVlIHRvZGF5IGFuZCBtb3ZlcyB0aGVtIHRvIFRvZGF5J3MgbWlzc2lvblxuICBmdW5jdGlvbiBjaGVja1N0b3JlZE9iamVjdGl2ZXMoKSB7XG4gICAgY29uc3Qgc3RvcmVkVG9kb3MgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKClcbiAgICBjb25zb2xlLmxvZyhzdG9yZWRUb2RvcylcbiAgICBmb3IoY29uc3QgbWlzc2lvbiBvZiBzdG9yZWRUb2Rvcykge1xuICAgICAgY29uc3QgbWlzc2lvbk9iamVjdGl2ZXMgPSBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKVxuICAgICAgZm9yKGNvbnN0IG9iamVjdGl2ZSBvZiBtaXNzaW9uT2JqZWN0aXZlcykge1xuICAgICAgICBpZihpc1RvZGF5KG9iamVjdGl2ZSkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdGhpcyAke29iamVjdGl2ZS5nZXROYW1lKCl9IGlzIGZvciB0b2RheWApXG4gICAgICAgICAgY29uc3Qgb2JqTmFtZSA9IG9iamVjdGl2ZS5nZXROYW1lKClcbiAgICAgICAgICBjb25zdCBvYmpEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG4gICAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKClcbiAgICAgICAgICBjb25zdCBuZXdPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKG9iak5hbWUsIG9iakRlc2NyaXB0aW9uLCBvYmpEYXRlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKG9iamVjdGl2ZS5nZXROYW1lKCkpXG4gICAgICAgICAgdGVzdC5kZWxldGVPYmplY3RpdmUobWlzc2lvbi5nZXROYW1lKCksIG9iamVjdGl2ZS5nZXROYW1lKCkpXG4gICAgICAgICAgdGVzdC5hZGRPYmplY3RpdmUoXCJUb2RheVwiLCBuZXdPYmplY3RpdmUpXG4gICAgICAgICAgY29uc29sZS5sb2cobWlzc2lvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0ZXN0LmdldFF1ZXN0TWVudSgpKVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgb2JqZWN0aXZlIGlzIGR1ZSB0b2RheVxuICBmdW5jdGlvbiBpc1RvZGF5KG9iaikge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF0ZVRvZGF5ID0gIGRhdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZGF0ZU1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IGRhdGVZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgZnVsbERhdGUgPSBgJHtkYXRlTW9udGh9LyR7ZGF0ZVRvZGF5fS8ke2RhdGVZZWFyfWBcbiAgICBjb25zb2xlLmxvZyhmdWxsRGF0ZSlcbiAgICBpZihvYmouZ2V0RGF0ZUZvcm1hdHRlZCgpID09PSBcInRvZGF5XCIgfHwgb2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gZnVsbERhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIER1bW15IE9iamVjdGl2ZXNcbiAgXG4gIGNvbnN0IHRvZGF5T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRvZGF5IG9iamVjdGl2ZVwiLCBcInRvZGFhYWF5XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdG9kYXlPYmplY3RpdmUpXG4gIGNvbnN0IHdlZWtPYmplY2V0aXZlID0gbmV3IE9iamVjdGl2ZShcIkZvciB0aGUgd2Vla1wiLCBcIndlZWVla1wiLCBcIjgvOC8yMDIzXCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGhpcyBXZWVrXCIsIHdlZWtPYmplY2V0aXZlKVxuICBjb25zdCB0cnlpbmdUb1RvZGF5ID0gbmV3IE9iamVjdGl2ZShcIk1vdmUgdG8gVG9kYXlcIiwgXCJtb3ZpbmdcIiwgXCIyNy83LzIwMjNcIilcbiAgdGVzdC5hZGRPYmplY3RpdmUoXCJUZXN0aW5nIG1pc3Npb25cIiwgdHJ5aW5nVG9Ub2RheSlcblxuICBjb25zdCBtaXNzaW9uc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9ucycpO1xuICBjb25zdCBvYmplY3RpdmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9iamVjdGl2ZXMnKTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW9iai1tZXNzYWdlJyk7XG5cbiAgY29uc3QgYWRkTWlzc2lvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbWlzc2lvbicpO1xuICBjb25zdCBhZGRPYmplY3RpdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW9iamVjdGl2ZScpO1xuICAvLyBUT0RPIGFkZCBtaXNzaW9uIHVzaW5nIGJ1dHRvblxuICBcbiAgLy8gVE9ETyBjcmVhdGUgZm9ybSBmb3IgbWlzc2lvbiBzdWJtaXNzaW9uXG4gIGNvbnN0IG1pc3Npb25Gb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgbWlzc2lvbkZvcm1Cb3guY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tZm9ybS1ib3hcIilcblxuICBjb25zdCBtaXNzaW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgY29uc3QgbWlzc2lvbkZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgY29uc3QgbWlzc2lvbkZvcm1MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpXG4gIG1pc3Npb25Gb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWxlZ2VuZFwiKVxuICBtaXNzaW9uRm9ybUxlZ2VuZC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBNaXNzaW9uXCJcblxuICBjb25zdCBtaXNzaW9uTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG1pc3Npb25OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKVxuICBtaXNzaW9uTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJNaXNzaW9uIE5hbWU6XCJcblxuICBjb25zdCBtaXNzaW9uTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG1pc3Npb25OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG1pc3Npb25OYW1lSW5wdXQuaWQgPSBcIm5hbWVcIlxuICBtaXNzaW9uTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0aGUgbWlzc2lvbiBuYW1lXCJcblxuICBjb25zdCBjcmVhdGVNaXNzaW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBjcmVhdGVNaXNzaW9uQnRuLmlkID0gXCJjcmVhdGUtbWlzc2lvbi1idG5cIlxuICBjcmVhdGVNaXNzaW9uQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTWlzc2lvblwiXG5cbiAgY3JlYXRlTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBtaXNzaW9uTmFtZSA9IG1pc3Npb25OYW1lSW5wdXQudmFsdWVcbiAgICBjb25zdCBuZXdNaXNzaW9uID0gbmV3IE1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgdGVzdC5hZGRNaXNzaW9uKG5ld01pc3Npb24pXG4gICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICB9KVxuICBcbiAgbWlzc2lvbkZvcm1Cb3guYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm0pXG4gIG1pc3Npb25Gb3JtLmFwcGVuZChtaXNzaW9uRmllbGRTZXQpXG4gIG1pc3Npb25GaWVsZFNldC5hcHBlbmQobWlzc2lvbkZvcm1MZWdlbmQsIG1pc3Npb25OYW1lTGFiZWwsIG1pc3Npb25OYW1lSW5wdXQsIGNyZWF0ZU1pc3Npb25CdG4pXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm1Cb3gpXG5cbiAgYWRkTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmKG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9XG4gIH0pXG4gIFxuICAvLyBUT0RPIGFkZCBvYmplY3RpdmUgdXNpbmcgYnV0dG9uXG4gIC8vIFRPRE8gY3JlYXRlIGZvcm0gZm9yIG9iamVjdGl2ZSBzdWJtaXNzaW9uXG5cbiAgLy8gVE9ETyBlbmFibGUgZWRpdGluZyBvZiBtaXNzaW9uIG5hbWUoPylcbiAgLy8gY3JlYXRlcyBtaXNzaW9uIGVsZW1lbnQgdXNpbmcgbWlzc2lvbiBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikge1xuICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzaW9uJyk7XG4gICAgbWlzc2lvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9IG1pc3Npb24uZ2V0TmFtZSgpO1xuXG4gICAgbWlzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJPYmplY3RpdmVzKG1pc3Npb24pO1xuICAgIH0pO1xuXG4gICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWlzc2lvblRleHQpO1xuXG4gICAgcmV0dXJuIG1pc3Npb25FbGVtZW50O1xuICB9XG5cbiAgLy8gY3JlYXRlcyBvYmplY3RpdmUgZWxlbWVudCB1c2luZyBvYmplY3RpdmUgb2JqZWN0XG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSB7XG4gICAgY29uc3Qgb2JqZWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgb2JqZWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvYmplY3RpdmUnKTtcbiAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldE5hbWUoKTtcblxuICAgIC8vIFRPRE8gYWRkIGNoZWNrYm94IHRvIGRlbGV0ZSBvYmplY3RpdmUgYWZ0ZXIgZmluaXNoZWRcbiAgICAvLyBUT0RPIGFkZCBkdWVkYXRlXG4gICAgLy8gVE9ETyBhZGQgbGlzdGVuZXIgdG8gZXhwYW5kIG9iaiB0byBzaG93IGRlc2NyaXB0aW9uXG4gICAgLy8gVE9ETyBsaXN0ZW5lci9idXR0b24gdG8gZWRpdCBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIGRhdGUgb2Ygb2JqZWN0aXZlXG5cbiAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpO1xuXG4gICAgcmV0dXJuIG9iamVjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyT2JqZWN0aXZlcyhjaG9zZW5NaXNzaW9uKSB7XG4gICAgY2xlYXIob2JqZWN0aXZlc0JveCk7XG4gICAgY29uc3Qgb2JqZWN0aXZlc0FycmF5ID0gY2hvc2VuTWlzc2lvbi5nZXRPYmplY3RpdmVzKCk7XG4gICAgLy8gaWYgYXJyYXkgaXMgZW1wdHkgY3JlYXRlIG1lc3NhZ2VcbiAgICBpZiAob2JqZWN0aXZlc0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlc0FycmF5KSB7XG4gICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWlzc2lvbnMoKSB7XG4gICAgY2xlYXIobWlzc2lvbnNCb3gpO1xuICAgIGNvbnN0IHF1ZXN0QXJyYXkgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCk7XG4gICAgZm9yIChjb25zdCBtaXNzaW9uIG9mIHF1ZXN0QXJyYXkpIHtcbiAgICAgIG1pc3Npb25zQm94LmFwcGVuZENoaWxkKGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIHJlbmRlciBUb2RheSdzIG1pc3Npb24gYW5kIG9iamVjdGl2ZXMgd2hlbiBwYWdlIGxvYWRzXG4gIGZ1bmN0aW9uIHJlbmRlclRvZGF5KCkge1xuICAgIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpXG4gICAgcmVuZGVyTWlzc2lvbnMoKTtcbiAgICBjb25zdCB0b2RheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbignVG9kYXknKS5nZXRPYmplY3RpdmVzKCk7XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2YgdG9kYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUb2RheSgpO1xuICAvLyBjb25zb2xlLmxvZyh0ZXN0LmdldFF1ZXN0TWVudSgpLm1pc3Npb25zKTtcbiAgICAgXG5cbiAgcmV0dXJuIG1haW47XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9