/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */


/**
 * Returns an index of the specified element in array or -1 if element is not found
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Generates an array of odd numbers of the specified length
 */
function generateOdds(len) {
  const filled = Array.from({ length: len }, (item, index) => index * 2 + 1);
  return filled;
}


/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order
 */
function doubleArray(arr) {
  const result = arr.concat(arr);
  return result;
}


/**
 * Returns an array of positive numbers from the specified array in original order
 */
function getArrayOfPositives(arr) {
  const result = arr.filter((num) => num > 0);
  return result;
}

/**
 * Returns the array with strings only in the specified array (in original order)
 */
function getArrayOfStrings(arr) {
  const result = arr.filter((elem) => typeof elem === 'string');
  return result;
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 */
function removeFalsyValues(arr) {
  const result = arr.filter((elem) => Boolean(elem));
  return result;
}

/**
 * Returns the array of uppercase strings from the specified array
 */
function getUpperCaseStrings(arr) {
  const upperArray = arr.map((char) => char.toUpperCase());
  return upperArray;
}


/**
 * Returns the array of string lengths from the specified string array.
 */
function getStringsLength(arr) {
  const arrLength = arr.map((elem) => elem.length);
  return arrLength;
}

/**
 * Inserts the item into specified array at specified index
 */
function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

/**
 * Returns the n first items of the specified array
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}


/**
 * Returns the n last items of the specified array
 */
function getTail(arr, n) {
  return arr.slice(arr.length - n);
}


/**
 * Returns CSV representation of two-dimensional numeric array.
 */
function toCsvText(arr) {
  const newArray = arr.map((elem) => {
    if (arr.indexOf(elem) === arr.length - 1) {
      return `${elem.join()}`;
    }
    return `${elem.join()}\n`;
  });
  const newArray2 = newArray.join('');
  return newArray2;
}

/**
 * Transforms the numeric array into the according array of squares:
 */
function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}


/**
 * Transforms the numeric array to the according moving sum array:
 */
function getMovingSum(arr) {
  let prevNumber = 0;
  const newArr = arr.map((num) => {
    prevNumber = num + prevNumber;
    return prevNumber;
  });
  return newArr;
}

/**
 * Returns every second item from the specified array:
 */
function getSecondItems(arr) {
  return arr.filter((num) => arr.indexOf(num) % 2 !== 0);
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 */
function propagateItemsByPositionIndex(arr) {
  const newArr = arr.flatMap((item, index) => Array(index + 1).fill(item));
  return newArr;
}


/**
 * Returns the 3 largest numbers from the specified array
 */
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}


/**
 * Returns the number of positive numbers from specified array
 */
function getPositivesCount(arr) {
  let count = 0;
  arr.map((item) => {
    if (item > 0 && typeof item === 'number') {
      count += 1;
    } return count;
  });
  return count;
}

/**
 * Sorts digit names
 */
function sortDigitNamesByNumericOrder(arr) {
  const arrDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => {
    const low = arrDigits.indexOf(a);
    const high = arrDigits.indexOf(b);
    return low - high;
  });
}

/**
 * Returns the sum of all items in the specified array of numbers
 */
function getItemsSum(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}

/**
 * Returns the number of all falsy value in the specified array
 */
function getFalsyValuesCount(arr) {
  let count = 0;
  arr.map((item) => {
    if (Boolean(item) === false) {
      count += 1;
    }
    return count;
  });
  return count;
}

/**
 * Returns a number of all occurrences of the specified item in an array
 */
function findAllOccurrences(arr, item) {
  let count = 0;
  arr.map((compare) => {
    if (compare === item) {
      count += 1;
    } return count;
  });
  return count;
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
  return arr.join(',');
}


/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  const nullArr = Array(n).fill(Array(n).fill(0));
  return nullArr.map((item, rowIdx) => item.map((num, colIndex) => (rowIdx === colIndex ? 1 : 0)));
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
  return Array(end - start + 1).fill(0).map((item, rowIndex) => rowIndex + start);
}

/**
 * Returns array containing only unique values from the specified array.
 */
function distinct(arr) {
  return Array.from(new Set(arr));
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error('Not implemented');
}


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}


/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(/* arr, indexes */) {
  throw new Error('Not implemented');
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  const head = arr.slice(0, Math.floor(arr.length / 2));
  const tail = arr.slice(Math.round(arr.length / 2), arr.length);
  let middle = [];
  if (arr.length % 2 !== 0) {
    middle = arr[Math.floor(arr.length / 2)];
  }
  const reversedArr = tail.concat(middle, head);
  return reversedArr;
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
