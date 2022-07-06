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
      <Link to="/arrow-key-input-test" className={classes.centeredLink}>
        Arrow Key Input Test
      </Link>
      <Link to="/click-test" className={classes.centeredLink}>
        Click Test
      </Link>
      <Link to="/" className={classes.centeredLink}>
        My Personal Site
      </Link>
    </div>
  );
};

export default TheAdventuresOfBob;
