// Import necessary libraries
import React from 'react';
import {Button, Form} from 'react-bootstrap';

// Your PasswordReset component
const PasswordReset: React.FC = () => {
    return (
        <div>
            <h3>Password Reset</h3>
            <p>Please type in your email and we will send you a link to reset your password.</p>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Form>
            <Button as="input" type="submit" value="Submit" />{' '}
        </div>
    );
};

export default PasswordReset;
