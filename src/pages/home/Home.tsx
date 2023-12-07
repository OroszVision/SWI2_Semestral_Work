import React from "react";
import {Button} from "react-bootstrap";

const Home: React.FC = () => {
    return (
        <>
            <div className="d-flex justify-content-lg-start">
                <h3 className="m-1">Create new chat</h3>
                <Button className="btn-primary" type="submit">+</Button>{' '}
            </div>

        </>
    );
};

export default Home