import { Container, Row, Col } from "react-bootstrap";
import "../component/style.css";

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
          <Col md={4}>chdcdcjk
          </Col>
          <Col md={4}>chdcdcjk
          </Col>
          <Col md={4}>chdcdcjk
          </Col>
        </Row>
      </Container>
    </section>
  );
};
