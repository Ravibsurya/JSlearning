const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumber);
console.log("-------------------------------");
//total no of element
let arrayLength = arrayNumber.length;
console.log(arrayLength);
console.log("-------------------------------");
//1st element and last element
console.log(`1st element is ${arrayNumber[0]} and last elelment is ${arrayNumber[arrayNumber.length-1]}`);

console.log("----------------------------------");
// third last element
console.log(`Third last elelment is ${arrayNumber[arrayNumber.length-3]}`);
console.log("----------------------------------");
//all even numbers 
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 === 0) {
    const element = arrayNumber[index];
    console.log(element);
  }
}
console.log("----------------------------------");
// all odd numbers
for (let index = 1; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 == 1) {
    console.log(arrayNumber[index]);
  }
}
console.log("----------------------------------");
//even number position elements and its sum
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index]% 2 == 0) {
    sum = sum + arrayNumber[index];
  }
}
console.log(sum);
console.log("-------------------------------");
//odd number position elements and its sum
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index] % 2 == 1) {
    sum = sum + arrayNumber[index];
  }
}
console.log(sum);
console.log("-------------------------------");
//sum of all elements
var sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
   sum = sum + arrayNumber[index];
    
}
console.log(sum);
console.log("-------------------------------");

//find no which are divided by 5
for (let index = 0; index < arrayNumber.length; index++) {
  if (arrayNumber[index]% 5 == 0) {
    const element = arrayNumber[index];
    console.log(element);
  }
}
console.log("-------------------------------");
//find 115 is available
let includesOneHundredFifteen = arrayNumber.includes(115);
console.log(includesOneHundredFifteen);
console.log("-------------------------------");
//find 23 is available
let includesTwentyThree = arrayNumber.includes(23);
console.log(includesTwentyThree);
console.log("-------------------------------");
//insert numbers 55 and 66
arrayNumber.splice(3, 0, 55, 66);
console.log(arrayNumber);
//delete 3 element starting from index 4 
arrayNumber.splice(4,3);
console.log(arrayNumber);