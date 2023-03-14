const menuIcon = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const overlay = document.querySelector('#overlay');

// Event listener
menuIcon.addEventListener('click', () => {
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});
