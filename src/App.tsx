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
import ScreenSizeTest from "./the-adventures-of-bob/ScreenSizeTest";
import ScreenSizeTest2 from "./the-adventures-of-bob/ScreenSizeTest2";
import ScreenSizeTest3 from "./the-adventures-of-bob/ScreenSizeTest3";

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
      <Route path="/screen-size-test">
        <ScreenSizeTest />
      </Route>
      <Route path="/screen-size-test2">
        <ScreenSizeTest2 />
      </Route>
      <Route path="/screen-size-test3">
        <ScreenSizeTest3 />
      </Route>
    </Switch>
  );
};

export default App;