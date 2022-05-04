import React from "react";

import classes from "./Nav.module.css";

import OneNavLink from "./OneNavLink";

const Nav: React.FC = () => {
  return (
    <div className={classes.nav}>
      <OneNavLink text="Home" theUrl="/" />
      <OneNavLink text="Education" theUrl="/education" />
      <OneNavLink text="Jobs" theUrl="/jobs" />
      <OneNavLink text="Skills" theUrl="/skills" />
      <OneNavLink text="Hobbies" theUrl="/hobbies" />
      <OneNavLink text="Contact" theUrl="/contact" />
      <OneNavLink text="JS Skills" theUrl="/js-skills" />
      <OneNavLink text="Work In Progress" theUrl="/the-adventures-of-bob" />
    </div>
  );
};

export default Nav;
