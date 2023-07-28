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
  const weekObjecetive = new _Objective__WEBPACK_IMPORTED_MODULE_1__["default"]("For the week", "weeeek", "8/8/2023")
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
      missionNameInput.focus()
    }
  })
  
  // TODO add objective using button

  // Add objective
  const addObjectiveBtn = document.getElementById('add-objective');

  const objectiveFormBox = document.createElement("div")
  objectiveFormBox.classList.add("objective-form-box")

  const objectiveForm = document.createElement("form")

  const objectiveFieldset = document.createElement("fieldset")

  const objectiveFormLegend = document.createElement("legend")
  objectiveFormLegend.classList.add("objective-legend")
  objectiveFormLegend.textContent = "Create new objective"
  // TODO create form for objective submission

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

    // TODO add checkbox to delete objective after finished
    // TODO add duedate
    // TODO add listener to expand obj to show description
    // TODO listener/button to edit name, description, and date of objective

    objectiveElement.appendChild(objectiveText);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9NaXNzaW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL09iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9RdWVzdE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzO1xuICB9XG5cbiAgc2V0T2JqZWN0aXZlcyhvYmplY3RpdmVzKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gb2JqZWN0aXZlcztcbiAgfVxuXG4gIGdldE9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG9iak5hbWUpO1xuICB9XG5cbiAgYWRkT2JqZWN0aXZlKG5ld09iaikge1xuICAgIGlmICghdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gbmV3T2JqLm5hbWUpKSB7XG4gICAgICB0aGlzLm9iamVjdGl2ZXMucHVzaChuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gdGhpcy5vYmplY3RpdmVzLmZpbHRlcigob2JqKSA9PiBvYmoubmFtZSAhPT0gb2JqTmFtZSlcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IFwidG9kYXlcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVlRGF0ZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0b2RheVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVswXVxuICAgICAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVsxXVxuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLycpWzJdXG4gICAgICAgICAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuICAgICAgICB9XG4gICAgICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1yZXR1cm4gKi9cbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuL01pc3Npb25cIlxuaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gW11cbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVG9kYXlcIikpXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRoaXMgV2Vla1wiKSlcbiAgICB9XG5cbiAgICBzZXRNaXNzaW9ucyhtaXNzaW9ucykge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gbWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpXG4gICAgfVxuXG4gICAgYWRkTWlzc2lvbihuZXdNaXNzaW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbmV3TWlzc2lvbi5uYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ld01pc3Npb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gdGhpcy5taXNzaW9ucy5maWx0ZXIoKG1pc3Npb24pID0+IG1pc3Npb24ubmFtZSAhPT0gbWlzc2lvbk5hbWUpXG4gICAgICAgIC8qIGNvbnN0IG1pc3Npb25Ub0RlbGV0ZSA9IHRoaXMubWlzc2lvbnMuZmluZChtaXNzaW9uID0+IG1pc3Npb24uZ2V0TmFtZSgpID09PSBtaXNzaW9uTmFtZSkgXG4gICAgICAgIHRoaXMubWlzc2lvbnMuc3BsaWNlKHRoaXMubWlzc2lvbnMuaW5kZXhPZihtaXNzaW9uVG9EZWxldGUpLCAxKSAqL1xuICAgIH1cblxuICAgIHVwZGF0ZVRvZGF5TWlzc2lvbigpIHtcbiAgICAgICAgdGhpcy5nZXRNaXNzaW9uKFwiVG9kYXlcIikub2JqZWN0aXZlcyA9IFtdXG5cbiAgICAgICAgdGhpcy5taXNzaW9ucy5mb3JFYWNoKChtaXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAobWlzc2lvbi5nZXROYW1lKCkgPT09IFwiVG9kYXlcIikgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCB0b2RheU9iamVjdGl2ZXMgPSBtaXNzaW9uLmdldFRvZGF5T2JqZWN0aXZlcygpXG4gICAgICAgICAgICB0b2RheU9iamVjdGl2ZXMuZm9yRWFjaCgob2JqZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0aXZlTmFtZSA9IGAke29iamVjdGl2ZS5nZXROYW1lKCl9YFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWlzc2lvbihcIlRvZGF5XCIpLmFkZE9iamVjdGl2ZShuZXcgT2JqZWN0aXZlKG9iamVjdGl2ZU5hbWUsIG9iamVjdGl2ZS5nZXREYXRlRm9ybWF0dGVkKCkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5pbXBvcnQgUXVlc3RNZW51IGZyb20gXCIuL1F1ZXN0TWVudVwiXG5cblxuZXhwb3J0ICBkZWZhdWx0IGNsYXNzIFN0b3JhZ2UgeyAgXG4gICAgc2F2ZVF1ZXN0TWVudShkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicXVlc3RtZW51XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cblxuICAgIGdldFF1ZXN0TWVudSgpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgUXVlc3RNZW51KCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVlc3RtZW51XCIpKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5zZXRNaXNzaW9ucyhcbiAgICAgICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbnMoKVxuICAgICAgICAgICAgLm1hcChtaXNzaW9uID0+IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgbmV3IE1pc3Npb24oKSwgbWlzc2lvblxuICAgICAgICAgICAgKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbnMoKVxuICAgICAgICAuZm9yRWFjaChtaXNzaW9uID0+IFxuICAgICAgICAgICAgbWlzc2lvbi5zZXRPYmplY3RpdmVzKFxuICAgICAgICAgICAgICAgIG1pc3Npb24uZ2V0T2JqZWN0aXZlcygpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgb2JqID0+IE9iamVjdC5hc3NpZ24obmV3IE9iamVjdGl2ZSwgb2JqKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcXVlc3RzTWVudVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBwYXJhbWV0ZXJzIHdpdGggLU5hbWUgaGFzIC5nZXROYW1lKCkgb3IgaXQgd2lsbCBkZWxldGUgd3JvbmcgaXRlbVxuXG4gICAgYWRkTWlzc2lvbihtaXNzaW9uKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuYWRkTWlzc2lvbihtaXNzaW9uKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgYWRkT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5hZGRPYmplY3RpdmUob2JqZWN0aXZlKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICBkZWxldGVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5kZWxldGVPYmplY3RpdmUob2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgcmVuYW1lT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lLCBuZXdPYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZ2V0T2JqZWN0aXZlKG9iak5hbWUpLnNldE5hbWUobmV3T2JqTmFtZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1pc3Npb24gZnJvbSAnLi9NaXNzaW9uJztcbmltcG9ydCBPYmplY3RpdmUgZnJvbSAnLi9PYmplY3RpdmUnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgY29uc3QgdGVzdCA9IG5ldyBTdG9yYWdlKCk7XG5cbiAgXG4gIC8vIER1bW15IE1pc3Npb25zXG4gIGNvbnN0IG1pc3Npb24gPSBuZXcgTWlzc2lvbignVGVzdGluZyBtaXNzaW9uJyk7XG4gIHRlc3QuYWRkTWlzc2lvbihtaXNzaW9uKTtcblxuICAvLyBjaGVja3Mgc3RvcmFnZSBmb3Igb2JqZWN0aXZlcyBkdWUgdG9kYXkgYW5kIG1vdmVzIHRoZW0gdG8gVG9kYXkncyBtaXNzaW9uXG4gIGZ1bmN0aW9uIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpIHtcbiAgICBjb25zdCBzdG9yZWRUb2RvcyA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKVxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIHN0b3JlZFRvZG9zKSB7XG4gICAgICBjb25zdCBtaXNzaW9uT2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0T2JqZWN0aXZlcygpXG4gICAgICBmb3IoY29uc3Qgb2JqZWN0aXZlIG9mIG1pc3Npb25PYmplY3RpdmVzKSB7XG4gICAgICAgIGlmKGlzVG9kYXkob2JqZWN0aXZlKSkge1xuICAgICAgICAgIGNvbnN0IG9iak5hbWUgPSBvYmplY3RpdmUuZ2V0TmFtZSgpXG4gICAgICAgICAgY29uc3Qgb2JqRGVzY3JpcHRpb24gPSBvYmplY3RpdmUuZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICAgIGNvbnN0IG9iakRhdGUgPSBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpXG4gICAgICAgICAgY29uc3QgbmV3T2JqZWN0aXZlID0gbmV3IE9iamVjdGl2ZShvYmpOYW1lLCBvYmpEZXNjcmlwdGlvbiwgb2JqRGF0ZSlcbiAgICAgICAgICB0ZXN0LmRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uLmdldE5hbWUoKSwgb2JqZWN0aXZlLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIG5ld09iamVjdGl2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIG9iamVjdGl2ZSBpcyBkdWUgdG9kYXlcbiAgZnVuY3Rpb24gaXNUb2RheShvYmopIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRhdGVUb2RheSA9ICBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IGRhdGVNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBkYXRlWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IGZ1bGxEYXRlID0gYCR7ZGF0ZU1vbnRofS8ke2RhdGVUb2RheX0vJHtkYXRlWWVhcn1gXG4gICAgaWYob2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gXCJ0b2RheVwiIHx8IG9iai5nZXREYXRlRm9ybWF0dGVkKCkgPT09IGZ1bGxEYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBEdW1teSBPYmplY3RpdmVzXG4gIFxuICBjb25zdCB0b2RheU9iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJUb2RheSBvYmplY3RpdmVcIiwgXCJ0b2RhYWFheVwiKVxuICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIHRvZGF5T2JqZWN0aXZlKVxuICBjb25zdCB3ZWVrT2JqZWNldGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJGb3IgdGhlIHdlZWtcIiwgXCJ3ZWVlZWtcIiwgXCI4LzgvMjAyM1wiKVxuICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRoaXMgV2Vla1wiLCB3ZWVrT2JqZWNldGl2ZSlcbiAgLy8gY29uc3QgdHJ5aW5nVG9Ub2RheSA9IG5ldyBPYmplY3RpdmUoXCJNb3ZlIHRvIFRvZGF5XCIsIFwibW92aW5nXCIsIFwiMjcvNy8yMDIzXCIpXG4gIC8vIHRlc3QuYWRkT2JqZWN0aXZlKFwiVGVzdGluZyBtaXNzaW9uXCIsIHRyeWluZ1RvVG9kYXkpXG5cbiAgY29uc3QgbWlzc2lvbnNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlzc2lvbnMnKTtcbiAgY29uc3Qgb2JqZWN0aXZlc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vYmplY3RpdmVzJyk7XG4gIGNvbnN0IGVtcHR5TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1vYmotbWVzc2FnZScpO1xuXG4gIC8vIEFkZCBtaXNzaW9uXG4gIGNvbnN0IGFkZE1pc3Npb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW1pc3Npb24nKTtcbiAgXG4gIGNvbnN0IG1pc3Npb25Gb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBtaXNzaW9uRm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgbWlzc2lvbkZvcm1Cb3guY2xhc3NMaXN0LmFkZChcIm1pc3Npb24tZm9ybS1ib3hcIilcblxuICBjb25zdCBtaXNzaW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgY29uc3QgbWlzc2lvbkZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgY29uc3QgbWlzc2lvbkZvcm1MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpXG4gIG1pc3Npb25Gb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJtaXNzaW9uLWxlZ2VuZFwiKVxuICBtaXNzaW9uRm9ybUxlZ2VuZC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBNaXNzaW9uXCJcblxuICBjb25zdCBtaXNzaW9uTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gIG1pc3Npb25OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKVxuICBtaXNzaW9uTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJNaXNzaW9uIE5hbWU6XCJcblxuICBjb25zdCBtaXNzaW9uTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gIG1pc3Npb25OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpXG4gIG1pc3Npb25OYW1lSW5wdXQuaWQgPSBcIm5hbWVcIlxuICBtaXNzaW9uTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0aGUgbWlzc2lvbiBuYW1lXCJcblxuICBjb25zdCBjcmVhdGVNaXNzaW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBjcmVhdGVNaXNzaW9uQnRuLmlkID0gXCJjcmVhdGUtbWlzc2lvbi1idG5cIlxuICBjcmVhdGVNaXNzaW9uQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTWlzc2lvblwiXG5cbiAgY3JlYXRlTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBtaXNzaW9uTmFtZSA9IG1pc3Npb25OYW1lSW5wdXQudmFsdWVcbiAgICBjb25zdCBuZXdNaXNzaW9uID0gbmV3IE1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgdGVzdC5hZGRNaXNzaW9uKG5ld01pc3Npb24pXG4gICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICB9KVxuICBcbiAgbWlzc2lvbkZvcm1Cb3guYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm0pXG4gIG1pc3Npb25Gb3JtLmFwcGVuZChtaXNzaW9uRmllbGRTZXQpXG4gIG1pc3Npb25GaWVsZFNldC5hcHBlbmQobWlzc2lvbkZvcm1MZWdlbmQsIG1pc3Npb25OYW1lTGFiZWwsIG1pc3Npb25OYW1lSW5wdXQsIGNyZWF0ZU1pc3Npb25CdG4pXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWlzc2lvbkZvcm1Cb3gpXG5cbiAgYWRkTWlzc2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmKG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgbWlzc2lvbkZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3Npb25Gb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIG1pc3Npb25OYW1lSW5wdXQuZm9jdXMoKVxuICAgIH1cbiAgfSlcbiAgXG4gIC8vIFRPRE8gYWRkIG9iamVjdGl2ZSB1c2luZyBidXR0b25cblxuICAvLyBBZGQgb2JqZWN0aXZlXG4gIGNvbnN0IGFkZE9iamVjdGl2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtb2JqZWN0aXZlJyk7XG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgb2JqZWN0aXZlRm9ybUJveC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlLWZvcm0tYm94XCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgY29uc3Qgb2JqZWN0aXZlRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICBjb25zdCBvYmplY3RpdmVGb3JtTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKVxuICBvYmplY3RpdmVGb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmUtbGVnZW5kXCIpXG4gIG9iamVjdGl2ZUZvcm1MZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBuZXcgb2JqZWN0aXZlXCJcbiAgLy8gVE9ETyBjcmVhdGUgZm9ybSBmb3Igb2JqZWN0aXZlIHN1Ym1pc3Npb25cblxuICAvLyBUT0RPIGVuYWJsZSBlZGl0aW5nIG9mIG1pc3Npb24gbmFtZSg/KVxuICAvLyBjcmVhdGVzIG1pc3Npb24gZWxlbWVudCB1c2luZyBtaXNzaW9uIG9iamVjdFxuICBmdW5jdGlvbiBjcmVhdGVNaXNzaW9uRWxlbWVudChtaXNzaW9uKSB7XG4gICAgY29uc3QgbWlzc2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1pc3Npb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3Npb24nKTtcbiAgICBjb25zdCBtaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKTtcblxuICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyT2JqZWN0aXZlcyhtaXNzaW9uKTtcbiAgICB9KTtcblxuICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZENoaWxkKG1pc3Npb25UZXh0KTtcbiAgICBjcmVhdGVEZWxldGVCdG4obWlzc2lvbi5nZXROYW1lKCksIG1pc3Npb25FbGVtZW50KVxuXG4gICAgcmV0dXJuIG1pc3Npb25FbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKG1pc3Npb25OYW1lLCBwYXJlbnRFbGVtZW50KSB7XG4gICAgaWYobWlzc2lvbk5hbWUgIT09IFwiVG9kYXlcIiAmJiBtaXNzaW9uTmFtZSAhPT0gXCJUaGlzIFdlZWtcIikge1xuICAgICAgY29uc3QgZGVsZXRlTWlzc2lvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXG4gICAgICBkZWxldGVNaXNzaW9uSW1nLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIilcbiAgICAgIGRlbGV0ZU1pc3Npb25JbWcuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtc3F1YXJlLXhtYXJrXCIsIFwiZmEtbGdcIilcbiAgICAgIFxuXG4gICAgICBkZWxldGVNaXNzaW9uSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRlc3QuZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSlcbiAgICAgICAgcmVuZGVyTWlzc2lvbnMoKVxuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICAgICAgLy8gcmVuZGVyT2JqZWN0aXZlcyh0ZXN0LmdldFF1ZXN0TWVudSgpLmdldE1pc3Npb24oXCJUb2RheVwiKSlcbiAgICAgIH0pXG4gICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZU1pc3Npb25JbWcpXG4gICAgfSBcbiAgfVxuXG5cblxuICAvLyBjcmVhdGVzIG9iamVjdGl2ZSBlbGVtZW50IHVzaW5nIG9iamVjdGl2ZSBvYmplY3RcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpIHtcbiAgICBjb25zdCBvYmplY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvYmplY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdGl2ZScpO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpO1xuXG4gICAgLy8gVE9ETyBhZGQgY2hlY2tib3ggdG8gZGVsZXRlIG9iamVjdGl2ZSBhZnRlciBmaW5pc2hlZFxuICAgIC8vIFRPRE8gYWRkIGR1ZWRhdGVcbiAgICAvLyBUT0RPIGFkZCBsaXN0ZW5lciB0byBleHBhbmQgb2JqIHRvIHNob3cgZGVzY3JpcHRpb25cbiAgICAvLyBUT0RPIGxpc3RlbmVyL2J1dHRvbiB0byBlZGl0IG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgZGF0ZSBvZiBvYmplY3RpdmVcblxuICAgIG9iamVjdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG5cbiAgICByZXR1cm4gb2JqZWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyT2JqZWN0aXZlcyhjaG9zZW5NaXNzaW9uKSB7XG4gICAgY2xlYXIob2JqZWN0aXZlc0JveClcbiAgICBjb25zdCBvYmplY3RpdmVzQXJyYXkgPSBjaG9zZW5NaXNzaW9uLmdldE9iamVjdGl2ZXMoKTtcbiAgICAvLyBpZiBhcnJheSBpcyBlbXB0eSBjcmVhdGUgbWVzc2FnZVxuICAgIGlmIChvYmplY3RpdmVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlbXB0eU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiBvYmplY3RpdmVzQXJyYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXNzaW9ucygpIHtcbiAgICBjbGVhcihtaXNzaW9uc0JveCk7XG4gICAgY29uc3QgcXVlc3RBcnJheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKTtcbiAgICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgcXVlc3RBcnJheSkge1xuICAgICAgbWlzc2lvbnNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gcmVuZGVyIFRvZGF5J3MgbWlzc2lvbiBhbmQgb2JqZWN0aXZlcyB3aGVuIHBhZ2UgbG9hZHNcbiAgZnVuY3Rpb24gcmVuZGVyVG9kYXkoKSB7XG4gICAgY2hlY2tTdG9yZWRPYmplY3RpdmVzKClcbiAgICByZW5kZXJNaXNzaW9ucygpO1xuICAgIGNvbnN0IHRvZGF5ID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKCdUb2RheScpLmdldE9iamVjdGl2ZXMoKTtcbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiB0b2RheSkge1xuICAgICAgb2JqZWN0aXZlc0JveC5hcHBlbmRDaGlsZChjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvZGF5KCk7XG4gIC8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkubWlzc2lvbnMpO1xuICAgICBcblxuICByZXR1cm4gbWFpbjtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=