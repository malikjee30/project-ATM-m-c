#! /usr/bin/env node
import inquirer from "inquirer";
async function starATMconversation() {
    console.log("Well come to Meezan islamic banking!");
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userID",
            message: "kindly Enter your user ID:",
        },
        {
            type: "number",
            name: "userPIN",
            message: "kindly Enter your user PIN:",
        },
        {
            type: "list",
            name: "accountType",
            choices: ["current", "saving"],
            message: "select your account type:",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fastcash withdrawal", "Normal withdrawal"],
            message: "select your transaction type:",
            when(answers) {
                return answers.accountType;
            },
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000, 5000, 10000, 20000],
            message: "select your amount:",
            when(answers) {
                return answers.transactionType === "Fastcash withdrawal";
            },
        },
        {
            type: "number",
            name: "amount",
            message: "enter your Amount:",
            when(answers) {
                return answers.transactionType === "Normal withdrawal";
            },
        },
    ]);
    if (answer.userID && answer.userPIN) {
        console.log("procssing your request.....");
        const balance = Math.floor(Math.random() * 10000000);
        console.log("your current balance is:PKR", balance.toLocaleString());
        const enteredAmount = answer.amount;
        if (balance >= enteredAmount) {
            const remainigBalance = balance - enteredAmount;
            console.log("transaction is successfull. Your remaing balance is: PKR", remainigBalance.toLocaleString());
        }
        else {
            console.log("insufficient balance. please try with a lower balance.");
        }
    }
}
starATMconversation();
