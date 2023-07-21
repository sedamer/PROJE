import { Container, Row, Col } from "react-bootstrap";
import "../component/style.css";

export const Education = () => {

  return (
    <section className="education" id="education">
      <Container className="education-bx">
        <h2>Education</h2>
        <Row>
          <Col md={4} className="edu">
            since the 1500s,when an unknown printer took a galley of type and
            scrambled it to make a typespecimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised inthe 1960s with
            the release of Letraset sheets containi
          </Col>
          <Col md={4} className="edu ">
            since the 1500s,when an unknown printer took a galley of type and
            scrambled it to make a typespecimen book. It has survived not only
            five centuries, but also the leap into electronic typesetti
          </Col>
          <Col md={4} className="edu">
            since the 1500s,when an unknown printer took a galley of type and
            scrambled it to make a typespecimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popular
          </Col>
        </Row>
      </Container>
    </section>
  );
};
