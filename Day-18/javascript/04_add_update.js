const student = {
    name: "Govind",
    age: 18,
    city: "junagdh",
};
console.log(student);
student.city = "manavadar";
console.log(student);
student.marks = "99";
console.log(student);
student.marks = "A";
console.log(student);
delete student.city;
console.log(student);