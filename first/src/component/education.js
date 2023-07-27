import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "../component/style.css";
import React from "react";

export const Education = () => {
  const educationItems = [
    { title: "High School", content: "Sular High School | 2015-2019" },
    {
      title: "Collage",
      content:
        "ADANA ALPARSLAN TÜRKEŞ SCIENE AND TECHNOLOGY UNIVERSITY | Computer Engineering | 100% English | 4/5 | 3.13/4.00|2019-2024",
    },
    {
      title: "Certificate",
      content:
        "HACKTRICK'22 EĞİTİM VE KONFEREANS /Web Application Security | SEYTİM(Seyhan Teknoloji Ve İnovasyon Merkezi)- Python | Udemy -100+ Saatlik Komple Frontend Eğitimi- Web Tasarım |BTK Akademi- HTML5 Web Geliştirme/CSS |BTK Akademi-Versiyon Kontrolleri :Git Ve GitHub",
    },
  ];
  return (
    <section className="education" id="education">
      <Container className="education-bx">
        <h2>My Education</h2>
        <p>My Educational Story</p>
        <Row>
          {educationItems.map((item, index) => (
            <Col md={4} className="edu" key={index}>
              <h3>{item.title}</h3>
              <ListGroup>
                {item.content.split("|").map((content, contentIndex) => (
                  <ListGroupItem
                    key={contentIndex}
                    className="education-kartlar"
                  >
                    {content.trim()}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
