function toggleForm(button) {
    if(button.target.textContent === "Add Mission") {
      document.querySelector(".mission-form").classList.toggle("showForm")
      document.querySelector(".objective-form").classList.remove("showForm")
    } else {
      document.querySelector(".objective-form").classList.toggle("showForm")
      document.querySelector(".mission-form").classList.remove("showForm")
    }
}

export default toggleForm