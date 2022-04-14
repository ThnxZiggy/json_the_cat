const request = require('request');
let userInput = process.argv[2];
//const catBreed = (name) => {
request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function(error, response, body) {

  //console.log(typeof body)
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  let description = data[0].description;
  // console.log(description)


  //onsole.log(userInput)
  let breedName = data[0].name;
  if (userInput !== breedName) {
    console.error('ERROR', error);
  } else {
    return console.log(description);
  }

});

