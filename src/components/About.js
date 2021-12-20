import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import image from '../images/profileimage.jpg'
import bgimage from '../images/about.png'
import 'bootstrap/dist/css/bootstrap.css';

const About = () => {

  useEffect(() => {
    document.title = "About me | Danny Ng"
  }, [])

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const CardComponent = () => {
    if (width < 500){
      return (
        <Col className="card hide" sm={4}>
          <Card.Body>
            <Card.Text style={{ fontSize: 40 }}><b>Hello</b></Card.Text>
            <Card.Text style={{ fontSize: 18 }}><b>I am Danny Ng!</b></Card.Text>
            <Card.Text className="mt-4" style={{ fontSize: 14 }}>
              I am a student at Nanyang Technological University studying Electrical and Electronic Engineering. Started delving into programming in mid 2020, and always been
              trying to improve myself in every aspect.
            </Card.Text>
          </Card.Body>
        </Col>
      )
    } 
    if (width > 500 && width < 800 ) {
      return(
        <Col className="card hide" sm={5}>
          <Card className="width" bg="light" text="dark" style={{ height: '26rem', paddingLeft: 20 }}>
            <Card.Body>
              <Card.Text style={{ fontSize: 60 }}><b>Hello</b></Card.Text>
              <Card.Text style={{ fontSize: 20 }}><b>I am Danny Ng!</b></Card.Text>
              <Button variant="primary" className="button"><Link to="/resume" className="navbar-link"><b>Resume</b></Link></Button>
                <Button variant="primary" className="button button-secondary" style={{ marginLeft: 10 }}><Link to="/projects" className="navbar-link"><b>Projects</b></Link></Button>
              <Card.Text className="mt-4">
                I am a student at Nanyang Technological University studying Electrical and Electronic Engineering. Started delving into programming in mid 2020, and always been
                trying to improve myself in every aspect.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    } else {
      return (
        <Col className="card hide" sm={4}>
          <Card className="width" bg="light" text="dark" style={{ height: '26rem', paddingLeft: 20 }}>
            <Card.Body>
              <Card.Text style={{ fontSize: 78 }}><b>Hello</b></Card.Text>
              <Card.Text style={{ fontSize: 28 }}><b>I am Danny Ng!</b></Card.Text>
              <Button variant="primary" className="button"><Link to="/resume" className="navbar-link"><b>Resume</b></Link></Button>
              <Button variant="primary" className="button button-secondary" style={{ marginLeft: 10 }}><Link to="/projects" className="navbar-link"><b>Projects</b></Link></Button>
              <Card.Text className="mt-4">
                I am a student at Nanyang Technological University studying Electrical and Electronic Engineering. Started delving into programming in mid 2020, and always been
                trying to improve myself in every aspect.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    }
  }

  const MainCardComponent = () => {
    if (width < 500) {
      return (
        <Col className="card" sm={{ span: 3, offset: 2 }} md={3}>
          <Card bg="secondary" text="dark" className="card card-shadow" style={{ width: '20rem', height: '22rem' }}>
            <Card.Body className="align-self-center">
              <Card.Img src={image} className="image" />
              <Card.Title as="h4" className="text-center">Danny Ng</Card.Title>
              <Container>
                <Row>
                  <Col></Col>
                  <Col>
                    <Card.Text className="padding mt-2"></Card.Text>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
              <div className="mt-4">
                <Button variant="primary" className="small-button"><Link to="/resume" className="navbar-link"><b>Resume</b></Link></Button>
                <Button variant="primary" className="small-button button-secondary" style={{ marginLeft: 10 }}><Link to="/projects" className="navbar-link"><b>Projects</b></Link></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )
    } 
    if (width > 500 && width < 800 ) {
      return (
        <Col className="card" sm={{ span: 3, offset: 2 }} md={3} style={{ marginRight: -5 }}>
        <Card bg="secondary" text="dark" className="card card-shadow" style={{ width: '20rem', height: '26rem' }}>
          <Card.Body className="align-self-center">
            <Card.Img src={image} className="image mt-2" />
            <Card.Title as="h4" className="text-center">Danny Ng</Card.Title>
            <Container>
              <Row>
                <Col></Col>
                <Col>
                  <Card.Text className="padding mt-3"></Card.Text>
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <Card.Text className="text-center mt-4" style={{ fontSize: 18 }}>Final Year Student</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      )
    } else {
      return (
        <Col className="card" sm={{ span: 3, offset: 2 }} md={3} style={{ marginRight: -5 }}>
          <Card bg="secondary" text="dark" className="card card-shadow" style={{ width: '20rem', height: '26rem' }}>
            <Card.Body className="align-self-center">
              <Card.Img src={image} className="image mt-2" />
              <Card.Title as="h4" className="text-center">Danny Ng</Card.Title>
              <Container>
                <Row>
                  <Col></Col>
                  <Col>
                    <Card.Text className="padding mt-3"></Card.Text>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
              <Card.Text className="text-center mt-4" style={{ fontSize: 18 }}>Final Year Student</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    }
  }

  return (
    <CSSTransition in={window.location.pathname.startsWith('/')} classNames="fade" timeout={1600}>
      <div className={width < 700 ? "background-img" : "background-img vh-100"} style={{ backgroundImage:`url(${bgimage})`, margin: 0, padding: 0, backgroundAttachment: 'fixed' }}>
        <Container className="d-flex vh-100" className={width < 700 ? "d-flex" : "d-flex vh-100"}>
          <Row className="m-auto align-self-center">
            <MainCardComponent />
            <CardComponent />
          </Row>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default About