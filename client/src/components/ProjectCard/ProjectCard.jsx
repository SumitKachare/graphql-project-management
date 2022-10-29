import React from "react";
import { projectStatus } from "../../constants";
import "./ProjectCard.css";

const ProjectCard = ({ project , setIsOpen ,setFormTitle }) => {
  // set card background color
  const getCardBackgroundColor = (projectStatus) => {
    let bgColor;

    if (projectStatus === "in_progress") {
      bgColor = "card_blue_bg";
    } else if (projectStatus === "completed") {
      bgColor = "card_green_bg";
    } else {
      bgColor = "card_yellow_bg";
    }

    return `project__info ${bgColor}`;
  };

  const handleEditClick = () => {
    setIsOpen(true)
    setFormTitle("Edit Project")

  };

  const handleDeleteClick = () => {
    
  };

  return (
    <div
      className="project_card_container"
    >
      <h3 className="project_title">{project.name}</h3>
      <p className="project_description">{project.description}</p>

      <p className="project__info">Client : {project.clientId.name}</p>
      <p className={getCardBackgroundColor(project.status)}>
        Status : {projectStatus[project.status]}
      </p>

      <div className="card_actions">
        <button onClick={handleEditClick} className="action_btn">Edit</button>
        <button onClick={handleDeleteClick} className="action_btn">Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
