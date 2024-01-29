// Import necessary dependencies
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Card, Form, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Define the FormData interface
interface FormData {
    email: string;
    password: string;
}

// Define the LoginPage component
const LoginPage: React.FC = () => {
    // State to manage form data
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    // Function to handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Send a POST request to the login endpoint
            const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                // Login successful
                const data = await response.json();
                console.log('Login successful:', data);

                // Redirect to home page after successful login
                window.location.href = '/home';
            } else {
                // Handle login error
                const errorData = await response.json();
                console.error('Login failed:', errorData);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    // Render the login form
    return (
        <section className="vh-100 gradient-custom">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xs={12} md={8} lg={6} xl={5}>
                        <Card className="bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <Card.Body className="p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-4 text-uppercase">Login</h2>

                                    {/* Login Form */}
                                    <Form onSubmit={handleSubmit}>
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
                                            Login
                                        </Button>
                                    </Form>

                                    {/* Navigation to Registration */}
                                    <p className="small mb-5 pb-lg-2">
                                        <p className="mb-0 mt-4">
                                            Don't have an account? <Link to="/register" className="text-white">
                                            Sign up
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

export default LoginPage;
