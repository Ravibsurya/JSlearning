const arrayFruits =['Banana','Orange','Apple','Mango','Water Melon'];
console.log(arrayFruits);

let fruit1 = arrayFruits[0];
console.log(fruit1);

let  fruit2 = arrayFruits[arrayFruits.length-1];
console.log(fruit2);

arrayFruits.unshift('Papaya');
console.log(arrayFruits);

 let fruit4 = arrayFruits.splice(4,1)
 console.log(arrayFruits);

arrayFruits.push('pineapple')
console.log(arrayFruits);
 
 arrayFruits.splice(4,0,'Dragen Fruit');
console.log(arrayFruits);

 arrayFruits.splice(2,1,"kiwi");
 console.log(arrayFruits);

for (let index = 1; index < arrayFruits.length; index++) {
    if (index<=4) {
        const element = arrayFruits[index];
    
    console.log(element);
    }
}
// let fruit6 = arrayFruits[arrayFruits.length-3];
// console.log(`.${fruit6}`);

for (let index = arrayFruits.length-4; index < arrayFruits.length; index++) {
    if (index<=6) {
        const element = arrayFruits[index];
        console.log(element);
    }
}