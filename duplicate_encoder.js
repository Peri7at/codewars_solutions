/* The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the original 
string. Ignore capitalization when determining if a character is a duplicate.*/

const duplicateEncode = (word) => 
  word.toLowerCase() // convert to lowercase to ignore capitalization
      .split('') // split into array of characters
      .map((el, i, arr) => arr.indexOf(el) == arr.lastIndexOf(el) ? '(' : ')') // map to '(', ')'
      .join(''); // join back into string

const readline = require('readline');

process.stdin.setEncoding('utf8');

let rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.once('line', (line) => {
  console.log(duplicateEncode(line));
  process.exit();
});

// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
//"(( @"     =>  "))((" 