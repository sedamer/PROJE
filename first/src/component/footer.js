import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 className="footerbaslik">MOONCHILD</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p className="footeryazi">Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
