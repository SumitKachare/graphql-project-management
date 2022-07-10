const { UserInputError } = require("apollo-server-express")
const Client = require("../models/client.model")
const Project = require("../models/project.model")

const resolvers = {

    // queries
    Query: {

        hello: () => {
            return "Hello World"
        },

        // client queries
        getClients: async () => {
            const data =  await Client.find()
            return data
        },
        getClient: async (parent, args ,context , info) => {
            console.log("args", args);
            const data =  await Client.findById(args.clientId)
            return data
        },

        // project queries
        getProjects: async () => {
            const data = await Project.find()
            return data
        },
        getProject: async (parent , args) => {
            console.log("args" , args)
            const projectId = args.projectId
            const data = await Project.findById(projectId)

            if(!data){
                throw new UserInputError("Project not found")
            }

            return data
        }
    },

    // mutations
    Mutation: {
        createClient: async (parent, args ,context , info) => {
            const client = args.client
            const data = await Client.create(client)
            return data
        },
        deleteClient: async (parent , args) => {

            const clientId = args.clientId

            const client = await Client.findById(clientId)

            if (!client) {
                throw new UserInputError("Client not found")
            }

            await Client.findByIdAndDelete(clientId)

            return "Client Deleted"
            
        },
        createProject: async (parent , args) => {
            const projectData = args.project

            const clientId = projectData.clientId
            
            const client =  await Client.findById(clientId)

            if (!client) {
                throw new UserInputError("Client not found")
            }

            const data = await Project.create(projectData)
            
            return data
        },
        updateProject:  async (parent , args) => {

            const projectId = args.projectId
            const projectUpdateData = args.updateProject

            const project = await Project.findById(projectId)

            if (!project) {
                throw new UserInputError("Project not found")
            }

            const updatedData = await Project.findByIdAndUpdate(projectId , projectUpdateData , {
                new : true,
                runValidators: true
            })

            return updatedData
        },
        deleteProject:  async (parent , args) => {
            const projectId = args.projectId

            const project = await Project.findById(projectId)

            if (!project) {
                throw new UserInputError("Project not found")
            }

            await Project.findByIdAndDelete(projectId)

            return "Project Deleted"
        }

    }
}


module.exports = resolvers