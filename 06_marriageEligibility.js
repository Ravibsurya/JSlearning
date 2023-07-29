console.log("------------------------ Assignment 2 ---------------------------------------------------------");
var marriageEligiblity = function (gender,age){
    if (age>=21 && (gender == 'male')) {
        console.log(`Gender is ${gender}, Age is ${age} ,You are eligible for marriage`);
        
    } else if (age>=18 && (gender == 'female')) {
        console.log(`Gender is ${gender}, Age is ${age} ,You are eligible for marriage`);
        
    } else if (gender == 'other') {
        console.log(`Gender is ${gender}, Age is ${age} ,You are not eligible for marriage`);
        
    } else {
        console.log(`Gender is ${gender}, Age is ${age} ,You are not eligible for marriage`);
    } 
}
marriageEligiblity ("male",17);
marriageEligiblity ("male",25);
marriageEligiblity ("female",28);
marriageEligiblity ("female",16);
marriageEligiblity ("other",35);
marriageEligiblity ("other",41);
console.log("----------------------------------------------------------------------------------------------");