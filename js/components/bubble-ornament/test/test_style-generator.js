
import {expect} from 'chai';
import {createExtendedOptsArr} from '../src/style-generator/make-extended-list';
import {getOrderedDimensionList} from '../src/style-generator/get-ordered-dimensions';
import {BubbleArt} from '../src/bubble-constructor';
import {combineLists} from '../src/style-generator/style-generator';
import {getPositionList} from '../src/style-generator/get-position-list';

describe('style-generator test suite', () => {

  describe('createExtendedOptsArr', () => {
    let sampleOpacArr = [0.25, 0.50, 0.75];
    let extendedOpacArr = createExtendedOptsArr(6, sampleOpacArr, 'opacity');
    let expectedResult = [
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75}
    ];
    it('outputs correct array', () => {
      expect(extendedOpacArr).to.eql(expectedResult);
    });
  });

  describe('createExtendedOptsArr - 2', () => {
    let sampleOpacArr = [0.2, 0.4, 0.6, 0.8];
    let extendedOpacArr = createExtendedOptsArr(6, sampleOpacArr, 'opacity');
    let expectedResult = [
      {opacity: 0.2},
      {opacity: 0.4},
      {opacity: 0.6},
      {opacity: 0.8},
      {opacity: 0.2},
      {opacity: 0.4}
    ];
    it('outputs correct array', () => {
      expect(extendedOpacArr).to.eql(expectedResult);
    });
  });

  describe('one opacity', () => {
    let sampleOpacArr = [0.2];
    let extendedOpacArr = createExtendedOptsArr(4, sampleOpacArr, 'opacity');
    let expectedResult = [
      {opacity: 0.2},
      {opacity: 0.2},
      {opacity: 0.2},
      {opacity: 0.2}
    ];
    it('outputs correct array', () => {
      expect(extendedOpacArr).to.eql(expectedResult);
    });
  });

  describe('getOrderedDimensionList', () => {
    let testDimensionList = getOrderedDimensionList(5, 5);
    let expectedResult = [
      {width: 5, height: 5},
      {width: 6, height: 6},
      {width: 7, height: 7},
      {width: 8, height: 8},
      {width: 9, height: 9}
    ];
    it('returns correct array', () => {
      expect(testDimensionList).to.eql(expectedResult);
    });
  });

  describe('getPositionList', () => {
    let testList = getPositionList(3, 3, 'top');
    let testIndex = testList[1];
    it('returns an object with correct key', () => {
      expect(testIndex).to.include.keys('top');
    });
    it('has a correct key value pair', () => {
      expect(testList).to.include({top: 2});
    });
  });
  describe('combineLists', () => {
    let testArrOfArrs = [
      [
        {width: 2, height: 2},
        {width: 3, height: 3}
      ],
      [
        {opacity: 0.2},
        {opacity: 0.4}
      ],
      [
        {backgroundColor: '#fff'},
        {backgroundColor: '#000'}
      ],
      [
        {top: 5},
        {top: 6}
      ],
      [
        {left: 3},
        {left: 4}
      ]
    ];
    let expectedResult = [
      {width: 2, height: 2, opacity: 0.2, backgroundColor: '#fff', top: 5, left: 3},
      {width: 3, height: 3, opacity: 0.4, backgroundColor: '#000', top: 6, left: 4}
    ];
    let testRun = combineLists(testArrOfArrs);
    it('outputs array of correct style objs', () => {
      expect(testRun).to.eql(expectedResult);
    });
  });
});
