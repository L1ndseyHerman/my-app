import React from "react";
import bob from "../pages/bobseventy.png";
import classes from "./ScreenSizeTest.module.css";

const ScreenSizeTest: React.FC = () => {
  return (
    <div className={classes.gameDiv}>
      <img src={bob} alt="Bob" className={classes.gridImage} />
      <img src={bob} alt="Bob" className={classes.gridImageColumn2} />
      <img src={bob} alt="Bob" className={classes.gridImageRow2} />
      <img src={bob} alt="Bob" className={classes.gridImageRow2Column2} />
      <img src={bob} alt="Bob" className={classes.gridImageRow3} />
      <img src={bob} alt="Bob" className={classes.gridImageRow4} />
      <img src={bob} alt="Bob" className={classes.gridImageRow5} />
      <img src={bob} alt="Bob" className={classes.gridImageRow6} />
      <img src={bob} alt="Bob" className={classes.gridImageRow7} />
      <img src={bob} alt="Bob" className={classes.gridImageRow8} />
    </div>
  );
};

export default ScreenSizeTest;
