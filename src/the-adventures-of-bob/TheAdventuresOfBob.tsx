import React from "react";
import { Link } from "react-router-dom";
import classes from "./TheAdventuresOfBob.module.css";

const TheAdventuresOfBob: React.FC = () => {
  return (
    <div className={classes.outerDiv}>
      <h1 className={classes.centerText}>The Adventures of Bob</h1>
      <Link to="/screen-size-test" className={classes.centeredLink}>
        Screen Size Test
      </Link>
      <Link to="/screen-size-test2" className={classes.centeredLink}>
        Screen Size Test2
      </Link>
      <Link to="/screen-size-test3" className={classes.centeredLink}>
        Screen Size Test3
      </Link>
      <Link to="/image-placement-grid-test" className={classes.centeredLink}>
        Image Placement Grid Test
      </Link>
      <Link to="/movement-test" className={classes.centeredLink}>
        Movement Test
      </Link>
      <Link to="/movement-test2" className={classes.centeredLink}>
        Movement Test2
      </Link>
      <Link to="/stress-test" className={classes.centeredLink}>
        Stress Test
      </Link>
      <Link to="/image-movement-grid-test" className={classes.centeredLink}>
        Image Movement Grid Test
      </Link>
      <Link to="/image-movement-grid-test2" className={classes.centeredLink}>
        Image Movement Grid Test2
      </Link>
      <Link to="/image-movement-grid-test3" className={classes.centeredLink}>
        Image Movement Grid Test3
      </Link>
      <Link to="/" className={classes.centeredLink}>
        My Personal Site
      </Link>
    </div>
  );
};

export default TheAdventuresOfBob;
