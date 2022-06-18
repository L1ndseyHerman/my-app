import React from "react";
import classes from "./ImageMovementGrid.module.css";

const ImageMovementGrid: React.FC<{
  image: string;
  width: number;
  height: number;
  left: string;
  top: string;
}> = (props) => {
  console.log("Oh no!");

  return (
    <img
      src={props.image}
      alt="Bob"
      className={classes.bob}
      style={{
        width: props.width,
        height: props.height,
        left: props.left,
        top: props.top,
      }}
    />
  );
};

export default ImageMovementGrid;
