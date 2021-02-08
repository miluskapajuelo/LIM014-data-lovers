// Primera página

//Audio de Pokemon
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
    }
}

function stop(){
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658;";
}

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
 