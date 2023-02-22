/**
 * 1-install mongoose
 */

const mongoose = require("mongoose");
const validator = require("validator");

const DB_URL = "mongodb://localhost:27017/Users";

mongoose.connect(DB_URL, {useNewUrlParser:true});

var usersSchema = {
    name:{type:String,pattern:"^[a-zA-Z]+$", required:true},
    email:{
        type:String,
        // pattern:"^[a-zA-Z]+\@[a-zA-Z]+(.com){1}$"
        validate:{
            // validator:(val)=>{return ("^[a-zA-Z]+\@[a-zA-Z]+(.com){1}$").test(val)}
            validator:(val)=>{return validator.isEmail(val)},
            message:"Email Not Valid"
        }
    },
    password:{type:String,minlength:5}
}


module.exports=mongoose.model("Auth",usersSchema);

// var creditCardCustomers = mongoose.model("Auth",usersSchema);
// var c = new creditCardCustomers({})
// c.save()