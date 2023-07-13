import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImg from "../assets/images/moon-gecdd719a6_640.png";
import {Animated} from "react-animated-css";
export const Banner = () => {
  const toRotate = [" I'm Junior Frontend Web Developer, Collage Student "];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 2000; // arbitrary indicate how much time passed
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              <h1>{`Hi there`}</h1> <span className="wrap">{text}</span>
              <p>
              Welcome to My personal- Blog WebSite. Let's Visit!
              </p>
              <button className="butonn" onClick={() => console.log('Get Start W/me')}> </button>
            </span>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={HeaderImg} alt="Header image" ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
