console.log(`------------------------ Number Greater Than 50-----------------------`);
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19]
const arrayGreaterNum = arrayNumbers.filter((currentValue)=>{
return currentValue >50;
})
console.log(arrayGreaterNum);
console.log(`--------------------------- Even Numbers -----------------------------`);
const arrayEvenNum = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
    })
    console.log(arrayEvenNum);
console.log(`---------------------------- Odd Numbers -----------------------------`);
const arrayOddNum = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==1;
    })
    console.log(arrayOddNum);
    console.log(`-------------------------- Numbers Multiple Of 5 -----------------------`);
    const arrayMultiply = arrayNumbers.filter((currentValue)=>{
        return currentValue%5==0;
        })
    console.log(arrayMultiply);
console.log(`------------------------ Numbers Between 20-50 -----------------------`);
const arrayNumBetween = arrayNumbers.filter((currentValue)=>{
    return currentValue>20 & currentValue<50;
    })
console.log(arrayNumBetween);
