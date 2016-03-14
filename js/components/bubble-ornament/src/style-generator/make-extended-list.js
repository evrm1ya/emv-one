
/**
 * create a sequential list of opacities based on the
 * desired number of bubbles to generate and list of opacity
 * options
 */

function createExtendedOptsArr(numOfElements, optsArr) {
  let extendedList = [];
  let lastIndex = optsArr.length - 1;
  var optsCounter = 0;
  for (let i = 0; i < numOfElements; i++) {
    extendedList.push(optsArr[optsCounter]);
    (optsCounter === lastIndex) ? optsCounter = 0 : optsCounter += 1;
  }
  return extendedList;
}

export {createExtendedOptsArr};
