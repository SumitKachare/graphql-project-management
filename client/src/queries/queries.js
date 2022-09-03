import { gql } from "graphql-request"



export const GET_PROJECTS = () => {
    
    const query =  gql`query getProjects{
            getProjects {
                clientId
                description
                id
                name
                status
            }
    }`

    return query
}