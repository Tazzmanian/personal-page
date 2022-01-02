'use strict';

function resizeImage() {
  const image = document.getElementById('myImage');
  image.style.height = image.clientWidth + 'px';
}

resizeImage();

function yellowStars(count) {
  let text = '';
  for (let i = 0; i < count; i++) {
    text += '&#11088;'
  }
  return text;
}

function blackStars(count) {
  let text = '';
  for (let i = 0; i < count; i++) {
    text += '&starf;'
  }
  return text;
}

function populateSkills() {
  const skills = {
    'Java': 3,
    'Kotlin': 0,
    'Python': 0,
    'Go': 0,
    'AngularJS': 1,
    'Angular': 3,
    'ReactJS': 0,
    'Vue.js': 0,
    'Maven': 1,
    'Grandle': 0,
    'PostgreSQL': 1,
    'MySql': 1,
    'OracleSql': 1,
    'Mongo': 1,
    'Redis': 1,
    'Docker': 1,
    'Kubernetes': 1,
    'Spring Boot': 1,
    'Java EE': 1,
    'JavaScript': 1,
    'GraphQL': 1,
    'Ruby': 1,
    'Node JS': 1,
    'Selenium': 1,
    'Cucumber': 1,
    'Ruby on Rails': 1,
    'Protocol Buffers': 1,
    'WebRTC': 1,
    'Cypress': 0,
    'Teraform': 1,
    'SAPUI5': 1,
    'Junit': 1,
    'Protractor': 1,
    'C': 1,
    'C++': 1,
    'C#': 1
  };

  let skillList = '';
  console.log(skills);
  for (let skill in skills) {
    skillList += `<tr>
    <td>${skill}</td>
    <td>${yellowStars(skills[skill])}${blackStars(5 - skills[skill])}</td>
  </tr>`
  }
  const skillsTable = document.getElementById('skills');
  skillsTable.innerHTML = skillList;
}

populateSkills();