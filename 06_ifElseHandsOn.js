console.log("-------------------- Step 1 ---------------------------------------------------------------------------");
function check (value){
if (value%2==0) {
    console.log(`${value} is even number`);
    
} else {
    console.log(`${value} is odd number`);
}
return value;
}
check (45);
check (70);
check (67);
check (98);
console.log("-------------------- Step2 ---------------------------------------------------------------------------");
function checkStringLenght(string){
    var java = string.length;
    if (java>=10) {
        console.log(`${string} contains more than 10 characters`);
    } else {
        console.log(`${string} not contains more than 10 characters`);
    }
}
checkStringLenght("javaScript - ES6");
console.log("-------------------- Step3 ---------------------------------------------------------------------------");
function checkStringStart(value1){
var word = value1.startsWith("Java");
if (word) {
    console.log(`${value1} string start with "Java"`);
} else {
    console.log(`${value1} string not start with "Java"`);
}
}
checkStringStart("JavaScript Language");
console.log("--------------------------------------------------------------------------------------------------------");