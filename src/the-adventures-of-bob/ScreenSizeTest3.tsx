import React, { Fragment } from "react";
import bob from "../pages/bobseventy.png";
import classes from "./ScreenSizeTest3.module.css";

const ScreenSizeTest3: React.FC = () => {
  //console.log("Screen width is: " + screen.width);
  //console.log("Screen height is: " + screen.height);

  //  Darn, it's 16:8.9956076...
  //  Nice, my work computer should be exactly 16:10!

  /*if (screen.width / screen.height === 16 / 10) {
    console.log("IT'S 16:10!!");
  } else {
    console.log("It's not 16:10");
  }*/

  //let gameDivWidth = screen.width;
  //let gameDivHeight = screen.height;
  let gameDivWidth = window.innerWidth;
  let gameDivHeight = window.innerHeight;

  console.log("Starting screen width is: " + gameDivWidth);
  console.log("Starting screen height is: " + gameDivHeight);

  if (gameDivWidth / gameDivHeight > 16 / 10) {
    while (gameDivWidth / gameDivHeight > 16 / 10) {
      gameDivWidth--;
      console.log("gameDivWidth = " + gameDivWidth);
    }
  } else if (gameDivWidth / gameDivHeight < 16 / 10) {
    while (gameDivWidth / gameDivHeight < 16 / 10) {
      gameDivHeight--;
      console.log("gameDivHeight = " + gameDivHeight);
    }
  }
  //   else it's perfect already :)
  console.log("Screen width is: " + gameDivWidth);
  console.log("Screen height is: " + gameDivHeight);

  const borderSize = 3;

  //  Top and bottom, left and right:
  const minusBordersGameDivWidth = gameDivWidth - borderSize * 2;
  const minusBordersGameDivHeight = gameDivHeight - borderSize * 2;

  const borderText = borderSize + "px solid black";

  const halfOfRemainingWidth =
    (window.innerWidth - minusBordersGameDivWidth) / 2 - borderSize;
  const marginLeftText = halfOfRemainingWidth + "px";
  const halftOfRemainingHeight =
    (window.innerHeight - minusBordersGameDivHeight) / 2 - borderSize;
  const marginTopText = halftOfRemainingHeight + "px";

  const bobWidth = minusBordersGameDivWidth / 16;
  const bobHeight = minusBordersGameDivHeight / 10;

  return (
    <div className={classes.outerDiv}>
      <div
        style={{
          width: minusBordersGameDivWidth,
          height: minusBordersGameDivHeight,
          border: borderText,
          marginLeft: marginLeftText,
          marginTop: marginTopText,
        }}
        className={classes.gameDiv}
      >
        <img
          src={bob}
          alt="Bob"
          style={{ width: bobWidth, height: bobHeight }}
        />
      </div>
    </div>
  );
};

export default ScreenSizeTest3;
