import Mission from './modules/Mission';
import Objective from './modules/Objective';
import Storage from './modules/Storage';
import './scss/style.scss'
import toggleForm from './dom'

const showFormButtons = document.querySelectorAll(".show-form-button")

showFormButtons.forEach(button => { button.addEventListener("click", toggleForm) })

