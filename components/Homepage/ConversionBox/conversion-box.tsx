import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap'; 

export default function ConversionBox() {

    return (
        <>
            <section className="common_padd conversion__box" >
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1>OPENING DOORS TO THE RIGHT CONVERSATIONS</h1>
                            <h2 className='text-primary'>Black woman owned, womenled…</h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly'>
                        <Col md={6} lg={3}>
                            <p>
                                The number of women in technology continues to rise and as a woman-owned and run business, Discussion Box is here to change the narrative and challenge the status quo.
                            </p>
                            
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="content_block">
                                <p>We are building a growing community of accomplished female executives, and are uniquely placed to start discussions with both male and female leaders across all corners of the world.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
