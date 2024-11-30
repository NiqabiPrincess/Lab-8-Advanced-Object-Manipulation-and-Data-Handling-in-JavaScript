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

console.log('------------------------------------------------');

let jsonStudent = JSON.stringify(student);
console.log(jsonStudent);