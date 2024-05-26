#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate random number.
// 2) User input for guess number.
// 3) Compare User input and computer generated random number.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "UserGuessNumber",
        type: "number",
        message: "Please Guess a number (1-6)",
    }]);
//console.log(answer);
if (answer.UserGuessNumber === randomNumber) {
    console.log("Congtratulations! Your Guess is Correct");
}
else {
    console.log("Your Guess is Wrong");
}
