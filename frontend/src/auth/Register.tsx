import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Card, Form, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                // Registration successful
                const data = await response.json();
                console.log('Registration successful:', data);

                // Redirect to /chat after successful registration
                window.location.href = '/home';
            } else {
                // Handle registration error
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <section className="vh-100 gradient-custom">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xs={12} md={8} lg={6} xl={5}>
                        <Card className="bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <Card.Body className="p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-4 text-uppercase">Register</h2>

                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup className="mb-4">
                                            <Form.Control
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                aria-label="First Name"
                                                className="basic-addon1"
                                                required
                                            />
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <Form.Control
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                aria-label="Last Name"
                                                className="basic-addon1"
                                                required
                                            />
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                aria-label="Email"
                                                className="basic-addon1"
                                                required
                                            />
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                aria-label="Password"
                                                className="basic-addon1"
                                                required
                                            />
                                        </FormGroup>

                                        <Button variant="outline-light" size="lg" className="px-5 mt-2" type="submit">
                                            Register
                                        </Button>
                                    </Form>
                                    <p className="small mb-5 pb-lg-2">
                                        {/* Correctly use the Link component */}
                                        <p className="mb-0 mt-4">
                                            Already have an account? <Link to="/login" className="text-white">
                                            Login
                                        </Link>
                                        </p>
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
