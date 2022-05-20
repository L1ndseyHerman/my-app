import React from "react";
import bob from "../pages/bobseventy.png";
import classes from "./ImagePlacementGrid.module.css";

const ImagePlacementGrid: React.FC<{
  width: number;
  height: number;
  left: string;
  top: string;
}> = (props) => {
  return (
    <img
      src={bob}
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
