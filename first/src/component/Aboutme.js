import { Container } from "react-bootstrap";
import "../component/Aboutme.css";
import Carousel from "react-multi-carousel";
import { Row, Col } from "react-bootstrap";

import "react-multi-carousel/lib/styles.css";

export const Aboutme = () => {
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
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col>
          <div className="aboutme-container">
            <div className="aboutme-bx">
              <h2>About Me </h2>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.{" "}
              </p>
            </div>
            </div>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="aboutmeSlider"
            >
              <div className="item"></div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
