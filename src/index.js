import './scss/style.scss'
import Storage from './modules/Storage'
import * as dom from './dom'

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", dom.toggleForm) })



// when a li is clicked, add .pinned class to span pin icon
// for each mission element, addEventListener clicked and add pinned class to pin

dom.render()

const missionElements = document.querySelectorAll(".mission-element")
const missionTextElements = document.querySelectorAll(".mission-element p")
const pins = document.querySelectorAll(".fa-map-pin")

missionElements.forEach(mission => {
    mission.addEventListener("click", (e) => {
        missionElements.forEach(el => {
            dom.handleClass(el, "active-mission", "remove")
            pins.forEach(pin => {
                dom.handleClass(pin, "pinned", "remove")
            })
        })
        const missionName = e.target.textContent
        dom.handleClass(mission, "active-mission", "add")
        dom.handleClass(mission.children[0], "pinned", "add")
        dom.setActiveMission(dom.quest.getQuestMenu().getMission(missionName))
    })
})
