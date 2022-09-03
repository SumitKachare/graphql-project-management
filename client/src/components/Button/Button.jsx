import React from "react";
import "./Button.css";

const Button = ({ buttonData }) => {
  const { backgroundColor, icon, text } = buttonData;

  return (
    <div className="button__wrapper" style={{backgroundColor : backgroundColor}}>
      {icon && icon}
      <p>{text}</p>
    </div>
  );
};

export default Button;
