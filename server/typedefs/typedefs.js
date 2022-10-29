const { gql } = require("apollo-server-express");

const typeDefs = gql`

    input ClientInput {
        name: String,
        email: String,
        phone: String
    }

    type Client{
        id: ID!,
        name: String!,
        email: String!,
        phone: String!
    }

    type ProjectWithClient{
        id: ID,
        name: String!,
        description: String!,
        status: projectStatus,
        clientId: Client!
    }

    type Project{
        id: ID,
        name: String!,
        description: String!,
        status: projectStatus,
        clientId: ID!
    }

    input ProjectInput {
        name: String!,
        description: String!,
        status: projectStatus,
        clientId: ID!
    }

    input ProjectUpdateInput {
        name: String,
        description: String,
        status: projectStatus,
        clientId: ID
    }

    enum projectStatus {
        started,
        in_progress,
        completed
    }

    type Query{
        hello: String
        getClients: [Client]
        getClient(clientId: ID!): Client
        getProjects: [ProjectWithClient]
        getProject(projectId: ID!) : Project!
    }

    type Mutation{
        createClient(client: ClientInput): Client
        deleteClient(clientId: ID!): String
        createProject(project: ProjectInput): Project
        updateProject(updateProject: ProjectUpdateInput , projectId: ID!): Project
        deleteProject(projectId: ID!): String
    }

`

module.exports = typeDefs