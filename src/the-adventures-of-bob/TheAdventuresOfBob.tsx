import React from "react";
import { Link } from "react-router-dom";
import classes from "./TheAdventuresOfBob.module.css";

const TheAdventuresOfBob: React.FC = () => {
  return (
    <div className={classes.outerDiv}>
      <h1 className={classes.centerText}>The Adventures of Bob</h1>
      <Link to="/image-movement-grid-test2" className={classes.centeredLink}>
        Image Movement Grid Test2
      </Link>
      <Link
        to="/arrow-key-and-click-input-test"
        className={classes.centeredLink}
      >
        Arrow Key And Click Input Test
      </Link>
      <Link to="/" className={classes.centeredLink}>
        My Personal Site
      </Link>
    </div>
  );
};

export default TheAdventuresOfBob;
