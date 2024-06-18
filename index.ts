#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright("\n \t\t Wellcome to Danish word_counter \n"));
console.log(chalk.bold.red("=".repeat(60)));

let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your Sentence",
    }
])

let words = answer.sentence.trim().split(" ");

console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.bold.red (words.length)}`));
console.log("=".repeat(60));







