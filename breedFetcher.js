const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (body) {
      body = JSON.parse(body);
      if (body[0] === undefined) {
        errorMsg = "No cat exists";
        return errorMsg; // connects to site but no breed with the argument found
      } else {
        return  callback(null, body[0].description); // connects to site and returns breed description based on argument
      }
    }

    if (error) {
      return callback(error, null); // changed URL and throws an error if URL doesn't work
    }
  });
};

module.exports = { fetchBreedDescription };