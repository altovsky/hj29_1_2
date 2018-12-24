'use strict'

let dropDown = document.getElementsByClassName('wrapper-dropdown')[0];

function toggleClass() {
  this.classList.toggle('active');
}

dropDown.onclick = toggleClass;
