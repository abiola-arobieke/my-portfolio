const menuIcon = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const overlay = document.querySelector('#overlay');
const menuItems = document.getElementsByClassName('nav-item')

// Event listener
menuIcon.addEventListener('click', () => {
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i< menuItems.length; i+=1) {
  menuItems[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  })
}