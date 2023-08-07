import Mission from './modules/Mission';
import Objective from './modules/Objective';
import Storage from './modules/Storage';

const quest = new Storage()

const questStorage = quest.getQuestMenu()
// console.log(questStorage.getMissions())

const testMission = new Mission("Testing mission")
quest.addMission(testMission)

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
    if(mission.getName() === "Today" || mission.getName() === "This Week") {
        const missionElement = document.createElement("li")
        const missionIcon = document.createElement("span")
        missionIcon.classList.add("fa-solid", "fa-map-pin", "no-hover")
        const missionText = document.createElement("p")
        missionText.textContent = mission.getName()
        
        missionElement.append(missionIcon, missionText)
        return missionElement
    } else {
        const missionElement = document.createElement("li")
        const missionIcon = document.createElement("span")
        missionIcon.classList.add("fa-solid", "fa-map-pin", "no-hover")
        const missionText = document.createElement("p")
        missionText.textContent = mission.getName()
        const closeBtn = document.createElement("span")
        const elId = missionText.textContent.split(" ")
        closeBtn.id = elId.join("").toLowerCase()

    // TODO enable name editing
    // TODO delete mission function
        missionElement.append(missionIcon, missionText, closeBtn)
        return missionElement
    }
}

function displayMissions(missionList) {
    const list = missionList
    const missionsListElement = document.querySelector(".missions-list")
    for(const mission of list) {
        missionsListElement.appendChild(createMissionElement(mission))
    }
    // set list = missionList
    // iterate through missionList
        // for each mission, createMissionElement()
}

function clear(element) {
    element.textContent = ""
}

function render() {
    displayMissions(questStorage.getMissions())
}

export {
    displayMissions,
    clear,
    toggleForm,
    render
}