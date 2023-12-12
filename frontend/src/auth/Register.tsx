import React from 'react';
import {Container, Row, Col, Card, Form, Button, FormGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";

const RegisterPage: React.FC = () => {
    return (
        <section className="vh-100 gradient-custom">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xs={12} md={8} lg={6} xl={5}>
                        <Card className="bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <Card.Body className="p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-4 text-uppercase">Register</h2>

                                    <Form>
                                        <FormGroup className="mb-4">
                                            <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <Form.Control type="email" placeholder="Email" aria-label="Email" className="basic-addon1" />
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <Form.Control type="password" placeholder="Password" aria-label="Password" className="basic-addon1" />
                                        </FormGroup>

                                        <Button variant="outline-light" size="lg" className="px-5 mt-2" type="submit">Register</Button>
                                    </Form>
                                    <p className="small mb-5 pb-lg-2">
                                        {/* Correctly use the Link component */}
                                        <p className="mb-0 mt-4">Already have an account? <Link to="/login" className="text-white">Login</Link></p>
                                    </p>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RegisterPage;
