

function getOrderedDimensionList(startVal, numOfBubbles) {
  let orderedDimensionList = [];
  function iterate(startVal, numOfBubbles) {
    if (numOfBubbles > 0) {
      orderedDimensionList.push(startVal);
      iterate(startVal + 1, numOfBubbles - 1);
    }
  }
  iterate(startVal, numOfBubbles);
  return orderedDimensionList;
}

export {getOrderedDimensionList};
