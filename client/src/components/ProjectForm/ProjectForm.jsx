import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ProjectForm.css" 
import ModalComponent from "../ModalComponent/ModalComponent";

const ProjectForm = ({ setIsOpen, isOpen ,title }) => {


  return (
    <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="modal__header">
          <p className="modal__title">{title}</p>
          <div onClick={() => setIsOpen(false)} className="modal__close">
            <CloseIcon />
          </div>
        </div>
        <div className="modal__body">
          <div className="project_field">
            <p>Name </p>
            <input className="project_field_input" />
          </div>
          <div className="project_field">
            <p>Description </p>
            <input className="project_field_input" />
          </div>
          <div className="project_field">
            <p>Client </p>

            <input className="project_field_input" />
          </div>
          <div className="project_field">
            <p>Status </p>
            <select id="cars" name="cars" className="project_field_input">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="modal__buttons">
          <button
            className="modal__cta btn-cancel"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button className="modal__cta btn-success">Submit</button>
        </div>
        </ModalComponent>
  );
};

export default ProjectForm;
