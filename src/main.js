// Primera página

//Audio de Pokemon
const audio = document.getElementById('audio');
const playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;
playPauseBTN.addEventListener("click", function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
    }
});  

const playPauseBTN2 = document.getElementById('playPauseBTN2');
playPauseBTN2.addEventListener("click", function stop(){
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658;";
});   /* averiguar como funciona pause */
/* 
import data from './data/pokemon/pokemon.js';

import {
    filterByName,
    filteredbyClass,
    filteredByDifficulty,
    orderList,
} from './data.js';

const inputName = document.getElementById('inputName');
const footerYear = document.getElementById('year');
footerYear.innerHTML = new Date().getFullYear();
  */