console.log(`-------------------------------------------------------------------------------------------`);

let employeeInfo = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}`;
let employee = JSON.parse(employeeInfo);
console.log(employee);

console.log(`-------------------------------------------------------------------------------------------`);

const arrays = employee.role;
for (const role of arrays) {
    if (role=="Dev") {
        console.log(`Role is ${role}`);
    }
}

console.log(`-------------------------------------------------------------------------------------------`);

var string = employee.name;
var array = string.split(" ");
console.log(`The Last Name Of Employee is ${array[1]}`);

console.log(`-------------------------------------------------------------------------------------------`);

let date = employee.doj;
let dateJ = date.substring(6,10);
console.log(`Joining Year Of Employee Is ${dateJ} `);

console.log(`-------------------------------------------------------------------------------------------`);
