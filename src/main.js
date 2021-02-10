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
});   

const enter = document.getElementById("buttonEnter");
enter.addEventListener("click", ()=>{
    document.getElementById("FirstPage").classList.add("hide");
    document.getElementById("FirstPage").classList.remove("display");
    
    
    document.getElementById("SecondPage").classList.add("display");
    document.getElementById("SecondPage").classList.remove("hide");
    document.body.style.background = "#fff";
});