'use strict'

let buttonList = document.getElementsByClassName('drum-kit__drum');

for (let button of buttonList) {
	
  let audioPlayer = button.getElementsByTagName('audio')[0];

  function buttonPlay() {
    audioPlayer.play();
  }

  button.onclick = buttonPlay;
}
