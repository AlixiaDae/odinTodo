import  Mission  from "./Mission";
import Objective from "./Objective";
import { QuestMenu } from "./QuestMenu";
import { Storage } from "./Storage";

const UI = (() => {
    const main = document.querySelector(".main")
    const test = new Storage()
    
    //Dummy Missions
    let mission = new Mission("Testing mission")
    let mission2 = new Mission("Trying")
    test.addMission(mission2)

    //Dummy Objectives
    let objective = new Objective("Testing objective", "this is for testing")
    test.addObjective("Today", objective)
    let objective2 = new Objective("Trying empty message", "testing")
    test.addObjective("Trying", objective2)
    
    const missionsBox = document.querySelector(".missions")
    const objectivesBox = document.querySelector(".objectives")
    const emptyMessage = document.querySelector(".empty-obj-message") 

    //this function takes mission object so element texts must be taken from its properties
    function createMissionElement(mission) {
        const missionElement = document.createElement("li")
        missionElement.classList.add("mission")
        const missionText = document.createElement("h3")
        missionText.textContent = mission.getName()

    //TODO create listener to render objectives for the mission

        missionElement.addEventListener("click", () => {
            renderObjectives(mission)
        })

        missionElement.appendChild(missionText)

        return missionElement
    }

    //this function takes objective object so element texts must be taken from its properties 
    function createObjectiveElement(objective) {
        const objectiveElement = document.createElement("li")
        const objectiveText = document.createElement("h4")
        objectiveText.textContent = objective.getName()
        
        objectiveElement.appendChild(objectiveText)

        return objectiveElement
    }

    function clearMissions() {
        missionsBox.textContent = ""
    }

    function clearObjectives() {
        objectivesBox.textContent = ""
    }

    //Rendering functions
    function renderObjectives(chosenMission) {
        clearObjectives()
        let objectivesArray = chosenMission.getObjectives()
        //if array is empty create message
        if(objectivesArray.length !== 0) {
            emptyMessage.style.display = "none"
        } else {
            emptyMessage.style.display = "block"
        }
        for(let objective of objectivesArray) {
            objectivesBox.appendChild(createObjectiveElement(objective))
        }
    }

    function renderMissions() {
        let questArray = test.getQuestMenu().missions
        for(let mission of questArray) {
            missionsBox.appendChild(createMissionElement(mission))
        }
    }

    renderMissions()
    console.log(test.getQuestMenu().missions)
    return main
})()
