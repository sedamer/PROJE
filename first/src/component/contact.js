import "../component/style.css"
import { Col,Row,Container } from "react-bootstrap"
import {Button , Form} from "react-bootstrap";

export const Conctact = () =>{
    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="iletisim">
                    <Col md={6}>
                        <h2>HI, NICE TO MEET YOU.</h2>
                    </Col>
                    <Col md={6}>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}