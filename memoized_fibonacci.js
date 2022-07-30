/* For this particular Kata we want to implement the memoization solution. 
This will be cool because it will let us keep using the tree recursion algorithm 
while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure 
(most likely an associative array) where we will store the Fibonacci numbers as we 
calculate them. When a Fibonacci number is calculated, we first look it up in the cache, 
if it's not there, we calculate it and put it in the cache, otherwise we returned 
the cached number.*/

const memoize_fib = (number) => {
  let cache = {};

  function fib(number) {
    if (number in cache) return cache[number];
    if (number < 2) return number;
    return cache[number] = fib(number - 1) + fib(number - 2);
  }
  return fib(number);
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
    let input = parseInt(line);
    console.log(memoize_fib(input));
    process.exit();
  }
}