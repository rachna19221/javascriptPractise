let university = {
  name: "Global University",
  location: "New York",
  getStudentInfo: function() {
    return {
      name: "Alice Johnson",
      year: "Sophomore",
      courses: {
        major: "Computer Science",
        electives: ["Mathematics", "Physics"]
      }
    };
  }
};

let studentInfo = university.getStudentInfo();
console.log(studentInfo.courses.major);  // Output: Computer Science
console.log(studentInfo.courses.electives[1]);  // Output: Physics