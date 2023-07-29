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


  // TODO enable editing of mission name(?)
  // creates mission element using mission object
  function createMissionElement(mission) {
    const missionElement = document.createElement('li');
    missionElement.classList.add('mission');
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
      const deleteMissionImg = document.createElement("i")
      deleteMissionImg.setAttribute("role", "button")
      deleteMissionImg.classList.add("fa-solid", "fa-square-xmark", "fa-lg")
      

      deleteMissionImg.addEventListener("click", () => {
        test.deleteMission(missionName)
        renderMissions()
        console.log(test.getQuestMenu().getMission("Today"))
        
        // renderObjectives(test.getQuestMenu().getMission("Today"))
      })
      parentElement.appendChild(deleteMissionImg)
    } 
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
    
    // TODO add listener to expand obj to show description
    // TODO listener/button to edit name, description, and date of objective

    objectiveElement.append(objectiveCheckBox, objectiveText)

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
  // console.log(test.getQuestMenu().missions);
     

  return main;
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9NaXNzaW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL09iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9RdWVzdE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzO1xuICB9XG5cbiAgc2V0T2JqZWN0aXZlcyhvYmplY3RpdmVzKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gb2JqZWN0aXZlcztcbiAgfVxuXG4gIGdldE9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG9iak5hbWUpO1xuICB9XG5cbiAgYWRkT2JqZWN0aXZlKG5ld09iaikge1xuICAgIGlmICghdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gbmV3T2JqLm5hbWUpKSB7XG4gICAgICB0aGlzLm9iamVjdGl2ZXMucHVzaChuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gdGhpcy5vYmplY3RpdmVzLmZpbHRlcigob2JqKSA9PiBvYmoubmFtZSAhPT0gb2JqTmFtZSlcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBzZXROYW1lKG9iak5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqTmFtZVxuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXREYXRlRm9ybWF0dGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kdWVEYXRlID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRvZGF5XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzJdXG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzFdXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy5kdWVEYXRlLnNwbGl0KCctJylbMF1cbiAgICAgICAgICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXG4gICAgICAgIH1cbiAgICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLXJldHVybiAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0TWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBbXVxuICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3IE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVGhpcyBXZWVrXCIpKVxuICAgIH1cblxuICAgIHNldE1pc3Npb25zKG1pc3Npb25zKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSBtaXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzaW9uc1xuICAgIH1cblxuICAgIGdldE1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSlcbiAgICB9XG5cbiAgICBhZGRNaXNzaW9uKG5ld01pc3Npb24pIHtcbiAgICAgICAgaWYoIXRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBuZXdNaXNzaW9uLm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3Npb25zLnB1c2gobmV3TWlzc2lvbilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHRoaXMubWlzc2lvbnMgPSB0aGlzLm1pc3Npb25zLmZpbHRlcigobWlzc2lvbikgPT4gbWlzc2lvbi5uYW1lICE9PSBtaXNzaW9uTmFtZSlcbiAgICAgICAgLyogY29uc3QgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpICovXG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlNaXNzaW9uKCkge1xuICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5vYmplY3RpdmVzID0gW11cblxuICAgICAgICB0aGlzLm1pc3Npb25zLmZvckVhY2goKG1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzaW9uLmdldE5hbWUoKSA9PT0gXCJUb2RheVwiKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0VG9kYXlPYmplY3RpdmVzKClcbiAgICAgICAgICAgIHRvZGF5T2JqZWN0aXZlcy5mb3JFYWNoKChvYmplY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gYCR7b2JqZWN0aXZlLmdldE5hbWUoKX1gXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikuYWRkT2JqZWN0aXZlKG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTWlzc2lvbiBmcm9tIFwiLi9NaXNzaW9uXCJcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCJcbmltcG9ydCBRdWVzdE1lbnUgZnJvbSBcIi4vUXVlc3RNZW51XCJcblxuXG5leHBvcnQgIGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7ICBcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHBhcmFtZXRlcnMgd2l0aCAtTmFtZSBoYXMgLmdldE5hbWUoKSBvciBpdCB3aWxsIGRlbGV0ZSB3cm9uZyBpdGVtXG5cbiAgICBhZGRNaXNzaW9uKG1pc3Npb24pIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5hZGRNaXNzaW9uKG1pc3Npb24pXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBhZGRPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iamVjdGl2ZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmFkZE9iamVjdGl2ZShvYmplY3RpdmUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUsIG5ld09iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5nZXRPYmplY3RpdmUob2JqTmFtZSkuc2V0TmFtZShuZXdPYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWlzc2lvbiBmcm9tICcuL01pc3Npb24nO1xuaW1wb3J0IE9iamVjdGl2ZSBmcm9tICcuL09iamVjdGl2ZSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICBjb25zdCB0ZXN0ID0gbmV3IFN0b3JhZ2UoKTtcblxuICBcbiAgLy8gRHVtbXkgTWlzc2lvbnNcbiAgY29uc3QgbWlzc2lvbiA9IG5ldyBNaXNzaW9uKCdUZXN0aW5nIG1pc3Npb24nKTtcbiAgdGVzdC5hZGRNaXNzaW9uKG1pc3Npb24pO1xuXG4gIC8vIGNoZWNrcyBzdG9yYWdlIGZvciBvYmplY3RpdmVzIGR1ZSB0b2RheSBhbmQgbW92ZXMgdGhlbSB0byBUb2RheSdzIG1pc3Npb25cbiAgZnVuY3Rpb24gY2hlY2tTdG9yZWRPYmplY3RpdmVzKCkge1xuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpXG4gICAgZm9yKGNvbnN0IG1pc3Npb24gb2Ygc3RvcmVkVG9kb3MpIHtcbiAgICAgIGNvbnN0IG1pc3Npb25PYmplY3RpdmVzID0gbWlzc2lvbi5nZXRPYmplY3RpdmVzKClcbiAgICAgIGZvcihjb25zdCBvYmplY3RpdmUgb2YgbWlzc2lvbk9iamVjdGl2ZXMpIHtcbiAgICAgICAgaWYoaXNUb2RheShvYmplY3RpdmUpKSB7XG4gICAgICAgICAgY29uc3Qgb2JqTmFtZSA9IG9iamVjdGl2ZS5nZXROYW1lKClcbiAgICAgICAgICBjb25zdCBvYmpEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZS5nZXREZXNjcmlwdGlvbigpXG4gICAgICAgICAgY29uc3Qgb2JqRGF0ZSA9IG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKClcbiAgICAgICAgICBjb25zdCBuZXdPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKG9iak5hbWUsIG9iakRlc2NyaXB0aW9uLCBvYmpEYXRlKVxuICAgICAgICAgIHRlc3QuZGVsZXRlT2JqZWN0aXZlKG1pc3Npb24uZ2V0TmFtZSgpLCBvYmplY3RpdmUuZ2V0TmFtZSgpKVxuICAgICAgICAgIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgbmV3T2JqZWN0aXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgb2JqZWN0aXZlIGlzIGR1ZSB0b2RheVxuICBmdW5jdGlvbiBpc1RvZGF5KG9iaikge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF0ZVRvZGF5ID0gIGRhdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZGF0ZU1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IGRhdGVZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgZnVsbERhdGUgPSBgJHtkYXRlTW9udGh9LyR7ZGF0ZVRvZGF5fS8ke2RhdGVZZWFyfWBcbiAgICBpZihvYmouZ2V0RGF0ZUZvcm1hdHRlZCgpID09PSBcInRvZGF5XCIgfHwgb2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gZnVsbERhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIER1bW15IE9iamVjdGl2ZXNcbiAgXG4gIGNvbnN0IHRvZGF5T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShcIlRvZGF5IG9iamVjdGl2ZVwiLCBcInRvZGFhYWF5XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVG9kYXlcIiwgdG9kYXlPYmplY3RpdmUpXG4gIGNvbnN0IHdlZWtPYmplY2V0aXZlID0gbmV3IE9iamVjdGl2ZShcIkZvciB0aGUgd2Vla1wiLCBcIndlZWVla1wiLCBcIjIwMjMtOC04XCIpXG4gIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGhpcyBXZWVrXCIsIHdlZWtPYmplY2V0aXZlKVxuICAvLyBjb25zdCB0cnlpbmdUb1RvZGF5ID0gbmV3IE9iamVjdGl2ZShcIk1vdmUgdG8gVG9kYXlcIiwgXCJtb3ZpbmdcIiwgXCIyNy83LzIwMjNcIilcbiAgLy8gdGVzdC5hZGRPYmplY3RpdmUoXCJUZXN0aW5nIG1pc3Npb25cIiwgdHJ5aW5nVG9Ub2RheSlcblxuICBjb25zdCBtaXNzaW9uc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9ucycpO1xuICBjb25zdCBvYmplY3RpdmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9iamVjdGl2ZXMnKTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LW9iai1tZXNzYWdlJyk7XG5cbiAgLy8gQWRkIG1pc3Npb25cbiAgY29uc3QgYWRkTWlzc2lvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbWlzc2lvbicpO1xuICBcbiAgY29uc3QgbWlzc2lvbkZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICBtaXNzaW9uRm9ybUJveC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvbi1mb3JtLWJveFwiKVxuXG4gIGNvbnN0IG1pc3Npb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcblxuICBjb25zdCBtaXNzaW9uRmllbGRTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICBjb25zdCBtaXNzaW9uRm9ybUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIilcbiAgbWlzc2lvbkZvcm1MZWdlbmQuY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tbGVnZW5kXCIpXG4gIG1pc3Npb25Gb3JtTGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IE1pc3Npb25cIlxuXG4gIGNvbnN0IG1pc3Npb25OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgbWlzc2lvbk5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpXG4gIG1pc3Npb25OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk1pc3Npb24gTmFtZTpcIlxuXG4gIGNvbnN0IG1pc3Npb25OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgbWlzc2lvbk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIilcbiAgbWlzc2lvbk5hbWVJbnB1dC5pZCA9IFwibmFtZVwiXG4gIG1pc3Npb25OYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRoZSBtaXNzaW9uIG5hbWVcIlxuXG4gIGNvbnN0IGNyZWF0ZU1pc3Npb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGNyZWF0ZU1pc3Npb25CdG4uaWQgPSBcImNyZWF0ZS1taXNzaW9uLWJ0blwiXG4gIGNyZWF0ZU1pc3Npb25CdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBNaXNzaW9uXCJcblxuICBjcmVhdGVNaXNzaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG1pc3Npb25OYW1lID0gbWlzc2lvbk5hbWVJbnB1dC52YWx1ZVxuICAgIGlmIChtaXNzaW9uTmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbmV3TWlzc2lvbiA9IG5ldyBNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgIHRlc3QuYWRkTWlzc2lvbihuZXdNaXNzaW9uKVxuICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIHJlbmRlck1pc3Npb25zKClcbiAgfSlcbiAgXG4gIG1pc3Npb25Gb3JtQm94LmFwcGVuZENoaWxkKG1pc3Npb25Gb3JtKVxuICBtaXNzaW9uRm9ybS5hcHBlbmQobWlzc2lvbkZpZWxkU2V0KVxuICBtaXNzaW9uRmllbGRTZXQuYXBwZW5kKG1pc3Npb25Gb3JtTGVnZW5kLCBtaXNzaW9uTmFtZUxhYmVsLCBjcmVhdGVNaXNzaW9uQnRuKVxuICBtaXNzaW9uTmFtZUxhYmVsLmFwcGVuZENoaWxkKG1pc3Npb25OYW1lSW5wdXQpXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm1Cb3gpXG5cbiAgYWRkTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmKG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIG1pc3Npb25OYW1lSW5wdXQuZm9jdXMoKVxuICAgIH1cbiAgfSlcbiAgXG5cbiAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib3hcIilcbiAgLy8gQWRkIG9iamVjdGl2ZVxuICBjb25zdCBhZGRPYmplY3RpdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW9iamVjdGl2ZScpO1xuXG4gIGNvbnN0IG9iamVjdGl2ZUZvcm1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIG9iamVjdGl2ZUZvcm1Cb3guY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZS1mb3JtLWJveFwiKVxuXG4gIGNvbnN0IG9iamVjdGl2ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gIGNvbnN0IG9iamVjdGl2ZUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIilcbiAgb2JqZWN0aXZlRm9ybUxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWxlZ2VuZFwiKVxuICBvYmplY3RpdmVGb3JtTGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IG9iamVjdGl2ZVwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG9iamVjdGl2ZU5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvTmFtZVwiKVxuICBvYmplY3RpdmVOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZSBOYW1lOiBcIlxuXG4gIGNvbnN0IG9iamVjdGl2ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBvYmplY3RpdmVOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG9iamVjdGl2ZU5hbWVJbnB1dC5pZCA9IFwib05hbWVcIlxuICBvYmplY3RpdmVOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRoZSBvYmplY3RpdmUgbmFtZVwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm9EZXNjcmlwdGlvblwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJPYmplY3RpdmUgRGVzY3JpcHRpb246IFwiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LmlkID0gXCJvRGVzY3JpcHRpb25cIlxuICBvYmplY3RpdmVEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJXaGF0IGlzIHRoaXMgb2JqZWN0aXZlIGFib3V0P1wiXG5cbiAgY29uc3Qgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJvRHVlRGF0ZVwiKVxuICBvYmplY3RpdmVEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZSBEdWUgRGF0ZTogXCJcblxuICBjb25zdCBvYmplY3RpdmVEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgb2JqZWN0aXZlRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gIG9iamVjdGl2ZUR1ZURhdGVJbnB1dC5pZCA9IFwib0R1ZURhdGVcIlxuXG4gIGNvbnN0IG1pc3Npb25QaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICBtaXNzaW9uUGlja2VyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib01pc3Npb25cIilcbiAgbWlzc2lvblBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJNaXNzaW9uOiBcIlxuXG4gIGNvbnN0IG1pc3Npb25QaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgbWlzc2lvblBpY2tlcklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJvTWlzc2lvblwiKVxuICBtaXNzaW9uUGlja2VySW5wdXQuaWQgPSBcIm9NaXNzaW9uXCJcblxuICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9ucygpKSB7XG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHttaXNzaW9uLmdldE5hbWUoKX1gKVxuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGAke21pc3Npb24uZ2V0TmFtZSgpfWBcbiAgICAgIG1pc3Npb25QaWNrZXJJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxuICAgIH1cblxuICBjb25zdCBjcmVhdGVPYmplY3RpdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGNyZWF0ZU9iamVjdGl2ZUJ0bi5pZCA9IFwiY3JlYXRlLW9iamVjdGl2ZS1idG5cIlxuICBjcmVhdGVPYmplY3RpdmVCdG4udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBPYmplY3RpdmVcIlxuXG4gIGNyZWF0ZU9iamVjdGl2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBvYmplY3RpdmVOYW1lID0gb2JqZWN0aXZlTmFtZUlucHV0LnZhbHVlXG4gICAgaWYgKG9iamVjdGl2ZU5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBvYmplY3RpdmVEZXNjcmlwdGlvbiA9IG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICBjb25zdCBvYmplY3RpdmVEdWVEYXRlID0gb2JqZWN0aXZlRHVlRGF0ZUlucHV0LnZhbHVlXG4gICAgY29uc3Qgb2JqZWN0aXZlTWlzc2lvbiA9IG1pc3Npb25QaWNrZXJJbnB1dC52YWx1ZVxuICAgIGNvbnN0IG5ld09iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUob2JqZWN0aXZlTmFtZSwgb2JqZWN0aXZlRGVzY3JpcHRpb24sIG9iamVjdGl2ZUR1ZURhdGUpXG4gICAgdGVzdC5hZGRPYmplY3RpdmUob2JqZWN0aXZlTWlzc2lvbiwgbmV3T2JqZWN0aXZlKVxuICAgIG9iamVjdGl2ZUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICB9KVxuXG4gIG9iamVjdGl2ZUZvcm1Cb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlRm9ybSlcbiAgb2JqZWN0aXZlRm9ybS5hcHBlbmRDaGlsZChvYmplY3RpdmVGaWVsZHNldClcbiAgb2JqZWN0aXZlRmllbGRzZXQuYXBwZW5kKG9iamVjdGl2ZUZvcm1MZWdlbmQsIG9iamVjdGl2ZU5hbWVMYWJlbCwgb2JqZWN0aXZlRGVzY3JpcHRpb25MYWJlbCwgb2JqZWN0aXZlRHVlRGF0ZUxhYmVsLCBtaXNzaW9uUGlja2VyTGFiZWwsIG1pc3Npb25QaWNrZXJJbnB1dCwgY3JlYXRlT2JqZWN0aXZlQnRuKVxuICBvYmplY3RpdmVOYW1lTGFiZWwuYXBwZW5kQ2hpbGQob2JqZWN0aXZlTmFtZUlucHV0KVxuICBvYmplY3RpdmVEZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZURlc2NyaXB0aW9uSW5wdXQpXG4gIG9iamVjdGl2ZUR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChvYmplY3RpdmVEdWVEYXRlSW5wdXQpXG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlRm9ybUJveClcblxuICBhZGRPYmplY3RpdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAob2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgb2JqZWN0aXZlRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICBvYmplY3RpdmVOYW1lSW5wdXQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RpdmVGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgfSlcblxuXG4gIC8vIFRPRE8gZW5hYmxlIGVkaXRpbmcgb2YgbWlzc2lvbiBuYW1lKD8pXG4gIC8vIGNyZWF0ZXMgbWlzc2lvbiBlbGVtZW50IHVzaW5nIG1pc3Npb24gb2JqZWN0XG4gIGZ1bmN0aW9uIGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pIHtcbiAgICBjb25zdCBtaXNzaW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWlzc2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzc2lvbicpO1xuICAgIGNvbnN0IG1pc3Npb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9IG1pc3Npb24uZ2V0TmFtZSgpO1xuXG4gICAgbWlzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJPYmplY3RpdmVzKG1pc3Npb24pO1xuICAgIH0pO1xuXG4gICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWlzc2lvblRleHQpO1xuICAgIGNyZWF0ZURlbGV0ZUJ0bihtaXNzaW9uLmdldE5hbWUoKSwgbWlzc2lvbkVsZW1lbnQpXG5cbiAgICByZXR1cm4gbWlzc2lvbkVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4obWlzc2lvbk5hbWUsIHBhcmVudEVsZW1lbnQpIHtcbiAgICBpZihtaXNzaW9uTmFtZSAhPT0gXCJUb2RheVwiICYmIG1pc3Npb25OYW1lICE9PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgICBjb25zdCBkZWxldGVNaXNzaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIilcbiAgICAgIGRlbGV0ZU1pc3Npb25JbWcuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKVxuICAgICAgZGVsZXRlTWlzc2lvbkltZy5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1zcXVhcmUteG1hcmtcIiwgXCJmYS1sZ1wiKVxuICAgICAgXG5cbiAgICAgIGRlbGV0ZU1pc3Npb25JbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGVzdC5kZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKVxuICAgICAgICByZW5kZXJNaXNzaW9ucygpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbihcIlRvZGF5XCIpKVxuICAgICAgICBcbiAgICAgICAgLy8gcmVuZGVyT2JqZWN0aXZlcyh0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICAgIH0pXG4gICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZU1pc3Npb25JbWcpXG4gICAgfSBcbiAgfVxuXG5cblxuICAvLyBjcmVhdGVzIG9iamVjdGl2ZSBlbGVtZW50IHVzaW5nIG9iamVjdGl2ZSBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpIHtcbiAgICBjb25zdCBvYmplY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvYmplY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdGl2ZScpO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3Qgb2JqZWN0aXZlQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBvYmplY3RpdmVDaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcbiAgICBvYmplY3RpdmVDaGVja0JveC5pZCA9IG9iamVjdGl2ZS5nZXROYW1lKClcbiAgICBcbiAgICAvLyBUT0RPIGFkZCBsaXN0ZW5lciB0byBleHBhbmQgb2JqIHRvIHNob3cgZGVzY3JpcHRpb25cbiAgICAvLyBUT0RPIGxpc3RlbmVyL2J1dHRvbiB0byBlZGl0IG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgZGF0ZSBvZiBvYmplY3RpdmVcblxuICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kKG9iamVjdGl2ZUNoZWNrQm94LCBvYmplY3RpdmVUZXh0KVxuXG4gICAgaWYgKG9iamVjdGl2ZS5nZXREdWVEYXRlKCkgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IG9iamVjdGl2ZUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBpZiAob2JqZWN0aXZlLmdldER1ZURhdGUoKSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgIG9iamVjdGl2ZUR1ZURhdGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdGl2ZUR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0RHVlRGF0ZSgpXG4gICAgICB9XG4gICAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZUR1ZURhdGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck9iamVjdGl2ZXMoY2hvc2VuTWlzc2lvbikge1xuICAgIGNsZWFyKG9iamVjdGl2ZXNCb3gpXG4gICAgY29uc3Qgb2JqZWN0aXZlc0FycmF5ID0gY2hvc2VuTWlzc2lvbi5nZXRPYmplY3RpdmVzKCk7XG4gICAgLy8gaWYgYXJyYXkgaXMgZW1wdHkgY3JlYXRlIG1lc3NhZ2VcbiAgICBpZiAob2JqZWN0aXZlc0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlc0FycmF5KSB7XG4gICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWlzc2lvbnMoKSB7XG4gICAgY2xlYXIobWlzc2lvbnNCb3gpO1xuICAgIGNvbnN0IHF1ZXN0QXJyYXkgPSB0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb25zKCk7XG4gICAgZm9yIChjb25zdCBtaXNzaW9uIG9mIHF1ZXN0QXJyYXkpIHtcbiAgICAgIG1pc3Npb25zQm94LmFwcGVuZENoaWxkKGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIHJlbmRlciBUb2RheSdzIG1pc3Npb24gYW5kIG9iamVjdGl2ZXMgd2hlbiBwYWdlIGxvYWRzXG4gIGZ1bmN0aW9uIHJlbmRlclRvZGF5KCkge1xuICAgIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpXG4gICAgcmVuZGVyTWlzc2lvbnMoKTtcbiAgICBjb25zdCB0b2RheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbignVG9kYXknKS5nZXRPYmplY3RpdmVzKCk7XG4gICAgZm9yIChjb25zdCBvYmplY3RpdmUgb2YgdG9kYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUb2RheSgpO1xuICAvLyBjb25zb2xlLmxvZyh0ZXN0LmdldFF1ZXN0TWVudSgpLm1pc3Npb25zKTtcbiAgICAgXG5cbiAgcmV0dXJuIG1haW47XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9