
import {expect} from 'chai';
import {createExtendedOptsArr} from '../src/style-generator/make-extended-list';
import {getOrderedDimensionList} from '../src/style-generator/get-ordered-dimensions';
import {BubbleArt} from '../src/bubble-constructor';

describe('style-generator test suite', () => {

  describe('createExtendedOptsArr', () => {
    let sampleOpacArr = [0.25, 0.50, 0.75];
    let extendedOpacArr = createExtendedOptsArr(6, sampleOpacArr);
    let expectedResult = [0.25, 0.50, 0.75, 0.25, 0.50, 0.75];
    it('outputs correct array', () => {
      expect(extendedOpacArr).to.eql(expectedResult);
    });
  });

  describe('createExtendedOptsArr - 2', () => {
    let sampleOpacArr = [0.2, 0.4, 0.6, 0.8];
    let extendedOpacArr = createExtendedOptsArr(6, sampleOpacArr);
    let expectedResult = [0.2, 0.4, 0.6, 0.8, 0.2, 0.4];
    it('outputs correct array', () => {
      expect(extendedOpacArr).to.eql(expectedResult);
    });
  });

  describe('one opacity', () => {
    let sampleOpacArr = [0.2];
    let extendedOpacArr = createExtendedOptsArr(4, sampleOpacArr);
    let expectedResult = [0.2, 0.2, 0.2, 0.2];
    it('outputs correct array', () => {
      expect(extendedOpacArr).to.eql(expectedResult);
    });
  });

  describe('getOrderedDimensionList', () => {
    let testDimensionList = getOrderedDimensionList(5, 5);
    let expectedResult = [5, 6, 7, 8, 9];
    it('returns correct array', () => {
      expect(testDimensionList).to.eql(expectedResult);
    });
  });

});
