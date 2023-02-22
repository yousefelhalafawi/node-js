
const Validator = require("../Utils/StudentsValidation");

const StudentModel = require("../Models/StudentsModel");

var GetAllStudents = (req,res)=>{
    // var S = new StudentModel()
    var AllStudents = StudentModel.GetAStudents();
    res.status(200).json(AllStudents)
}

var GetStudentByID = (req,res)=>{
    var studentID = req.params.id;
    var foundStudent = students.find((student)=>student.id == studentID)
    res.status(200).json(foundStudent);
}

var UpdateStudent = (req,res)=>{
    var ind;
    var UpdateStudent = req.body;
    var StudentID = req.params.id;
    // var foundStudent = students.find((student,index)=>{
    //     ind = index;
    //     return student.id == StudentID;
    // })
    for(var i=0;i<students.length;i++){
        if(students[i].id == StudentID){
            ind = i;
        }
    }
    // console.log(foundStudent,ind);
    UpdateStudent.id = StudentID;
    students[ind] = UpdateStudent;
    res.status(200).json(UpdateStudent);
}

var AddNewStudent = (req,res)=>{
    var newStudent = req.body;
    // S_id++;
    // console.log(Validator(newStudent))
    // console.log(Validator.errors)
    if(Validator(newStudent)){
        var s = new StudentModel(newStudent.name, newStudent.age, newStudent.dept);
        s.SaveStudent();
        res.status(201).send("Added Successfully");
    }else{
        res.status(400).send("Not Compatible..")
    }
    
}

var DeleteStudent =(req,res)=>{
    var StudentID = req.params.id;
    var ind;
    var foundStudent = students.find((student,index)=>{
        ind = index;
        return student.id == StudentID;
    })

    students.splice(ind,1);
    res.json(students);
}


module.exports = {
    GetAllStudents,
    GetStudentByID,
    AddNewStudent,
    UpdateStudent,
    DeleteStudent
};