import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import contactphone from "../assets/images/phone-handle-svgrepo-com.svg";
import contactemail from "../assets/images/email-download-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={3}>
            <h2 className="footerbaslik">MOONCHILD</h2>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-end">
            <Row >
              <Col size={12}>
                <img className="imgCont" src={contactphone} alt="Phone" />
              </Col>
              <Col className=" footercontyazi" size={12}>
                <p>0544 247 64 59</p>
              </Col>
            </Row>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-start">
            <Row 
            >
              <Col size={12}>
                <img className="imgCont" src={contactemail} alt="Email" />
              </Col>
              <Col className=" footercontyazi" size={12}>
                <p>mrcnsedaa@gmail.com</p>
              </Col>
            </Row>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-end">
            <p className="footeryazi">Copyright 2023.All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
