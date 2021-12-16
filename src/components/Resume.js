import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group'
import myPDF from '../resume/resume.pdf';
import bgimage from '../images/resume.png';
import 'bootstrap/dist/css/bootstrap.css';

const Resume = () => {

  useEffect(() => {
    document.title = "Resume | Danny Ng"
  }, [])

  return (
    <CSSTransition in={window.location.pathname.startsWith('/resume')} classNames="fade" timeout={1600}>
      <div style={{ backgroundImage:`url(${bgimage})`, margin: 0, padding: 0 }}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Card.Title className="text-center m-5" style={{ fontSize: 40 }}>Resume</Card.Title>
            </Col>
            <Col></Col>
          </Row>
          <Row className="mb-3">
            <Col></Col>
            <Col xs={3} className="mt-3">
              <Card.Title style={{ fontSize: 26 }}>Work Experience
              </Card.Title>
            </Col>
            <Col>
              <a href={myPDF} download="My_File.pdf" className="nav-link float-end" style={{ fontSize: 18, padding: "10px 0 0 0" }}><Button className="button"><b>Download Resume</b></Button></a>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={6} className="m-3">
              <Card className="card-shadow" style={{ padding: "10px 5px 10px 40px" }}>
                <Card.Text style={{ margin: 0, color: '#0d6efd', fontSize: 18 }}><b>May 2021 - Jul 2021</b></Card.Text>
                <Card.Text style={{ margin: 0, fontSize: 14}}><b>Software Engineer Intern</b></Card.Text>
                <Card.Text style={{fontSize: 14}}>PICKUPP</Card.Text>
                <ul>
                  <li>Wrote and optimised new front-end functionality on their Warehouse mobile application using React Native to enhance user interface and experience.</li>
                  <li>Successfully presented my findings and solutions to large audience including senior executives and stakeholders.</li>
                  <li>Effectively addressed complex bugs using Reactotron and other tools.</li>
                  <li>Worked with various developer tools such as Node,js, Docker and PostgresSQL.</li>
                </ul>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={6} className="m-3">
              <Card className="card-shadow" style={{ padding: "10px 5px 10px 40px" }}>
                <Card.Text style={{ margin: 0, color: '#0d6efd', fontSize: 18 }}><b>Aug 2020 - Dec 2020</b></Card.Text>
                <Card.Text style={{ margin: 0, fontSize: 14}}><b>Intern</b></Card.Text>
                <Card.Text style={{fontSize: 14}}>TOPPAN ECQUARIA</Card.Text>
                <ul>
                  <li>Self-learnt HTML, CSS, JavaScript, Jquery, and Bootstrap and developed HTML mockups for a government-based web page, IPOS.</li>
                  <li>Worked with Java Server Page and self-learnt JSP Scripting to create mockups which reduced time and effort in producing up to more than 5 pages at once.</li>
                  <li>Assisted with the preparation of the functional specification documents for review and document sign off.</li>
                </ul>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row className="mb-3">
            <Col></Col>
            <Col xs={6} className="mt-5">
              <Card.Title style={{ fontSize: 26 }}>Education</Card.Title>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={6} className="m-3">
              <Card className="card-shadow" style={{ padding: "10px 5px 10px 40px" }}>
                <Card.Text style={{ margin: 0, color: '#0d6efd', fontSize: 18 }}><b>2019 - Present</b></Card.Text>
                <Card.Text style={{ margin: 0, fontSize: 14}}><b>Nanyang Technological University</b></Card.Text>
                <Card.Text style={{fontSize: 14}}>Electrical & Electronic Engineering</Card.Text>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={6} className="m-3">
              <Card className="card-shadow" style={{ padding: "10px 5px 10px 40px" }}>
                <Card.Text style={{ margin: 0, color: '#0d6efd', fontSize: 18 }}><b>2014 - 2017</b></Card.Text>
                <Card.Text style={{ margin: 0, fontSize: 14}}><b>Singapore Polytechnic</b></Card.Text>
                <Card.Text style={{fontSize: 14}}>Electrical & Electronic Engineering</Card.Text>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row className="mb-3">
            <Col></Col>
            <Col xs={6} className="mt-5">
              <Card.Title style={{ fontSize: 26 }}>Skillset</Card.Title>
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ paddingBottom: 100}}>
            <Col></Col>
            <Col xs={6} className="m-3">
              <Card className="card-shadow" style={{ padding: "10px 5px 10px 25px" }}>
                <ul>
                  <li><b>Programming Languages</b>: Solidity, HTML, CSS, Javascript, Jquery, Python, SQL</li>
                  <li><b>Platforms</b>: Ganache, Node.js, Docker, PostgresSQL</li>
                  <li><b>Frameworks</b>: Truffle, React.js and React Native</li>
                  <li><b>Version Control</b>: Git</li>
                </ul>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default Resume