const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-----------------------------Step 1----------------------------------------`);

arrayNumber.forEach((currentValue,index) =>{
    console.log(`Value :- ${currentValue}  Index : ${index}`);
})


console.log(`-----------------------------Step 2----------------------------------------`);
console.log(`Positive Numbers Are :- `);
var array = []
arrayNumber.forEach((currentValue) =>{
    if (currentValue>0) {
   array.push(currentValue)
   console.log(`${currentValue}`);
    }
})
console.log(`-----------------------------Step 3----------------------------------------`);
console.log(`Negative Numbers are :-`);
var array = []
arrayNumber.forEach((currentValue)=>{
    
    if (currentValue<0) {
    array.push(currentValue);
    }
})
console.log(array);

console.log(`-----------------------------Step 4----------------------------------------`);
console.log(`Even Numbers are :-`);
var array = []
arrayNumber.forEach((currentValue)=>{
    if (currentValue%2==0) {
        array.push(currentValue);
        console.log(currentValue);
    }
})
;

console.log(`-----------------------------Step 5----------------------------------------`);
let sum = 0
arrayNumber.forEach(function(currentValue){
 sum = sum + currentValue;
} 
); console.log( `Sum of all elements is : ${sum}`);

console.log(`-----------------------------Step 6----------------------------------------`);
console.log(`Even indexed array values are :-`);
    var array = []
    arrayNumber.forEach((currentValue ,index)=>{
        if (currentValue && index%2==0) {
           array.push(currentValue) 
           console.log(currentValue);
        }
    })
      console.log('---------------------------------------------------------------------');