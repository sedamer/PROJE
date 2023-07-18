import React from "react";
import { Helmet } from "react-helmet";
import { Banner } from "./component/Banner";
import { NavBar } from "./component/NavBar";
import { Aboutme } from "./component/Aboutme";
import { Skills } from "./component/skills";
import { Education } from "./component/education";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>moonchild</title>
      </Helmet>
      <NavBar />
      <Banner />
      <Aboutme/>
      <Skills/>
      <Education/>

      

    </div>
  );
}

export default App;
