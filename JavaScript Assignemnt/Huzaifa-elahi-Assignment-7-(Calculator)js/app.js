// let display = document.getElementById("display");
// let historyList = document.getElementById("history-list");
// let currentExpression = "";

// function appendToDisplay(value) {
//   currentExpression += value;
//   display.value = currentExpression;
// }

// function clearDisplay() {
//   currentExpression = "";
//   display.value = "";
// }

// function calculate() {
//   try {
//     let result = eval(currentExpression);
//     display.value = result;
//     addToHistory(currentExpression + " = " + result);
//     currentExpression = "";
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// function addToHistory(entry) {
//   let listItem = document.createElement("li");
//   listItem.textContent = entry;
//   historyList.appendChild(listItem);
// }

const display = document.getElementById("display");
const historyList = document.getElementById("history");
let valueExpression = "";

function disValue(value) {
  valueExpression += value;
  display.value = valueExpression;
}

function clearDisValue() {
  valueExpression = "";
  display.value = "";
}

function removeDisValue() {
  var remove = valueExpression;
  // console.log(display.value);
  display.value = display.value.slice(0, -1);
  // console.log(display.value);
}

function calculate() {
  try {
    let result = eval(valueExpression);
    display.value = result;
    history(valueExpression + " = " + result);
    valueExpression = "";
  } catch (error) {
    display.value = "Error";
  }
}

function history(entry) {
  let listItem = document.createElement("p");
  listItem.textContent = entry;
  historyList.appendChild(listItem);
}

// function removeDisValue() {
//   var dele = document.getElementById("display");
//   dele.value = dele.value.slice(0, -1);
// }

// const display = document.getElementById("display");
// const historyList = document.getElementById("history");
// let valueExpression = "";

// function disValue(value) {
//   valueExpression += value;
//   updateDisplay();
// }

// function clearDisValue() {
//   valueExpression = "";
//   updateDisplay();
// }

// function removeDisValue() {
//   valueExpression = valueExpression.slice(0, -1);
//   updateDisplay();
// }

// function calculate() {
//   try {
//     let result = eval(valueExpression);
//     display.value = result;
//     history(valueExpression + " = " + result);
//     valueExpression = result.toString(); // Store the result for further calculations
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// function updateDisplay() {
//   display.value = valueExpression;
// }

// function history(entry) {
//   let listItem = document.createElement("p");
//   listItem.textContent = entry;
//   historyList.appendChild(listItem);
// }

// // Event listener for keydown event on the document
// document.addEventListener("keydown", function (event) {
//   const key = event.key;

//   if (key === "Enter") {
//     calculate();
//   } else if (key === "Backspace") {
//     removeDisValue();
//   } else if (
//     !isNaN(Number(key)) ||
//     ["+", "-", "*", "/", "%", "."].includes(key)
//   ) {
//     disValue(key);
//   }
// });
