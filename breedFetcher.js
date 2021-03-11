const request = require('request');
const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (err, response, body) => {
  // console.log(body);
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log('Failed');
  }
});


// const net = require('net');
// // const got = require('got');
// const fetch = require('node-fetch');
// const fsPromises = require('fs').promises;
// const fs = require("fs");
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const body = {
//   a: 11
// };
// console.log(typeof body);
// console.log(body);
// const data = JSON.parse(description);
// const description = data.description;

// function retrieveAuthToken() {
//   let deferred = q.defer();
//   let bodyDataString = querystring.stringify({
//     data: JSON.parse(body)
//   });
// }




// const url = 'https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}';
// const options = {
//   method: 'GET',
//   url: 'https://api.thecatapi.com/v1/breeds/search',
//   qs: {
//     q: 'sib'
//   },
//   headers: {
//     'x-api-key': '1ef4831f-5228-41f8-9904-959bc522c7ca'
//   }
// };
// // console.log(data);
// // console.log(typeof data);
// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));



// SELECT JSON_QUERY(@data, '$.description') AS 'Result';


// got(options, function(error, response, body) {
//   if (error) throw new Error(error);
//   console.log(body);
// });