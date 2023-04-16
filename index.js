// Dummy data for portfolio

const projects = [
  {
    id: 1,
    title: 'Cubana 2023',
    data: ['Musical Concert', 'Frontend', 2023],
    description:
      "Cubaba 2023 is a live musical concert that will take place at the National Stadium, Surulere. The concert is going to feature popular artist like Burna Boy, P Square, Adekunle Gold, Asake, Wizkid, Olamide, Ruger, Naira Marley, Buju and lots more.",
    stack: ['html', 'css', 'Javascript'],
    imageUrl: './images/music-concert.png',
  },
  {
    id: 2,
    title: 'Awesome Books',
    data: ['Book Shelf', 'Frontend', 2023],
    description:
      "Awesome books is book shelf built with wire-frame design. The site is built with HTML, CSS and JavaScript. Book author and title can be added to the website.",
    stack: ['html', 'css', 'Javascript'],
    imageUrl: './images/awesome-books.png',
  },
  {
    id: 3,
    title: 'To do list',
    data: ['Task Reminder', 'Fronted', 2023],
    description:
      "The app can be used to store the task to be be fulfilled. You can add and delete a task, mark completed task, and also clear all checked task. The task are save in the local storage, so you can retrieve all the save task upon loading the page",
    stack: ['html', 'css', 'Javascript'],
    imageUrl: './images/todo.png',
  },
  {
    id: 4,
    title: 'Dance Class',
    data: ['Ebay', 'Backend', 2015],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    stack: ['html', 'css', 'Javascript', 'Express'],
    imageUrl: './images/project4.png',
  },
  {
    id: 5,
    title: 'Tax Calculator',
    data: ['Walmart', 'DevOps', 2010],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['html', 'css', 'Javascript'],
    imageUrl: './images/project1.png',
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
const pills = document.querySelector('.labels');
const imageUrl = document.querySelector('.modal-img');
const portfolio = document.querySelector('#portfolio');
const email = document.querySelector('#mail');
const alertMsg = document.querySelector('.alert-info');
const form = document.querySelector('#form');
const page = document.getElementsByTagName('body')[0];
const successMsg = document.querySelector('.success-msg');

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
      break;
    }
    modal.style.display = 'block';
  });
}

// Email validation

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.display = 'block';
  } else {
    form.submit();
    localStorage.removeItem('user');
    form.reset();
    successMsg.style.display = 'block';
  }
});

// Remove alert
page.addEventListener('click', () => {
  alertMsg.style.display = 'none';
  successMsg.style.display = 'none';
});

const username = document.querySelector('#user');
const message = document.querySelector('#msg');
const storedUserData = JSON.parse(localStorage.getItem('user'));
const userData = {};

if (storedUserData) {
  if (storedUserData.name !== undefined) {
    userData.name = storedUserData.name;
  }
  if (storedUserData.email !== undefined) {
    userData.email = storedUserData.email;
  }
  if (storedUserData.message !== undefined) {
    userData.message = storedUserData.message;
  }
}

if (userData.name && storedUserData.name !== undefined) {
  username.value = userData.name;
}
if (userData.email && storedUserData.email !== undefined) {
  email.value = userData.email;
}
if (userData.message && storedUserData.message !== undefined) {
  message.value = userData.message;
}

username.addEventListener('input', () => {
  userData.name = username.value;
  localStorage.setItem('user', JSON.stringify(userData));
});

email.addEventListener('input', () => {
  userData.email = email.value;
  localStorage.setItem('user', JSON.stringify(userData));
});

message.addEventListener('input', () => {
  userData.message = message.value;
  localStorage.setItem('user', JSON.stringify(userData));
});
