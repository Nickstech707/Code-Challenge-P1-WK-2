// Import the prompt-sync library to enable user input
const prompt = require("prompt-sync")({ sigint: true });

// Prompts the user for input array of numbers
const input = prompt("Enter the numbers: ");

// Converts the input string into an array of numbers
const numbers = input.split(",").map((num) => {
  const parsedNum = parseInt(num.trim());
  return isNaN(parsedNum) ? 0 : parsedNum;
});

// Function to check if a number is prime
function isPrime(num) {
  // Checks if the number is 2 or less
  // Returns false if the number is 2 or less
  if (num === 2) return true;
  if (num % 2 === 0 || num <= 1) {
    return false;
  }

  // Checks if the number is divisible by any number from 3 to square root of the number
  // Returns false if the number is divisible by any number from 3 to square root of the number
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Calls the filterPrimes function to generate an array of prime numbers
const primeNumbers = filterPrimes(numbers);

// Function to filter out prime numbers from an array
function filterPrimes(numbers) {
  return numbers.filter(isPrime);
} // Uses the Array.filter method to apply isPrime on each element of the array

// Output the generated prime numbers to the console
console.log("The prime numbers are:", primeNumbers);
