import './scss/style.scss'
import Storage from './modules/Storage'
import * as dom from './dom'

// TODO move listeners to creator functions


dom.render()

// Listeners

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", dom.toggleForm) })

/*
const missionElements = document.querySelectorAll(".mission-element")
const pins = document.querySelectorAll(".fa-map-pin")

missionElements[0].classList.add("active-mission")
pins[0].classList.add("pinned")

missionElements.forEach(mission => {
    mission.addEventListener("click", (e) => {
        missionElements.forEach(el => {
            dom.handleClass(el, "active-mission", "remove")
            pins.forEach(pin => {
                dom.handleClass(pin, "pinned", "remove")
            })
        })
        const missionName = e.target.textContent
        console.log(missionName)
        dom.handleClass(mission, "active-mission", "add")
        dom.handleClass(mission.children[0], "pinned", "add")
        dom.setActiveMission(dom.quest.getQuestMenu().getMission(missionName))
    })
})

const objectiveTextDateBox = document.querySelectorAll(".obj-textdate-box") 

objectiveTextDateBox.forEach(obj => {
    obj.addEventListener("click", (e) => {
        objectiveTextDateBox.forEach(el => {
            if(el !== e.target) {
                el.classList.remove("active-objective")
                el.closest(".objective-box").querySelector(".objective-description").classList.remove("active-objective-description")
            }
        })
        if(e.target.closest(".objective-box").querySelector(".objective-description").classList.contains("active-objective-description")) {
            e.target.classList.remove("active-objective")
            e.target.closest(".objective-box").querySelector(".objective-description").classList.remove("active-objective-description")
            return
        }
        e.target.classList.toggle("active-objective")
        e.target.closest(".objective-box").querySelector(".objective-description").classList.toggle("active-objective-description")
        
    })
})

*/

