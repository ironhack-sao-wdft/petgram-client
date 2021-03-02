import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavMenu(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Petgram</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/new-pet">New Pet</Link>
          <Link to="/my-pets">My Pets</Link>
          <Link to="/new-post">New Post</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu;
