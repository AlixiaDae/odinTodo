import Objective from "./Objective"

export default class Mission {
    constructor(name) {
        this.name = name
        this.objectives = []
    }

    getName() {
        return this.name
    }

    getQuests() {
        return this.objectives
    }

    addObjective(newObj) {
        if(!this.objectives.find(obj => obj.getName() === newObj.name)) {
            this.objectives.push(newObj)
        }
    }

    deleteObjective(objName) {
        let objToDelete = this.objectives.find(obj => obj.getName() === objName)
        this.objectives.splice(this.objectives.indexOf(objToDelete), 1)
    }

}