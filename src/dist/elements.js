"use strict"; // Enforce strict mode to catch common coding errors and "unsafe" actions.

// Selecting the element that will display the final result of the calculation.
const resultElement = document.querySelector(".result");

// Selecting the element that will display the live or intermediate result as the user inputs data.
const liveResult = document.querySelector(".live-result");

// Selecting all elements with the class "btn", which are assumed to be the calculator's operator buttons.
const operatorsButton = document.querySelectorAll(".btn");
