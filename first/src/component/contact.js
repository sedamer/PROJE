import "../component/style.css";
import { Col, Row, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React from 'react';

export const Conctact = () => {
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
    <section className="contact" id="contact">
      <Container>
        <Row className="iletisim">
          <Col md={6}>
            <h2>HI, NICE TO MEET YOU.</h2>
          </Col>
          <Col md={6}>
            <Form className="form">
              <h3 className="contactme">Get In Touch With Me!</h3>

              <Form.Group className="mb-3">
                <Form.Label className="label">Your Full Name</Form.Label>
                <Form.Control type="text-con-mesaj"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="label">Your E-mail</Form.Label>
                <Form.Control type="text-con-mesaj"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="label">Your Message</Form.Label>
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
