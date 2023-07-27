export default class Objective {
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