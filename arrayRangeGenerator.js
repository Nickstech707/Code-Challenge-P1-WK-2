// Import the prompt-sync library to enable user input
const prompt = require("prompt-sync")({ sigint: true });

// Prompts the user for the first number and parse it as an integer
const first = parseInt(prompt("Enter the first number: "));

// Prompts the user for the second number and parse it as an integer
const second = parseInt(prompt("Enter the second number: "));

// Function to generate an array between the two numbers
function range(first, second) {
  // Initialize an empty array to hold the numbers
  let numbers = [];
  // Checks if the first number is less or equal to the second number
  if (first <= second) {
    // If true, creates an array from the first number to the second number by incrementing
    for (let i = first; i <= second; i++) {
      numbers.push(i);
    }
    // If false, creates an array from the first number to the second number by decrementing
  } else {
    for (let i = first; i >= second; i--) {
      numbers.push(i);
    }
  }
  return numbers;
}

// Calls the range function to generate an array
const numbersArray = range(first, second);

// Output the generated array to the console
console.log("Generated array:", numbersArray);
