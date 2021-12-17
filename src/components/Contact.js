import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group'
import bgimage from '../images/resume.png';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {

  useEffect(() => {
    document.title = "Contact | Danny Ng"
  }, [])

  const [empty, setEmpty] = useState({
    fname: false,
    lname: false,
    mail: false,
  });

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fname, lname, mail } = empty;

  const { firstname, lastname, email, subject, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };

  const handleClick = (e) => {
    setEmpty({ ...empty, [e.target.id]: true})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://v1.nocodeapi.com/dannyng/google_sheets/DpBUlHmUDMxKrvtF?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[ firstname, lastname, email, subject, message, new Date().toLocaleString()]]),
      });
      await response.json();
      setData({ ...data, firstname: "", lastname: "", email: "", subject: "", message: "", })
    } catch (err) {
      console.log(err)
    }
  }
  
    return (
      <CSSTransition in={window.location.pathname.startsWith('/contact')} classNames="fade" timeout={1600}>
        <div style={{ backgroundImage:`url(${bgimage})`, margin: 0, padding: 0 }}>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Card.Title className="text-center m-5" style={{ fontSize: 40 }}>Contact Me</Card.Title>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col sm={6} className="mb-5">
                <Card className="card-shadow">
                  <Form style={{ margin: 50}} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="FirstName">
                        <Form.Label>First Name<Form.Label style={{margin: 0, color: '#0d6efd'}}>*</Form.Label></Form.Label>
                        <Form.Control 
                        className={fname && firstname === "" ? "error" : "contact-box"} 
                        type="text" 
                        name="firstname" 
                        id="fname"
                        value={firstname} 
                        onChange={handleChange} 
                        onClick={handleClick}
                        style={{ boxShadow: "none", borderRadius: 0}}
                        required/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="LastName">
                        <Form.Label>Last Name<Form.Label style={{margin: 0, color: '#0d6efd'}}>*</Form.Label></Form.Label>
                        <Form.Control 
                        className={lname && lastname === "" ? "error" : "contact-box"} 
                        type="text" 
                        name="lastname" 
                        id="lname"
                        value={lastname} 
                        onChange={handleChange} 
                        onClick={handleClick}
                        style={{ boxShadow: "none", borderRadius: 0}}
                        required/>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" as={Col} controlId="Email">
                      <Form.Label>Email<Form.Label style={{margin: 0, color: '#0d6efd'}}>*</Form.Label></Form.Label>
                      <Form.Control 
                      className={mail && email === "" ? "error" : "contact-box"} 
                      type="email" 
                      name="email" 
                      id="mail"
                      value={email} 
                      onChange={handleChange} 
                      onClick={handleClick}
                      style={{ boxShadow: "none", borderRadius: 0 }}
                      required/>
                    </Form.Group>

                    <Form.Group className="mb-3" as={Col} controlId="Subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control 
                      className="contact-box"
                      type="text" 
                      name="subject" 
                      value={subject} 
                      onChange={handleChange}
                      style={{ boxShadow: "none", borderRadius: 0 }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <FloatingLabel controlId="floatingTextarea" label="Message">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          className="contact-box"
                          name="message"
                          value={message} 
                          onChange={handleChange}
                          style={{ boxShadow: "none", borderRadius: 0, height: '100px', resize: 'none' }}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Button className="button"variant="primary" type="submit">
                      <b>Submit</b>
                    </Button>
                  </Form>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </CSSTransition>
    )
  }

export default Contact