
/**
 * creates an array of width and height objs in numerical order
 * from a starting value
 */

function getOrderedDimensionList(startVal, numOfBubbles) {
  let orderedDimensionList = [];
  function iterate(startVal, numOfBubbles) {
    if (numOfBubbles > 0) {
      orderedDimensionList.push({width: startVal, height: startVal});
      iterate(startVal + 1, numOfBubbles - 1);
    }
  }
  iterate(startVal, numOfBubbles);
  return orderedDimensionList;
}

export {getOrderedDimensionList};
