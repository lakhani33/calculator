#! /usr/bin/env node

import inquirer from 'inquirer';
const answer = await inquirer.prompt([
  {message: "enter firstNumber", type: "number", name: "firstNumber"},
  {message: "enter secondNumber", type: "number", name: "secondNumber"},
  {

    message: "select one of the operator to perform operation action",
    type: "list",
    name: "operator",
    choices: ["Addition" , "Subtraction" , "Multiplication" , "Division",],
  },
]);

// conditional statement 
if (answer.operator === "Addition") {
 console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator");
}


