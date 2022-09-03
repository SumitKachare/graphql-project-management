import React from 'react'
import { projectStatus } from '../../constants'
import "./ProjectCard.css"

const ProjectCard = ({project}) => {

  const getCardBackgroundColor = (projectStatus) => {
    let bgColor

    if (projectStatus === "in_progress") {
      bgColor = "#69f5f2"
    }else if(projectStatus === "completed"){
      bgColor = "#9dff70"
    }else{
      bgColor = "#f2f26f"
    }

    return bgColor
  }

  return (
    <div className='project_card_container' style={{ backgroundColor : getCardBackgroundColor(project.status)}}>
      <h3 className='project_title'>{project.name}</h3>
      <p className='project_description'>{project.description}</p>
      <div className='project_info'>
        <div>
         <p className='project__info_child'>Client : Debu</p>
        </div>
        <div>
        <p className='project__info_child'>Status : {projectStatus[project.status]}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

// completed : 9dff70 green
// started : f2f26f yellow
// in progress : 69f5f2 blue