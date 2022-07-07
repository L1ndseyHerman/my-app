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
}> = (props) => {
  const [imageMovementGridSquaresMoved, setImageMovementGridSquaresMoved] =
    useState<[number, number]>([0, 0]);

  useEffect(() => {
    let leftKey = false;
    let rightKey = false;
    let click = false;

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
      }
    });

    document.addEventListener("click", function () {
      console.log("A click!");
      click = true;
    });

    const interval = setInterval(() => {
      if (rightKey) {
        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0] + 1,
          imageMovementGridSquaresMoved[1],
        ]);
      }
      if (leftKey) {
        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0] - 1,
          imageMovementGridSquaresMoved[1],
        ]);
      }
      if (click) {
        setImageMovementGridSquaresMoved((imageMovementGridSquaresMoved) => [
          imageMovementGridSquaresMoved[0],
          imageMovementGridSquaresMoved[1] - 1,
        ]);
        click = false;
        console.log("Done clicking!");
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const gridImages = [];
  let key = 0;

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
