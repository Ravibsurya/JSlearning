const arrayNums = [20,3,4,56,90,400,49]
console.log(arrayNums);
const constCloneArray = arrayNums;
constCloneArray.push(55,66)
console.log(constCloneArray);

console.log(`---------------------------------------------`);

const deepCloneArray = [...arrayNums]
deepCloneArray.push(10,25);
console.log(deepCloneArray);

console.log(`---------------------------------------------`);

const arrayEven = [2,30,14,8]
const mergArray = [...arrayNums,...arrayEven];
console.log(mergArray);

console.log(`---------------------------------------------`);

const employeeInfo = {
    emp_id : 27,
    emp_name : "Jone Doe",
    salary : {
        july_month : "40,000)INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR",
    },
    address : {
        locality : {
            colony : "Om Vrindavan Society",
            street : "Kanch Pokli , 431202",

        },
        city : 'mumbai',
        state : "Maharastra",
        country : "India",      
    },
    mobiles : ["+91 8600 3456 88 , 1800- 4567 32 , +91-9096 5678 77"],

}

let personlInfo = JSON.parse(JSON.stringify(employeeInfo));
personlInfo.salary.july_month="80k";
console.log(` The Person Salary Is ${personlInfo.salary.july_month}`);
personlInfo.country= "United Kingdom";
console.log(`The Person Country Is ${personlInfo.country}`);
console.table(personlInfo);

console.log(`---------------------------------------------`);

console.table(employeeInfo);

console.log(`---------------------------------------------`);
