
import {expect} from 'chai';
import {getArrayOfSingularRandomVals} from '../src/randomizr/array-random-vals';
import {getRandomNonZeroInt} from '../src/randomizr/random-nonzero-int';
import {getRandomIndex} from '../src/randomizr/random-index';
import {randomizr} from '../src/randomizr/randomizr';


function testRandomArr(arr) {
  let arrLength = arr.length;
  let check = true;
  for (let i = 0; i < arrLength; i++) {
    let val = arr[i];
    let resultingArr = arr.filter((num) => {
      return num === val;
    });
    (resultingArr.length === 1) ? check = true : check = false;
  }
  return check;
}

describe('randomizr test suite', () => {

  describe('getArrayOfSingularRandomVals : nonZeroInts', () => {
    let testArr = getArrayOfSingularRandomVals(5, 5, getRandomNonZeroInt);
    let result = testRandomArr(testArr);
    it('testRandomArr returns true', () => {
      expect(result).to.be.true;
    });
    it('pushes correct number of ints', () => {
      expect(testArr.length).to.equal(5);
    });
  });

  describe('getArrayOfRandomSingularVals : getRandomIndex', () => {
    let sampleArr = getArrayOfSingularRandomVals(10, 10, getRandomIndex);
    let result = testRandomArr(sampleArr);
    it('all indices are unique', () => {
      expect(result).to.be.true;
    });
    it('pushes correct number of indices', () => {
      expect(sampleArr.length).to.equal(10);
    });
  });

  describe('randomizr object', () => {
    it('contains correct keys', () => {
      let keys = [
        'getRandomNonZeroIntList',
        'getRandomIndexList'
      ];
      expect(randomizr).to.include.keys(keys);
    });
    
    describe('getRandomNonZeroIntList', () => {
      let sampleArr = randomizr.getRandomNonZeroIntList(5, 5);
      let result = testRandomArr(sampleArr);
      
      it('NonZeroInt related method returns all unique vals', () => {
        expect(result).to.be.true;
      });

      it('NonZeroInt related method pushes correct number of vals', () => {
        expect(sampleArr.length).to.equal(5);
      });
    });

    describe('getRandomIndexList', () => {
      let sampleArr = randomizr.getRandomIndexList(10, 10);
      let result = testRandomArr(sampleArr);
      let noTen = sampleArr.find(num => num === 10);
      let zero = sampleArr.find(num => num === 0);

      it('pushes all unique indices', () => {
        expect(result).to.be.true;
      });
      it('does not include maxInt as index', () => {
        expect(noTen).to.be.undefined;
      });
      it('includes 0', () => {
        expect(zero).to.equal(0);
      });
    });
  });
});

