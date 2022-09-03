import { useQuery } from "react-query"
import { GET_PROJECTS } from "../queries/queries"
import { graphQlClient } from "./instance"

export const useGetProjects = () => {
    return useQuery("getProjects" , async () => {
        const res = await graphQlClient.request(GET_PROJECTS())
        return res.getProjects
    })
}