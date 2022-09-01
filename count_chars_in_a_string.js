// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count_chars(string) {
  let result = {};
  for (const char of string) {
    result[char] = result[char] + 1 || 1;
  }
  return result;
}

const readline = require("readline");

process.stdin.setEncoding("utf8");
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    console.log(count_chars(line));
    process.exit();
  }
}
