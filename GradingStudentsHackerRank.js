"use strict";

/*
HackerLand University has the following grading policy:
Every student receives a in the inclusive range from to .
Any less than is a failing grade.
Sam is a professor at the university and likes to round each student's according to these rules:
If the difference between the and the next multiple of is less than , round up to the next
multiple of .
If the value of is less than , no rounding occurs as the result will still be a failing grade.

Examples
--------
round to (85 - 84 is less than 3)
do not round (result is less than 40)
do not round (60 - 57 is 3 or higher)
Given the initial value of for each of Sam's students, write code to automate the rounding process.

Function Description
--------------------
Complete the function gradingStudents in the editor below.
gradingStudents has the following parameter(s):
int grades[n]: the grades before rounding

Returns
int[n]: the grades after rounding as appropriate
Input Format
------------
The first line contains a single integer, , the number of students.
Each line of the subsequent lines contains a single integer, grades[i].

Constraints
-----------
1 <= n <= 60
0 <= grades[i] <= 100
*/

const findNearstMultipleOfFive = (num) => {
    for(let i = 0; i <= 5; i++) if((num + i) % 5 == 0) return num + i;
}

const gradingStudent = function(grade) {
    if(grade < 38) return grade;    
    let nearstMultipleOfFive = findNearstMultipleOfFive(grade);
    if(nearstMultipleOfFive - grade < 3) return nearstMultipleOfFive;
    else return grade;
}

const gradingStudents = function(grades) {
    const finalGrades = [];
    for(const grade of grades) finalGrades.push(gradingStudent(grade));
    return finalGrades;
}
