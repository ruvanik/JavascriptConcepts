//var ObjectName={ };

var student={
    firstName:"Ruvani",
    lastName:"Karandana",
    fullName: function(){
        return this.firstName + " " +this.lastName;
    },
    course : {
        name:"Javascript",
        points:10
    }

};

console.log(typeof(student));
console.log(typeof(student.fullName));
console.log(student.fullName());