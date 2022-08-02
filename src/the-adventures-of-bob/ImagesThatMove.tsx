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
  movementGrid: boolean[][];
}> = (props) => {
  //  [0] = amount moved l/r
  //  [1] = amount moved up/down
  //  [2] = amount to jump/fall next
  //  [3] = are you jumping/falling or staying still vertially?
  const [imageMovementGridSquaresMoved, setImageMovementGridSquaresMoved] =
    useState<[number, number, number, boolean, boolean[][]]>([
      0,
      0,
      -10,
      false,
      props.movementGrid,
    ]);
  let jumpInterval: NodeJS.Timeout | null = null;

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
      const tempArray2: any = [];
      if (jumpInterval === null) {
        jumpInterval = setInterval(() => {
          for (
            let index = 0;
            index < imageMovementGridSquaresMoved[4].length;
            index++
          ) {
            //console.log(index);
            for (
              let index2 = 0;
              index2 < imageMovementGridSquaresMoved[4][index].length;
              index2++
            ) {
              //console.log(index2);
              if (Array.isArray(tempArray2[index])) {
                tempArray2[index][index2] = false;
                if (
                  index2 >=
                    imageMovementGridSquaresMoved[1] +
                      imageMovementGridSquaresMoved[2] +
                      timesRun * 2 &&
                  index2 <=
                    imageMovementGridSquaresMoved[1] +
                      imageMovementGridSquaresMoved[2] +
                      timesRun * 2 +
                      props.baseGridSquaresPerImage
                ) {
                  tempArray2[index][index2] = true;
                  console.log(index + " " + index2 + " is true!");
                }
              } else {
                tempArray2[index] = [false];
                if (
                  index2 >=
                    imageMovementGridSquaresMoved[1] +
                      imageMovementGridSquaresMoved[2] +
                      timesRun * 2 &&
                  index2 <=
                    imageMovementGridSquaresMoved[1] +
                      imageMovementGridSquaresMoved[2] +
                      timesRun * 2 +
                      props.baseGridSquaresPerImage
                ) {
                  tempArray2[index][index2] = true;
                  console.log(index + " " + index2 + " is true!");
                }
              }
            }
          }

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
                  tempArray2,
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
                imageMovementGridSquaresMoved[4],
              ]
            );
          }
        }, 2000);
      }
    });

    const interval = setInterval(() => {
      const tempArray: any = [];
      if (rightKey) {
        //const tempArray = [];
        for (
          let index = 0;
          index < imageMovementGridSquaresMoved[4].length;
          index++
        ) {
          //console.log(index);
          for (
            let index2 = 0;
            index2 < imageMovementGridSquaresMoved[4][index].length;
            index2++
          ) {
            //console.log(index2);
            if (Array.isArray(tempArray[index])) {
              tempArray[index][index2] = false;
              if (
                index >= imageMovementGridSquaresMoved[0] &&
                index <=
                  imageMovementGridSquaresMoved[0] +
                    props.baseGridSquaresPerImage
              ) {
                tempArray[index][index2] = true;
                console.log(index + " " + index2 + " is true!");
              }
            } else {
              tempArray[index] = [false];
              if (
                index >= imageMovementGridSquaresMoved[0] &&
                index <=
                  imageMovementGridSquaresMoved[0] +
                    props.baseGridSquaresPerImage
              ) {
                tempArray[index][index2] = true;
                console.log(index + " " + index2 + " is true!");
              }
            }
          }
        }
        //  MOVE TO THE USEEFFECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //  Going to try to get this collision grid working, get it to find Bob:
        /*for (
          let index = imageMovementGridSquaresMoved[0] + 1;
          index < props.baseGridSquaresPerImage + 1;
          index++
        ) {
          //                          Bottom-most row, use the variables at some pt.
          props.movementGrid[index][0] = true;
          console.log("Index " + index + " of dobArray contains Bob!");
        }*/

        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0] + 1,
          imageMovementGridSquaresMoved[1],
          imageMovementGridSquaresMoved[2],
          imageMovementGridSquaresMoved[3],
          tempArray,
        ]);
      }
      if (leftKey) {
        //  MOVE TO THE USEEFFECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //  Going to try to get this collision grid working, get it to find Bob:
        /*for (let index = 0; index < props.baseGridSquaresPerImage; index++) {
          //                          Bottom-most row, use the variables at some pt.
          props.movementGrid[index][0] = true;
          console.log("Index " + index + " of dobArray contains Bob!");
        }*/

        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0] - 1,
          imageMovementGridSquaresMoved[1],
          imageMovementGridSquaresMoved[2],
          imageMovementGridSquaresMoved[3],
          imageMovementGridSquaresMoved[4],
        ]);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  /*for (
    let index = imageMovementGridSquaresMoved[0] + 1;
    index < props.baseGridSquaresPerImage + 1;
    index++
  ) {
    //                          Bottom-most row, use the variables at some pt.
    props.movementGrid[index][0] = true;
    console.log("Index " + index + " of dobArray contains Bob!");
  }*/

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
