import React from "react";
import bob from "./bobseventy.png";
import classes from "./ScreenSizeTest.module.css";

const ScreenSizeTest: React.FC = () => {
  console.log("Screen width is: " + screen.width);
  console.log("Screen height is: " + screen.height);

  //  Darn, it's 16:8.9956076...
  //  Nice, my work computer should be exactly 16:10!

  if (screen.width / screen.height === 16 / 10) {
    console.log("IT'S 16:10!!");
  } else {
    console.log("It's not 16:10");
  }

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
