import React from "react";
import bob from "./bobseventy.png";
import classes from "./ScreenSizeTest2.module.css";

const ScreenSizeTest2: React.FC = () => {
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
    <div>
      <div style={{ width: "75%", height: "75vh" }} className={classes.gameDiv}>
        <img src={bob} alt="Bob" />
      </div>
    </div>
  );
};

export default ScreenSizeTest2;
