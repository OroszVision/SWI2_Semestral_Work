import React from 'react';
import { Container, Row, Col, Breadcrumb, Card, Button, ProgressBar } from 'react-bootstrap';

const UserProfile: React.FC = () => {
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <Container className="py-5">
                <Row>
                    <Col lg={4}>
                        <Card className="mb-4">
                            <Card.Body className="text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: '150px' }}
                                />
                                <h5 className="my-3 mt-3">John Smith</h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <Button variant="primary">Edit avatar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card className="mb-4">
                            <Card.Body>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 mb-2">Username:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Johnatan Smith <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg></p>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="mb-0 mb-2">Email address:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">jonathan.smith@gmail.com <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg></p>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="mb-0">Password:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">hidden <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Button variant="primary">Save changes</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default UserProfile;
