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
import iki from "../assets/images/1_odW0CyTVxMVt5s3yhjjOhw.png"
import uc from "../assets/images/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png"
export const Blog = () => {
  return (
    <section className="blog" id="blog">
      <Container>
        <Row>
          <div>
            <h2 className="baslikblog">My Blogs</h2>
            <p className="yaziblog">
              The Blog which has thoughts on my life, work and everything in
              betwwen.
            </p>
          </div>

            {/* birinci */}
          <Col md={4}>
            <Card className="blogcard">
              <CardImg variant="top" src={blogkart1}></CardImg>
              <CardHeader></CardHeader>
              <Card.Body>
                <Card.Title className="kart-title">Blog 1</Card.Title>
                <Card.Text>
                  <Popup className="blog-card-popup"
                    trigger={<button className="blog-button-popup">Click the button to read more...</button>}
                    position={"right center"}
                  >
                    <div className="popup1">
                      <Row>
                        <Col md={6}>
                          <div>
                          <h2>Blog 1</h2>

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
                              software lik of Lorem Ipsum.e and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.e and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="popup2">
                            <img className=" blog-img-card"src={web} alt="popup img"></img>
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
                <Card.Title  className="kart-title">Blog 2</Card.Title>
                <Card.Text>
                  <Popup
                    trigger={<button className="blog-button-popup">Click the button to read more...</button>}
                    position={"right center"}
                  >
                    <div className="popup1">
                      <Row>
                        <Col md={6}>
                          <div>
                          <h2>Blog 2</h2>

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
                              software lik of Lorem Ipsum.e and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.e and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="popup2">
                            <img   className=" blog-img-card" src={iki} alt="popup img"></img>
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
                <Card.Title  className="kart-title">Blog 3</Card.Title>
                <Card.Text>
                  <Popup
                    trigger={<button className="blog-button-popup">Click the button to read more...</button>}
                    position={"right center"}
                  >
                    <div className="popup1">
                      <Row>
                        <Col md={6}>
                          <div>
                          <h2>Blog 3</h2>

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
                              software lik of Lorem Ipsum.e and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.e and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passageng
                              software lik of Lorem Ipsum.
                            </p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="popup2">
                            <img  className=" blog-img-card" src={uc} alt="popup img"></img>
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
