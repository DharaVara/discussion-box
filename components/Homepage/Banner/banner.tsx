import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Image from "next/image";
export default function Banner() {
    return (
        <>
            <section className='common_padd'>
                <Container>
                    <Row>
                        <Col lg={4}>
                        <Image
                                className="mdf__logo_banner ms-3"
                                layout="fill"
                                src="/images/banner-block.png"
                                alt="Logo."
                            /> 
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
