function calculateGrade(marks) {
    let grades = 0
    for (let i = 0; i < marks.length; i++) {
       grades += marks[i]/marks.length;  
    }
        if (grades >= 90 && grades <= 100) {
          return "A";
        } else if (grades >= 80 && grades <= 89) {
          return "B";
        } else if (grades >= 70 && grades <= 79) {
          return "C";
        } else if (grades >= 60 && grades <= 69) {
          return "D";
        } else if (grades >= 50 && grades <= 59) {
          return "E";
        } else {
          return "F";
        }
 
 }console.log(calculateGrade([19, 5, 42, 2, 77]))
 console.log(calculateGrade([59, 80, 40, 2, 77]))
 console.log(calculateGrade([89, 50, 40, 90, 77]))
 console.log(calculateGrade([59, 75, 82, 77]))
 console.log(calculateGrade([80, 80, 80]))
 console.log(calculateGrade([90, 90, 97]))

  module.exports =calculateGrade
