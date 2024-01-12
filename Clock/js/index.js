const secEl = document.querySelector(".sec");
const minEl = document.querySelector(".min");
const hourEl = document.querySelector(".hour");

function getTime() {
  let currentTime = new Date();

  let currentHour =
    currentTime.getHours() > 12
      ? currentTime.getHours() - 12
      : currentTime.getHours();
  let currentMin = currentTime.getMinutes();
  let currentSec = currentTime.getSeconds();

  secEl.style.transform = `rotate(${currentSec * 6}deg)`;
  minEl.style.transform = `rotate(${currentMin * 6}deg)`;

  hourEl.style.transform = `rotate(${currentHour * 30}deg)`;
  console.log(currentHour, currentMin, currentSec);
}
getTime();

setInterval(getTime, 1000);
