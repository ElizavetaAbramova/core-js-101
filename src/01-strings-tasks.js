/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(value1, value2) {
  return `${value1}${value2}`;
}


/**
 * Returns the length of given string.
 */
function getStringLength(str) {
  return str.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 */
function getStringFromTemplate(firstName, lastName) {
  const fullName = `Hello, ${firstName} ${lastName}!`;
  return fullName;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(str) {
  const fullName = str.slice(7, str.length - 1);
  return fullName;
}


/**
 * Returns a first char of the given string.
 */
function getFirstChar(str) {
  return str[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 */
function removeLeadingAndTrailingWhitespaces(str) {
  return str.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 */
function repeatString(str, times) {
  return str.repeat(times);
}

/**
 * Remove the first occurrence of string inside another string
 */
function removeFirstOccurrences(str, word) {
  return str.replace(word, '');
}

/**
 * Remove the first and last angle brackets from tag string
 */
function unbracketTag(str) {
  return str.slice(1, str.length - 1);
}


/**
 * Converts all characters of the specified string into the upper case
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 */
function getRectangleString(width, height) {
  let result = '';
  const firstStr = `${'┌'}${'─'.repeat(width - 2)}${'┐'}${'\n'}`;
  let middleStr = `${'│'}${' '.repeat(width - 2)}${'│'}${'\n'}`;
  middleStr = middleStr.repeat(height - 2);
  const lastStr = `${'└'}${'─'.repeat(width - 2)}${'┘'}${'\n'}`;
  result = firstStr + middleStr + lastStr;

  return result;
}


/**
 * Encode specified string with ROT13 cipher
 */


function encodeToRot13(str) {
  let decodedWord = '';
  for (let i = 0; i < str.length; i += 1) {
    const code = str.charCodeAt(i);
    // decodedWord = `${decodedWord}${String.fromCharCode(str.charCodeAt(i) + 13)}`;
    if (code > ('A'.charCodeAt(0) + 'Z'.charCodeAt(0)) / 2 && code <= 'Z'.charCodeAt(0)) {
      decodedWord = `${decodedWord}${String.fromCharCode(code - 13)}`;
    } else if (code < ('A'.charCodeAt(0) + 'Z'.charCodeAt(0)) / 2 && code >= 'A'.charCodeAt(0)) {
      decodedWord = `${decodedWord}${String.fromCharCode(code + 13)}`;
    } else if (code > ('a'.charCodeAt(0) + 'z'.charCodeAt(0)) / 2 && code <= 'z'.charCodeAt(0)) {
      decodedWord = `${decodedWord}${String.fromCharCode(code - 13)}`;
    } else if (code < ('a'.charCodeAt(0) + 'z'.charCodeAt(0)) / 2 && code >= 'a'.charCodeAt(0)) {
      decodedWord = `${decodedWord}${String.fromCharCode(code + 13)}`;
    } else {
      decodedWord = `${decodedWord}${str[i]}`;
    }
  }
  return decodedWord;
}

/**
 * Returns true if the value is string; otherwise false.
 */
function isString(str) {
  let result;
  if (typeof str === 'string' || str instanceof String) {
    result = true;
  } else {
    result = false;
  }
  return result;
}


/**
 * Returns playid card id.
 */
function getCardId(card) {
  const desk = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return desk.indexOf(card);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
