import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../component/style.css"
import React from 'react';
//Know Who I am

export const Aboutme = () => {
  const responsive = {
    //default
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col>
          <div className="aboutme-container">
            <div className="aboutme-bx">
              <h2>About Me </h2>
              <p className="aboutmeyazi">
                {" "}
                Welcome! In this section of our ship offers a glimpse into who I am and my inner world.{" "}
              </p>
            </div>
            
            </div>
            <Container>
              <Row>
                  <Col md={4}></Col>
                  <Col md={4}></Col>
                  <Col md={4}></Col>
              </Row>

            </Container>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};
