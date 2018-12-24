'use strict'

let track = document.getElementsByClassName('title')[0];
let mediaplayer = document.getElementsByClassName('mediaplayer')[0];
let audioPlayer = mediaplayer.getElementsByTagName('audio')[0];
let playPause = document.getElementsByClassName('playstate')[0];
let stop = document.getElementsByClassName('stop')[0];
let back = document.getElementsByClassName('back')[0];
let next = document.getElementsByClassName('next')[0];

let trackList = [
  {
  	'title': 'LA Chill Tour',
  	'url': 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3'
  },
  {
  	'title': 'This is it band',
  	'url': 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3'
  },
  {
  	'title': 'LA Fusion Jam',
  	'url': 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'
  },
]

let trackNum = 0;

function playPauseTrack() {

  if (mediaplayer.classList.contains('play')) {
    mediaplayer.classList.remove('play');
    audioPlayer.pause();

  } else {
    mediaplayer.classList.add('play');
    audioPlayer.play();
  }
}

function stopTrack() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  mediaplayer.classList.remove('play');
}

function applyTrack() {
  track.title = trackList[trackNum]['title'];
  audioPlayer.src = trackList[trackNum]['url'];

  if (mediaplayer.classList.contains('play')) {
  	audioPlayer.play();
  }
}

function nextTrack() {
  trackNum = trackNum < trackList.length - 1 ? trackNum + 1 : 0;

  applyTrack();
}

function backTrack() {
  trackNum = trackNum >= 1 ? trackNum - 1 : trackList.length - 1;

  applyTrack();
}

playPause.onclick = playPauseTrack;
stop.onclick = stopTrack;
next.onclick = nextTrack;
back.onclick = backTrack;
