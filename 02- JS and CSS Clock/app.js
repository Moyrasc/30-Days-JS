const handHour = document.querySelector(".hour");
const handMin = document.querySelector(".min");
const handSecond = document.querySelector(".second");

function setDate(){
    const now = new Date();

    const hour = now.getHours();
    const hourMovement = ((hour / 12) * 360);
    handHour.style.transform = `rotate(${hourMovement}deg)`;
    
    const min = now.getMinutes();
    const minMovement = ((min / 60) * 360);
    handMin.style.transform= `rotate(${minMovement}deg)`;

    const second = now.getSeconds();
    const secondMovement = ((second / 60) * 360);
    handSecond.style.transform = `rotate(${secondMovement}deg)`;
}
setInterval(setDate,1000);
setDate();