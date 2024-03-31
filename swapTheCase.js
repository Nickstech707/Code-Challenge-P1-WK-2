// Import the prompt-sync library to enable user input
const prompt = require("prompt-sync")({ sigint: true });

// Prompts the user for input string
const inputString = prompt("Enter a string to swap case: ");

//This is the function that swap the case of each character in the string
function swapCase(str) {
  // Split the string into an array of characters,
  // If the character is lowercase, converts it to uppercase and vice versa,
  // Joins the array of characters back into a string
  return str
    .split("")
    .map((char) => {
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join("");
}

// Calls the swapCase function with the input string
const swappedString = swapCase(inputString);

// Output the swapped string to the console
console.log("Swapped string:", swappedString);
