
/**
 * param: numOfInts => length of resulting array
 * param: maxInt => random int value limiter
 * param: fn => fcn representing type of val to return (index/int)
 * ex.) getArrayOfSingularRandomInts(5, 5, getRandomNonZeroInt) => [2, 4, 1, 5, 3]
 */

function getArrayOfSingularRandomVals(numOfInts, maxInt, fn) {
  var arrayOfInts = [];
  var tryInt = (numOfInts, maxInt) => {
    if (numOfInts > 0) {
      let numToPush = fn(maxInt);
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

export {getArrayOfSingularRandomVals};
