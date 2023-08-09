//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7

var FactorialFunction =function(num) {
    let number = 1;
    for (let index = 1; index <= num; index++) {
       number = number * index; 
        
    }
    console.log(`The Factorial of ${num} is ${number}`);
}
FactorialFunction(5);
FactorialFunction(9);
FactorialFunction(11);
FactorialFunction(7);