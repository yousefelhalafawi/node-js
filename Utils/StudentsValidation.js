const Ajv = require("ajv");
var ajv = new Ajv();
const StudentsSchema = {
    type:"object",
    properties:{
        name:{type:"string",pattern:"^[a-zA-Z]+$"},
        age:{type:"integer",maximum:20},
        dept:{type:"string",enum:["SD","AI","ES"],minLength:2}
    },
    required:["name", "age", "dept"],
    additionalProperties:false
    // minProperties:3,
    // maxProperties:3
}
var Validator = ajv.compile(StudentsSchema);

module.exports = Validator;

//server ==> Validator(data)===> true|false
