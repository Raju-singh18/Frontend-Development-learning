
//! const url = 'https://official-joke-api.appspot.com/random_joke';

import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    let data = "";
    https.get(url, (response) => {
        response.on('data', (chunk) => {
              data += chunk;
        });

        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(`Here is a random ${joke.type} joke: `);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.yellow.bgRed.bold(`${joke.punchline}`));
        })

        response.on('error', (err) => {
            console.log(`Error fetching the joke, ${err.message}`);
        })
    })
}

getJoke();
