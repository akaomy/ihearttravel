#!/usr/bin/env node

const arg1 = (process.argv[0] || 'Node should go here');
const arg2 = (process.argv[1] || 'File should go here');
const arg3 = (process.argv[2] || process.env.USER || 'Argument should go here');


const myStr = 'Hello ' + arg3 + '. ' + 'The node is located in ' +
arg1 + '. ' + 'And the file that you\'re trying to execute is located in ' +
arg2 + '.';

/**
 * capitalizes each word in a passes string
 *
 * @param {String} str - given string
 * @return {String} - string with capitalizes first letters
 */
function capitalize(str) {
  return str.trim().toLowerCase().split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.dir(capitalize(myStr));
