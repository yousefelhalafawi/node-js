var express = require("express");
var router = new express.Router();
const StudentsController = require("../Controllers/studentsController");

//Get All Students
router.get("/",StudentsController.GetAllStudents)

//Get Student By ID
router.get("/:id",StudentsController.GetStudentByID)

//Add New Student
router.post("/add",StudentsController.AddNewStudent)

//Update Student
router.put("/update/:id",StudentsController.UpdateStudent)

//Delete Student By ID
router.delete("/delete/:id",StudentsController.DeleteStudent)

module.exports = router;