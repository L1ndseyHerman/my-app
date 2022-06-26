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
}> = (props) => {
  const [imageMovementGridSquaresMoved, setImageMovementGridSquaresMoved] =
    useState(0);

  useEffect(() => {
    let leftKey = false;
    let rightKey = false;

    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          //alert("left");
          leftKey = true;
          console.log("Left Down!");
          break;
        case "ArrowUp":
          //alert("up");
          break;
        case "ArrowRight":
          //alert("right");
          rightKey = true;
          console.log("Right Down!");
          break;
        case "ArrowDown":
          //alert("down");
          break;
      }
    });

    document.addEventListener("keyup", function (e) {
      switch (e.key) {
        case "ArrowLeft":
          //alert("done left");
          leftKey = false;
          console.log("Left Up");
          break;
        case "ArrowUp":
          //alert("done up");
          break;
        case "ArrowRight":
          //alert("done right");
          rightKey = false;
          console.log("Right Up");
          break;
        case "ArrowDown":
          //alert("done down");
          break;
      }
    });

    const interval = setInterval(() => {
      if (rightKey) {
        setImageMovementGridSquaresMoved(
          (imageMovementGridSquaresMoved) => imageMovementGridSquaresMoved + 1
        );
      } else if (leftKey) {
        setImageMovementGridSquaresMoved(
          (imageMovementGridSquaresMoved) => imageMovementGridSquaresMoved - 1
        );
      }
    }, 35);
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
          props.bobHeight * index +
          3 * 2 +
          "px",
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
        (imageMovementGridSquaresMoved * props.bobWidth) /
          props.baseGridSquaresPerImage +
        "px"
      }
      top={gridImage.top}
    />
  ));

  return <>{gridImageList}</>;
};
export default ImagesThatMove;
