let array = [4,5,4,5,8,5,7,8,9,7,8];
let array2 = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!array2.includes(element)) 
    {
        array2.push(element)
    }
    
}
console.log(`The removed dublicate elements are :- ${array2}`);