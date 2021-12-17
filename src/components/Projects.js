import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group'
import bcimage from '../images/blockchain.jpg'
import wpimage from '../images/webpage.png'
import mlimage from '../images/ml.jpg'
import bgimage from '../images/resume.png';
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => {

  useEffect(() => {
    document.title = "Projects | Danny Ng"
  }, [])

  return (
    <CSSTransition in={window.location.pathname.startsWith('/projects')} classNames="fade" timeout={1600}>
      <div style={{ backgroundImage:`url(${bgimage})`, margin: 0, padding: 0 }}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Card.Title className="text-center mt-5" style={{ fontSize: 40 }}>Projects</Card.Title>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col sm={6}>
              <Card.Text className="text-center m-5" style={{ fontSize: 18 }}>Here are some projects I have worked on and currently working on</Card.Text>
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ paddingBottom: 70}}>
            <Col></Col>
            <Col className="card card-shadow" sm={4}>
              <Card>
                <Card.Title className="mt-5 mb-3 project-marker" style={{ fontSize: 18 }}>Blockchain and Machine Learning applications for Smart Grids (FYP)</Card.Title>
                <Card.Text className="m-4">I have implemented a double auction market for energy trading leveraging on blockchain technology.<br/>(Work in Progress)</Card.Text>
              </Card>
            </Col>
            <Col className="card" sm={3}>
              <Card>
                <Card.Img src={bcimage} className="float-end" style={{ borderRadius: 0 }}></Card.Img>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ paddingBottom: 70}}>
            <Col></Col>
            <Col className="card card-shadow" sm={4}>
              <Card>
                <Card.Title className="mt-5 mb-3 project-marker" style={{ fontSize: 18 }}>Own Webpage</Card.Title>
                <Card.Text className="m-4">I created this webpage using React.js and React libraries.</Card.Text>
                <Card.Text className="m-4">Click <a href="https://github.com/dannyngcw/webpage" style={{ color: 'black'}}>here</a> for more</Card.Text>
              </Card>
            </Col>
            <Col className="card" sm={3}>
              <Card>
                <Card.Img src={wpimage} className="float-end" style={{ borderRadius: 0 }}></Card.Img>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ paddingBottom: 80}}>
            <Col></Col>
            <Col className="card card-shadow" sm={4}>
              <Card>
                <Card.Title className="mt-5 mb-3 project-marker" style={{ fontSize: 18 }}>Improving Deep Learning Accuracy by Data Augmentation Using Generative Adversarial Networks</Card.Title>
                <Card.Text className="m-4">This was a school group project for a module. We used different GAN images and tested out with VGG16 and EfficientNetB7.</Card.Text>
              </Card>
            </Col>
            <Col className="card" sm={3}>
              <Card>
                <Card.Img src={mlimage} className="float-end" style={{ borderRadius: 0 }}></Card.Img>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default Projects