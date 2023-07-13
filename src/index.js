import  Mission  from "./Mission";
import Objective from "./Objective";
import { QuestMenu } from "./QuestMenu";
import { Storage } from "./Storage";

const UI = (() => {
    const main = document.querySelector(".main")
    const test = new Storage()
    
    //Dummy Missions
    let mission = new Mission("Testing mission")
    let mission2 = new Mission("2")
    let mission3 = new Mission("3")
    test.addMission(mission)
    test.addMission(mission2)
    test.addMission(mission3)

    //Dummy Objectives
    let objective = new Objective("Testing objective", "this is for testing")
    test.addObjective(mission.getName(), objective)

    const missionsBox = document.querySelector(".missions")

    function createMissionElement(mission) {
        const missionElement = document.createElement("li")
        const missionText = document.createElement("h3")
        missionText.textContent = mission.getName()

        missionElement.appendChild(missionText)

        return missionElement
    }

    console.log(test.getQuestMenu())
    return main
})()
