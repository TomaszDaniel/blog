import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import Auth from './Auth'

const Navigation = ({ location }) => {

    const [signUp, setSignUp] = useState(false)
    const [signIn, setSignIn] = useState(false)
    // const [isLogged] = useState(true)
    // const [isAdmin] = useState(true)

    const handleCloseSignUp = () => setSignUp(false);
    const handleShowSignUp = () => setSignUp(true);

    const handleCloseSignIn = () => setSignIn(false);
    const handleShowSignIn = () => setSignIn(true);

    const basicView = <>
        <Nav.Link onClick={handleShowSignIn} > Logowanie </Nav.Link> {signIn && <Auth show={signIn} signIn={signIn} handleClose={handleCloseSignIn} />}
        <Nav.Link onClick={handleShowSignUp} > Rejestracja </Nav.Link> {signUp && <Auth show={signUp} signUp={signUp} handleClose={handleCloseSignUp} />}
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
