const {faker} = require("@faker-js/faker")
const dotenv = require("dotenv")
const  mongoose  = require("mongoose")
const Client = require("./models/client.model")
const Project = require("./models/project.model")

dotenv.config()

const CLIENT_COUNT = 20

const createSeedData = async () => {

    const createClient = async (count) => {

        const clientData = []
        
        for (let i = 0; i < count; i++) {
            const clientObj = {
                name : faker.name.fullName(),
                email : faker.internet.email(),
                phone : faker.phone.number()
            }

            clientData.push(clientObj) 
        }

        const savedClient = await Client.create(clientData)


        return savedClient
    }

    const createProject = async (clientData) => {

        const projects = []
        for (let i = 0; i < clientData.length; i++) {

            const element = clientData[i];
            const clientId = element._id

            const statusArr = ["started", "in_progress"  , "completed"]
            const random = Math.floor(Math.random() * statusArr.length);

            const projectObj = {
                name : faker.commerce.productAdjective(),
                description : faker.commerce.productDescription(),
                status : statusArr[random] ,
                clientId
            }

            projects.push(projectObj)         
            
        }
        await Project.create(projects)
    }

    const mongoURI = process.env.MONGO_URI

    mongoose.connect(mongoURI).then(()=>{
        createClient(CLIENT_COUNT).then((createClientRes)=>{
            console.log("Client data seeded");
            createProject(createClientRes).then(()=>{
                console.log("Project data seeded");
                process.exit(0)
            })
        })
    })

}

const deleteSeedData = async () => {
    const mongoURI = process.env.MONGO_URI

    mongoose.connect(mongoURI).then( async()=>{
        await Client.deleteMany()
        console.log("Client data deleted");
        await Project.deleteMany()
        console.log("Project data deleted");
        process.exit(0)
    })
}

// createSeedData()
// deleteSeedData()

const main = async () => {
    const command = process.argv[2]
    
    if (command === "seed") {
        await createSeedData()
    }

    if (command === "delete") {
        await deleteSeedData()
    }
}

main()