
import {createExtendedOptsArr} from './make-extended-list';
import {getOrderedDimensionList} from './get-ordered-dimensions';
import {randomizr} from '../randomizr/randomizr';

/**
 * prototype for BubbleArt
 */

/** @TODO create fcn to combine all lists and output one list of style objs **/

function generateStyles() {
  let minBubbleWidth = this._minBubbleWidth,
      totalBubbles = this._totalBubbles,
      containerWidth = this._containerWidth,
      colorOpts = this._colorOpts,
      opacOpts = this._opacOpts;

  let widthList = getOrderedDimensionList(minBubbleWidth, totalBubbles);
  let opacityList = createExtendedOptsArr(totalBubbles, opacOpts);
  let colorList = createExtendedOptsArr(totalBubbles, colorOpts);
  let topPositionList = randomizr.getRandomNonZeroIntList(totalBubbles, containerWidth);
  let leftPositionList = randomizr.getRandomNonZeroIntList(totalBubbles, containerWidth);

  return {
    minBubbleWidth,
    totalBubbles,
    containerWidth,
    colorOpts,
    opacOpts
  }
}

export {generateStyles};




