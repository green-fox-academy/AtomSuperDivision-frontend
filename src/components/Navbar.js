
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../styles/app.css';


const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Generator">Generator</Nav.Link>
                    <Nav.Link href="/Feed">Feed</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default withRouter(Navigation);