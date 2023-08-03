import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Router, useNavigate } from 'react-router-dom';
import './NavbarComponent.css';
import SearchHome from './SearchHome';


function NavbarComponent() {
  const navigate = useNavigate();

  const handleSubmit = (e)=>{

  //   e.preventDefault()
  //   console.log("clicked")
  // navigate('./')
  window.location.href="/"
  // window.location.replace('/');
}

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">First Class Railways</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={handleSubmit}>Modify Search</Nav.Link>
            <Nav.Link href="#link">Destinations</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;