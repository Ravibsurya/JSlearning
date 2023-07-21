console.log("************************************************* STARTED *********************************************************");
console.log("------------------------------------------------- Step 1 -----------------------------------------------------------");
function show(){
    console.log('My name is Ravindra');
    console.log('I love Js');
}
show();
console.log("------------------------------------------------- Step 2 -----------------------------------------------------------");
function personalDetails(firstName,lastName,collegeName){
    console.log('First Name:-',firstName,'Last Name:-',lastName,'College Name:-',collegeName);
}
var First= "Ravindra"
var Last= "Suryavanshi"
var College= "BVCOEk"
personalDetails(First,Last,College);
console.log("------------------------------------------------- Step 3 -----------------------------------------------------------");
function swapValues(n1, n2){
    console.log('Before Swap=> Value1:-', n1, " Value2:-",n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> Value1:-', n1, " Value2:-", n2 );
}
var nam1 = "Anushka";
var nam2 = "Virat";
swapValues(nam1, nam2);
var num1 = 1000;
var num2 = 2000;
swapValues(num1, num2);
console.log("------------------------------------------------- Step 4 -----------------------------------------------------------");
function addThreeValues(value1,value2,value3) {
    console.log("Values Are :",value1,value2,value3);
    var result=value1+value2+value3;
     return result;
}
var resultValue=addThreeValues(10.23,600,40);
console.log("Addition is :",resultValue);
var resultValue2=addThreeValues("Hello","Good","Morning");
console.log("Addition is :",resultValue2);
console.log("------------------------------------------------- Step 5 -----------------------------------------------------------");
function bankDetails(BankName,accountNum,location,pinCode) {
    console.log("BankName  :",BankName,"  ","Account Number :",accountNum,"  ","Location :",location,"  ","PinCode :",pinCode);
}
var BankN="CITY Bank";
var AccountN=3456782345;
var loc="Pune";
var PinC=431202;
bankDetails(BankN,AccountN,loc,PinC);
bankDetails("Axis Bank",7856782345,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202,"open");
console.log("************************************************* COMPLETED *********************************************************");