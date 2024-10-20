const fibs = require('./fibs.js')
const fibsRec = require('./fibsRec.js')
const mergeSort = require('./mergeSort.js')

console.log(fibs(8));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));

console.log('\nRecursive\n');

console.log(fibsRec(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));


console.log('\nMerge Sort\n');

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
console.log('Original: ', arr);
mergeSort(arr, 0, arr.length-1);
console.log('Sorted: ', arr);

const arr2 = [105, 79, 100, 110];
console.log('Original: ', arr2);
mergeSort(arr2, 0, arr2.length-1);
console.log('Sorted: ', arr2);

