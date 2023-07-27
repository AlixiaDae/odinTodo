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
  const test = new _Storage__WEBPACK_IMPORTED_MODULE_2__["default"]();

  // Dummy Missions
  const mission = new _Mission__WEBPACK_IMPORTED_MODULE_0__["default"]('Testing mission');
  test.addMission(mission);

  // TODO function checkDueDate() using date fns
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
  // for each objective, check due date. if date == to date.now, move objective to "Today" mission and delete it from its old mission

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
  // checkIfToday()
  // TODO function moveObjectiveToToday()

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
  // TODO add objective using button
  // TODO create form for objective submission

  // this function takes mission object so element texts must be taken from its properties

  // TODO enable editing of mission name(?)
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

  // this function takes objective object so element texts must be taken from its properties

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

  // Rendering functions
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9NaXNzaW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL09iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9RdWVzdE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0T2JqZWN0aXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RpdmVzO1xuICB9XG5cbiAgc2V0T2JqZWN0aXZlcyhvYmplY3RpdmVzKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gb2JqZWN0aXZlcztcbiAgfVxuXG4gIGdldE9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcy5maW5kKChvYmopID0+IG9iai5nZXROYW1lKCkgPT09IG9iak5hbWUpO1xuICB9XG5cbiAgYWRkT2JqZWN0aXZlKG5ld09iaikge1xuICAgIGlmICghdGhpcy5vYmplY3RpdmVzLmZpbmQoKG9iaikgPT4gb2JqLmdldE5hbWUoKSA9PT0gbmV3T2JqLm5hbWUpKSB7XG4gICAgICB0aGlzLm9iamVjdGl2ZXMucHVzaChuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgdGhpcy5vYmplY3RpdmVzID0gdGhpcy5vYmplY3RpdmVzLmZpbHRlcigob2JqKSA9PiBvYmoubmFtZSAhPT0gb2JqTmFtZSlcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IFwidG9kYXlcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIHNldE5hbWUob2JqTmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvYmpOYW1lXG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVlRGF0ZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0b2RheVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVswXVxuICAgICAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy8nKVsxXVxuICAgICAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLycpWzJdXG4gICAgICAgICAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuICAgICAgICB9XG4gICAgICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1yZXR1cm4gKi9cbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuL01pc3Npb25cIlxuaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gW11cbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVG9kYXlcIikpXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRoaXMgV2Vla1wiKSlcbiAgICB9XG5cbiAgICBzZXRNaXNzaW9ucyhtaXNzaW9ucykge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gbWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpXG4gICAgfVxuXG4gICAgYWRkTWlzc2lvbihuZXdNaXNzaW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbmV3TWlzc2lvbi5uYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ld01pc3Npb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBtaXNzaW9uVG9EZWxldGUgPSB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpIFxuICAgICAgICB0aGlzLm1pc3Npb25zLnNwbGljZSh0aGlzLm1pc3Npb25zLmluZGV4T2YobWlzc2lvblRvRGVsZXRlKSwgMSlcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RheU1pc3Npb24oKSB7XG4gICAgICAgIHRoaXMuZ2V0TWlzc2lvbihcIlRvZGF5XCIpLm9iamVjdGl2ZXMgPSBbXVxuXG4gICAgICAgIHRoaXMubWlzc2lvbnMuZm9yRWFjaCgobWlzc2lvbikgPT4ge1xuICAgICAgICAgICAgaWYgKG1pc3Npb24uZ2V0TmFtZSgpID09PSBcIlRvZGF5XCIpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgdG9kYXlPYmplY3RpdmVzID0gbWlzc2lvbi5nZXRUb2RheU9iamVjdGl2ZXMoKVxuICAgICAgICAgICAgdG9kYXlPYmplY3RpdmVzLmZvckVhY2goKG9iamVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZU5hbWUgPSBgJHtvYmplY3RpdmUuZ2V0TmFtZSgpfWBcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1pc3Npb24oXCJUb2RheVwiKS5hZGRPYmplY3RpdmUobmV3IE9iamVjdGl2ZShvYmplY3RpdmVOYW1lLCBvYmplY3RpdmUuZ2V0RGF0ZUZvcm1hdHRlZCgpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuL01pc3Npb25cIlxuaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuaW1wb3J0IFF1ZXN0TWVudSBmcm9tIFwiLi9RdWVzdE1lbnVcIlxuXG5cbmV4cG9ydCAgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHsgIFxuICAgIHNhdmVRdWVzdE1lbnUoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXN0bWVudVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICBnZXRRdWVzdE1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IFF1ZXN0TWVudSgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0bWVudVwiKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHF1ZXN0c01lbnUuc2V0TWlzc2lvbnMoXG4gICAgICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgICAgIC5tYXAobWlzc2lvbiA9PiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIG5ldyBNaXNzaW9uKCksIG1pc3Npb25cbiAgICAgICAgICAgICkpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb25zKClcbiAgICAgICAgLmZvckVhY2gobWlzc2lvbiA9PiBcbiAgICAgICAgICAgIG1pc3Npb24uc2V0T2JqZWN0aXZlcyhcbiAgICAgICAgICAgICAgICBtaXNzaW9uLmdldE9iamVjdGl2ZXMoKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9PiBPYmplY3QuYXNzaWduKG5ldyBPYmplY3RpdmUsIG9iaikpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHF1ZXN0c01lbnVcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgcGFyYW1ldGVycyB3aXRoIC1OYW1lIGhhcyAuZ2V0TmFtZSgpIG9yIGl0IHdpbGwgZGVsZXRlIHdyb25nIGl0ZW1cblxuICAgIGFkZE1pc3Npb24obWlzc2lvbikge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmFkZE1pc3Npb24obWlzc2lvbilcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGFkZE9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuYWRkT2JqZWN0aXZlKG9iamVjdGl2ZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmpOYW1lKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuZGVsZXRlT2JqZWN0aXZlKG9iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIHJlbmFtZU9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqTmFtZSwgbmV3T2JqTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmdldE1pc3Npb24obWlzc2lvbk5hbWUpLmdldE9iamVjdGl2ZShvYmpOYW1lKS5zZXROYW1lKG5ld09iak5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNaXNzaW9uIGZyb20gJy4vTWlzc2lvbic7XG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gJy4vT2JqZWN0aXZlJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IHRlc3QgPSBuZXcgU3RvcmFnZSgpO1xuXG4gIC8vIER1bW15IE1pc3Npb25zXG4gIGNvbnN0IG1pc3Npb24gPSBuZXcgTWlzc2lvbignVGVzdGluZyBtaXNzaW9uJyk7XG4gIHRlc3QuYWRkTWlzc2lvbihtaXNzaW9uKTtcblxuICAvLyBUT0RPIGZ1bmN0aW9uIGNoZWNrRHVlRGF0ZSgpIHVzaW5nIGRhdGUgZm5zXG4gIGZ1bmN0aW9uIGNoZWNrU3RvcmVkT2JqZWN0aXZlcygpIHtcbiAgICBjb25zdCBzdG9yZWRUb2RvcyA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKVxuICAgIGNvbnNvbGUubG9nKHN0b3JlZFRvZG9zKVxuICAgIGZvcihjb25zdCBtaXNzaW9uIG9mIHN0b3JlZFRvZG9zKSB7XG4gICAgICBjb25zdCBtaXNzaW9uT2JqZWN0aXZlcyA9IG1pc3Npb24uZ2V0T2JqZWN0aXZlcygpXG4gICAgICBmb3IoY29uc3Qgb2JqZWN0aXZlIG9mIG1pc3Npb25PYmplY3RpdmVzKSB7XG4gICAgICAgIGlmKGlzVG9kYXkob2JqZWN0aXZlKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGlzICR7b2JqZWN0aXZlLmdldE5hbWUoKX0gaXMgZm9yIHRvZGF5YClcbiAgICAgICAgICBjb25zdCBvYmpOYW1lID0gb2JqZWN0aXZlLmdldE5hbWUoKVxuICAgICAgICAgIGNvbnN0IG9iakRlc2NyaXB0aW9uID0gb2JqZWN0aXZlLmdldERlc2NyaXB0aW9uKClcbiAgICAgICAgICBjb25zdCBvYmpEYXRlID0gb2JqZWN0aXZlLmdldERhdGVGb3JtYXR0ZWQoKVxuICAgICAgICAgIGNvbnN0IG5ld09iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUob2JqTmFtZSwgb2JqRGVzY3JpcHRpb24sIG9iakRhdGUpXG4gICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0aXZlLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LmRlbGV0ZU9iamVjdGl2ZShtaXNzaW9uLmdldE5hbWUoKSwgb2JqZWN0aXZlLmdldE5hbWUoKSlcbiAgICAgICAgICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIG5ld09iamVjdGl2ZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhtaXNzaW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkpXG4gIH1cbiAgLy8gZm9yIGVhY2ggb2JqZWN0aXZlLCBjaGVjayBkdWUgZGF0ZS4gaWYgZGF0ZSA9PSB0byBkYXRlLm5vdywgbW92ZSBvYmplY3RpdmUgdG8gXCJUb2RheVwiIG1pc3Npb24gYW5kIGRlbGV0ZSBpdCBmcm9tIGl0cyBvbGQgbWlzc2lvblxuXG4gIC8vIENoZWNrIGlmIG9iamVjdGl2ZSBpcyBkdWUgdG9kYXlcbiAgZnVuY3Rpb24gaXNUb2RheShvYmopIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRhdGVUb2RheSA9ICBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IGRhdGVNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBkYXRlWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IGZ1bGxEYXRlID0gYCR7ZGF0ZU1vbnRofS8ke2RhdGVUb2RheX0vJHtkYXRlWWVhcn1gXG4gICAgY29uc29sZS5sb2coZnVsbERhdGUpXG4gICAgaWYob2JqLmdldERhdGVGb3JtYXR0ZWQoKSA9PT0gXCJ0b2RheVwiIHx8IG9iai5nZXREYXRlRm9ybWF0dGVkKCkgPT09IGZ1bGxEYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgLy8gY2hlY2tJZlRvZGF5KClcbiAgLy8gVE9ETyBmdW5jdGlvbiBtb3ZlT2JqZWN0aXZlVG9Ub2RheSgpXG5cbiAgLy8gRHVtbXkgT2JqZWN0aXZlc1xuICBcbiAgY29uc3QgdG9kYXlPYmplY3RpdmUgPSBuZXcgT2JqZWN0aXZlKFwiVG9kYXkgb2JqZWN0aXZlXCIsIFwidG9kYWFhYXlcIilcbiAgdGVzdC5hZGRPYmplY3RpdmUoXCJUb2RheVwiLCB0b2RheU9iamVjdGl2ZSlcbiAgY29uc3Qgd2Vla09iamVjZXRpdmUgPSBuZXcgT2JqZWN0aXZlKFwiRm9yIHRoZSB3ZWVrXCIsIFwid2VlZWVrXCIsIFwiOC84LzIwMjNcIilcbiAgdGVzdC5hZGRPYmplY3RpdmUoXCJUaGlzIFdlZWtcIiwgd2Vla09iamVjZXRpdmUpXG4gIGNvbnN0IHRyeWluZ1RvVG9kYXkgPSBuZXcgT2JqZWN0aXZlKFwiTW92ZSB0byBUb2RheVwiLCBcIm1vdmluZ1wiLCBcIjI3LzcvMjAyM1wiKVxuICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRlc3RpbmcgbWlzc2lvblwiLCB0cnlpbmdUb1RvZGF5KVxuXG4gIGNvbnN0IG1pc3Npb25zQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pc3Npb25zJyk7XG4gIGNvbnN0IG9iamVjdGl2ZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2JqZWN0aXZlcycpO1xuICBjb25zdCBlbXB0eU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHktb2JqLW1lc3NhZ2UnKTtcblxuICBjb25zdCBhZGRNaXNzaW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1taXNzaW9uJyk7XG4gIGNvbnN0IGFkZE9iamVjdGl2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtb2JqZWN0aXZlJyk7XG4gIC8vIFRPRE8gYWRkIG1pc3Npb24gdXNpbmcgYnV0dG9uXG4gIC8vIFRPRE8gY3JlYXRlIGZvcm0gZm9yIG1pc3Npb24gc3VibWlzc2lvblxuICAvLyBUT0RPIGFkZCBvYmplY3RpdmUgdXNpbmcgYnV0dG9uXG4gIC8vIFRPRE8gY3JlYXRlIGZvcm0gZm9yIG9iamVjdGl2ZSBzdWJtaXNzaW9uXG5cbiAgLy8gdGhpcyBmdW5jdGlvbiB0YWtlcyBtaXNzaW9uIG9iamVjdCBzbyBlbGVtZW50IHRleHRzIG11c3QgYmUgdGFrZW4gZnJvbSBpdHMgcHJvcGVydGllc1xuXG4gIC8vIFRPRE8gZW5hYmxlIGVkaXRpbmcgb2YgbWlzc2lvbiBuYW1lKD8pXG4gIGZ1bmN0aW9uIGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pIHtcbiAgICBjb25zdCBtaXNzaW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWlzc2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzc2lvbicpO1xuICAgIG1pc3Npb25FbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICBjb25zdCBtaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWlzc2lvblRleHQudGV4dENvbnRlbnQgPSBtaXNzaW9uLmdldE5hbWUoKTtcblxuICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyT2JqZWN0aXZlcyhtaXNzaW9uKTtcbiAgICB9KTtcblxuICAgIG1pc3Npb25FbGVtZW50LmFwcGVuZENoaWxkKG1pc3Npb25UZXh0KTtcblxuICAgIHJldHVybiBtaXNzaW9uRWxlbWVudDtcbiAgfVxuXG4gIC8vIHRoaXMgZnVuY3Rpb24gdGFrZXMgb2JqZWN0aXZlIG9iamVjdCBzbyBlbGVtZW50IHRleHRzIG11c3QgYmUgdGFrZW4gZnJvbSBpdHMgcHJvcGVydGllc1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSB7XG4gICAgY29uc3Qgb2JqZWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgb2JqZWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvYmplY3RpdmUnKTtcbiAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50ID0gb2JqZWN0aXZlLmdldE5hbWUoKTtcblxuICAgIC8vIFRPRE8gYWRkIGNoZWNrYm94IHRvIGRlbGV0ZSBvYmplY3RpdmUgYWZ0ZXIgZmluaXNoZWRcbiAgICAvLyBUT0RPIGFkZCBkdWVkYXRlXG4gICAgLy8gVE9ETyBhZGQgbGlzdGVuZXIgdG8gZXhwYW5kIG9iaiB0byBzaG93IGRlc2NyaXB0aW9uXG4gICAgLy8gVE9ETyBsaXN0ZW5lci9idXR0b24gdG8gZWRpdCBuYW1lLCBkZXNjcmlwdGlvbiwgYW5kIGRhdGUgb2Ygb2JqZWN0aXZlXG5cbiAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpO1xuXG4gICAgcmV0dXJuIG9iamVjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG5cbiAgLy8gUmVuZGVyaW5nIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiByZW5kZXJPYmplY3RpdmVzKGNob3Nlbk1pc3Npb24pIHtcbiAgICBjbGVhcihvYmplY3RpdmVzQm94KTtcbiAgICBjb25zdCBvYmplY3RpdmVzQXJyYXkgPSBjaG9zZW5NaXNzaW9uLmdldE9iamVjdGl2ZXMoKTtcbiAgICAvLyBpZiBhcnJheSBpcyBlbXB0eSBjcmVhdGUgbWVzc2FnZVxuICAgIGlmIChvYmplY3RpdmVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlbXB0eU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHlNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiBvYmplY3RpdmVzQXJyYXkpIHtcbiAgICAgIG9iamVjdGl2ZXNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXNzaW9ucygpIHtcbiAgICBjbGVhcihtaXNzaW9uc0JveCk7XG4gICAgY29uc3QgcXVlc3RBcnJheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkuZ2V0TWlzc2lvbnMoKTtcbiAgICBmb3IgKGNvbnN0IG1pc3Npb24gb2YgcXVlc3RBcnJheSkge1xuICAgICAgbWlzc2lvbnNCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gcmVuZGVyIFRvZGF5J3MgbWlzc2lvbiBhbmQgb2JqZWN0aXZlcyB3aGVuIHBhZ2UgbG9hZHNcbiAgZnVuY3Rpb24gcmVuZGVyVG9kYXkoKSB7XG4gICAgY2hlY2tTdG9yZWRPYmplY3RpdmVzKClcbiAgICByZW5kZXJNaXNzaW9ucygpO1xuICAgIGNvbnN0IHRvZGF5ID0gdGVzdC5nZXRRdWVzdE1lbnUoKS5nZXRNaXNzaW9uKCdUb2RheScpLmdldE9iamVjdGl2ZXMoKTtcbiAgICBmb3IgKGNvbnN0IG9iamVjdGl2ZSBvZiB0b2RheSkge1xuICAgICAgb2JqZWN0aXZlc0JveC5hcHBlbmRDaGlsZChjcmVhdGVPYmplY3RpdmVFbGVtZW50KG9iamVjdGl2ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvZGF5KCk7XG4gIC8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkubWlzc2lvbnMpO1xuICAgICBcblxuICByZXR1cm4gbWFpbjtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=