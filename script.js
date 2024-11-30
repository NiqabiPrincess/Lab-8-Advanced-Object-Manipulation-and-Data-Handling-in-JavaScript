let student = {
    firstName: "Zainab",
    age: 22,
    enrolled: true,
    courses: ['algorithms', 'databases', 'WRIT120', 'operating systems', 'web dev', 'JavaScript'],
    displayInfo : function (){
        console.log(`Name: ${this.firstName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Enrolled: ${this.enrolled}`);
        console.log(`Courses: ${this.courses}`);
    }
}

console.log(`Student First Name: ${student.firstName}. Student Age: ${student.age}`);
student.displayInfo()

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');

let jsonStudentString = JSON.stringify(student);
console.log("JSON String: ");
console.log(jsonStudentString);

console.log('------------------------------------------------');

let jsonStudentObj = JSON.parse(jsonStudentString);
console.log("JSON object: ")
console.log(jsonStudentObj);
console.log('------------------------------------------------');
console.log("JavaScript object: ")
console.log(student);

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');

const { firstName, courses} = student;
console.log(`Name: ${firstName}`);
console.log(`Courses: ${courses}`);
console.log('------------------------------------------------');

let scores = [97.5, 80, 95, 99, 100];
console.log(`Original Scores: ${scores}`);
const [a,b] = scores;
console.log(`Deconstructed Scores: ${a}, ${b}`);