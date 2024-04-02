
const input = require('readline-sync');
let str = "LaunchCode";

let numLetters = input.question('How many letters to shift? ');
//prompt the user to give a # of letters to move
if (numLetters <= str.length) {
    //if use gives a # less than the total length, move requested number to the back of the string. 
  let newWord = str.slice(numLetters) + str.slice(0,numLetters);
  console.log(`'${str}' converts to '${newWord}'.`);
} else {
    //validation -- if the user give a # greater than the string length, default to moving 3 letters. 
  console.log(`OOPS! Not enough characters in '${str}' to move ${numLetters}. Here's the result of moving just 3:`);
  console.log(`'${str}' converts to '${str.slice(3) + str.slice(0,3)}'.`)
}





























// const input = require('readline-sync');
// // let str = "LaunchCode";
// let str= input.question("enter a string: ");
// let numChar= input.question("enter the number of characters to move: ")

// if (numChar>str.length){
//     numChar = 3;
//     let newStr = str.slice(numChar) + str.slice(0,numChar);
//     console.log(`Too long! Defaulted to 3 characters. The old string is ${str}, the new string is ${newStr}`);
// } else {
//     let newStr = str.slice(numChar) + str.slice(0,numChar);
//     console.log(`The old string is ${str} and the new string is ${newStr}.`);
// }

// //1) Use string methods to remove the first three characters from the string and add them to the end.
// //Hint - define another variable to hold the new string or reassign the new string to str.
// let newStr = str.slice(numChar) + str.slice(0,numChar);
// // console.log(newStr);
// //Use a template literal to print the original and modified string in a descriptive phrase.

// //2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

// //3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
