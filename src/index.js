import Mission from './Mission';
import Objective from './Objective';
import Storage from './Storage';

const UI = (() => {
  const main = document.querySelector('.main');
  const sidebar = document.querySelector('.sidebar')
  // TODO change test
  const test = new Storage();
  
  // Dummy Missions
  const mission = new Mission('Testing mission');
  test.addMission(mission);

  // checks storage for objectives due today and moves them to Today's mission
  function checkStoredObjectives() {
    const storedTodos = test.getQuestMenu().getMissions()
    for(const mission of storedTodos) {
      const missionObjectives = mission.getObjectives()
      for(const objective of missionObjectives) {
        if(isToday(objective)) {
          const objName = objective.getName()
          const objDescription = objective.getDescription()
          const objDate = objective.getDateFormatted()
          const newObjective = new Objective(objName, objDescription, objDate)
          test.deleteObjective(mission.getName(), objective.getName())
          test.addObjective("Today", newObjective)
        }
      }
    }
  }

  // Check if objective is due today
  function isToday(obj) {
    const date = new Date()
    const dateToday =  date.getDate()
    const dateMonth = date.getMonth() + 1
    const dateYear = date.getFullYear()
    const fullDate = `${dateMonth}/${dateToday}/${dateYear}`
    if(obj.getDateFormatted() === "today" || obj.getDateFormatted() === fullDate) {
      return true
    } else {
      return false
    }
  }

  // Dummy Objectives
  
  const todayObjective = new Objective("Today objective", "todaaaay")
  test.addObjective("Today", todayObjective)
  const weekObjecetive = new Objective("For the week", "weeeek", "2023-8-8")
  test.addObjective("This Week", weekObjecetive)
  // const tryingToToday = new Objective("Move to Today", "moving", "27/7/2023")
  // test.addObjective("Testing mission", tryingToToday)

  const missionsBox = document.querySelector('.missions');
  const objectivesBox = document.querySelector('.objectives');
  const emptyMessage = document.querySelector('.empty-obj-message');

  // TODO add a close button on form
  // Add mission
  const addMissionBtn = document.getElementById('add-mission');
  
  const missionFormBox = document.createElement("div")
  missionFormBox.style.display = "none"
  missionFormBox.classList.add("mission-form-box")

  const missionForm = document.createElement("form")

  const missionFieldSet = document.createElement("fieldset")

  const missionFormLegend = document.createElement("legend")
  missionFormLegend.classList.add("mission-legend")
  missionFormLegend.textContent = "Create New Mission"

  const missionNameLabel = document.createElement("label")
  missionNameLabel.setAttribute("for", "name")
  missionNameLabel.textContent = "Mission Name:"

  const missionNameInput = document.createElement("input")
  missionNameInput.setAttribute("autocomplete", "off")
  missionNameInput.id = "name"
  missionNameInput.placeholder = "Enter the mission name"

  const createMissionBtn = document.createElement("button")
  createMissionBtn.id = "create-mission-btn"
  createMissionBtn.textContent = "Create Mission"

  createMissionBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const missionName = missionNameInput.value
    if (missionNameInput.value === "") {
      return
    }
    const newMission = new Mission(missionName)
    test.addMission(newMission)
    missionFormBox.style.display = "none"
    renderMissions()
  })
  
  missionFormBox.appendChild(missionForm)
  missionForm.append(missionFieldSet)
  missionFieldSet.append(missionFormLegend, missionNameLabel, createMissionBtn)
  missionNameLabel.appendChild(missionNameInput)
  sidebar.appendChild(missionFormBox)

  addMissionBtn.addEventListener("click", () => {
    if(missionFormBox.style.display === "block") {
      missionFormBox.style.display = "none"
    } else {
      missionFormBox.style.display = "block"
      missionNameInput.focus()
    }
  })
  

  const contentBox = document.querySelector(".content-box")
  // Add objective
  const addObjectiveBtn = document.getElementById('add-objective');

  const objectiveFormBox = document.createElement("div")
  objectiveFormBox.style.display = "none"
  objectiveFormBox.classList.add("objective-form-box")

  const objectiveForm = document.createElement("form")

  const objectiveFieldset = document.createElement("fieldset")

  const objectiveFormLegend = document.createElement("legend")
  objectiveFormLegend.classList.add("objective-legend")
  objectiveFormLegend.textContent = "Create new objective"

  const objectiveNameLabel = document.createElement("label")
  objectiveNameLabel.setAttribute("for", "oName")
  objectiveNameLabel.textContent = "Objective Name: "

  const objectiveNameInput = document.createElement("input")
  objectiveNameInput.setAttribute("autocomplete", "off")
  objectiveNameInput.id = "oName"
  objectiveNameInput.placeholder = "Enter the objective name"

  const objectiveDescriptionLabel = document.createElement("label")
  objectiveDescriptionLabel.setAttribute("for", "oDescription")
  objectiveDescriptionLabel.textContent = "Objective Description: "

  const objectiveDescriptionInput = document.createElement("input")
  objectiveDescriptionInput.setAttribute("autocomplete", "off")
  objectiveDescriptionInput.id = "oDescription"
  objectiveDescriptionInput.placeholder = "What is this objective about?"

  const objectiveDueDateLabel = document.createElement("label")
  objectiveDueDateLabel.setAttribute("for", "oDueDate")
  objectiveDueDateLabel.textContent = "Objective Due Date: "

  const objectiveDueDateInput = document.createElement("input")
  objectiveDueDateInput.setAttribute("type", "date")
  objectiveDueDateInput.id = "oDueDate"

  const missionPickerLabel = document.createElement("label")
  missionPickerLabel.setAttribute("for", "oMission")
  missionPickerLabel.textContent = "Mission: "

  const missionPickerInput = document.createElement("select")
  missionPickerInput.setAttribute("name", "oMission")
  missionPickerInput.id = "oMission"

  for (const mission of test.getQuestMenu().getMissions()) {
      const optionElement = document.createElement("option")
      optionElement.setAttribute("value", `${mission.getName()}`)
      optionElement.textContent = `${mission.getName()}`
      missionPickerInput.appendChild(optionElement)
    }

  const createObjectiveBtn = document.createElement("button")
  createObjectiveBtn.id = "create-objective-btn"
  createObjectiveBtn.textContent = "Create Objective"

  createObjectiveBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const objectiveName = objectiveNameInput.value
    if (objectiveName === "") {
      return
    }
    const objectiveDescription = objectiveDescriptionInput.value
    const objectiveDueDate = objectiveDueDateInput.value
    const objectiveMission = missionPickerInput.value
    const newObjective = new Objective(objectiveName, objectiveDescription, objectiveDueDate)
    test.addObjective(objectiveMission, newObjective)
    objectiveFormBox.style.display = "none"
    renderMissions()
    renderObjectives(test.getQuestMenu().getMission("Today"))
  })

  objectiveFormBox.appendChild(objectiveForm)
  objectiveForm.appendChild(objectiveFieldset)
  objectiveFieldset.append(objectiveFormLegend, objectiveNameLabel, objectiveDescriptionLabel, objectiveDueDateLabel, missionPickerLabel, missionPickerInput, createObjectiveBtn)
  objectiveNameLabel.appendChild(objectiveNameInput)
  objectiveDescriptionLabel.appendChild(objectiveDescriptionInput)
  objectiveDueDateLabel.appendChild(objectiveDueDateInput)
  contentBox.appendChild(objectiveFormBox)

  addObjectiveBtn.addEventListener("click", () => {
    if (objectiveFormBox.style.display === "none") {
      objectiveFormBox.style.display = "block"
      objectiveNameInput.focus()
    } else {
      objectiveFormBox.style.display = "none"
    }
  })

  // creates mission element using mission object
  function createMissionElement(mission) {
    const missionElement = document.createElement('li');
    missionElement.classList.add('mission');
    const missionText = document.createElement('h3');
    missionText.textContent = mission.getName();

    const editNameLabel = document.createElement("label")
    editNameLabel.setAttribute("for", "eName")
    editNameLabel.textContent = "Edit mission name: "

    const editNameInput = document.createElement("input")
    editNameInput.setAttribute("autocomplete", "off")
    editNameInput.id = "eName"
    editNameInput.placeholder = "New mission name..."

    editNameLabel.appendChild(editNameInput)

    const deleteMissionImg = document.createElement("i")
    deleteMissionImg.setAttribute("role", "button")
    deleteMissionImg.classList.add("fa-solid", "fa-square-xmark", "fa-lg")

    missionElement.addEventListener('click', () => {
      renderObjectives(mission);
    });

    missionElement.appendChild(missionText);

    if (missionText.textContent === "Today" || missionText.textContent === "This Week") {
      return missionElement
    } else {
      missionElement.appendChild(deleteMissionImg)
    }

    deleteMissionImg.addEventListener("click", () => {
      test.deleteMission(missionText.textContent)
      renderMissions()
    })

    missionText.addEventListener("click", () => {
      if (missionText.textContent === "Today" || missionText.textContent === "This Week") {
        return
      }
      missionElement.removeChild(missionText)
      missionElement.removeChild(deleteMissionImg)
      missionElement.appendChild(editNameLabel)
      editNameInput.focus()
    })

    editNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (editNameInput.value !== "") {
          const oldMission = test.getQuestMenu().getMission(mission.getName())
          test.renameMission(oldMission.getName(), editNameInput.value)
          renderMissions()
        }
      }
    })

    return missionElement;
  }

  // creates objective element using objective object
  function createObjectiveElement(objective) {
    const objectiveElement = document.createElement('li');
    objectiveElement.classList.add('objective');
    const objectiveText = document.createElement('h4');
    objectiveText.textContent = objective.getName();

    const objectiveCheckBox = document.createElement("input")
    objectiveCheckBox.setAttribute("type", "checkbox")
    objectiveCheckBox.id = objective.getName()

    // TODO animate description box

    const objectiveDescriptionBox = document.createElement("div")
    objectiveDescriptionBox.classList.add("objective-description")

    const objectiveDescription = document.createElement("div")
    
    // TODO add listener to expand obj to show description
    if (objective.getDescription() === "") {
      objectiveDescription.textContent = "No description"
    } else {
      objectiveDescription.textContent = objective.getDescription()
    }
    // TODO listener/button to edit name, description, and date of objective

    objectiveElement.append(objectiveCheckBox, objectiveText)
    objectiveDescriptionBox.appendChild(objectiveDescription)

    if (objective.getDueDate() !== "") {
      const objectiveDueDate = document.createElement("div")
      if (objective.getDueDate() === "today") {
        objectiveDueDate.textContent = "Today"
      } else {
        objectiveDueDate.textContent = objective.getDueDate()
      }
      objectiveElement.appendChild(objectiveDueDate)
    }

    return objectiveElement;
  }

  function clear(element) {
    element.innerHTML = '';
  }

  function renderObjectives(chosenMission) {
    clear(objectivesBox)
    const objectivesArray = chosenMission.getObjectives();
    // if array is empty create message
    if (objectivesArray.length !== 0) {
      emptyMessage.style.display = 'none';
    } else {
      emptyMessage.style.display = 'block';
    }
    for (const objective of objectivesArray) {
      objectivesBox.appendChild(createObjectiveElement(objective));
    }
  }

  function renderMissions() {
    clear(missionsBox);
    const questArray = test.getQuestMenu().getMissions();
    for (const mission of questArray) {
      missionsBox.appendChild(createMissionElement(mission));
    }
  }

  // render Today's mission and objectives when page loads
  function renderToday() {
    checkStoredObjectives()
    renderMissions();
    const today = test.getQuestMenu().getMission('Today').getObjectives();
    for (const objective of today) {
      objectivesBox.appendChild(createObjectiveElement(objective));
    }
  }

  renderToday();  

  return main;
})();
