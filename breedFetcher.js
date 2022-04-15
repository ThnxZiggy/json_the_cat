const request = require('request');
const userInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function(error, response, body) {
  if (body) {
    body = JSON.parse(body);
    if (body[0] === undefined) {
      console.log("No cat exists"); // connects to site but no breed with the argument found
    } else {
      console.log(body[0].description); // connects to site and returns breed description based on argument
    }
  }

  if (error) {
    console.log('wrong url'); // changed URL and throws an error if URL doesn't work
  }

  
});
