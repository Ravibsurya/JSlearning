console.log("--------------------------------------------------------------------------------------------------------------------");
var tcsInterview = function(gradScore,hscScore,sscScore,candidateName){
    var result = (gradScore >= 70)||(hscScore >= 80)||(sscScore >= 90) ? `you are eligible`:`Unfortunately you are not eligible`;
    console.log(`${candidateName} ${result} for TCS interview`);
}
tcsInterview(80,86,90,"Ravindra");
tcsInterview(70,65,55,"Omkar");
tcsInterview(60,79,88,"Nikhil");
console.log("--------------------------------------------------------------------------------------------------------------------");