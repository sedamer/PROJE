import "./App.css";
import logo from "./logo.svg"
import {Helmet} from "react-helmet";
import React from "react";
function App() {
  return (
    <nav>
        <Helmet>
                <meta charSet="utf-8" />
                <title>My website</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="My Website" />

            </Helmet>

      <h1>Seda Mercan</h1>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default App;

