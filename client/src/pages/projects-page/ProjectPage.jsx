import React, { useState } from "react";
import { useGetProjects } from "../../api/projectApis";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Loader from "../../components/Loader/Loader";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import { buttonTypes } from "../../constants";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { data, isLoading } = useGetProjects();
  const [isOpen, setIsOpen] = useState(false)
  const [formTitle, setFormTitle] = useState("")

  const buttomCLickFunction = () => {
    console.log("Projet create clicked")
    setFormTitle("Create Project")
    setIsOpen(true)
  }

  return (
    <div className="project__page">
      <div className="project__label">
        <h1>Projects</h1>
        <ButtonComponent buttonData={buttonTypes.addProject} buttomCLickFunction={buttomCLickFunction}/>
      </div>
      {isLoading && <Loader message="Loading Projects"/>}
      <div className="projects__container">
        {data && data.map((project , index)=>{
            return <ProjectCard project={project} setIsOpen={setIsOpen} setFormTitle={setFormTitle} key={index}/>
          })}
      </div>
      {isOpen && <ProjectForm setIsOpen={setIsOpen} isOpen={isOpen} title={formTitle}/>}
    </div>
  );
};

export default ProjectPage;
