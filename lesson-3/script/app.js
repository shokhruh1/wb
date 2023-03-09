const audio = new Audio("alarm.mp3");
const $time = document.querySelector(".time");

function addZero(num) {
  return String(num).padStart(2, "0");
}

setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  $time.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const time = new Date();
  if (time.getMinutes() == 10) {
    audio.play();
  }
});
