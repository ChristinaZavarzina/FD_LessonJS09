'use strict'

const getId = id => document.getElementById(id);

let hours = 0;
let min = 0;
let sec = 0;
let interval;

const addZero = (zero) => {
  return (zero < 10) ? "0" + zero : zero;
}

const startCounter = () => {
  sec++;
  if (sec >= 60) { min++; sec = 0; };
  if (min >= 60) {hours++; min = 0; };
  getId("timer").textContent = `${addZero(hours)}:${addZero(min)}:${addZero(sec)}`;
  getId("color__timer").style.background = "rgba(231, 40, 40, 0.5)";
}

const stopCounter = () => {
  clearInterval(interval);
  getId("color__timer").style.background = "rgba(39, 211, 76, 0.5)";
}

const resetCounter = () => {
  clearInterval(interval);
  hours = 0;
  min = 0;
  sec = 0;
  getId("timer").textContent = `${addZero(hours)}:${addZero(min)}:${addZero(sec)}`;
  getId("color__timer").style.background = "rgba(88, 88, 88, .5)";
}

getId("statBtn").addEventListener("click", () => {
  interval = setInterval(startCounter, 1000);
});
getId("stopBtn").addEventListener("click", stopCounter);
getId("resetBtn").addEventListener("click", resetCounter);