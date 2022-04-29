import React from "react";
import Wrapper from "../components/Wrapper";
import classes from "./Fake_Webpages.module.css";

const Fake_Webpages: React.FC = () => {
  return (
    <Wrapper title="Fake Webpages">
      <p className={classes.par}>Testing a thing....</p>
    </Wrapper>
  );
};

export default Fake_Webpages;
