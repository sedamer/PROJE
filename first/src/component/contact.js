import "../component/style.css";
import { Col, Row, Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import React from 'react';

export const Conctact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="iletisim">
          <Col md={6}>
            <h2>HI, NICE TO MEET YOU.</h2>
          </Col>
          <Col md={6}>
            <Form className="form">
              <h3>Contact me!</h3>

              <Form.Group className="mb-3">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="label">LastName</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="label">E-mail</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="label">Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

            </Form>
            <button className="contact-buton"><span class="text-contact">Send</span><span>See You!</span></button>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};
