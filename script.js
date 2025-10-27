const display = document.getElementById("display");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let counter = 0;
let interval = null;

function formatTime(counter) {
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const seconds = counter % 60;

  // Formate chaque nombre avec 2 chiffres String(nombre).padStart(2, '0')
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  return `${h}:${m}:${s}`;
}

function startTimer() {
  if (interval === null) {
    interval = setInterval(function() {
      counter++;
      display.textContent = formatTime(counter);
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  counter = 0;
  display.textContent = formatTime(counter);
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);

display.textContent = formatTime(0);

/* console.log(formatTime(0));
console.log(formatTime(120));
console.log(formatTime(3661)); */
