
import {expect} from 'chai';
import {BubbleArt} from '../src/bubble-constructor';

describe('BubbleArt constructor', () => {

  describe('flow of props', () => {
    let testBubble = new BubbleArt(20, 30, 300, ['#fff'], [0.25]);
    let result = testBubble.generateStyles();
    let expectedResult = {
      minBubbleWidth: 20,
      totalBubbles: 30,
      containerWidth: 300,
      colorOpts: ['#fff'],
      opacOpts: [0.25]
    }
    it('returns the correct value', () => {
      expect(result).to.eql(expectedResult);
    });
  });
});
