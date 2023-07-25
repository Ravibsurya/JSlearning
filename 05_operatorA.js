console.log(`-------------------------------STEP 1---------------------------------`);
var squareOfWordLength=function(str){
    var result=str.length;
    var resultsecond =result*result;
    console.log(`Square of the string ${str} is ${resultsecond}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`-------------------------------STEP 2---------------------------------`);
var display=function(a){
   var res=a.length;
   var ressecond=a.split(" ");
   var resthird =ressecond.length;
   var divide=res/resthird;
   var Multiplication=res*resthird;
   console.log(`Total words Division is  ${divide}`);
   console.log(`Total words Multiplication is ${Multiplication}`);
}
display("I am Angular Developer");