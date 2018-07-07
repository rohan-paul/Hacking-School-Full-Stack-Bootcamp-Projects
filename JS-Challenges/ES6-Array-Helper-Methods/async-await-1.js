require('es6-promise').polyfill();
require('isomorphic-fetch');

/* I had to use the above packages as withiout it the simple fetch.('url') wont work
https://stackoverflow.com/questions/36484156/es6-fetch-is-undefined
https://www.npmjs.com/package/isomorphic-fetch   */

// APPROACH-1 PROMISE WAY >> First deal with an network request with Promise approach

getJSON = () => {

  return new Promise((resolve) => {
    fetch('https://tutorialzine.com/misc/files/example.json')

    // The data from the request is available in a .then block
    // We return the result using resolve.
      .then(json => {
        resolve(json);
        console.log('Successively fetched');
      })
  })
}

getJSON()  // Will fetch and then print "Successively fetched"

/* REMEMBER THE FETCH SYNTAX

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});

*/


// APPROACH-2 With async-await

// The async keyword will automatically create a new Promise and return it.

const getJSONAsync = async () => {

  // The await keyword saves us from having to write a .then() block.
  let json = await fetch('https://tutorialzine.com/misc/files/example.json')

  return json && console.log('Fetched with async');

}

getJSONAsync()  // Will fetch and then print "Fetched with async"

/* REMEMBER THE async-await syntax works like this -

Async arrow functions look like this:

const foo = async () => {
  // do something
} */