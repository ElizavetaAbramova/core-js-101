/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns an area of a rectangle given by width and height.
 */
function getRectangleArea(width, height) {
  return width * height;
}


/**
 * Returns a circumference of circle given by radius.
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI
  * radius;
}

/**
 * Returns an average of two given numbers.
 */
function getAverage(value1, value2) {
  return Math.round((value1 / 2 + value2 / 2));
}

/**
 * Returns a distance between two points by cartesian coordinates.
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 */
function getLinearEquationRoot(a, b) {
  const x = -b / a;
  return x;
}


/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const fistHalf = (x1 * x2 + y1 * y2);
  const secondHalf = Math.abs(Math.sqrt(x1 ** 2 + y1 ** 2))
                      * Math.abs(Math.sqrt(x2 ** 2 + y2 ** 2));
  return Math.acos(fistHalf / secondHalf);
}

/**
 * Returns a last digit of a integer number.
 */
function getLastDigit(num) {
  return num % 10;
}


/**
 * Returns a number by given string representation.
 */
function parseNumberFromString(num) {
  return num.toString();
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}


/**
 * Returns the number rounded to specified power of 10.
 */
function roundToPowerOfTen(num, pow) {
  return Math.round(num / (10 ** pow)) * (10 ** pow);
}

/**
 * Returns true is the number is prime; otherwise false.
 */
function isPrime(num) {
  let result = true;
  if (num === 2) {
    result = true;
  } else {
    for (let i = Math.round(num / 2); i >= 2; i -= 1) {
      if (num % i === 0) {
        result = false;
      }
    }
  }
  return result;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  return Number(value) || def;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
