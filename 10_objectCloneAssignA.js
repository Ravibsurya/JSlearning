

let personalDetails =
 {
Name : "Ravindra",
Age : 28,
Qualification : "BE Mechanical",
City : "Sangli",

}

let collegeDetails = 
{
CollegeName : "BVCOEK",
University : "Shivaji",
Location : "Kolhapur",
PinCode : 416405,
}

let mergedObject = Object.assign({} ,  personalDetails, collegeDetails);

console.table(mergedObject);

console.log("---------------------------------------------------------------");

console.log("* My friends * ");

let array = ["Omkar","Nikhil","Kumar", "Niketan","Vishwa","Satish"]

Object.freeze(array);

for (const element of array) {
    console.log(`${element}`);
}

console.log("---------------------------------------------------------------");

function reverseString(strings) {
    const array = strings.split(" ");
    var string = array[1];
    var reverse = "";
    for (let index = string.length-1; index >=0; index--) {
        var char = string.charAt(index);
        reverse = reverse+char;
    }
    console.log(`${reverse}`);
}
reverseString("codemind Technology");