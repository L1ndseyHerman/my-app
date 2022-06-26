import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Jobs from "./pages/Jobs";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import JS_Skills from "./pages/JS_Skills";

import TheAdventuresOfBob from "./the-adventures-of-bob/TheAdventuresOfBob";
import ImageMovementGridTest2 from "./the-adventures-of-bob/ImageMovementGridTest2";
import ArrowKeyInputTest from "./the-adventures-of-bob/ArrowKeyInputTest";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/jobs">
        <Jobs />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/hobbies">
        <Hobbies />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/js-skills">
        <JS_Skills />
      </Route>
      <Route path="/the-adventures-of-bob">
        <TheAdventuresOfBob />
      </Route>
      <Route path="/image-movement-grid-test2">
        <ImageMovementGridTest2 />
      </Route>
      <Route path="/arrow-key-input-test">
        <ArrowKeyInputTest />
      </Route>
    </Switch>
  );
};

export default App;
