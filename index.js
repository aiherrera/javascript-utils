// Import stylesheets
import './style.css';

/**
 * Returns an array filled with numbers between two points
 * ex. 2-9 => [2,3,4,5,6,7,8,9]
 */
const createRange = (start, end) => Array(end - start).fill().map((_, idx) => start + idx + 1);

/**
 * Function for concat subarrays into a single one
 * ex. [[2,3],[4,7,8,9],[1],[22,33]] => [2,3,4,7,8,9,1,22,33]
 */
const joinArrayOfArrays = (arrays = []) => [].concat(...arrays);

/**
 * Validator
 */
export function checkNumbersOrder(control) {

  let controlArray = control.split('-').map((value, index) => value.split(',').map(Number));

  let finalArray = [];

  if (controlArray.length > 1) {
    for (const [index, val] of Object.entries(controlArray)) {
      finalArray = [...finalArray, ...val];
      if (parseInt(index)+1 < controlArray.length) {
        finalArray = [...finalArray, ...createRange(val.pop(), controlArray[parseInt(index)+1].shift())];
      }
    }
  } else {
    finalArray = control.split(/[-,*]+/);
  }

  console.log(finalArray.sort((a, b) => a - b));
  // console.log([...new Set(finalArray)]);
  // return [...new Set(finalArray.sort((a, b) => a - b))];

}
checkNumbersOrder('1,4,2,6-8,4,9,10-15,19-23');