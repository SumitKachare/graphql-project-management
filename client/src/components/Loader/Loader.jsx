import React from "react";
import { CircularProgress } from "@mui/material";
import "./Loader.css";

const Loader = ({ message }) => {
  return (
    <div className="primary__loader">
      <CircularProgress color="inherit" />
      <p className="loader__message">{message && message}</p>
    </div>
  );
};

export default Loader;
