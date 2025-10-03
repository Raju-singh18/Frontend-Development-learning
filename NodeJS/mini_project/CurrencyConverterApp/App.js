
import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apikey = '6913d8387604f72253eccfa5';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}
https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
          data += chunk;
    })

    response.on('end', ()=>{
        const rates = JSON.parse(data).conversion_rates;



        rl.question('Enter the amount in USD: ', (amount) => {
          rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) =>{
             
            const rate = rates[currency.toUpperCase()];
            if(rate){
                console.log(chalk.yellow.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`))
            }
            else{
                console.log(`Invalid currency code`)
            }
            rl.close()
          }) 
        })
    })
})

