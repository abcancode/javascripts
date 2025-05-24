#!/usr/bin/env node

// function that divides one number by another and displays the result on the console.


function divide(a, b) {
  if (b === 0) {
    console.log("Error❗ Cannot divide by zero!");
    return;
  }
  const result = a / b;
  console.log("The result is", result✅);
}


divide(45, 15);
