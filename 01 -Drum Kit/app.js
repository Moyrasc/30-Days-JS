

function playSounds(e){
    //console.log(e);
    const keyActive = document.querySelector(`li[data-key="${e.code}"]`);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    //console.log(keyActive);
    //console.log(audio);
    if(!audio) return;
    keyActive.classList.add("play");
    audio.currentTime ="0";
    audio.play();
};
function playSoundsOff (e) {
    const keyActive = document.querySelector(`li[data-key="${e.code}"]`);
    keyActive.classList.remove("play");
};
window.addEventListener("keydown",playSounds);
window.addEventListener("keyup", playSoundsOff);











