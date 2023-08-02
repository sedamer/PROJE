import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { Banner } from "./component/Banner";
import { NavBar } from "./component/NavBar";
import { Aboutme } from "./component/Aboutme";
import { Skills } from "./component/skills";
import { Education } from "./component/education";
import { Projects } from "./component/projects";
import { Blog } from "./component/blog";
import { Conctact } from "./component/contact";
import { Footer } from "./component/footer";
import "animate.css/animate.min.css";

import "./component/style.css";

function App() {
  return (
    <div className="App">

      <Helmet>
        <meta charSet="utf-8" />
        <title>moonchild</title>
      </Helmet>
      <NavBar />
      <Banner />
      <Aboutme />
      <Skills />
      <Education />
      <Projects />
      <Blog />
      <Conctact />
      <Footer />

    </div>
  );
}

export default App;
