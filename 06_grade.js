console.log("--------------------------------------------------------------------------");
var gradeCalculation = function (marks){
    var marks = +marks
      if (marks >= 90 && marks <=100) {
      console.log(`Funtastic Marks : ${marks},your grade is A+`);
  } 
  else if (marks >=75 && marks < 90) {
      console.log(`Excellent marks : ${marks},your grade is A`);
  }
  else if (marks >= 50 && marks< 75) {
  
      console.log(`Good marks : ${marks} your grade is B`);
  }
  if (marks >= 35 && marks < 50 ) {
      console.log(`marks are : ${marks} your grade is C,Need improvement`);
  }
  else if (marks <=0 || isNaN(marks) ||  marks > 100  ) {
  
      console.log(` please provide valid marks `);
  }
  else if ( marks < 35){
   console.log(`${marks} Marks you are fail `);
  }
  
  }
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("91");
  gradeCalculation("Eighty");
  gradeCalculation(undefined);
  gradeCalculation(null)
  console.log("--------------------------------------------------------------------------");