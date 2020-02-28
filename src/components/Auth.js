import React from 'react';
import ReactDOM from 'react-dom'

import { Form, Button, Modal } from 'react-bootstrap'

const Auth = (props) => {

    return ReactDOM.createPortal(
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.signUp ? "Utwórz konto" : "Logowanie"}</Modal.Title>
                </Modal.Header>
                <Form className="ml-3 w-75">
                    {props.signUp && <Form.Group controlId="formBasicText">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="my-3">
                        <Button variant="secondary" onClick={props.handleClose}>
                            Zamknij
                    </Button>
                        <Button className="ml-3" variant="primary" onClick={props.handleClose}>
                            {props.signUp ? "Zarejestruj się" : "Zaloguj się"}
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>,
        document.getElementById('auth-hook')
    )
}

export default Auth