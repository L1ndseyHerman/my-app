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
      <Link to="/screen-size-test" className={classes.centeredLink}>
        Screen Size Test
      </Link>
      <Link to="/screen-size-test2" className={classes.centeredLink}>
        Screen Size Test2
      </Link>
      <Link to="/screen-size-test3" className={classes.centeredLink}>
        Screen Size Test3
      </Link>
      <Link to="/" className={classes.centeredLink}>
        My Personal Site
      </Link>
    </div>
  );
};

export default TheAdventuresOfBob;
