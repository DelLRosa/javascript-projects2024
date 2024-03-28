
const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
































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
