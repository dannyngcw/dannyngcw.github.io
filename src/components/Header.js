import React from 'react';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    const pathname = window.location.pathname
    return(
      <Navbar collapseOnSelect bg="light" expand="sm" className="padheader fixed-top">
        <Container fluid>
          <Navbar.Brand href="#home" className="navtitle">
            <Row>
              <Col className="justify-content-center"><b>Danny Ng</b></Col>
              <Col className="name"> &nbsp;/ &nbsp;Final Year Student</Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'flex-end'}}>
            <Nav>
              <Nav.Link active={pathname.startsWith('/') && !pathname.startsWith('/resume') && !pathname.startsWith('/projects') && !pathname.startsWith('/contact')} style={{ marginRight: 10 }}><Link to="/" className="navbar-link">About me</Link></Nav.Link>
              <Nav.Link active={pathname.startsWith('/resume')} style={{ marginRight: 10 }}><Link to="/resume" className="navbar-link">Resume</Link></Nav.Link>
              <Nav.Link active={pathname.startsWith('/projects')} style={{ marginRight: 10 }}><Link to="/projects" className="navbar-link">Projects</Link></Nav.Link>
              <Nav.Link active={pathname.startsWith('/contact')} style={{ marginRight: 10 }}><Link to="/contact"className="navbar-link">Contact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header