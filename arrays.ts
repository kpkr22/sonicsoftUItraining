var studentsList = new Array();
studentsList.push("Student 1"); // Push method adds an element into the array
studentsList.push("Student 2");
studentsList.push("Student 3");
studentsList.push("Student 4");
console.log(studentsList);
studentsList.pop(); // Removes the element from array
studentsList.push("Student 5");
console.log(studentsList);
studentsList.splice(1, 2);
console.log(studentsList);
studentsList.push("Student 2");
studentsList.push("Student 3");
console.log("Before Map ->", studentsList);
var newStudentList = studentsList.map(function (val, index) {
    return {
        name: val,
        id: index + 1 * 1000
    };
});
console.log("After Map ->", newStudentList);
var filterdList = newStudentList.filter(function (val) {
    if (val.id > 1001) {
        return true;
    }
    else {
        return false;
    }
});
console.log("After filter ->", filterdList);