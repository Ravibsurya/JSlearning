console.log("-------------------------------------------------------------------------------------------");
function add (num1 ,num2 ,...num){
    let sum=num1+num2;
    for (let index = 0; index < num.length; index++) {
        sum = sum+num[index];
        
    }
    //console.log(sum);
 console.log(`num1 is ${num1} , num2 is ${num2} & array of rest parametre num is ${num} & total sum in ${sum}`);
 
}
add(5,6);
add(9,5,6);
add(78,90,51,68);
add(89,90,45,90,51,68);