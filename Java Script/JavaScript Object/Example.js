
const course = {
  title: "JavaScript Mastery",
  price: 499,
  instructor: {
    name: "John Doe",
    experience: "5 years"
  },
  lessons: ["Basics", "Functions", "Objects", "ES6"],
  enroll: function(studentName) {
    return `${studentName} enrolled in ${this.title}`;
  }
};

console.log(course.instructor.name);       // "John Doe"
console.log(course.lessons[2]);            // "Objects"
console.log(course.enroll("Raju"));        // "Raju enrolled in JavaScript Mastery"
