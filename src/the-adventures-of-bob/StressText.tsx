import React, { useEffect, useState } from "react";
import classes from "./StressTest.module.css";
import ImagePlacementGrid from "./ImagePlacementGrid";
import bob from "./bobseventy.png";

const StressTest: React.FC = () => {
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

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  //console.log(seconds);

  const gridImages = [];
  let key = 0;

  for (let index = 0; index < aspectRatioHeight - 1; index++) {
    for (let index2 = 0; index2 < aspectRatioWidth; index2++) {
      const image = bob;

      gridImages.push({
        key: key,
        image: image,
        width: bobWidth,
        height: bobHeight,
        left: halfOfRemainingWidth + 3 + index2 * bobWidth + "px",
        top:
          halfOfRemainingHeight + bobHeight + bobHeight * index + 3 * 2 + "px",
      });

      key++;
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
        <ImagePlacementGrid
          key={0}
          image={bob}
          width={bobWidth}
          height={bobHeight}
          left={halfOfRemainingWidth + 3 + seconds * 2.5 + "px"}
          top={halfOfRemainingHeight + bobHeight + bobHeight * 7 + 3 * 2 + "px"}
        />
      </div>
    </div>
  );
};

export default StressTest;
