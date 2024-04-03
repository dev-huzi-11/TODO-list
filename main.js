#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "q1",
            type: "input",
            message: "What you would like to add in your todos?"
        },
        {
            name: "q2",
            type: "confirm",
            message: "Would you like to add more in todos? (Y/N)",
            default: "true"
        }
    ]);
    if (todoQuestions.q1 === "") {
        console.log("Plz Add something in todos");
    }
    else {
        todos.push(todoQuestions.q1);
        console.log(todos);
    }
    if (!todoQuestions.q2) {
        console.log("Exiting the todo list.");
        condition = false;
    }
}
