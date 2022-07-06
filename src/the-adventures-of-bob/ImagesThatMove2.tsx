import React, { useEffect, useState } from "react";
import bob from "./bobseventy.png";
import ImagePlacementGrid from "./ImagePlacementGrid";

const ImagesThatMove2: React.FC<{
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
}> = (props) => {
  const [imageMovementGridSquaresMoved2, setImageMovementGridSquaresMoved2] =
    useState<[number]>([0]);

  useEffect(() => {
    let leftKey = false;
    let rightKey = false;
    //let click = false;
    let upKey = false;

    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          leftKey = true;
          console.log("Left Down!");
          break;
        case "ArrowRight":
          rightKey = true;
          console.log("Right Down!");
          break;
        case "ArrowUp":
          upKey = true;
          console.log("Up Down!");
          break;
      }
    });

    document.addEventListener("keyup", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          leftKey = false;
          console.log("Left Up");
          break;
        case "ArrowRight":
          rightKey = false;
          console.log("Right Up");
          break;
        case "ArrowUp":
          upKey = true;
          console.log("Up Down!");
          break;
      }
    });

    /*document.addEventListener("click", function () {
      //document.addEventListener("onmouseup", function () {
      //document.addEventListener("onmousedown", function (e) {
      console.log("A click!");
      if (click === false) {
        click = true;
      }
    });*/

    const interval = setInterval(() => {
      //if (click) {
      if (upKey) {
        if (imageMovementGridSquaresMoved2[0] === 0) {
          setImageMovementGridSquaresMoved2(
            (imageMovementGridSquaresMoved2) => [
              imageMovementGridSquaresMoved2[0] - 10,
            ]
          );
          console.log("Once");
          //click = false;
        } else if (imageMovementGridSquaresMoved2[0] === -10) {
          //click = false;
          upKey = false;
          setImageMovementGridSquaresMoved2(
            (imageMovementGridSquaresMoved2) => [
              imageMovementGridSquaresMoved2[0] - 5,
            ]
          );
          console.log("Twice");
        }
        //console.log("Twice");
        //click = false;
        /*if (imageMovementGridSquaresMoved[0] === -10) {
          setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
            imageMovementGridSquaresMoved[0] - 5,
          ]);
          click = false;
          console.log("Twice");
        } else if (imageMovementGridSquaresMoved[0] === 0) {
          setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
            imageMovementGridSquaresMoved[0] - 10,
          ]);
          console.log("Once");
        }*/
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const gridImages = [];
  let key = 0;

  //  Need to set those 10x10 grid things to have Bob in it here:

  for (let index = 0; index < 1; index++) {
    for (let index2 = 0; index2 < 1; index2++) {
      /*gridImages.push({
        key: key,
        image: bob,
        width: props.bobWidth,
        height: props.bobHeight,
        left: props.halfOfRemainingWidth + 3 + index2 * props.bobWidth,
        top:
          props.halfOfRemainingHeight +
          props.bobHeight +
          props.bobHeight * index +
          3 * 2 +
          "px",
      });*/
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
      left={gridImage.left + "px"}
      top={
        gridImage.top +
        (imageMovementGridSquaresMoved2[0] * props.bobHeight) /
          props.baseGridSquaresPerImage +
        "px"
      }
    />
  ));

  return <>{gridImageList}</>;
};
export default ImagesThatMove2;
