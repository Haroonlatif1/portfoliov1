import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link ,useLocation} from "react-router-dom"

import  "./css/navbarcss.css"
function NavScrollExample() {
  const { pathname } = useLocation();


  return (
    <Navbar expand="xl" style={{"background-color":"black"}} className="c">
      <Container fluid>
        <Navbar.Brand className='logo'><Link to="/" className={pathname === "/" ? "active" : ""}>Haroon</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to=".projects" className={pathname === "/projects" ? "active" : ""} >Projects</Link></Nav.Link>
            <Nav.Link ><Link to="/resume" className={pathname === "/resume" ? "active" : ""}>Resume</Link></Nav.Link>
            <Nav.Link ><Link to="#about" className={pathname === "/about" ? "active" : ""} >Who i am?</Link></Nav.Link>

          </Nav>
          <Button className="datascience" variant="outline-primary">Data Science</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;