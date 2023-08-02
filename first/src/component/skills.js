import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import resim1 from "../assets/images/icons8-css3.svg"
import resim2 from "../assets/images/icons8-html.svg"
import resim3 from "../assets/images/icons8-git.svg"
import resim4 from "../assets/images/icons8-javascript.svg"
import resim5 from "../assets/images/icons8-node-js.svg"
import resim6 from "../assets/images/icons8-express-js.svg"
import resim7 from "../assets/images/icons8-python.svg"
import resim8 from "../assets/images/icons8-react-native.svg"
import resim9 from "../assets/images/icons8-c.svg"
import {Col,Row,Container} from "react-bootstrap";
import "../component/style.css"
import React from 'react';
import 'animate.css';
import TrackVisibility from "react-on-screen";



export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__backInLeft" : ""
                    }
                  >
                    <div className="skill-bx">
                      <h2>My Skills</h2>
                    </div>
                  </div>
                )}
              </TrackVisibility>
  
              <p>"Here, you'll find a collection of my skills and passions, reflecting my journey towards growth and self-improvement."</p>
  
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    <img src={resim1} alt="Image" />
                    <h5>Css</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.w3schools.com/html/" target="_blank">
                    <img src={resim2} alt="Image" />
                    <h5>Html</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://git-scm.com/" target="_blank">
                    <img src={resim3} alt="Image" />
                    <h5>Git</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.javascript.com/" target="_blank">
                    <img src={resim4} alt="Image" />
                    <h5>JavaScript</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://nodejs.org/en" target="_blank">
                    <img src={resim5} alt="Image" />
                    <h5>Node.js</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://expressjs.com/" target="_blank">
                    <img src={resim6} alt="Image" />
                    <h5>Express.js</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.python.org/" target="_blank">
                    <img src={resim7} alt="Image" />
                    <h5>Python</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://react.dev/" target="_blank">
                    <img src={resim8} alt="Image" />
                    <h5>React.js</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://cplusplus.com/" target="_blank">
                    <img src={resim9} alt="Image" />
                    <h5>C++</h5>
                  </a>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Skills;