let allStudents = ['A', 'B-', 1, 4, 5, 2]
let passingGrades = ['A', 'A-', 'B', 'B-', 'C', 3, 4, 5]  
let studentsWhoPass = [];
  
for (grade in allStudents){
   if (passingGrades.includes(allStudents[grade])){
       studentsWhoPass.push(allStudents[grade])
   }
}

console.log(studentsWhoPass);