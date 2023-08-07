import './scss/style.scss'
import Storage from './modules/Storage'
import * as dom from './dom'

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", dom.toggleForm) })

dom.render()