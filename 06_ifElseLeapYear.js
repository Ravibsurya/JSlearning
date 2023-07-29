console.log("----------- Assignment 3 ------------------------------------------------------");
var leapYear = function(year){
var result = +year;
if (0==result%4 && 0!=result%100 || 0==result%400 && result!==0) {
    console.log(`Year:- ${result} = Is a leap year`);
} else if (isNaN(year)||typeof year ==='string') {
    console.log(`Year:- ${year} = Ivalid data`);
} else if (result==0) {
    console.log(`Year:- ${year} = Invalid data`);
} else {
    console.log(`Year:- ${result} = Is not a leap year`);
}
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
console.log("----------------------------------------------------------------------------------------------");