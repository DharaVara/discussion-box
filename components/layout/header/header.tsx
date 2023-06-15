import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsList } from "react-icons/bs";
import Image from "next/image";
export default function Header() {
    return (
        <>
            <Navbar bg="dark" className="ps-3 py-0 dsb__top_navbar" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image
                            className="mdf__logo_modal"
                            layout="fill"
                            src="/images/logo.svg"
                            alt="Logo."
                        />
                    </Navbar.Brand>

                    <Nav className="nav-items">
                        <Nav.Link href="#action1" className="text-white">The Spotlight Experience</Nav.Link>
                    </Nav>
                    <Nav className="flex-grow-1 nav-items d-flex justify-content-end">
                        <Nav.Link href="#action2" className="text-white">Log in</Nav.Link>
                    </Nav>
                    <Nav className="nav-items ps-4">
                        <Nav.Link href="#action2" className="text-white p-0"><BsList size={34} /></Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                </Container>
            </Navbar>
            <div className="bottom__nav_select">
                
            </div>

        </>
    )
}
