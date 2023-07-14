import  Mission  from "./Mission";
import Objective from "./Objective";
import { QuestMenu } from "./QuestMenu";
import { Storage } from "./Storage";

const UI = (() => {
    const main = document.querySelector(".main")
    const test = new Storage()
    
    //Dummy Missions
    let mission = new Mission("Testing mission")

    //Dummy Objectives
    let objective = new Objective("Testing objective", "this is for testing")
    test.addObjective("Today", objective)

    const missionsBox = document.querySelector(".missions")
    const objectivesBox = document.querySelector(".objectives")

    //this function takes mission object so element texts must be taken from its properties
    function createMissionElement(mission) {
        const missionElement = document.createElement("li")
        const missionText = document.createElement("h3")
        missionText.textContent = mission.getName()

    //TODO create listener to render objectives for the mission

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
    function renderObjectives(mission) {
        let objectivesArray = mission.getObjectives()
        for(let objective of objectivesArray) {
            objectivesBox.appendChild(createObjectiveElement(objective))
        }
    }

    function renderMissions() {
        let missionsArray = test.getQuestMenu().missions
        for(let mission of missionsArray) {
            missionsBox.appendChild(createMissionElement(mission))
            renderObjectives(mission)
        }
    }

    renderMissions()
    console.log(test.getQuestMenu().missions)
    return main
})()
