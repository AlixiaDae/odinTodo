import Mission from "./Mission"

export class QuestMenu {
    constructor() {
        this.missions = []
        this.missions.push(new Mission("Today"))
        this.missions.push(new Mission("This Week"))
    }

    getMissions() {
        return this.missions
    }

    addMission(newMission) {
        if(!this.missions.find(mission => mission.getName() === newMission.name)) {
            this.missions.push(newMission)
        }
    }

    deleteMission(missionName) {
        let missionToDelete = this.missions.find(mission => mission.getName() === missionName) 
        this.missions.splice(this.missions.indexOf(missionToDelete), 1)
    }

}