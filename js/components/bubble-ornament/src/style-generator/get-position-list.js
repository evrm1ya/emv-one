
import {randomizr} from '../randomizr/randomizr';

function getPositionList(total, containerWidth, positionProp) {
  let randomList = randomizr.getRandomNonZeroIntList(total, containerWidth);
  let positionList = [];
  for (let i = 0; i < total; i++) {
    let positionObj = {};
    positionObj[positionProp] = randomList[i];
    positionList.push(positionObj);
  }
  return positionList;
}

export {getPositionList};
