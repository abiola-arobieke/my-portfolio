// Dummy data for portfolio

const projects = [
  {
    id: 1,
    title: 'Fast-lane Racer',
    data: ['FullStack', 'Ruby on Rails', 2023],
    description:
      "A music-concert app showing a musical event that will take place in Lagos, Nigeria. Data were fetch dynamically with Javascript in this project. Built with Javascript, HTML, and CSS",
    stack: ['Ruby on Rails', 'React', 'Redux', 'Redux-Thunk'],
    imageUrl: './images/fast-lane.png',
    live: 'https://shiny-longma-bba6fb.netlify.app/',
    github: 'https://github.com/muneeb3123/Fast-Lane-Racers-front-end'
  },
  {
    id: 2,
    title: 'Book Store',
    data: ['Frontend', 'React', 2023],
    description:
      'An e-book store where you can add and remove a book. The app  will display your reading progress and the current page you are reading',
    stack: ['React', 'Redux', 'Redux-Thunk'],
    imageUrl: './images/book-store.png',
    live: 'https://book-store-y623.onrender.com/',
    github: 'https://github.com/abiola-arobieke/book-store'
  },
  {
    id: 3,
    title: 'Cubana Musical Concert',
    data: ['FrontEnd', 'VanillaJS', 2023],
    description:
      "A music-concert app showing a musical event that will take place in Lagos, Nigeria. Data were fetch dynamically with Javascript in this project. Built with Javascript, HTML, and CSS",
    stack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: './images/cubana.png',
    live: 'https://abiola-arobieke.github.io/music-concert/',
    github: 'https://github.com/abiola-arobieke/music-concert'
  },
  {
    id: 4,
    title: 'FX-Today',
    data: ['Frontend', 'React', 2023],
    description:
      'A foreign exchange app for mobile screen that can be used to compare the daily exchange rate. Rate of all currencies can be compared with each other. The landing page shows the rate exchange of 1 USD to every other currency.  You can change the 1 USD to your desired amount and compared the rate. The search bar on top of the page can be used to search for a currency. And if you need to select a currency other than USD, all you need to do is scroll down or search for the currency and click on it, and compared the rate of such currency to other currency',
    stack: ['React', 'Redux', 'Redux-Thunk'],
    imageUrl: './images/fx-today.png',
    live: 'https://fx-today.onrender.com/',
    github: 'https://github.com/abiola-arobieke/fx-today'
  },
  {
    id: 5,
    title: 'LeaderBoard',
    data: ['Frontend', 'VanillaJS', 2023],
    description:
      "Leaderboard is an app that shows the names and scores in a game or competition. You add a new game or select from the saved games. Each game added or selected will be displayed on the navigation bar. You add a name and score to a game selected using the form provided on the landing page.",
    stack: ['JavaScript', 'Webpack', 'Babel'],
    imageUrl: './images/leaderboard.png',
    live: 'https://abiola-arobieke.github.io/leaderboard/',
    github: 'https://github.com/abiola-arobieke/leaderboard'
  },
  {
    id: 6,
    title: 'Mama Put',
    data: ['Frontend', 'VanillaJS', 2023],
    description:
      "MamaPut is a recipe app that displays a list of recipe. You can also view the ingredients for each recipe  and the amount of time it will require to cook each me. You can view the number of likes and comments for each recipe",
    stack: ['JavaScript', 'Webpack', 'Babel'],
    imageUrl: './images/mamaput.png',
    live: 'https://abiola-arobieke.github.io/js-capstone-project/',
    github: 'https://github.com/abiola-arobieke/js-capstone-project'
  },
  {
    id: 7,
    title: 'Math-Magician',
    data: ['Frontend', 'React', 2023],
    description:
      "A calculator app that can perform basic calculation. An API for getting quotes was added to the app.",
    stack: ['React', 'HTML', 'CSS'],
    imageUrl: './images/math-magician.png',
    live: 'https://math-magician-007.netlify.app/',
    github: 'https://github.com/abiola-arobieke/math-magician'
  },
  {
    id: 8,
    title: 'Budget-It',
    data: ['FullStack', 'Ruby on Rails', 2023],
    description:
      "A calculator app that can perform basic calculation. An API for getting quotes was added to the app.",
    stack: ['Ruby on Rails', 'HTML', 'CSS'],
    imageUrl: './images/budget-it.png',
    live: 'https://budget-it-bvk4.onrender.com/',
    github: 'https://github.com/abiola-arobieke/budget-it'
  },
  {
    id: 9,
    title: 'Minimalist',
    data: ['Frontend', 'VanillaJS', 2023],
    description:
      'A to-do app that can be used to plan or schedule a task. You can add a task, mark it when it is completed, and also delete a task. All added task are saved in the local storage. And on reload of the web browser, all saved tasked with be fetched and displayed on the app.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    imageUrl: './images/todo.png',
    live: 'https://abiola-arobieke.github.io/to-do-list/',
    github: 'https://github.com/abiola-arobieke/to-do-list'
  },
  {
    id: 10,
    title: 'Space Travelers',
    data: ['Frontend', 'React', 2023],
    description:
      'An e-book store where you can add and remove a book. The app  will display your reading progress and the current page you are reading',
    stack: ['React', 'Redux', 'Redux-Thunk'],
    imageUrl: './images/space-traveler.png',
    live: 'juneth-space-traveller.netlify.app/',
    github: 'https://github.com/abiola-arobieke/space-travelers'
  },
];

// Variable used to get html element/s

const menuIcon = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const overlay = document.querySelector('#overlay');
const menuItems = document.getElementsByClassName('nav-item');
const modal = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('#close-modal');
const modalTitle = document.getElementById('modal-title');
const projectInfo = document.querySelector('#project-data');
const description = document.querySelector('#description');
const liveUrl = document.querySelector('#live-url');
const githubUrl = document.querySelector('#github-url');
const pills = document.querySelector('.labels');
const imageUrl = document.querySelector('.modal-img');
const portfolio = document.querySelector('#portfolio');

// Event listener

menuIcon.addEventListener('click', () => {
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Loop through dummy data to make web page page dynamic

for (let i = 0; i < projects.length; i += 1) {
  // HTML Template for card in portfolio section
  const cardSection = `
  <div class="card grid">
    <div>
      <img src="${projects[i].imageUrl}" class="image-auto-h" alt="Tonic" />
    </div>
    <div class="change-row">
    <h2 class="m0 font-40 h-0 f-color">${projects[i].title}</h2>
    <ul class="d-flex space-x-24 p-highlight mb-32 project-summary">
    </ul>
    <p>
      ${projects[i].description}
    </p>
    <ul class="d-flex space-x-1 list-tags list-style-n no-pad flex-wrap stack-list">
    </ul>
    <button class="btn-action mt-40 view-details" type="button">See project</button>
  </div>
  </div>
`;
  // Create html tags and Append to the project section
  const section = document.createElement('section');
  section.innerHTML = cardSection;
  portfolio.appendChild(section);

  const projectDataList = document.querySelectorAll('.project-summary');
  const stackList = document.querySelectorAll('.stack-list');

  for (let b = 0; b < projectDataList.length; b += 1) {
    const eachProjectData = projects[i].data;
    for (let c = 0; c < eachProjectData.length; c += 1) {
      const projectListTag = document.createElement('li');
      projectListTag.innerHTML = eachProjectData[c];
      projectDataList[i].appendChild(projectListTag);
    }
    break;
  }

  for (let d = 0; d < stackList.length; d += 1) {
    const eachStack = projects[i].stack;
    for (let e = 0; e < eachStack.length; e += 1) {
      const stackListTag = document.createElement('li');
      stackListTag.innerHTML = eachStack[e];
      stackList[i].appendChild(stackListTag);
    }
    break;
  }
}

const actionBtn = document.querySelectorAll('.view-details');
for (let i = 0; i < actionBtn.length; i += 1) {
  actionBtn[i].addEventListener('click', () => {
    while (projectInfo.hasChildNodes()) {
      projectInfo.removeChild(projectInfo.firstChild);
    }
    while (pills.hasChildNodes()) {
      pills.removeChild(pills.firstChild);
    }
    for (let j = 0; j < projects.length; j += 1) {
      const projectData = projects[i].data;
      for (let k = 0; k < projectData.length; k += 1) {
        const listTag = document.createElement('li');
        listTag.innerHTML = projectData[k];
        projectInfo.appendChild(listTag);
      }
      const projectStack = projects[i].stack;
      for (let l = 0; l < projectStack.length; l += 1) {
        const listTag = document.createElement('li');
        listTag.innerHTML = projectStack[l];
        pills.appendChild(listTag);
      }
      modalTitle.textContent = projects[i].title;
      description.textContent = projects[i].description;
      imageUrl.src = projects[i].imageUrl;
      liveUrl.href = projects[i].live;
      githubUrl.href = projects[i].github
      break;
    }
    modal.style.display = 'block';
  });
}