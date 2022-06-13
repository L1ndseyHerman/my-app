import React from "react";
import classes from "./ImageMovementGridTest.module.css";
import ImagePlacementGrid from "./ImagePlacementGrid";
import bob from "./bobseventy.png";
import blankgridsquareseventy from "./blankgridsquareseventy.png";

const ImageMovementGridTest: React.FC = () => {
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

  const fourthBobHeight = bobHeight / 4 + "px";
  const sixthBobHeight = bobHeight / 6 + "px";
  const sixthBobHeightMinusHalfBorder = bobHeight / 6 - 3 / 2 + "px";

  const gridImages = [];
  let key = 0;

  for (let index = 0; index < aspectRatioHeight - 1; index++) {
    for (let index2 = 0; index2 < aspectRatioWidth; index2++) {
      gridImages.push({
        key: key,
        image: bob,
        width: bobWidth,
        height: bobHeight,
        left: halfOfRemainingWidth + 3 + index2 * bobWidth + "px",
        top:
          halfOfRemainingHeight + bobHeight + bobHeight * index + 3 * 2 + "px",
      });

      key++;
    }
  }

  const gridImages2 = [];
  let key2 = 0;

  for (let index = 0; index < aspectRatioHeight * 5 - 1 * 5; index++) {
    for (let index2 = 0; index2 < aspectRatioWidth * 5; index2++) {
      gridImages2.push({
        key: key2,
        image: blankgridsquareseventy,
        width: bobWidth / 5,
        height: bobHeight / 5,
        left: halfOfRemainingWidth + 3 + (index2 * bobWidth) / 5 + "px",
        top:
          halfOfRemainingHeight +
          bobHeight +
          (bobHeight / 5) * index +
          3 * 2 +
          "px",
      });

      key2++;
    }
  }

  const gridImageList = gridImages.map((gridImage) => (
    <ImagePlacementGrid
      key={gridImage.key}
      image={gridImage.image}
      width={gridImage.width}
      height={gridImage.height}
      left={gridImage.left}
      top={gridImage.top}
    />
  ));

  const gridImageList2 = gridImages2.map((gridImage2) => (
    <ImagePlacementGrid
      key={gridImage2.key}
      image={gridImage2.image}
      width={gridImage2.width}
      height={gridImage2.height}
      left={gridImage2.left}
      top={gridImage2.top}
    />
  ));

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
        {gridImageList}
        {gridImageList2}
      </div>
    </div>
  );
};

export default ImageMovementGridTest;
