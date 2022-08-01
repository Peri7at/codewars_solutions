/*Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying F(n) * F(n+1) = prod.
Your function productFib takes an integer (prod) and returns an array:
[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.
If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False) F(n) being the smallest one such as F(n) * F(n+1) > prod.*/

const productFib = (prod) => {
  let [n, nPlus] = [0, 1];
  while (n * nPlus < prod) [n, nPlus] = [nPlus, n + nPlus];
  return [n, nPlus, n * nPlus === prod];
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
    console.log(productFib(parseInt(line)));
    process.exit();
  }
}

// The function above should output [55, 89, true] for input 4895
// The function above should output [89, 144, false] for input 5895
// The function above should output [6765, 10946, true] for input 74049690

// Alternate solution:

function productFibAlt(prod) {
  let fibList = [0, 1];
  for (let i = 1; fibList[i-1] * fibList[i] <= prod; i++) {
    fibList.push(fibList[i-1] + fibList[i]);
    if (fibList[i-1] * fibList[i] === prod) return [fibList[i-1], fibList[i], true]
  }
  return [fibList[fibList.length-2], fibList[fibList.length-1], false]
}

