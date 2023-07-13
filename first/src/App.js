import React from "react";
import { Navbar } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Banner } from "./component/Banner";
import { NavBar } from "./component/NavBar";


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
    </div>
  );
}

export default App;
