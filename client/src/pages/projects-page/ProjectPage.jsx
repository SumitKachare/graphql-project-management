import React from "react";
import { useGetProjects } from "../../api/projectApis";
import Button from "../../components/Button/Button";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { buttonTypes } from "../../constants";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { data, isLoading } = useGetProjects();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (data) {
    console.log("data", data);
  }

  return (
    <>
      <div className="project__label">
        <h2>Projects</h2>
        <Button buttonData={buttonTypes.addProject} />
      </div>
      <div className="projects__container">
        {data && data.map((project , index)=>{
            return <ProjectCard project={project}/>
          })}
      </div>
    </>
  );
};

export default ProjectPage;
