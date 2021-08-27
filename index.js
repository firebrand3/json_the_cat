const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
//callback function used in breedFetcher;
const callback = (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  }
  
  if (typeof desc === "undefined") {
    console.log(`${breedName} is not a cat breed`);
  } else {
    console.log(desc);
  }
};

  
fetchBreedDescription(breedName, callback);/*error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }*/
// });