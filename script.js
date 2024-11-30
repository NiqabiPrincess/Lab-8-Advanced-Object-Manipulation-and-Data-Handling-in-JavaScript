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