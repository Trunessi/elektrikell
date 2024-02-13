import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "./Head/electriclock.svg";


function Navigation() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/lowprice/8" className="nav-link">Low Price 8h</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
