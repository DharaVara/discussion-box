import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Image from "next/image";
export default function Story() {
    return (
        <>
            <section className='dsb__story_vblock'>
                <Container>
                    <h3 className="text-primary">Our Story</h3>
                    <Row className="mt-3">
                        <Col md={6} lg={4}>
                            <p>Discussion Box was born and raised in the Digital era, which saw (and still sees!) increasing demand for business expansion beyond traditional means.</p>
                        </Col>
                        <Col md={6} lg={4}>
                            <p>Founded by serial entrepreneur and mum of 3 Lisa-Marie Carter, The Spotlight Experience aims to connect important decision-makers and leading global brands, through meaningful online discussions.</p>
                        </Col>
                        <Col md={6} lg={4}>
                            <p>Driven by the goal to reduce unnecessary world-travel and improve accessibility in the events space, Discussion Box was built to be different.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="dsb_bottom_slide border-top border-bottom border-white bg-secondary">
                    <div className="p-4 d-flex justify-content-between">
                        <h4 className='text-uppercase font-wild m-0'>Virtual events with a <span className="fw-light">Human Touch</span> </h4>
                        <h4 className='text-uppercase font-wild m-0'>Virtual events with a <span className="fw-light">Human Touch</span> </h4>
                    </div>
                </div>
            </section>

        </>
    )
}
