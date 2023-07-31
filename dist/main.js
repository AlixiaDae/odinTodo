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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUXVlc3RNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IFtdO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldE9iamVjdGl2ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcztcbiAgfVxuXG4gIHNldE9iamVjdGl2ZXMob2JqZWN0aXZlcykge1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IG9iamVjdGl2ZXM7XG4gIH1cblxuICBnZXRPYmplY3RpdmUob2JqTmFtZSkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdGl2ZXMuZmluZCgob2JqKSA9PiBvYmouZ2V0TmFtZSgpID09PSBvYmpOYW1lKTtcbiAgfVxuXG4gIGFkZE9iamVjdGl2ZShuZXdPYmopIHtcbiAgICBpZiAoIXRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG5ld09iai5uYW1lKSkge1xuICAgICAgdGhpcy5vYmplY3RpdmVzLnB1c2gobmV3T2JqKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVPYmplY3RpdmUob2JqTmFtZSkge1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IHRoaXMub2JqZWN0aXZlcy5maWx0ZXIoKG9iaikgPT4gb2JqLm5hbWUgIT09IG9iak5hbWUpXG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgc2V0TmFtZShvYmpOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG9iak5hbWVcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVlRGF0ZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0b2RheVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVsyXVxuICAgICAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzBdXG4gICAgICAgICAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuICAgICAgICB9XG4gICAgICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1yZXR1cm4gKi9cbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuL01pc3Npb25cIlxuaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gW11cbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVG9kYXlcIikpXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRoaXMgV2Vla1wiKSlcbiAgICB9XG5cbiAgICBzZXRNaXNzaW9ucyhtaXNzaW9ucykge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gbWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpXG4gICAgfVxuXG4gICAgYWRkTWlzc2lvbihuZXdNaXNzaW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbmV3TWlzc2lvbi5uYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ld01pc3Npb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gdGhpcy5taXNzaW9ucy5maWx0ZXIoKG1pc3Npb24pID0+IG1pc3Npb24ubmFtZSAhPT0gbWlzc2lvbk5hbWUpXG4gICAgICAgIC8qIGNvbnN0IG1pc3Npb25Ub0RlbGV0ZSA9IHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSkgXG4gICAgICAgIHRoaXMubWlzc2lvbnMuc3BsaWNlKHRoaXMubWlzc2lvbnMuaW5kZXhPZihtaXNzaW9uVG9EZWxldGUpLCAxKSAqL1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZGF5TWlzc2lvbigpIHtcbiAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikub2JqZWN0aXZlcyA9IFtdXG5cbiAgICAgICAgdGhpcy5taXNzaW9ucy5mb3JFYWNoKChtaXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAobWlzc2lvbi5nZXROYW1lKCkgPT09IFwiVG9kYXlcIikgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCB0b2RheU9iamVjdGl2ZXMgPSBtaXNzaW9uLmdldFRvZGF5T2JqZWN0aXZlcygpXG4gICAgICAgICAgICB0b2RheU9iamVjdGl2ZXMuZm9yRWFjaCgob2JqZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0aXZlTmFtZSA9IGAke29iamVjdGl2ZS5nZXROYW1lKCl9YFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWlzc2lvbihcIlRvZGF5XCIpLmFkZE9iamVjdGl2ZShuZXcgT2JqZWN0aXZlKG9iamVjdGl2ZU5hbWUsIG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKCkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5pbXBvcnQgUXVlc3RNZW51IGZyb20gXCIuL1F1ZXN0TWVudVwiXG5cblxuZXhwb3J0ICBkZWZhdWx0IGNsYXNzIFN0b3JhZ2UgeyAgXG4gICAgc2F2ZVF1ZXN0TWVudShkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicXVlc3RtZW51XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cblxuICAgIGdldFF1ZXN0TWVudSgpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgUXVlc3RNZW51KCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVlc3RtZW51XCIpKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5zZXRNaXNzaW9ucyhcbiAgICAgICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbnMoKVxuICAgICAgICAgICAgLm1hcChtaXNzaW9uID0+IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgbmV3IE1pc3Npb24oKSwgbWlzc2lvblxuICAgICAgICAgICAgKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbnMoKVxuICAgICAgICAuZm9yRWFjaChtaXNzaW9uID0+IFxuICAgICAgICAgICAgbWlzc2lvbi5zZXRPYmplY3RpdmVzKFxuICAgICAgICAgICAgICAgIG1pc3Npb24uZ2V0T2JqZWN0aXZlcygpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgb2JqID0+IE9iamVjdC5hc3NpZ24obmV3IE9iamVjdGl2ZSwgb2JqKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcXVlc3RzTWVudVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBwYXJhbWV0ZXJzIHdpdGggLU5hbWUgaGFzIC5nZXROYW1lKCkgb3IgaXQgd2lsbCBkZWxldGUgd3JvbmcgaXRlbVxuXG4gICAgYWRkTWlzc2lvbihtaXNzaW9uKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuYWRkTWlzc2lvbihtaXNzaW9uKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgcmVuYW1lTWlzc2lvbihvbGRNaXNzaW9uTmFtZSwgbmV3TWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG9sZE1pc3Npb25OYW1lKS5zZXROYW1lKG5ld01pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBhZGRPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iamVjdGl2ZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmFkZE9iamVjdGl2ZShvYmplY3RpdmUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUsIG5ld09iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5nZXRPYmplY3RpdmUob2JqTmFtZSkuc2V0TmFtZShuZXdPYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWlzc2lvbiBmcm9tICcuL01pc3Npb24nO1xuaW1wb3J0IE9iamVjdGl2ZSBmcm9tICcuL09iamVjdGl2ZSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAvLyBUT0RPIGNoYW5nZSB0ZXN0XG4gIGNvbnN0IHRlc3QgPSBuZXcgU3RvcmFnZSgpO1xuICBcbiAgLy8gRHVtbXkgTWlzc2lvbnNcbiAgY29uc3QgbWlzc2lvbiA9IG5ldyBNaXNzaW9uKCdUZXN0aW5nIG1pc3Npb24nKTtcbiAgdGVzdC5hZGRNaXNzaW9uKG1pc3Npb24pO1xuXG4gIC8vIGNoZWNrcyBzdG9yYWdlIGZvciBvYmplY3RpdmVzIGR1ZSB0b2RheSBhbmQgbW92ZXMgdGhlbSB0byBUb2RheSdzIG1pc3Npb25cbiAgZnVuY3Rpb24gY2hlY2tTdG9yZWRPYmplY3RpdmVzKCkge1xuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpXG4gICAgZm9yKGNvbnN0IG1pc3Npb24gb2Ygc3RvcmVkVG9kb3MpIHtcbiAgICAgIGNvbnN0IG1pc3Npb25PYmplY3RpdmVzID0gbWlzc2lvbi5nZXRPYmplY3RpdmVzKClcbiAgICAgIGZvcihjb25zdCBvYmplY3RpdmUgb2YgbWlzc2lvbk9iamVjdGl2ZXMpIHtcbiAgICAgICAgaWYoaXNUb2RheShvYmplY3RpdmUpKSB7XG4gICAgICAgICAgY29uc3Qgb2JqTmFtZSA9IG9iamVjdGl2ZS5nZXROYW1lKClcbiAgICAgICAgICBjb25zdCBvYmpEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG4gICAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKClcbiAgICAgICAgICBjb25zdCBuZXdPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKG9iak5hbWUsIG9iakRlc2NyaXB0aW9uLCBvYmpEYXRlKVxuICAgICAgICAgIHRlc3QuZGVsZXRlT2JqZWN0aXZlKG1pc3Npb24uZ2V0TmFtZSgpLCBvYmplY3RpdmUuZ2V0TmFtZSgpKVxuICAgICAgICAgIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgbmV3T2JqZWN0aXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgb2JqZWN0aXZlIGlzIGR1ZSB0b2RheVxuICBmdW5jdGlvbiBpc1RvZGF5KG9iaikge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF0ZVRvZGF5ID0gIGRhdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZGF0ZU1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IGRhdGVZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgZnVsbERhdGUgPSBgJHtkYXRlTW9udGh9LyR7ZGF0ZVRvZGF5fS8ke2RhdGVZZWFyfWBcbiAgICBpZihvYmouZ2V0RGF0ZUZvcm1hdHRlZCgpID09PSBcInRvZGF5XCIgfHwgb2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gZnVsbERhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIER1bW15IE9iamVjdGl2ZXNcbiAgXG4gIGNvbnN0IHRvZGF5T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRvZGF5IG9iamVjdGl2ZVwiLCBcInRvZGFhYWF5XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdG9kYXlPYmplY3RpdmUpXG4gIGNvbnN0IHdlZWtPYmplY2V0aXZlID0gbmV3IE9iamVjdGl2ZShcIkZvciB0aGUgd2Vla1wiLCBcIndlZWVla1wiLCBcIjIwMjMtOC04XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGhpcyBXZWVrXCIsIHdlZWtPYmplY2V0aXZlKVxuICAvLyBjb25zdCB0cnlpbmdUb1RvZGF5ID0gbmV3IE9iamVjdGl2ZShcIk1vdmUgdG8gVG9kYXlcIiwgXCJtb3ZpbmdcIiwgXCIyNy83LzIwMjNcIilcbiAgLy8gdGVzdC5hZGRPYmplY3RpdmUoXCJUZXN0aW5nIG1pc3Npb25cIiwgdHJ5aW5nVG9Ub2RheSlcblxuICBjb25zdCBtaXNzaW9uc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9ucycpO1xuICBjb25zdCBvYmplY3RpdmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9iamVjdGl2ZXMnKTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW9iai1tZXNzYWdlJyk7XG5cbiAgLy8gVE9ETyBhZGQgYSBjbG9zZSBidXR0b24gb24gZm9ybVxuICAvLyBBZGQgbWlzc2lvblxuICBjb25zdCBhZGRNaXNzaW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1taXNzaW9uJyk7XG4gIFxuICBjb25zdCBtaXNzaW9uRm9ybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIG1pc3Npb25Gb3JtQm94LmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWZvcm0tYm94XCIpXG5cbiAgY29uc3QgbWlzc2lvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gIGNvbnN0IG1pc3Npb25GaWVsZFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKVxuXG4gIGNvbnN0IG1pc3Npb25Gb3JtTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKVxuICBtaXNzaW9uRm9ybUxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvbi1sZWdlbmRcIilcbiAgbWlzc2lvbkZvcm1MZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOZXcgTWlzc2lvblwiXG5cbiAgY29uc3QgbWlzc2lvbk5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBtaXNzaW9uTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIilcbiAgbWlzc2lvbk5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWlzc2lvbiBOYW1lOlwiXG5cbiAgY29uc3QgbWlzc2lvbk5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBtaXNzaW9uTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICBtaXNzaW9uTmFtZUlucHV0LmlkID0gXCJuYW1lXCJcbiAgbWlzc2lvbk5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGhlIG1pc3Npb24gbmFtZVwiXG5cbiAgY29uc3QgY3JlYXRlTWlzc2lvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY3JlYXRlTWlzc2lvbkJ0bi5pZCA9IFwiY3JlYXRlLW1pc3Npb24tYnRuXCJcbiAgY3JlYXRlTWlzc2lvbkJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE1pc3Npb25cIlxuXG4gIGNyZWF0ZU1pc3Npb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgbWlzc2lvbk5hbWUgPSBtaXNzaW9uTmFtZUlucHV0LnZhbHVlXG4gICAgaWYgKG1pc3Npb25OYW1lSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBuZXdNaXNzaW9uID0gbmV3IE1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgdGVzdC5hZGRNaXNzaW9uKG5ld01pc3Npb24pXG4gICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICB9KVxuICBcbiAgbWlzc2lvbkZvcm1Cb3guYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm0pXG4gIG1pc3Npb25Gb3JtLmFwcGVuZChtaXNzaW9uRmllbGRTZXQpXG4gIG1pc3Npb25GaWVsZFNldC5hcHBlbmQobWlzc2lvbkZvcm1MZWdlbmQsIG1pc3Npb25OYW1lTGFiZWwsIGNyZWF0ZU1pc3Npb25CdG4pXG4gIG1pc3Npb25OYW1lTGFiZWwuYXBwZW5kQ2hpbGQobWlzc2lvbk5hbWVJbnB1dClcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChtaXNzaW9uRm9ybUJveClcblxuICBhZGRNaXNzaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYobWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgbWlzc2lvbk5hbWVJbnB1dC5mb2N1cygpXG4gICAgfVxuICB9KVxuICBcblxuICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJveFwiKVxuICAvLyBBZGQgb2JqZWN0aXZlXG4gIGNvbnN0IGFkZE9iamVjdGl2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtb2JqZWN0aXZlJyk7XG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgb2JqZWN0aXZlRm9ybUJveC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWZvcm0tYm94XCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICBjb25zdCBvYmplY3RpdmVGb3JtTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKVxuICBvYmplY3RpdmVGb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtbGVnZW5kXCIpXG4gIG9iamVjdGl2ZUZvcm1MZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBuZXcgb2JqZWN0aXZlXCJcblxuICBjb25zdCBvYmplY3RpdmVOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgb2JqZWN0aXZlTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9OYW1lXCIpXG4gIG9iamVjdGl2ZU5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiT2JqZWN0aXZlIE5hbWU6IFwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG9iamVjdGl2ZU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgb2JqZWN0aXZlTmFtZUlucHV0LmlkID0gXCJvTmFtZVwiXG4gIG9iamVjdGl2ZU5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGhlIG9iamVjdGl2ZSBuYW1lXCJcblxuICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib0Rlc2NyaXB0aW9uXCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZSBEZXNjcmlwdGlvbjogXCJcblxuICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQuaWQgPSBcIm9EZXNjcmlwdGlvblwiXG4gIG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIldoYXQgaXMgdGhpcyBvYmplY3RpdmUgYWJvdXQ/XCJcblxuICBjb25zdCBvYmplY3RpdmVEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9EdWVEYXRlXCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiT2JqZWN0aXZlIER1ZSBEYXRlOiBcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBvYmplY3RpdmVEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUlucHV0LmlkID0gXCJvRHVlRGF0ZVwiXG5cbiAgY29uc3QgbWlzc2lvblBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG1pc3Npb25QaWNrZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvTWlzc2lvblwiKVxuICBtaXNzaW9uUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIk1pc3Npb246IFwiXG5cbiAgY29uc3QgbWlzc2lvblBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICBtaXNzaW9uUGlja2VySW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm9NaXNzaW9uXCIpXG4gIG1pc3Npb25QaWNrZXJJbnB1dC5pZCA9IFwib01pc3Npb25cIlxuXG4gIGZvciAoY29uc3QgbWlzc2lvbiBvZiB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCkpIHtcbiAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgICBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke21pc3Npb24uZ2V0TmFtZSgpfWApXG4gICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gYCR7bWlzc2lvbi5nZXROYW1lKCl9YFxuICAgICAgbWlzc2lvblBpY2tlcklucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG4gICAgfVxuXG4gIGNvbnN0IGNyZWF0ZU9iamVjdGl2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY3JlYXRlT2JqZWN0aXZlQnRuLmlkID0gXCJjcmVhdGUtb2JqZWN0aXZlLWJ0blwiXG4gIGNyZWF0ZU9iamVjdGl2ZUJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE9iamVjdGl2ZVwiXG5cbiAgY3JlYXRlT2JqZWN0aXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG9iamVjdGl2ZU5hbWUgPSBvYmplY3RpdmVOYW1lSW5wdXQudmFsdWVcbiAgICBpZiAob2JqZWN0aXZlTmFtZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uID0gb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGUgPSBvYmplY3RpdmVEdWVEYXRlSW5wdXQudmFsdWVcbiAgICBjb25zdCBvYmplY3RpdmVNaXNzaW9uID0gbWlzc2lvblBpY2tlcklucHV0LnZhbHVlXG4gICAgY29uc3QgbmV3T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShvYmplY3RpdmVOYW1lLCBvYmplY3RpdmVEZXNjcmlwdGlvbiwgb2JqZWN0aXZlRHVlRGF0ZSlcbiAgICB0ZXN0LmFkZE9iamVjdGl2ZShvYmplY3RpdmVNaXNzaW9uLCBuZXdPYmplY3RpdmUpXG4gICAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICByZW5kZXJNaXNzaW9ucygpXG4gICAgcmVuZGVyT2JqZWN0aXZlcyh0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oXCJUb2RheVwiKSlcbiAgfSlcblxuICBvYmplY3RpdmVGb3JtQm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZUZvcm0pXG4gIG9iamVjdGl2ZUZvcm0uYXBwZW5kQ2hpbGQob2JqZWN0aXZlRmllbGRzZXQpXG4gIG9iamVjdGl2ZUZpZWxkc2V0LmFwcGVuZChvYmplY3RpdmVGb3JtTGVnZW5kLCBvYmplY3RpdmVOYW1lTGFiZWwsIG9iamVjdGl2ZURlc2NyaXB0aW9uTGFiZWwsIG9iamVjdGl2ZUR1ZURhdGVMYWJlbCwgbWlzc2lvblBpY2tlckxhYmVsLCBtaXNzaW9uUGlja2VySW5wdXQsIGNyZWF0ZU9iamVjdGl2ZUJ0bilcbiAgb2JqZWN0aXZlTmFtZUxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZU5hbWVJbnB1dClcbiAgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0KVxuICBvYmplY3RpdmVEdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQob2JqZWN0aXZlRHVlRGF0ZUlucHV0KVxuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZUZvcm1Cb3gpXG5cbiAgYWRkT2JqZWN0aXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgb2JqZWN0aXZlTmFtZUlucHV0LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gIH0pXG5cbiAgLy8gY3JlYXRlcyBtaXNzaW9uIGVsZW1lbnQgdXNpbmcgbWlzc2lvbiBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikge1xuICAgIGNvbnN0IG1pc3Npb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzaW9uJyk7XG4gICAgY29uc3QgbWlzc2lvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1pc3Npb25UZXh0LnRleHRDb250ZW50ID0gbWlzc2lvbi5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBlZGl0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZWRpdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlTmFtZVwiKVxuICAgIGVkaXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkVkaXQgbWlzc2lvbiBuYW1lOiBcIlxuXG4gICAgY29uc3QgZWRpdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGVkaXROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gICAgZWRpdE5hbWVJbnB1dC5pZCA9IFwiZU5hbWVcIlxuICAgIGVkaXROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBtaXNzaW9uIG5hbWUuLi5cIlxuXG4gICAgZWRpdE5hbWVMYWJlbC5hcHBlbmRDaGlsZChlZGl0TmFtZUlucHV0KVxuXG4gICAgY29uc3QgZGVsZXRlTWlzc2lvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXG4gICAgZGVsZXRlTWlzc2lvbkltZy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpXG4gICAgZGVsZXRlTWlzc2lvbkltZy5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1zcXVhcmUteG1hcmtcIiwgXCJmYS1sZ1wiKVxuXG4gICAgbWlzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJPYmplY3RpdmVzKG1pc3Npb24pO1xuICAgIH0pO1xuXG4gICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWlzc2lvblRleHQpO1xuXG4gICAgaWYgKG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHwgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPT09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICAgIHJldHVybiBtaXNzaW9uRWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzaW9uRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVNaXNzaW9uSW1nKVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb25JbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlc3QuZGVsZXRlTWlzc2lvbihtaXNzaW9uVGV4dC50ZXh0Q29udGVudClcbiAgICAgIHJlbmRlck1pc3Npb25zKClcbiAgICB9KVxuXG4gICAgbWlzc2lvblRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiIHx8IG1pc3Npb25UZXh0LnRleHRDb250ZW50ID09PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbWlzc2lvbkVsZW1lbnQucmVtb3ZlQ2hpbGQobWlzc2lvblRleHQpXG4gICAgICBtaXNzaW9uRWxlbWVudC5yZW1vdmVDaGlsZChkZWxldGVNaXNzaW9uSW1nKVxuICAgICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdE5hbWVMYWJlbClcbiAgICAgIGVkaXROYW1lSW5wdXQuZm9jdXMoKVxuICAgIH0pXG5cbiAgICBlZGl0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBpZiAoZWRpdE5hbWVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IG9sZE1pc3Npb24gPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24obWlzc2lvbi5nZXROYW1lKCkpXG4gICAgICAgICAgdGVzdC5yZW5hbWVNaXNzaW9uKG9sZE1pc3Npb24uZ2V0TmFtZSgpLCBlZGl0TmFtZUlucHV0LnZhbHVlKVxuICAgICAgICAgIHJlbmRlck1pc3Npb25zKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbWlzc2lvbkVsZW1lbnQ7XG4gIH1cblxuICAvLyBjcmVhdGVzIG9iamVjdGl2ZSBlbGVtZW50IHVzaW5nIG9iamVjdGl2ZSBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpIHtcbiAgICBjb25zdCBvYmplY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvYmplY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdGl2ZScpO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3Qgb2JqZWN0aXZlQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBvYmplY3RpdmVDaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcbiAgICBvYmplY3RpdmVDaGVja0JveC5pZCA9IG9iamVjdGl2ZS5nZXROYW1lKClcblxuICAgIC8vIFRPRE8gYW5pbWF0ZSBkZXNjcmlwdGlvbiBib3hcblxuICAgIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uQm94LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtZGVzY3JpcHRpb25cIilcblxuICAgIGNvbnN0IG9iamVjdGl2ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFxuICAgIC8vIFRPRE8gYWRkIGxpc3RlbmVyIHRvIGV4cGFuZCBvYmogdG8gc2hvdyBkZXNjcmlwdGlvblxuICAgIGlmIChvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKSA9PT0gXCJcIikge1xuICAgICAgb2JqZWN0aXZlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIk5vIGRlc2NyaXB0aW9uXCJcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0aXZlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKVxuICAgIH1cbiAgICAvLyBUT0RPIGxpc3RlbmVyL2J1dHRvbiB0byBlZGl0IG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgZGF0ZSBvZiBvYmplY3RpdmVcblxuICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kKG9iamVjdGl2ZUNoZWNrQm94LCBvYmplY3RpdmVUZXh0KVxuICAgIG9iamVjdGl2ZURlc2NyaXB0aW9uQm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZURlc2NyaXB0aW9uKVxuXG4gICAgaWYgKG9iamVjdGl2ZS5nZXREdWVEYXRlKCkgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBpZiAob2JqZWN0aXZlLmdldER1ZURhdGUoKSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgIG9iamVjdGl2ZUR1ZURhdGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdGl2ZUR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0RHVlRGF0ZSgpXG4gICAgICB9XG4gICAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZUR1ZURhdGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck9iamVjdGl2ZXMoY2hvc2VuTWlzc2lvbikge1xuICAgIGNsZWFyKG9iamVjdGl2ZXNCb3gpXG4gICAgY29uc3Qgb2JqZWN0aXZlc0FycmF5ID0gY2hvc2VuTWlzc2lvbi5nZXRPYmplY3RpdmVzKCk7XG4gICAgLy8gaWYgYXJyYXkgaXMgZW1wdHkgY3JlYXRlIG1lc3NhZ2VcbiAgICBpZiAob2JqZWN0aXZlc0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlc0FycmF5KSB7XG4gICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWlzc2lvbnMoKSB7XG4gICAgY2xlYXIobWlzc2lvbnNCb3gpO1xuICAgIGNvbnN0IHF1ZXN0QXJyYXkgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCk7XG4gICAgZm9yIChjb25zdCBtaXNzaW9uIG9mIHF1ZXN0QXJyYXkpIHtcbiAgICAgIG1pc3Npb25zQm94LmFwcGVuZENoaWxkKGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pKTtcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXIgVG9kYXkncyBtaXNzaW9uIGFuZCBvYmplY3RpdmVzIHdoZW4gcGFnZSBsb2Fkc1xuICBmdW5jdGlvbiByZW5kZXJUb2RheSgpIHtcbiAgICBjaGVja1N0b3JlZE9iamVjdGl2ZXMoKVxuICAgIHJlbmRlck1pc3Npb25zKCk7XG4gICAgY29uc3QgdG9kYXkgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oJ1RvZGF5JykuZ2V0T2JqZWN0aXZlcygpO1xuICAgIGZvciAoY29uc3Qgb2JqZWN0aXZlIG9mIHRvZGF5KSB7XG4gICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVG9kYXkoKTsgIFxuXG4gIHJldHVybiBtYWluO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==