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
    renderObjectives(test.getQuestMenu().getMission("Today"))
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

  // creates objective element using objective object
  function createObjectiveElement(objective) {
    const objectiveElement = document.createElement('li');
    objectiveElement.classList.add('objective');
    const objectiveText = document.createElement('h4');
    objectiveText.textContent = objective.getName();

    const objectiveCheckBox = document.createElement("input")
    objectiveCheckBox.setAttribute("type", "checkbox")
    objectiveCheckBox.id = objective.getName()

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

  return main;
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL01pc3Npb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvT2JqZWN0aXZlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1F1ZXN0TWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBbXTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRPYmplY3RpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXM7XG4gIH1cblxuICBzZXRPYmplY3RpdmVzKG9iamVjdGl2ZXMpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBvYmplY3RpdmVzO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gb2JqTmFtZSk7XG4gIH1cblxuICBhZGRPYmplY3RpdmUobmV3T2JqKSB7XG4gICAgaWYgKCF0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBuZXdPYmoubmFtZSkpIHtcbiAgICAgIHRoaXMub2JqZWN0aXZlcy5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSB0aGlzLm9iamVjdGl2ZXMuZmlsdGVyKChvYmopID0+IG9iai5uYW1lICE9PSBvYmpOYW1lKVxuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9kYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMl1cbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMV1cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVswXVxuICAgICAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3RNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IFtdXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRvZGF5XCIpKVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUaGlzIFdlZWtcIikpXG4gICAgfVxuXG4gICAgc2V0TWlzc2lvbnMobWlzc2lvbnMpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IG1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zXG4gICAgfVxuXG4gICAgZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKVxuICAgIH1cblxuICAgIGFkZE1pc3Npb24obmV3TWlzc2lvbikge1xuICAgICAgICBpZighdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG5ld01pc3Npb24ubmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXdNaXNzaW9uKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5taXNzaW9ucyA9IHRoaXMubWlzc2lvbnMuZmlsdGVyKChtaXNzaW9uKSA9PiBtaXNzaW9uLm5hbWUgIT09IG1pc3Npb25OYW1lKVxuICAgICAgICAvKiBjb25zdCBtaXNzaW9uVG9EZWxldGUgPSB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpIFxuICAgICAgICB0aGlzLm1pc3Npb25zLnNwbGljZSh0aGlzLm1pc3Npb25zLmluZGV4T2YobWlzc2lvblRvRGVsZXRlKSwgMSkgKi9cbiAgICB9XG5cbiAgICB1cGRhdGVUb2RheU1pc3Npb24oKSB7XG4gICAgICAgIHRoaXMuZ2V0TWlzc2lvbihcIlRvZGF5XCIpLm9iamVjdGl2ZXMgPSBbXVxuXG4gICAgICAgIHRoaXMubWlzc2lvbnMuZm9yRWFjaCgobWlzc2lvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG1pc3Npb24uZ2V0TmFtZSgpID09PSBcIlRvZGF5XCIpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgdG9kYXlPYmplY3RpdmVzID0gbWlzc2lvbi5nZXRUb2RheU9iamVjdGl2ZXMoKVxuICAgICAgICAgICAgdG9kYXlPYmplY3RpdmVzLmZvckVhY2goKG9iamVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZU5hbWUgPSBgJHtvYmplY3RpdmUuZ2V0TmFtZSgpfWBcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5hZGRPYmplY3RpdmUobmV3IE9iamVjdGl2ZShvYmplY3RpdmVOYW1lLCBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuL01pc3Npb25cIlxuaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuaW1wb3J0IFF1ZXN0TWVudSBmcm9tIFwiLi9RdWVzdE1lbnVcIlxuXG5cbmV4cG9ydCAgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHsgIFxuICAgIHNhdmVRdWVzdE1lbnUoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXN0bWVudVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICBnZXRRdWVzdE1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IFF1ZXN0TWVudSgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0bWVudVwiKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuc2V0TWlzc2lvbnMoXG4gICAgICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgICAgIC5tYXAobWlzc2lvbiA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIG5ldyBNaXNzaW9uKCksIG1pc3Npb25cbiAgICAgICAgICAgICkpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgLmZvckVhY2gobWlzc2lvbiA9PiBcbiAgICAgICAgICAgIG1pc3Npb24uc2V0T2JqZWN0aXZlcyhcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9PiBPYmplY3QuYXNzaWduKG5ldyBPYmplY3RpdmUsIG9iaikpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHF1ZXN0c01lbnVcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgcGFyYW1ldGVycyB3aXRoIC1OYW1lIGhhcyAuZ2V0TmFtZSgpIG9yIGl0IHdpbGwgZGVsZXRlIHdyb25nIGl0ZW1cblxuICAgIGFkZE1pc3Npb24obWlzc2lvbikge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmFkZE1pc3Npb24obWlzc2lvbilcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU1pc3Npb24ob2xkTWlzc2lvbk5hbWUsIG5ld01pc3Npb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihvbGRNaXNzaW9uTmFtZSkuc2V0TmFtZShuZXdNaXNzaW9uTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgYWRkT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5hZGRPYmplY3RpdmUob2JqZWN0aXZlKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5kZWxldGVPYmplY3RpdmUob2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgcmVuYW1lT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lLCBuZXdPYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlKG9iak5hbWUpLnNldE5hbWUobmV3T2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1pc3Npb24gZnJvbSAnLi9NaXNzaW9uJztcbmltcG9ydCBPYmplY3RpdmUgZnJvbSAnLi9PYmplY3RpdmUnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgLy8gVE9ETyBjaGFuZ2UgdGVzdFxuICBjb25zdCB0ZXN0ID0gbmV3IFN0b3JhZ2UoKTtcbiAgXG4gIC8vIER1bW15IE1pc3Npb25zXG4gIGNvbnN0IG1pc3Npb24gPSBuZXcgTWlzc2lvbignVGVzdGluZyBtaXNzaW9uJyk7XG4gIHRlc3QuYWRkTWlzc2lvbihtaXNzaW9uKTtcblxuICAvLyBjaGVja3Mgc3RvcmFnZSBmb3Igb2JqZWN0aXZlcyBkdWUgdG9kYXkgYW5kIG1vdmVzIHRoZW0gdG8gVG9kYXkncyBtaXNzaW9uXG4gIGZ1bmN0aW9uIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpIHtcbiAgICBjb25zdCBzdG9yZWRUb2RvcyA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKVxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIHN0b3JlZFRvZG9zKSB7XG4gICAgICBjb25zdCBtaXNzaW9uT2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0T2JqZWN0aXZlcygpXG4gICAgICBmb3IoY29uc3Qgb2JqZWN0aXZlIG9mIG1pc3Npb25PYmplY3RpdmVzKSB7XG4gICAgICAgIGlmKGlzVG9kYXkob2JqZWN0aXZlKSkge1xuICAgICAgICAgIGNvbnN0IG9iak5hbWUgPSBvYmplY3RpdmUuZ2V0TmFtZSgpXG4gICAgICAgICAgY29uc3Qgb2JqRGVzY3JpcHRpb24gPSBvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICAgIGNvbnN0IG9iakRhdGUgPSBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpXG4gICAgICAgICAgY29uc3QgbmV3T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShvYmpOYW1lLCBvYmpEZXNjcmlwdGlvbiwgb2JqRGF0ZSlcbiAgICAgICAgICB0ZXN0LmRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uLmdldE5hbWUoKSwgb2JqZWN0aXZlLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIG5ld09iamVjdGl2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIG9iamVjdGl2ZSBpcyBkdWUgdG9kYXlcbiAgZnVuY3Rpb24gaXNUb2RheShvYmopIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRhdGVUb2RheSA9ICBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IGRhdGVNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBkYXRlWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IGZ1bGxEYXRlID0gYCR7ZGF0ZU1vbnRofS8ke2RhdGVUb2RheX0vJHtkYXRlWWVhcn1gXG4gICAgaWYob2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gXCJ0b2RheVwiIHx8IG9iai5nZXREYXRlRm9ybWF0dGVkKCkgPT09IGZ1bGxEYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBEdW1teSBPYmplY3RpdmVzXG4gIFxuICBjb25zdCB0b2RheU9iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJUb2RheSBvYmplY3RpdmVcIiwgXCJ0b2RhYWFheVwiKVxuICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIHRvZGF5T2JqZWN0aXZlKVxuICBjb25zdCB3ZWVrT2JqZWNldGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJGb3IgdGhlIHdlZWtcIiwgXCJ3ZWVlZWtcIiwgXCIyMDIzLTgtOFwiKVxuICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRoaXMgV2Vla1wiLCB3ZWVrT2JqZWNldGl2ZSlcbiAgLy8gY29uc3QgdHJ5aW5nVG9Ub2RheSA9IG5ldyBPYmplY3RpdmUoXCJNb3ZlIHRvIFRvZGF5XCIsIFwibW92aW5nXCIsIFwiMjcvNy8yMDIzXCIpXG4gIC8vIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGVzdGluZyBtaXNzaW9uXCIsIHRyeWluZ1RvVG9kYXkpXG5cbiAgY29uc3QgbWlzc2lvbnNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlzc2lvbnMnKTtcbiAgY29uc3Qgb2JqZWN0aXZlc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vYmplY3RpdmVzJyk7XG4gIGNvbnN0IGVtcHR5TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1vYmotbWVzc2FnZScpO1xuXG4gIC8vIFRPRE8gYWRkIGEgY2xvc2UgYnV0dG9uIG9uIGZvcm1cbiAgLy8gQWRkIG1pc3Npb25cbiAgY29uc3QgYWRkTWlzc2lvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbWlzc2lvbicpO1xuICBcbiAgY29uc3QgbWlzc2lvbkZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICBtaXNzaW9uRm9ybUJveC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvbi1mb3JtLWJveFwiKVxuXG4gIGNvbnN0IG1pc3Npb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcblxuICBjb25zdCBtaXNzaW9uRmllbGRTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICBjb25zdCBtaXNzaW9uRm9ybUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIilcbiAgbWlzc2lvbkZvcm1MZWdlbmQuY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tbGVnZW5kXCIpXG4gIG1pc3Npb25Gb3JtTGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IE1pc3Npb25cIlxuXG4gIGNvbnN0IG1pc3Npb25OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgbWlzc2lvbk5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpXG4gIG1pc3Npb25OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk1pc3Npb24gTmFtZTpcIlxuXG4gIGNvbnN0IG1pc3Npb25OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgbWlzc2lvbk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgbWlzc2lvbk5hbWVJbnB1dC5pZCA9IFwibmFtZVwiXG4gIG1pc3Npb25OYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRoZSBtaXNzaW9uIG5hbWVcIlxuXG4gIGNvbnN0IGNyZWF0ZU1pc3Npb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGNyZWF0ZU1pc3Npb25CdG4uaWQgPSBcImNyZWF0ZS1taXNzaW9uLWJ0blwiXG4gIGNyZWF0ZU1pc3Npb25CdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBNaXNzaW9uXCJcblxuICBjcmVhdGVNaXNzaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG1pc3Npb25OYW1lID0gbWlzc2lvbk5hbWVJbnB1dC52YWx1ZVxuICAgIGlmIChtaXNzaW9uTmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbmV3TWlzc2lvbiA9IG5ldyBNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgIHRlc3QuYWRkTWlzc2lvbihuZXdNaXNzaW9uKVxuICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIHJlbmRlck1pc3Npb25zKClcbiAgfSlcbiAgXG4gIG1pc3Npb25Gb3JtQm94LmFwcGVuZENoaWxkKG1pc3Npb25Gb3JtKVxuICBtaXNzaW9uRm9ybS5hcHBlbmQobWlzc2lvbkZpZWxkU2V0KVxuICBtaXNzaW9uRmllbGRTZXQuYXBwZW5kKG1pc3Npb25Gb3JtTGVnZW5kLCBtaXNzaW9uTmFtZUxhYmVsLCBjcmVhdGVNaXNzaW9uQnRuKVxuICBtaXNzaW9uTmFtZUxhYmVsLmFwcGVuZENoaWxkKG1pc3Npb25OYW1lSW5wdXQpXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm1Cb3gpXG5cbiAgYWRkTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmKG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIG1pc3Npb25OYW1lSW5wdXQuZm9jdXMoKVxuICAgIH1cbiAgfSlcbiAgXG5cbiAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib3hcIilcbiAgLy8gQWRkIG9iamVjdGl2ZVxuICBjb25zdCBhZGRPYmplY3RpdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW9iamVjdGl2ZScpO1xuXG4gIGNvbnN0IG9iamVjdGl2ZUZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIG9iamVjdGl2ZUZvcm1Cb3guY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZS1mb3JtLWJveFwiKVxuXG4gIGNvbnN0IG9iamVjdGl2ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gIGNvbnN0IG9iamVjdGl2ZUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIilcbiAgb2JqZWN0aXZlRm9ybUxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWxlZ2VuZFwiKVxuICBvYmplY3RpdmVGb3JtTGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IG9iamVjdGl2ZVwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG9iamVjdGl2ZU5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvTmFtZVwiKVxuICBvYmplY3RpdmVOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZSBOYW1lOiBcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBvYmplY3RpdmVOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG9iamVjdGl2ZU5hbWVJbnB1dC5pZCA9IFwib05hbWVcIlxuICBvYmplY3RpdmVOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRoZSBvYmplY3RpdmUgbmFtZVwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9EZXNjcmlwdGlvblwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJPYmplY3RpdmUgRGVzY3JpcHRpb246IFwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LmlkID0gXCJvRGVzY3JpcHRpb25cIlxuICBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJXaGF0IGlzIHRoaXMgb2JqZWN0aXZlIGFib3V0P1wiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvRHVlRGF0ZVwiKVxuICBvYmplY3RpdmVEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZSBEdWUgRGF0ZTogXCJcblxuICBjb25zdCBvYmplY3RpdmVEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVJbnB1dC5pZCA9IFwib0R1ZURhdGVcIlxuXG4gIGNvbnN0IG1pc3Npb25QaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBtaXNzaW9uUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib01pc3Npb25cIilcbiAgbWlzc2lvblBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJNaXNzaW9uOiBcIlxuXG4gIGNvbnN0IG1pc3Npb25QaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgbWlzc2lvblBpY2tlcklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJvTWlzc2lvblwiKVxuICBtaXNzaW9uUGlja2VySW5wdXQuaWQgPSBcIm9NaXNzaW9uXCJcblxuICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpKSB7XG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHttaXNzaW9uLmdldE5hbWUoKX1gKVxuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGAke21pc3Npb24uZ2V0TmFtZSgpfWBcbiAgICAgIG1pc3Npb25QaWNrZXJJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxuICAgIH1cblxuICBjb25zdCBjcmVhdGVPYmplY3RpdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGNyZWF0ZU9iamVjdGl2ZUJ0bi5pZCA9IFwiY3JlYXRlLW9iamVjdGl2ZS1idG5cIlxuICBjcmVhdGVPYmplY3RpdmVCdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBPYmplY3RpdmVcIlxuXG4gIGNyZWF0ZU9iamVjdGl2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gb2JqZWN0aXZlTmFtZUlucHV0LnZhbHVlXG4gICAgaWYgKG9iamVjdGl2ZU5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICBjb25zdCBvYmplY3RpdmVEdWVEYXRlID0gb2JqZWN0aXZlRHVlRGF0ZUlucHV0LnZhbHVlXG4gICAgY29uc3Qgb2JqZWN0aXZlTWlzc2lvbiA9IG1pc3Npb25QaWNrZXJJbnB1dC52YWx1ZVxuICAgIGNvbnN0IG5ld09iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlRGVzY3JpcHRpb24sIG9iamVjdGl2ZUR1ZURhdGUpXG4gICAgdGVzdC5hZGRPYmplY3RpdmUob2JqZWN0aXZlTWlzc2lvbiwgbmV3T2JqZWN0aXZlKVxuICAgIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICAgIHJlbmRlck9iamVjdGl2ZXModGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKFwiVG9kYXlcIikpXG4gIH0pXG5cbiAgb2JqZWN0aXZlRm9ybUJveC5hcHBlbmRDaGlsZChvYmplY3RpdmVGb3JtKVxuICBvYmplY3RpdmVGb3JtLmFwcGVuZENoaWxkKG9iamVjdGl2ZUZpZWxkc2V0KVxuICBvYmplY3RpdmVGaWVsZHNldC5hcHBlbmQob2JqZWN0aXZlRm9ybUxlZ2VuZCwgb2JqZWN0aXZlTmFtZUxhYmVsLCBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLCBvYmplY3RpdmVEdWVEYXRlTGFiZWwsIG1pc3Npb25QaWNrZXJMYWJlbCwgbWlzc2lvblBpY2tlcklucHV0LCBjcmVhdGVPYmplY3RpdmVCdG4pXG4gIG9iamVjdGl2ZU5hbWVMYWJlbC5hcHBlbmRDaGlsZChvYmplY3RpdmVOYW1lSW5wdXQpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQob2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dClcbiAgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZUR1ZURhdGVJbnB1dClcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChvYmplY3RpdmVGb3JtQm94KVxuXG4gIGFkZE9iamVjdGl2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChvYmplY3RpdmVGb3JtQm94LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBvYmplY3RpdmVGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIG9iamVjdGl2ZU5hbWVJbnB1dC5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuICB9KVxuXG4gIC8vIGNyZWF0ZXMgbWlzc2lvbiBlbGVtZW50IHVzaW5nIG1pc3Npb24gb2JqZWN0XG4gIGZ1bmN0aW9uIGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pIHtcbiAgICBjb25zdCBtaXNzaW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWlzc2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzc2lvbicpO1xuICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9IG1pc3Npb24uZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgZWRpdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGVkaXROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZU5hbWVcIilcbiAgICBlZGl0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IG1pc3Npb24gbmFtZTogXCJcblxuICAgIGNvbnN0IGVkaXROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBlZGl0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICAgIGVkaXROYW1lSW5wdXQuaWQgPSBcImVOYW1lXCJcbiAgICBlZGl0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgbWlzc2lvbiBuYW1lLi4uXCJcblxuICAgIGVkaXROYW1lTGFiZWwuYXBwZW5kQ2hpbGQoZWRpdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IGRlbGV0ZU1pc3Npb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxuICAgIGRlbGV0ZU1pc3Npb25JbWcuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKVxuICAgIGRlbGV0ZU1pc3Npb25JbWcuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtc3F1YXJlLXhtYXJrXCIsIFwiZmEtbGdcIilcblxuICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyT2JqZWN0aXZlcyhtaXNzaW9uKTtcbiAgICB9KTtcblxuICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZENoaWxkKG1pc3Npb25UZXh0KTtcblxuICAgIGlmIChtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiIHx8IG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgICByZXR1cm4gbWlzc2lvbkVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlTWlzc2lvbkltZylcbiAgICB9XG5cbiAgICBtaXNzaW9uVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHwgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPT09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtaXNzaW9uRWxlbWVudC5yZW1vdmVDaGlsZChtaXNzaW9uVGV4dClcbiAgICAgIG1pc3Npb25FbGVtZW50LnJlbW92ZUNoaWxkKGRlbGV0ZU1pc3Npb25JbWcpXG4gICAgICBtaXNzaW9uRWxlbWVudC5hcHBlbmRDaGlsZChlZGl0TmFtZUxhYmVsKVxuICAgICAgZWRpdE5hbWVJbnB1dC5mb2N1cygpXG4gICAgfSlcblxuICAgIGVkaXROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGlmIChlZGl0TmFtZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3Qgb2xkTWlzc2lvbiA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihtaXNzaW9uLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LnJlbmFtZU1pc3Npb24ob2xkTWlzc2lvbi5nZXROYW1lKCksIGVkaXROYW1lSW5wdXQudmFsdWUpXG4gICAgICAgICAgcmVuZGVyTWlzc2lvbnMoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtaXNzaW9uRWxlbWVudDtcbiAgfVxuXG4gIC8vIGNyZWF0ZXMgb2JqZWN0aXZlIGVsZW1lbnQgdXNpbmcgb2JqZWN0aXZlIG9iamVjdFxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkge1xuICAgIGNvbnN0IG9iamVjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG9iamVjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb2JqZWN0aXZlJyk7XG4gICAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgb2JqZWN0aXZlVGV4dC50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBvYmplY3RpdmVDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG9iamVjdGl2ZUNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxuICAgIG9iamVjdGl2ZUNoZWNrQm94LmlkID0gb2JqZWN0aXZlLmdldE5hbWUoKVxuXG4gICAgLy8gVE9ETyBhbmltYXRlIGRlc2NyaXB0aW9uIGJveFxuXG4gICAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgb2JqZWN0aXZlRGVzY3JpcHRpb25Cb3guY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZS1kZXNjcmlwdGlvblwiKVxuXG4gICAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgXG4gICAgLy8gVE9ETyBhZGQgbGlzdGVuZXIgdG8gZXhwYW5kIG9iaiB0byBzaG93IGRlc2NyaXB0aW9uXG4gICAgaWYgKG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpID09PSBcIlwiKSB7XG4gICAgICBvYmplY3RpdmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiTm8gZGVzY3JpcHRpb25cIlxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RpdmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG4gICAgfVxuICAgIC8vIFRPRE8gbGlzdGVuZXIvYnV0dG9uIHRvIGVkaXQgbmFtZSwgZGVzY3JpcHRpb24sIGFuZCBkYXRlIG9mIG9iamVjdGl2ZVxuXG4gICAgb2JqZWN0aXZlRWxlbWVudC5hcHBlbmQob2JqZWN0aXZlQ2hlY2tCb3gsIG9iamVjdGl2ZVRleHQpXG4gICAgb2JqZWN0aXZlRGVzY3JpcHRpb25Cb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlRGVzY3JpcHRpb24pXG5cbiAgICBpZiAob2JqZWN0aXZlLmdldER1ZURhdGUoKSAhPT0gXCJcIikge1xuICAgICAgY29uc3Qgb2JqZWN0aXZlRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGlmIChvYmplY3RpdmUuZ2V0RHVlRGF0ZSgpID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgb2JqZWN0aXZlRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0aXZlRHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iamVjdGl2ZS5nZXREdWVEYXRlKClcbiAgICAgIH1cbiAgICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlRHVlRGF0ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyT2JqZWN0aXZlcyhjaG9zZW5NaXNzaW9uKSB7XG4gICAgY2xlYXIob2JqZWN0aXZlc0JveClcbiAgICBjb25zdCBvYmplY3RpdmVzQXJyYXkgPSBjaG9zZW5NaXNzaW9uLmdldE9iamVjdGl2ZXMoKTtcbiAgICAvLyBpZiBhcnJheSBpcyBlbXB0eSBjcmVhdGUgbWVzc2FnZVxuICAgIGlmIChvYmplY3RpdmVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlbXB0eU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiBvYmplY3RpdmVzQXJyYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXNzaW9ucygpIHtcbiAgICBjbGVhcihtaXNzaW9uc0JveCk7XG4gICAgY29uc3QgcXVlc3RBcnJheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKTtcbiAgICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgcXVlc3RBcnJheSkge1xuICAgICAgbWlzc2lvbnNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbmRlciBUb2RheSdzIG1pc3Npb24gYW5kIG9iamVjdGl2ZXMgd2hlbiBwYWdlIGxvYWRzXG4gIGZ1bmN0aW9uIHJlbmRlclRvZGF5KCkge1xuICAgIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpXG4gICAgcmVuZGVyTWlzc2lvbnMoKTtcbiAgICBjb25zdCB0b2RheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbignVG9kYXknKS5nZXRPYmplY3RpdmVzKCk7XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2YgdG9kYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUb2RheSgpOyAgXG5cbiAgcmV0dXJuIG1haW47XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9