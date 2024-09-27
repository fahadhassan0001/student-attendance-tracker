// Write a JavaScript program to track student attendance in a class using an array. The program should:

// Ask the user (teacher) to enter the number of students in the class.
// Use a for loop to prompt the teacher to enter the student's name and whether the student is "Present" or "Absent".
// Store the names of absent students in an array.
// At the end, display a message showing how many students are present and the names of the absent students.

// Requirements:
// Use an array to store student names.
// Use a for loop to get attendance for each student.
// Use if-else statements to check whether a student is present or absent.
// Use nested if statements to ensure valid input (e.g., "Present" or "Absent" only).

let numberOfStudents = Number(prompt("Enter the number of students in the class"));
let names = [];
let presentStudents = [];
let absentStudents = [];

for (let i = 1; i <= numberOfStudents; i++) {
    names.push(prompt(`Enter the name of student ${i}`));
}
for (let i = 0; i < names.length; i++) {
    let attendance;
    while (true) {
        attendance = prompt(`Is ${names[i]} "Present" or "Absent"?`).toLowerCase();
        if (attendance === "present") {
            presentStudents.push(names[i]);
            break;
        } else if (attendance === "absent") {
            absentStudents.push(names[i]);
            break;
        } else {
            alert("Invalid input. Please enter 'Present' or 'Absent'");
        }
    }
}

alert(`Total Present Students: ${presentStudents.length}` + "\n" + `Total Absent Students: ${absentStudents.length}`);
if (absentStudents.length > 0) {
    alert("Absent Students: " + absentStudents);
}

