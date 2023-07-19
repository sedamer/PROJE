import { Container, Row, Col, NavLink } from "react-bootstrap";
import "../component/education.css";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

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
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col>
          <Carousel
              responsive={responsive}
              infinite={true}
              className="educationSlider"
            >
            <div className="education-bx">
              <h2>Education</h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,when an unknown printer took a galley of type
                and scrambled it to make a typespecimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                inthe 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages,and more recently with desktop publishing
                software like Aldus PageMakerincluding versions of Lorem Ipsum.
              </p>
            </div>

              <div className="item-education">
                  <span>
                  <h3>Lise</h3>

                    
                   <p>Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,when an unknown printer took a galley of type
                and scrambled it to make a typespecimen book. It has survived
                not only five centuries, but also the leap into electronic
                </p> </span>


                  <span>
                  <h3>Üniversite</h3>
                    <p>orem Ipsum has been the industry's standard dummy text ever
                since the 1500s,when an unknown printer took a galley of type
                and scrambled it to make a typespecimen book. It has survived
                not only five centuries, but also the leap into electronic</p></span>

              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
