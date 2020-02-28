import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import Auth from './Auth'

const Navigation = ({ location }) => {

    const [signUp] = useState(true)
    const [signIn] = useState(true)
    // const [isLogged] = useState(true)
    // const [isAdmin] = useState(true)

    const basicView = <>
        {signUp && <Auth signup />}
        <Nav.Link >Sign In</Nav.Link>
        {signIn && <Auth signIn />}
        <Nav.Link > Sign Up</Nav.Link>
    </>

    const loggedView = <Nav.Link> Logout </Nav.Link>
    const adminView = <LinkContainer to="/admin"><Nav.Link > Panel </Nav.Link ></LinkContainer>

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <LinkContainer to="/"><Navbar.Brand>My Blog</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                    {/* {isAdmin && adminView}
                    {!isLogged ? basicView : loggedView} */}
                    {adminView}
                    {loggedView}
                    {basicView}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Navigation;
