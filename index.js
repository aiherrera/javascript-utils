// Import stylesheets
import './style.css';

/**
 * Returns an array filled with numbers between two points
 * ex. 2-9 -> [2,3,4,5,6,7,8,9]
 */
export function createRange(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

/**
 * Validator
 */
export function checkNumbersOrder(control) {

  // console.log(control);

  let test = control.split('-');
  console.log(test);

  let finalArray = [];

  if (test.length > 1) {
    for (const [index, val] of test.entries()) {
      // console.log(val);

      const convertToInt = val.split(',').map(Number);
      console.log(convertToInt);
      finalArray = [...finalArray, ...convertToInt];
      console.log(convertToInt.pop())
      finalArray = [...finalArray, ...createRange(convertToInt.pop(), test[index + 1])];
      finalArray = finalArray.sort((a, b) => a - b);

      console.log(finalArray);
      
    }
    // console.log(test[0].split(',').map(Number).pop())

    // console.log(
    //   range(4, 8)
    // );

    // console.log(test);
  } else {
    finalArray = control.split(/[-,*]+/).sort((a, b) => a - b);
  }

  // console.log(finalArray);

}

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
checkNumbersOrder('1,2,3');