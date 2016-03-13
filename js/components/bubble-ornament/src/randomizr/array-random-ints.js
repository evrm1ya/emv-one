

import {getRandomNonZeroInt} from './random-nonzero-int';

function getArrayOfSingularRandomInts(numOfInts, maxInt) {
  var arrayOfInts = [];
  var tryInt = (numOfInts, maxInt) => {
    if (numOfInts > 0) {
      let numToPush = getRandomNonZeroInt(maxInt);
      let arrayCheck = arrayOfInts.find((num) => {
        return num === numToPush;
      });
      if (arrayCheck === undefined) {
        arrayOfInts.push(numToPush);
        tryInt(numOfInts - 1, maxInt);
      }
      else {
        tryInt(numOfInts, maxInt);
      }
    }
  }
  tryInt(numOfInts, maxInt);
  return arrayOfInts;
}

export {getArrayOfSingularRandomInts};
