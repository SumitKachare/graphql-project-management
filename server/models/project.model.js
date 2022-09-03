const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true , "Project name is required"]
    },
    description : {
        type: String,
        required : [true , "Project description is required"]
    },
    status : {
        type: String,
        enum : ["started", "in_progress"  , "completed"],
        required : [true , "Project status is required"]
    },
    clientId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Client",
        required : [true , "Project client-id is required"]
    }
})

const projectModel = mongoose.model("Project" , projectSchema)

module.exports = projectModel