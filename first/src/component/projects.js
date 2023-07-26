import { Container, Row, Col, Button, Card, CardImg } from "react-bootstrap";
import "../component/style.css";
import kart from "../assets/images/blog.fb8ab7f271a937d5fc01.png";
import React from 'react';
export const Projects = () => {
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
    <section className="projects" id="projects">
      <Container>
        <Row>
          <div>
          <h2 className="baslik">My Projects</h2>
          <p className="yazi">Here are a few projects I've worked on recently.</p>
          </div>
       
          <Col md={4}>
            <Card className="card">
              <CardImg  variant="top" src={kart}></CardImg>
              <Card.Body>
                <Card.Title className="title"> Project 1 </Card.Title>
                <Card.Text className="text">
                  since the 1500s,when an unknown printer took a galley of type
                  and scrambled it to
                </Card.Text>
                <button className="buton-project"> <span>See Codes</span></button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card">
              <CardImg variant="top" src={kart}></CardImg>
              <Card.Body>
                <Card.Title className="title"> Project 2 </Card.Title>
                <Card.Text className="text">
                  since the 1500s,when an unknown printer took a galley of type
                  and scrambled it 
                </Card.Text>
                <button className="buton-project"> <span>See Codes</span></button>

              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card">
              <CardImg variant="top" src={kart}></CardImg>
              <Card.Body>
                <Card.Title className="title"> Project 3 </Card.Title>
                <Card.Text className="text">
                  since the 1500s,when an unknown printer took a galley of type
                  and scrambled it 
                </Card.Text>
                <button className="buton-project"> <span>See Codes</span></button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
