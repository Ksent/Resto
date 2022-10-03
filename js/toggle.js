'use strict';

let hiddenItems = document.querySelectorAll('.hidden');
let toggleBtn = document.querySelector('.menu-button');
let toggleBtnText = document.querySelector('.menu-button-text');
let toggleArrow = document.querySelector('.arrow-up');

toggleBtn.addEventListener('click', function() {
  for (let hiddenItem of hiddenItems) {
    hiddenItem.classList.toggle('hidden');
  }

  toggleBtnText.classList.toggle('arrow-up');

  if (toggleBtnText.classList.contains('arrow-up')) {
    toggleBtnText.textContent = 'load less';
  } else {
    toggleBtnText.textContent = 'load more';
  }

});