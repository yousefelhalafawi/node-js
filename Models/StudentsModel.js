// var students = [];//[{id:1,name:"asd",},{}]

const fs = require("fs");
const path = require("path")
// console.log();
const StudentsData = fs.readFileSync(path.join(__dirname,"../Data/students.json"));

var S_id = 0;

class StudnetModel{
    static StudentID = 0;
    constructor(name,age, dept){
        this.name = name;
        this.age = age;
        this.dept = dept;
    }

    SaveStudent(){
        this.id = ++StudnetModel.StudentID;
        var data = JSON.parse(StudentsData);//[{}]
        data.push(this);
        data = JSON.stringify(data);
        fs.writeFileSync(path.join(__dirname,"../Data/students.json"),data);
    }

    static GetAStudents(){
        // return students;
        return JSON.parse(fs.readFileSync(path.join(__dirname,"../Data/students.json")));
    }

}

module.exports = StudnetModel;

/*
    AddNewStudent(){
        var newStudent = new StudnetModel(...req.body)
        newStudent.saveStudent();
    }

*/



// var s = new StudnetModel();
// StudnetModel.GetAStudents()