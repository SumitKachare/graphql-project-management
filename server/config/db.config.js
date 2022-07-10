const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
    
    return new Promise(async (resolve , reject) => {
        try {
            const URI = process.env.MONGO_URI
            resolve(mongoose.connect(URI))
            console.log("Connected to DB");
        } catch (error) {
            reject(error)
        }
        
        
    })
}

module.exports = {
    connectDB
}