import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'


export default function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Rohan Moniz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link>Projects & Experience</Nav.Link>
            </Link>
            <Link href="/resume.pdf" passHref>
              <Nav.Link>Résumé</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}