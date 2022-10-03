'use strict';

let controls = document.querySelector('.dishes-controls');
let toggleBtns = document.querySelectorAll('.dishes-controls-input');
let itemsList = document.querySelector('.dishes-list');
let focusDishes = itemsList.querySelectorAll('[data-focus]');

getDishesFocus();

controls.addEventListener('change', function(evt) {
  let target = evt.target;
  let position = 0;
  
  position = -1160 * target.value;
  
  itemsList.style.transform = 'translateX(' + position + 'px)';
  
  for (let focusDish of focusDishes) {
    
    if (target.value === focusDish.getAttribute('data-focus')) {
      focusDish.setAttribute('tabindex', 0);
    } else {
      focusDish.setAttribute('tabindex', -1);
    }
    
  }
  
});

function getDishesFocus() {

  for (let focusDish of focusDishes) {

    if (focusDish.getAttribute('data-focus') != 0) {
      focusDish.setAttribute('tabindex', -1);
    }
    
  }

}