import inquirer from "inquirer"

const currency: any = {
    USD : 1, // base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
};

let user_answer = await inquirer.prompt(
[
    {
        name : `from`,
        message : "Select your currency",
        type : 'list',
        choices : ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },

    {
        name : `to`,
        message : "Select Currency for Conversion",
        type : 'list',
        choices : ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },

    {
        name : `amount`,
        message : "Enter Amount",
        type : 'number',
    },
 
]
)

let fromAmount = currency[user_answer.from]  // exchange rate
let toAmount = currency[user_answer.to]  // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount  // usd base currency
let convertedAmount = baseAmount * toAmount

console.log (convertedAmount);