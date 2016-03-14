
/**
 * create a list of opacity objects
 *
 * numOfElements<number> => total elements needing styles
 * optsArr<array> => ordered opacity options
 * property<string> => style property
 */

function createExtendedOptsArr(numOfElements, optsArr, property) {
  let extendedList = [];
  let lastIndex = optsArr.length - 1;
  var optsCounter = 0;
  for (let i = 0; i < numOfElements; i++) {
    let styleObj = {};
    styleObj[property] = optsArr[optsCounter];
    extendedList.push(styleObj);
    (optsCounter === lastIndex) ? optsCounter = 0 : optsCounter += 1;
  }
  return extendedList;
}

export {createExtendedOptsArr};
