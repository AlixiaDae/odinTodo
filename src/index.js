import Mission from './Mission';
import Objective from './Objective';
import Storage from './Storage';

const UI = (() => {
  const main = document.querySelector('.main');
  const test = new Storage();

  // Dummy Missions
  const mission = new Mission('Testing mission');
  test.addMission(mission);

  // TODO function checkDueDate() using date fns
  function checkStoredObjectives() {
    const storedTodos = test.getQuestMenu().getMissions()
    console.log(storedTodos)
    for(const mission of storedTodos) {
      const missionObjectives = mission.getObjectives()
      for(const objective of missionObjectives) {
        if(isToday(objective)) {
          console.log(`this ${objective.getName()} is for today`)
          const objName = objective.getName()
          const objDescription = objective.getDescription()
          const objDate = objective.getDateFormatted()
          const newObjective = new Objective(objName, objDescription, objDate)
          console.log(objective.getName())
          test.deleteObjective(mission.getName(), objective.getName())
          test.addObjective("Today", newObjective)
          console.log(mission)
        }
      }
    }
    console.log(test.getQuestMenu())
  }
  // for each objective, check due date. if date == to date.now, move objective to "Today" mission and delete it from its old mission

  // Check if objective is due today
  function isToday(obj) {
    const date = new Date()
    const dateToday =  date.getDate()
    const dateMonth = date.getMonth() + 1
    const dateYear = date.getFullYear()
    const fullDate = `${dateMonth}/${dateToday}/${dateYear}`
    console.log(fullDate)
    if(obj.getDateFormatted() === "today" || obj.getDateFormatted() === fullDate) {
      return true
    } else {
      return false
    }
  }
  // checkIfToday()
  // TODO function moveObjectiveToToday()

  // Dummy Objectives
  
  const todayObjective = new Objective("Today objective", "todaaaay")
  test.addObjective("Today", todayObjective)
  const weekObjecetive = new Objective("For the week", "weeeek", "8/8/2023")
  test.addObjective("This Week", weekObjecetive)
  const tryingToToday = new Objective("Move to Today", "moving", "27/7/2023")
  test.addObjective("Testing mission", tryingToToday)

  const missionsBox = document.querySelector('.missions');
  const objectivesBox = document.querySelector('.objectives');
  const emptyMessage = document.querySelector('.empty-obj-message');

  const addMissionBtn = document.getElementById('add-mission');
  const addObjectiveBtn = document.getElementById('add-objective');
  // TODO add mission using button
  // TODO create form for mission submission
  // TODO add objective using button
  // TODO create form for objective submission

  // this function takes mission object so element texts must be taken from its properties

  // TODO enable editing of mission name(?)
  function createMissionElement(mission) {
    const missionElement = document.createElement('li');
    missionElement.classList.add('mission');
    missionElement.setAttribute('role', 'button');
    const missionText = document.createElement('h3');
    missionText.textContent = mission.getName();

    missionElement.addEventListener('click', () => {
      renderObjectives(mission);
    });

    missionElement.appendChild(missionText);

    return missionElement;
  }

  // this function takes objective object so element texts must be taken from its properties

  function createObjectiveElement(objective) {
    const objectiveElement = document.createElement('li');
    objectiveElement.classList.add('objective');
    const objectiveText = document.createElement('h4');
    objectiveText.textContent = objective.getName();

    // TODO add checkbox to delete objective after finished
    // TODO add duedate
    // TODO add listener to expand obj to show description
    // TODO listener/button to edit name, description, and date of objective

    objectiveElement.appendChild(objectiveText);

    return objectiveElement;
  }

  function clear(element) {
    element.textContent = '';
  }

  // Rendering functions
  function renderObjectives(chosenMission) {
    clear(objectivesBox);
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
  // console.log(test.getQuestMenu().missions);
     

  return main;
})();
