console.log("--------------------------------- Step 1 --------------------------------------------");
function maleMarriageEligibility(gender,age,boyName){
    var male = "male"
    var result = (gender==male)&& (age >= 21)? `eligible`:`not eligible`;
    console.log(`${boyName} you are ${result} for marriage `);
    return result ;
}
maleMarriageEligibility("male",25,"Billgates")
maleMarriageEligibility("male",17,"Stew Jobs")
console.log("----------------------------------- Step 2 ------------------------------------------");
function femaleMarriageEligibility (gender,age,girlName){
    var female="female"
        var result= (gender==female)&&(age>=18) ? `eligible`:`Not eligible`;
        console.log(`${girlName} you are ${result} for marriage`);
        return result;}
        femaleMarriageEligibility("female",16,"Jenifer");
        femaleMarriageEligibility("female",27,"Malinda Gates");
        console.log("----------------------------------------------------------------------------------------");