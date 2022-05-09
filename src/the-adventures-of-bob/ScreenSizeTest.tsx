import React from "react";
import bob from "../pages/bobseventy.png";
import classes from "./ScreenSizeTest.module.css";

const ScreenSizeTest: React.FC = () => {
  return (
    <div className={classes.gameDiv}>
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImage} />
    </div>
  );
};

export default ScreenSizeTest;
