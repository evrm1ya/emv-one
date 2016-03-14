
import {createExtendedOptsArr} from './make-extended-list';
import {getOrderedDimensionList} from './get-ordered-dimensions';
import {getPositionList} from './get-position-list';

/**
 * prototype for BubbleArt
 */

/** @TODO create fcn to combine all lists and output one list of style objs **/

/**
 * listArr: [widthList, topList, leftList, colorList, opacList]
 */

function combineLists(listArr) {
  let combinedList = [];
  let counter = listArr[0].length;
  function iterateAndPush(counter, innerIndexCounter) {
    if (counter > 0) {
      let styleObj = {};
      listArr.forEach((list) => { 
        Object.assign(styleObj, list[innerIndexCounter])
      });
      combinedList.push(styleObj);
      iterateAndPush(counter - 1, innerIndexCounter + 1);
    }
  }
  iterateAndPush(counter, 0);
  return combinedList;
}

function generateStyles() {
  let minBubbleWidth = this._minBubbleWidth,
      totalBubbles = this._totalBubbles,
      containerWidth = this._containerWidth,
      colorOpts = this._colorOpts,
      opacOpts = this._opacOpts;

  let dimensionList = getOrderedDimensionList(minBubbleWidth, totalBubbles);
  let opacityList = createExtendedOptsArr(totalBubbles, opacOpts, 'opacity');
  let colorList = createExtendedOptsArr(totalBubbles, colorOpts, 'backgroundColor');
  let topPositionList = getPositionList(totalBubbles, containerWidth, 'top');
  let leftPositionList = getPositionList(totalBubbles, containerWidth, 'left');

  return {
    minBubbleWidth,
    totalBubbles,
    containerWidth,
    colorOpts,
    opacOpts
  }
}

export {generateStyles, combineLists};




