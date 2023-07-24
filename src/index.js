import Mission from './Mission';
import Objective from './Objective';
import Storage from './Storage';

const UI = (() => {
  const main = document.querySelector('.main');
  const test = new Storage();

  // Dummy Missions
  const mission = new Mission('Testing mission');
  const mission2 = new Mission('Trying');
  test.addMission(mission2);

  // TODO function checkDueDate() using date fns?
  // TODO function moveObjectiveToToday()

  // Dummy Objectives
  const objective = new Objective('Testing objective', 'this is for testing');
  const todayObjective = new Objective('Test for Today', 'todaaaay');
  test.addObjective('Today', objective);
  test.addObjective('Today', todayObjective);
  const objective2 = new Objective('Trying empty message', 'testing');
  test.addObjective('Trying', objective2);

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
    const questArray = test.getQuestMenu().missions;
    for (const mission of questArray) {
      missionsBox.appendChild(createMissionElement(mission));
    }
  }

  // render Today's mission and objectives when page loads
  function renderToday() {
    renderMissions();
    const today = test.getQuestMenu().getMission('Today').getObjectives();
    for (const objective of today) {
      objectivesBox.appendChild(createObjectiveElement(objective));
    }
  }

  renderToday();
  console.log(test.getQuestMenu().missions);
  return main;
})();
