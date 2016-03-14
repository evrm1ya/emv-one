
import {createExtendedOptsArr} from './make-extended-list';
import {getOrderedDimensionList} from './get-ordered-dimensions';
import {getPositionList} from './get-position-list';
import {randomizr} from '../randomizr/randomizr';

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

function randomizeCombinedList(combinedList) {
  var randomizedList = [];
  let listLength = combinedList.length;
  let indexList = randomizr.getRandomIndexList(listLength, listLength);
  for (let i = 0; i < listLength; i++) {
    randomizedList.push(combinedList[indexList[i]]);
  }
  return randomizedList;
}

/**
 * prototype for BubbleArt
 */

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
  
  let combinedListParams = [dimensionList, opacityList, colorList, topPositionList, leftPositionList];
  let combinedList = combineLists(combinedListParams);
  let randomizedStyleList = randomizeCombinedList(combinedList);

  return randomizedStyleList;
}

export {generateStyles, combineLists, randomizeCombinedList};




