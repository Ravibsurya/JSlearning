console.log(`----------------------- Add 10 Into Each Element ---------------------------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const arrayGreaterNum = arrayNumbers.map( (currentValue) => {
return currentValue + 10; 
});
console.log(arrayGreaterNum);
console.log(`------------------------ Cube Of Each Element -------------------------------`);
const arrayCube = arrayNumbers.map( (currentValue) => {
    return currentValue*currentValue*currentValue;
    });
    console.log(arrayCube);
    console.log(`--------------Add Index Value Into Each Element----------------------`)
    const arrayAddIndex = arrayNumbers.map( (currentValue,index) => {
        return currentValue+index;
        });
        console.log(arrayAddIndex);