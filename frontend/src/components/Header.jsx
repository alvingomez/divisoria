import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        {/* Container is used so that the inner element of the navbar do not
            stretch all the way to the edges of the browser. */}
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Divisoria" />
            Divisoria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
          {/* This align the navlinks to the right */}
          <Nav className="ms-auto">
            {/*  Nav.Link is a component from react-bootstrap that renders an anchor tag by default. 
             It can be used to link to internal or external routes. */}
            <Nav.Link href="/cart">
              <FaShoppingCart /> Cart
            </Nav.Link>
            <Nav.Link href="/login"><FaUser/>Sign In</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
