import React from "react";
import classes from "./ArrowKeyInputTest.module.css";
//import ImagePlacementGrid from "./ImagePlacementGrid";
//import ImageMovementGrid from "./ImageMovementGrid";
import bob from "./bobseventy.png";
import blankgridsquareseventy from "./blankgridsquareseventy.png";
import ImagesThatMove from "./ImagesThatMove";

const ArrowKeyInputTest: React.FC = () => {
  let gameDivWidth = window.innerWidth;
  let gameDivHeight = window.innerHeight;

  const aspectRatioWidth = 16;
  const aspectRatioHeight = 9;

  if (gameDivWidth / gameDivHeight > aspectRatioWidth / aspectRatioHeight) {
    while (
      gameDivWidth / gameDivHeight >
      aspectRatioWidth / aspectRatioHeight
    ) {
      gameDivWidth--;
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
    }
  }
  //   } else it's perfect already :)

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

  //  ImageMovementGrid:
  const baseGridSquaresPerImage = 10;

  const gridImages = [];
  let key = 0;

  for (let index = 0; index < aspectRatioHeight - 1; index++) {
    for (let index2 = 0; index2 < aspectRatioWidth; index2++) {
      gridImages.push({
        key: key,
        image: bob,
        width: bobWidth,
        height: bobHeight,
        left: halfOfRemainingWidth + 3 + index2 * bobWidth,
        top:
          halfOfRemainingHeight + bobHeight + bobHeight * index + 3 * 2 + "px",
      });

      key++;
    }
  }

  const gridImages2 = [];
  let key2 = 0;

  for (
    let index = 0;
    index <
    aspectRatioHeight * baseGridSquaresPerImage - 1 * baseGridSquaresPerImage;
    index++
  ) {
    for (
      let index2 = 0;
      index2 < aspectRatioWidth * baseGridSquaresPerImage;
      index2++
    ) {
      gridImages2.push({
        key: key2,
        image: blankgridsquareseventy,
        width: bobWidth / baseGridSquaresPerImage,
        height: bobHeight / baseGridSquaresPerImage,
        left:
          halfOfRemainingWidth +
          3 +
          (index2 * bobWidth) / baseGridSquaresPerImage +
          "px",
        top:
          halfOfRemainingHeight +
          bobHeight +
          (bobHeight / baseGridSquaresPerImage) * index +
          3 * 2 +
          "px",
      });

      key2++;
    }
  }

  /*const gridImageList2 = gridImages2.map((gridImage2) => (
    <ImageMovementGrid
      key={gridImage2.key}
      image={gridImage2.image}
      width={gridImage2.width}
      height={gridImage2.height}
      left={gridImage2.left}
      top={gridImage2.top}
    />
  ));*/

  /*const gridImageList3 = gridImages.map((gridImage) => (
    <ImagePlacementGrid
      key={gridImage.key}
      image={blankgridsquareseventy}
      width={gridImage.width}
      height={gridImage.height}
      left={gridImage.left + "px"}
      top={gridImage.top}
    />
  ));*/

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
        <ImagesThatMove
          bobWidth={bobWidth}
          bobHeight={bobHeight}
          aspectRatioWidth={aspectRatioWidth}
          aspectRatioHeight={aspectRatioHeight}
          halfOfRemainingWidth={halfOfRemainingWidth}
          halfOfRemainingHeight={halfOfRemainingHeight}
          baseGridSquaresPerImage={baseGridSquaresPerImage}
        />
      </div>
    </div>
  );
};

export default ArrowKeyInputTest;
