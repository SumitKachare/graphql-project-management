const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Client name is required"]
    },
    email : {
        type : String,
        required : [true , "Client email is required"],
        unique : true
    },
    phone: {
        type : String,
        required : [true , "Client phone is required"],
        unique : true
    }
})

const clientModel = mongoose.model("Client" , clientSchema)
module.exports  = clientModel