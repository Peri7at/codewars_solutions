// Capitalize each word

String.prototype.toJadenCase = function () {
  return this.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};

const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    console.log(line.toJadenCase());
    process.exit();
  }
}