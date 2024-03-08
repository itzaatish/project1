const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    name :{
        type : String , 
        required : [true , "no name has been given"] ,
        maxlength : [200 , "you have reached 25 char"] ,
        trin : true
    } ,
    completed : {
        type : Boolean ,
        default : false 
    } 
})

module.exports = mongoose.model("text",textSchema);