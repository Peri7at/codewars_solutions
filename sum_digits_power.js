// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

/* The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
In effect: 89 = 8^1 + 9^2
The next number in having this property is 135.
See this property again: 135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.*/

function sumDigPow(a, b) {
  let eureka = [];
  for (let i=a; i<=b; i++) {
    let sum = 0
    for (let j=0; j<i.toString().length; j++) {
      sum += Math.pow(Number(i.toString().slice(j, j+1)), j+1)
      if (sum == i) eureka.push(i)
    }
  }
  return eureka;
}

const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    console.log(sumDigPow(a, b));
    process.exit();
  }
}