// Dummy data for portfolio

const projects = [
  {
    id: 1,
    title: 'Tonic',
    data: ['Canopy', 'Dev-Ops', 2015],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    stack: ['html', 'css', 'Javascript', 'ruby'],
    imageUrl: './images/project1.png',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    data: ['Facebook', 'Back-End', 2017],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    stack: ['html', 'css', 'Javascript', 'React'],
    imageUrl: './images/project2.png',
  },
  {
    id: 3,
    title: 'Coffee Shop',
    data: ['Spotify', 'Full-stack', 2022],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    stack: ['html', 'css', 'Javascript', 'Python', 'Django'],
    imageUrl: './images/project3.png',
  },
  {
    id: 4,
    title: 'Dance Class',
    data: ['Ebay', 'Backend', 2015],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    stack: ['html', 'css', 'Javascript', 'Express'],
    imageUrl: './images/project4.png',
  },
  {
    id: 5,
    title: 'Tax Calculator',
    data: ['Walmart', 'DevOps', 2010],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
for (let i=0; i< actionBtn.length; i +=1) { 
  actionBtn[i].addEventListener('click', () => {
    while (projectInfo.hasChildNodes()) {
      projectInfo.removeChild(projectInfo.firstChild);
    }
    while (pills.hasChildNodes()) {
      pills.removeChild(pills.firstChild);
    }
    for (let j = 0; j <projects.length; j += 1) {
      const projectData = projects[i].data;
      for (let k = 0; k < projectData.length; k +=1) {
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