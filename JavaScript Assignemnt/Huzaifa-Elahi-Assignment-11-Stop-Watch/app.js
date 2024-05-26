// Timer

let minutes = document.getElementById("minute");
let second = document.getElementById("second");

let interval;

function decrement() {
  let min = parseInt(minutes.innerText);
  let sec = parseInt(second.innerText);

  // decrement an seconds
  sec--;

  //   // If seconds reach 0 and there are minutes left to decrement, decrement minutes and reset seconds
  if (sec < 0 && min > 0) {
    min--;
    sec = 59;
  }

  // updated the display value
  minutes.innerText = min;
  second.innerText = sec;
}

let flag = false;

function toggletimer() {
  if (flag) {
    clearInterval(interval);
    flag = false;
    event.target.innerText = "START";
    console.log(flag);
  } else {
    flag = true;
    event.target.innerText = "STOP";
    interval = setInterval(decrement, 1000);
    console.log(flag);
  }
}

function resetTimer() {
  // Set the initial values for minutes and seconds
  minutes.innerText = "5";
  second.innerText = "00";
}

// StopWatch

let watchseconds = document.getElementById("watchseconds");
let watchmilisecd = document.getElementById("watchmilisecd");

let seconds = 0;
let milliseconds = 0;
let intervals;

function increment() {
  milliseconds += 10;
  console.log(milliseconds);
  if (milliseconds >= 1000) {
    seconds++;
    milliseconds = 100;
  }
  updateDisplay();
}

function updateDisplay() {
  watchseconds.innerText = seconds < 10 ? "" + seconds : seconds;
  watchmilisecd.innerText = milliseconds.toString().slice(0, 2);
}

function stopwatchToggle() {
  if (!intervals) {
    intervals = setInterval(increment, 10);
    event.target.innerText = "START";
  } else {
    clearInterval(intervals);
    intervals = null;
    event.target.innerText = "STOP";
  }
}

function resetStopwatch() {
  clearInterval(intervals);
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  document.getElementById("startTimer").innerText = "START";
}
