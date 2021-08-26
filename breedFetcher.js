const request = require("request");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let args = process.argv.slice(2);

const url = `https://ap.thecatapi.com/v1/breeds/search?q=${args[0]}`;

//using request to fetch the breed data from the API endpoint.
//url is url defined above
//error is the data object received if url not found
//response is the HTML response received from url
//body of response as a string
request(url, (error, response, body) => {
  if (typeof response === "undefined") {
    console.log(`\n${url} NOT FOUND\n`);
    // console.log(error);
    rl.close();
    return;
  }

  const data = JSON.parse(body);

  if (typeof data[0] === "undefined") {
    console.log(`\n${args[0]} is not a cat breed\n`);
    rl.close();
    return;
  }
  if (data[0].name) {
    console.log(`\n${data[0].description}\n`);
    rl.close();
    return;
  }
});
