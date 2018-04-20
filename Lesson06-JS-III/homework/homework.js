// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  let array = arr[0];
  return array;
}

function returnLast(arr) {
  // return the last item of the array
  let array = arr[arr.length -1];
  return array;
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if (arr.indexOf(item) > -1){
    return true;
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let results = 0;
  for (let i = 0; i < numbers.length; i++){
    results += numbers[i];
  }
  return results;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let total = 0;
  let average = 0;
  for(let i = 0; i < testScores.length; i++){
    total += testScores[i];
  }

  average = total / testScores.length;

  return average;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
let results = 0;

 for (let i = 0; i < numbers.length; i++) {
   if (results < numbers[i]){
     results = numbers[i];
   }
 }
 return results;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let results = 1;
  if (arguments.length === 0){
    return 0;
  }else if (arguments.length === 1){
      for (let i = 0; i < arguments.length; i++){
    results *= arguments[i];
  }
  return results;
  }else {
  for (let i = 0; i < arguments.length; i++){
    results *= arguments[i];
  }
  return results;
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
