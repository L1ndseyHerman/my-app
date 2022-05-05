import React from "react";
import { Link } from "react-router-dom";
import classes from "./TheAdventuresOfBob.module.css";
import bob from "../pages/bobseventy.png";

const TheAdventuresOfBob: React.FC = () => {
  return (
    <div>
      <h2 className={classes.centerText}>The Adventures of Bob</h2>
      <div className={classes.gameDiv}>
        <img src={bob} alt="Bob" />
      </div>
      <Link to="/" className={classes.centeredLink}>
        My Personal Site
      </Link>
    </div>
  );
};

export default TheAdventuresOfBob;
