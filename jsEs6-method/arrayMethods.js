// forEach, Map, Find, Filter, // Reduce

// const arr = [1,2,3];

// for(let item of arr){
//     console.log("prothom loop ",item)
// }
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

//foreach
// const arr = [1,2,3];

// const a = x => console.log(x)

// arr.forEach(a)

// arr.forEach((x) => console.log(x))

// const fruits = ["mango","bango","chingo"];

// fruits.forEach( item => {
//     console.log(item)
// })

// foreach dia joggfol
// const arr = [1,2,3];
// let sum = 0;
// arr.forEach(item => sum += item)// sum = sum + item
// console.log(sum)

// map
// const arr = [1,2,3];
// arr.map((item) => console.log(item))

// forEach function does not return anything
// map function returns an array

// const result = arr.forEach((item) => console.log(item))
// console.log(result)
// const result1 = arr.map((item) => {
//     return item*2
// })
// console.log(result1)
// console.log("main",arr)

const fruits1 = ["Mango", "chingo", "bango", "Tango"];

// array.forEach((element,index,mainArray) => {})
fruits1.map((item, index, arr) => console.log(item, index, arr));

// find method normal function
const fruits = ["Mango", "chingo", "bango", "Tango", "bango"];

const find = (fruits) => {
  for (let item of fruits) {
    if (item === "bango") {
      return item;
    }
  }
};

const x = find(fruits);
console.log(x);

// find method es6  arrow function
const y = fruits.find((item) => item === "bango");
console.log(y);

//......// filter method normal function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filter = (numbers) => {
  const result = [];
  for (let item of numbers) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }
  return result;
};
const m = filter(numbers);
console.log(m);

//......// filter method es6 function
const n = numbers.filter((item) => item % 2 === 0);
console.log(n);

// reduce

// const arr = [1,2,3,4,5];
// previous + current = result
/*
*   0    +    1     = 1
    1    +    2     = 3 
    3    +    3     = 6
    6    +    4     = 10
    10   +    5     = 15

*/

// const sum = arr.reduce((previous, current) => previous + current)

// console.log(sum)

// const arr = [1,2,3,4,5];

/*
previous * current = result
    1    *    2     = 2
    2    *    3     = 6
    6    *    4     = 24
    24   *    5     = 120

*/
// const multi = arr.reduce((previous, current) => previous * current)
// console.log(multi)

// const arr = [1,2,3,4,5];
// const initial = 50;

// const sum = arr.reduce((previous, current) => {
//     console.log("prev: ",previous)
//     return previous + current;
// })
// console.log(sum)
