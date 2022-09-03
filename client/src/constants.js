import { Person , FormatListBulleted , Delete} from "@mui/icons-material";

export const ENDPOINT = process.env.REACT_APP_GRAPHQL_API

export const buttonTypes = {
    addClient : {
        text : "Add Client",
        backgroundColor : "#8072f9",
        icon : <Person/>
    },
    addProject : {
        text : "New Project",
        backgroundColor : "#e15da6",
        icon : <FormatListBulleted style={{color : "#fff"}} />
    },
    submitClient : {
        text : "Submit",
        backgroundColor : "#8072f9"
    },
    submitProject : {
        text : "Submit",
        backgroundColor : "#e15da6"
    },
    deleteClient: {
        backgroundColor : "#dd4345",
        icon : <Delete/>
    },
    deleteProject: {
        text : "Delete Project",
        backgroundColor : "#dd4345",
        icon : <Delete/>
    }
}


export const queryKeys  =  {
    getProjects : "getProjects",
    getClients : "getClients",
    getProjectDetails : "getProjectDetails",
    getClientDetails : "getClientDetails",
}

export const projectStatus = {
    in_progress : "In Progress",
    completed : "Completed",
    started : "Started"
}