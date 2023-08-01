import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "../component/style.css";
import React from "react";
import edusvg from  "../assets/images/graduation-cap-icon.svg";
export const Education = () => {
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
        <h2 className="edubaslikk">My Education</h2>
        <p>Welcome to the this part of ship, where I share my passion for learning and the transformative impact of knowledge in shaping our lives. Join me on a journey of exploration and enlightenment as we celebrate the beauty of education's never-ending quest.</p>
        <Row>
          {educationItems.map((item, index) => (
            <Col md={4} className="edu" key={index}>
             <div className="education-item">
                <div className="icon-with-title">
                  <img src={edusvg} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              </div>
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
