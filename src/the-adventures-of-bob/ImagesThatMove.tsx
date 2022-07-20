import React, { useEffect, useState } from "react";
import bob from "./bobseventy.png";
import ImagePlacementGrid from "./ImagePlacementGrid";

const ImagesThatMove: React.FC<{
  bobWidth: number;
  bobHeight: number;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
  halfOfRemainingWidth: number;
  halfOfRemainingHeight: number;
  baseGridSquaresPerImage: number;
  littleGrid: {
    key: number;
    image: string;
    width: number;
    height: number;
    left: string;
    top: string;
    containsBob: boolean;
  }[];
  plsWorkDobArray: boolean[][];
  /*plsWorkObjects: {
    x: number;
    y: number;
  }[];*/
}> = (props) => {
  //  [0] = amount moved l/r
  //  [1] = amount moved up/down
  //  [2] = amount to jump/fall next
  //  [3] = are you jumping/falling or staying still vertially?
  const [imageMovementGridSquaresMoved, setImageMovementGridSquaresMoved] =
    useState<[number, number, number, boolean]>([0, 0, -10, false]);
  let jumpInterval: NodeJS.Timeout | null = null;
  //const plsWorkDobArray = props.plsWorkDobArray;

  useEffect(() => {
    let leftKey = false;
    let rightKey = false;

    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          leftKey = true;
          break;
        case "ArrowRight":
          rightKey = true;
          break;
      }
    });

    document.addEventListener("keyup", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          leftKey = false;
          break;
        case "ArrowRight":
          rightKey = false;
          break;
      }
    });

    document.addEventListener("click", function () {
      let timesRun = 0;
      if (jumpInterval === null) {
        jumpInterval = setInterval(() => {
          timesRun++;
          if (timesRun >= 12) {
            if (jumpInterval) {
              clearInterval(jumpInterval);
              timesRun = 0;
              jumpInterval = null;
              setImageMovementGridSquaresMoved(
                (imageMovementGridSquaresMoved) => [
                  imageMovementGridSquaresMoved[0],
                  imageMovementGridSquaresMoved[1],
                  -10,
                  false,
                ]
              );
            }
          } else {
            setImageMovementGridSquaresMoved(
              (imageMovementGridSquaresMoved) => [
                imageMovementGridSquaresMoved[0],
                imageMovementGridSquaresMoved[1] +
                  imageMovementGridSquaresMoved[2],
                imageMovementGridSquaresMoved[2] + 2,
                true,
              ]
            );
          }
        }, 50);
      }
    });

    const interval = setInterval(() => {
      if (rightKey) {
        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0] + 1,
          imageMovementGridSquaresMoved[1],
          imageMovementGridSquaresMoved[2],
          imageMovementGridSquaresMoved[3],
        ]);
      }
      if (leftKey) {
        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0] - 1,
          imageMovementGridSquaresMoved[1],
          imageMovementGridSquaresMoved[2],
          imageMovementGridSquaresMoved[3],
        ]);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const gridImages = [];
  let key = 0;

  for (let index = 0; index < 1; index++) {
    for (let index2 = 0; index2 < 1; index2++) {
      gridImages.push({
        key: key,
        image: bob,
        width: props.bobWidth,
        height: props.bobHeight,
        left: props.halfOfRemainingWidth + 3 + index2 * props.bobWidth,
        top:
          props.halfOfRemainingHeight +
          props.bobHeight +
          props.bobHeight * 7 +
          3 * 2,
      });

      key++;
    }
  }

  //  Going to try to get this collision grid working, get it to find Bob:
  for (
    /*let index = gridImages[0].left;
    index < gridImages[0].left + gridImages[0].width;
    index = index + props.baseGridSquaresPerImage*/
    let index = 0;
    index < props.baseGridSquaresPerImage;
    index++
  ) {
    props.littleGrid[index].containsBob = true;
    console.log("Index " + index + " of littleGrid contains Bob!");

    //                          Bottom-most row, use the variables at some pt.
    props.plsWorkDobArray[index][0] = true;
    console.log("Index " + index + " of dobArray contains Bob!");
    //props.plsWorkObjects.indexOf({x: 1})
  }

  const gridImageList = gridImages.map((gridImage) => (
    <ImagePlacementGrid
      key={gridImage.key}
      image={gridImage.image}
      width={gridImage.width}
      height={gridImage.height}
      left={
        gridImage.left +
        (imageMovementGridSquaresMoved[0] * props.bobWidth) /
          props.baseGridSquaresPerImage +
        "px"
      }
      top={
        gridImage.top +
        (imageMovementGridSquaresMoved[1] * props.bobHeight) /
          props.baseGridSquaresPerImage +
        "px"
      }
    />
  ));

  return <>{gridImageList}</>;
};
export default ImagesThatMove;
