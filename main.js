/**
 * 1-npm i express
 * 2-npm i body-parser
 * 3-npm i path
 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7400
const bodyParser = require("body-parser")
const path = require("path")
const Ajv = require("ajv");
var ajv = new Ajv();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//#region For Students [CRUD] [Creat-Read-Update-Delete]

//   /api/students ===> StudentsRoutes
var studentsRoutes = require("./Routes/StudentsRoutes");
app.use("/api/students",studentsRoutes);

//#endregion

//#region For Auth Users [CRUD] [Creat-Read-Update-Delete]
var usersRoutes = require("./Routes/usersRoutes");
app.use("/api/users",usersRoutes);
//#endregion

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)})