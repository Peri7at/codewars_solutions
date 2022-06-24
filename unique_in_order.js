// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

// Solution 1

let uniqueInOrder1=function(iterable){
  let originalArray = iterable
  let uniqueIterable = []
  if (typeof iterable == "string") {
    originalArray = iterable.split('')
  }
  
  for (let i=0; i<originalArray.length; i++){
      if (originalArray[i] !== originalArray[i+1]) {
        uniqueIterable.push(originalArray[i])
      }
  }
  
  return uniqueIterable
}

// Solution 2

let uniqueInOrder2=function(iterable){
  return [...iterable].filter((el, i, arr) => el !== arr[i+1])
}

console.log(uniqueInOrder1('AAAABBBCCDAABBB'));
// The function above should output ['A', 'B', 'C', 'D', 'A', 'B']

console.log(uniqueInOrder2('AAAABBBCCDAABBB'));
// The function above should output ['A', 'B', 'C', 'D', 'A', 'B']

console.log(uniqueInOrder1('ABBCcAD'));
// The function above should output ['A', 'B', 'C', 'c', 'A', 'D']

console.log(uniqueInOrder2([1,2,2,3,3]));
// The function above should output [1,2,3]
