import './scss/style.scss'
import Storage from './modules/Storage'
import * as dom from './dom'
import Mission from './modules/Mission'
import Objective from './modules/Objective'

// TODO move listeners to creator functions


dom.loadPage()

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", dom.toggleForm) })

// Forms
    // Mission
const missionForm = document.querySelector(".mission-form")
const missionNameInput = document.getElementById("missionName")
const submitMissionForm = document.getElementById("create-mission")

submitMissionForm.addEventListener("click", (e) => {
    e.preventDefault()
    if(missionNameInput.value === "") return
    const newMission = new Mission(missionNameInput.value)
    dom.quest.addMission(newMission)
    dom.displayMissions(dom.quest.getQuestMenu().getMissions())
    dom.setActiveMission(dom.quest.getQuestMenu().getMission(newMission.getName()))
    const elements = document.querySelectorAll(".mission-element")
    elements[elements.length -1].classList.add("active-mission")
    elements[elements.length -1].children[0].classList.add("pinned")
    missionForm.classList.remove("show-form")
})

    // Objective
const objectiveForm = document.querySelector(".objective-form")
const objNameInput = document.getElementById("objName")
const objDescription = document.getElementById("objDescription")
const objDate = document.getElementById("objDate")
const selectMission = document.getElementById("objMissionName")
const objectiveFormBtn = document.getElementById("add-objective")
const submitObjectiveFormBtn = document.getElementById("create-objective")

function setSelection(missionList) {
    const selectElement = document.getElementById("objMissionName")
    selectElement.textContent = ""
    for(const mission of missionList) {
        const option = document.createElement("option")
        option.value = mission.getName()
        option.textContent = mission.getName()
        selectElement.appendChild(option)
    }
    return selectElement
}

objectiveFormBtn.addEventListener("click", () => {
    setSelection(dom.quest.getQuestMenu().getMissions())
})

submitObjectiveFormBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(objNameInput.value === "") return
    if(objDate.value === "") return
    const newObjective = new Objective(objNameInput.value, objDescription.value, objDate.value)
    dom.quest.addObjective(selectMission.value, newObjective)
    const missionElements = document.querySelectorAll(".mission-element")
    dom.setActiveMission(dom.quest.getQuestMenu().getMission(selectMission.value))
    missionElements.forEach(mission => {
        if(mission.textContent === selectMission.value) {
            mission.classList.add("active-mission")
            mission.children[0].classList.add("pinned")
        } else {
            mission.classList.remove("active-mission")
            mission.children[0].classList.remove("pinned")
        }
    })
    objectiveForm.classList.remove("show-form")
})