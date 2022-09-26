"use strict";

let findNearstMultipleOfFive = (num) => {
    for(let i = 0; i <= 5; i++) if((num + i) % 5 == 0) return num + i;
}

let gradingStudent = function(grade) {
    if(grade < 38) return grade;    
    let nearstMultipleOfFive = findNearstMultipleOfFive(grade);
    if(nearstMultipleOfFive - grade < 3) return nearstMultipleOfFive;
    else return grade;
}

let gradingStudents = function(grades) {
    const finalGrades = [];
    for(const grade of grades) finalGrades.push(gradingStudent(grade));
    return finalGrades;
}
