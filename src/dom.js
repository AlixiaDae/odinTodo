import Mission from './modules/Mission';
import Objective from './modules/Objective';
import Storage from './modules/Storage';

const quest = new Storage()

const testMission = new Mission("Testing mission")
quest.addMission(testMission)

const testObjective = new Objective("Test Objective", "this is for testing", "2023-08-10")
quest.addObjective("Today", testObjective)

function handleClass(element,className,job) {
    if(job === "remove") {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

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
    if(mission.getName() === "Today") {
        const missionElement = document.createElement("li")
        missionElement.classList.add("mission-element")
        const missionIcon = document.createElement("span")
        missionIcon.classList.add("fa-solid", "fa-map-pin")
        const missionText = document.createElement("p")
        missionText.textContent = mission.getName()
        
        missionElement.append(missionIcon, missionText)
        return missionElement
    } else {
        const missionElement = document.createElement("li")
        missionElement.classList.add("mission-element")
        const missionIcon = document.createElement("span")
        missionIcon.classList.add("fa-solid", "fa-map-pin")
        const missionText = document.createElement("p")
        missionText.textContent = mission.getName()
        const closeBtn = document.createElement("span")
        const elId = missionText.textContent.split(" ")
        closeBtn.id = elId.join("").toLowerCase()
        closeBtn.classList.add("fa-solid", "fa-x")
        
        closeBtn.addEventListener("click", () => {
            quest.deleteMission(mission.getName())
            console.log(quest.getQuestMenu().getMissions())
            displayMissions(quest.getQuestMenu().getMissions())
        })

        // TODO enable name editing(?)

        missionElement.append(missionIcon, missionText, closeBtn)
        return missionElement
    }
}

function createObjectiveElement(objective) {
    const objectiveElement = document.createElement("li")
    objectiveElement.classList.add("objective-element")

    const objCheckbox = document.createElement("input")
    objCheckbox.setAttribute("type", "checkbox")
    objCheckbox.id = objective.getName()

    const objCheckboxLabel = document.createElement("label")
    objCheckboxLabel.setAttribute("for", objective.getName())

    const objectiveBox = document.createElement("div")

    const objectiveText = document.createElement("p")
    objectiveText.textContent = objective.getName()

    const objectiveDate = document.createElement("p")
    objectiveDate.textContent = objective.getDateFormatted()

    objectiveBox.append(objectiveText, objectiveDate)
    objectiveElement.append(objCheckbox, objCheckboxLabel, objectiveBox)
    return objectiveElement

}

function displayMissions(missionList) {
    const list = missionList
    const missionsListElement = document.querySelector(".missions-list")
    missionsListElement.textContent = ""
    for(const mission of list) {
        missionsListElement.appendChild(createMissionElement(mission))
    }
    // set list = missionList
    // iterate through missionList
        // for each mission, createMissionElement()
}

function displayObjectives(mission) {
    const objectivesElement = document.querySelector(".objectives")
    const objectiveList = mission.getObjectives()
    for(const objective of objectiveList) {
        objectivesElement.appendChild(createObjectiveElement(objective))
    }
}

function setActiveMission(mission) {
    const objectivesElement = document.querySelector(".objectives")
    if (mission.getObjectives().length === 0) {
        clear(objectivesElement)
        const noObjectivesElement = document.createElement("p")
        noObjectivesElement.classList.add("no-objectives")
        noObjectivesElement.textContent = "This mission has no objectives yet."
        objectivesElement.appendChild(noObjectivesElement)
    } else {
        clear(objectivesElement)
        displayObjectives(mission)
    }
    return objectivesElement
}

function clear(element) {
    element.textContent = ""
}

function render() {
    displayMissions(quest.getQuestMenu().getMissions())
    setActiveMission(quest.getQuestMenu().getMission("Today"))
}

export {
    handleClass,
    displayMissions,
    clear,
    toggleForm,
    render,
    setActiveMission,
    quest
}