import React from "react";
import classes from "./ImagePlacementGrid.module.css";

const ImagePlacementGrid: React.FC<{
  image: string;
  width: number;
  height: number;
  left: string;
  top: string;
}> = (props) => {
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

export default ImagePlacementGrid;
