// Import stylesheets
import './style.css';

/**
 * Returns an array filled with numbers between two points
 * ex. 2-9 -> [2,3,4,5,6,7,8,9]
 */
export function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

/**
 * Validator
 */
export function checkNumbersOrder(control) {

  // console.log(control);

  let test = control.split('-');
  console.log(test);

  let convertToArray = [];

  if (test.length > 1) {
    
    console.log(test[0].split(',').map(Number))

    console.log(
      range(4, 8)
    );

    // console.log(test);
  } else {
    convertToArray = control.split(/[-,*]+/).sort((a, b) => a - b);
  }

  // console.log(convertToArray);

}

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
checkNumbersOrder('1,2,3,4-8');