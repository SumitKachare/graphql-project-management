import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({ buttonData  , buttomCLickFunction}) => {
  const { backgroundColor, icon, text } = buttonData;

  const handleButtonClick = () => {
    buttomCLickFunction()
  }

  return (
    <div className="button__wrapper" style={{backgroundColor : backgroundColor}} onClick={handleButtonClick}>
      {icon && icon}
      <p>{text}</p>
    </div>
  );
};

export default ButtonComponent;
