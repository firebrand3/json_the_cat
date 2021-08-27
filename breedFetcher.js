const request = require("request");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//using request to fetch the breed data from the API endpoint.
//url is url defined above
//error is the data object received if url not found
//response is the HTML response received from url
//body of response as a string
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (typeof response === "undefined") {
      callback(error);
      rl.close();
      return;
    }

    const data = JSON.parse(body);

    if (typeof data[0] === "undefined") {
      callback(error, data[0]);
      rl.close();
      return;
    }
    if (data[0].name) {
      const desc = data[0].description;
      callback(error, desc);
      rl.close();
      return;
    }
  });
};

module.exports = { fetchBreedDescription };
