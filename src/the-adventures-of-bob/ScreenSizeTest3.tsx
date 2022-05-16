import React from "react";
import bob from "../pages/bobseventy.png";
import classes from "./ScreenSizeTest3.module.css";

const ScreenSizeTest3: React.FC = () => {
  let gameDivWidth = window.innerWidth;
  let gameDivHeight = window.innerHeight;

  const aspectRatioWidth = 16;
  const aspectRatioHeight = 9;

  console.log("Starting screen width is: " + gameDivWidth);
  console.log("Starting screen height is: " + gameDivHeight);

  if (gameDivWidth / gameDivHeight > aspectRatioWidth / aspectRatioHeight) {
    while (
      gameDivWidth / gameDivHeight >
      aspectRatioWidth / aspectRatioHeight
    ) {
      gameDivWidth--;
      console.log("gameDivWidth = " + gameDivWidth);
    }
  } else if (
    gameDivWidth / gameDivHeight <
    aspectRatioWidth / aspectRatioHeight
  ) {
    while (
      gameDivWidth / gameDivHeight <
      aspectRatioWidth / aspectRatioHeight
    ) {
      gameDivHeight--;
      console.log("gameDivHeight = " + gameDivHeight);
    }
  }
  //   } else it's perfect already :)
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
  const halfOfRemainingHeight =
    (window.innerHeight - minusBordersGameDivHeight) / 2 - borderSize;
  const marginTopText = halfOfRemainingHeight + "px";

  const bobWidth = minusBordersGameDivWidth / aspectRatioWidth;
  const bobHeight = minusBordersGameDivHeight / aspectRatioHeight;

  const marginLeftTextMinusBorder = halfOfRemainingWidth + 3 + "px";
  //const marginTopTextMinusBorder = halfOfRemainingHeight + 3 + "px";

  const imageOneTop = halfOfRemainingHeight + bobHeight + 3 * 2 + "px";

  const imageTwoLeft = halfOfRemainingWidth + bobWidth + 3 + "px";

  const imageThreeTop = halfOfRemainingHeight + bobHeight * 2 + 3 * 2 + "px";

  //const negativeOneFourthBob = (-1 * bobHeight) / 16 + "px";
  const halfBobHeight = bobHeight / 2 + "px";
  const fourthBobHeight = bobHeight / 4 + "px";
  const thirdBobHeight = bobHeight / 3 + "px";
  const twoThirdsBobHeight = (2 * bobHeight) / 3 + "px";
  const sixthBobHeight = bobHeight / 6 + "px";
  const sixthBobHeightMinusBorder = bobHeight / 6 - 3 + "px";
  const sixthBobHeightMinusHalfBorder = bobHeight / 6 - 3 / 2 + "px";
  const twelfthBobHeight = bobHeight / 12 + "px";

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
        <div
          style={{
            paddingTop: sixthBobHeight,
            paddingBottom: sixthBobHeightMinusHalfBorder,
          }}
          className={classes.scoreDiv}
        >
          <h2
            style={{ fontSize: fourthBobHeight }}
            className={classes.scoreText}
          >
            Score: Placeholder
          </h2>
        </div>
        <img
          src={bob}
          alt="Bob"
          className={classes.bob}
          style={{
            width: bobWidth,
            height: bobHeight,
            left: marginLeftTextMinusBorder,
            top: imageOneTop,
          }}
        />
        <img
          src={bob}
          alt="Bob"
          className={classes.bob}
          style={{
            width: bobWidth,
            height: bobHeight,
            left: imageTwoLeft,
            top: imageOneTop,
          }}
        />
        <img
          src={bob}
          alt="Bob"
          className={classes.bob}
          style={{
            width: bobWidth,
            height: bobHeight,
            left: marginLeftTextMinusBorder,
            top: imageThreeTop,
          }}
        />
      </div>
    </div>
  );
};

export default ScreenSizeTest3;
