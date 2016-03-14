
import {getArrayOfSingularRandomVals} from './array-random-vals';
import {getRandomIndex} from './random-index';
import {getRandomNonZeroInt} from './random-nonzero-int';

var randomizr = {
  getRandomNonZeroIntList(numOfInts, maxInt) {
    return getArrayOfSingularRandomVals(numOfInts, maxInt, getRandomNonZeroInt);
  },
  getRandomIndexList(numOfIndices, maxInt) {
    return getArrayOfSingularRandomVals(numOfIndices, maxInt, getRandomIndex);
  }
};

export {randomizr};
