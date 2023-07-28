console.log("-----------------------------------------------------------");
var voteEligiblity = function (age){
if (age<=0 || age>130 || isNaN(age)) {
    console.log(`invalid data:${age}`);
} else if (age<18) {
    console.log(`You are not eligible for vote :${age}`);
} else if (age>=18) {
    console.log(`You are age eligible for vote :${age}` );
} 
}
voteEligiblity (45);
voteEligiblity (17);
voteEligiblity (8);
voteEligiblity (20);
voteEligiblity (-10);
voteEligiblity (200);
voteEligiblity (0);
voteEligiblity (undefined);
voteEligiblity (null);
console.log("-----------------------------------------------------------");