import "../component/style.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index";
import { Col, Row, Container, CardImg, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import blogkart1 from "../assets/images/blog.fb8ab7f271a937d5fc01.png";
import blogkart2 from "../assets/images/blog.fb8ab7f271a937d5fc01.png";
import blogkart3 from "../assets/images/blog.fb8ab7f271a937d5fc01.png";
import web from "../assets/images/web-3-0-nedir-ozellikleri-neler150804_3.jpg";
import iki from "../assets/images/1_odW0CyTVxMVt5s3yhjjOhw.png";
import uc from "../assets/images/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Blog = () => {
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
    <section className="blog" id="blog">
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
                  <h2 className="baslikblog">My Blogs</h2>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <p className="yaziblog">
            The Blog which has thoughts on my life, work and everything in
            betwwen.
          </p>

          {/* birinci */}
          <Col md={4}>
            <Card className="blogcard">
              <CardImg variant="top" src={blogkart1}></CardImg>
              <CardHeader></CardHeader>
              <Card.Body>
                <Card.Title className="kart-title">Web 3.0</Card.Title>
                <Card.Text>
                  <Popup
                    className="blog-card-popup"
                    trigger={
                      <button className="blog-button-popup">
                        Click the button to read more...
                      </button>
                    }
                    position={"right center"}
                  >
                    <div className="popup1">
                      <Row>
                        <Col md={6}>
                          <div>
                            <h2>Web 3.0 - The Future of the Internet</h2>

                            <p>
                              The evolution of the internet has led us to the
                              era of Web 3.0, promising a transformative shift
                              in how we experience the online world. Web 3.0,
                              also known as the Semantic Web, represents a
                              paradigm where the internet becomes more
                              intelligent, intuitive, and decentralized. At its
                              core, Web 3.0 aims to provide a more personalized
                              and contextually relevant browsing experience. It
                              leverages cutting-edge technologies such as
                              artificial intelligence, machine learning, and
                              natural language processing to understand user
                              intent better and deliver tailored content and
                              services. Gone are the days of static web pages;
                              Web 3.0 brings dynamic, interactive, and adaptive
                              interfaces that cater to individual preferences.
                              One of the defining features of Web 3.0 is its
                              focus on data sovereignty and privacy. With
                              blockchain technology at its heart, users gain
                              greater control over their data, deciding what
                              information to share and with whom.
                              Decentralization reduces the reliance on central
                              authorities, enhancing security, transparency, and
                              censorship resistance.As we navigate through this transformative era,
                              the possibilities for innovation and collaboration
                              are limitless, empowering us to redefine the way
                              we connect, create, and communicate in the digital
                              age.
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="popup2">
                            <img
                              className=" blog-img-card"
                              src={web}
                              alt="popup img"
                            ></img>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Popup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* ikinci */}

          <Col md={4}>
            <Card className="blogcard">
              <CardImg variant="top" src={blogkart2}></CardImg>
              <CardHeader></CardHeader>
              <Card.Body>
                <Card.Title className="kart-title">VS Code</Card.Title>
                <Card.Text>
                  <Popup
                    trigger={
                      <button className="blog-button-popup">
                        Click the button to read more...
                      </button>
                    }
                    position={"right center"}
                  >
                    <div className="popup1">
                      <Row>
                        <Col md={6}>
                          <div>
                            <h2>VS Code</h2>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.e and scrambled it to
                              make a type specimen book. It has survived not
                              only five centuries, but also the leap into
                              electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with
                              the release of Letraset sheets containing Lorem
                              Ipsum passageng software lik of Lorem Ipsum.e and
                              scrambled it to make a type specimen book. It has
                              survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged. It was popularised in the
                              1960s with the release of Letraset sheets
                              containing Lorem Ipsum passageng software lik of
                              Lorem Ipsum.
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="popup2">
                            <img
                              className=" blog-img-card"
                              src={iki}
                              alt="popup img"
                            ></img>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Popup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* üçüncü */}

          <Col md={4}>
            <Card className="blogcard">
              <CardImg variant="top" src={blogkart3}></CardImg>
              <CardHeader></CardHeader>
              <Card.Body>
                <Card.Title className="kart-title">React.js</Card.Title>
                <Card.Text>
                  <Popup
                    trigger={
                      <button className="blog-button-popup">
                        Click the button to read more...
                      </button>
                    }
                    position={"right center"}
                  >
                    <div className="popup1">
                      <Row>
                        <Col md={6}>
                          <div>
                            <h2>React.js</h2>

                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.e and scrambled it to
                              make a type specimen book. It has survived not
                              only five centuries, but also the leap into
                              electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with
                              the release of Letraset sheets containing Lorem
                              Ipsum passageng software lik of Lorem Ipsum.e and
                              scrambled it to make a type specimen book. It has
                              survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged. It was popularised in the
                              1960s with the release of Letraset sheets
                              containing Lorem Ipsum passageng software lik of
                              Lorem Ipsum.
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="popup2">
                            <img
                              className=" blog-img-card"
                              src={uc}
                              alt="popup img"
                            ></img>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Popup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
