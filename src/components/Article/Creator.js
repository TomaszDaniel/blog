import React from 'react';

import { Form, Button } from 'react-bootstrap'

const Creator = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Tytuł</Form.Label>
                <Form.Control type="text" placeholder="Podaj tytuł artykułu" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="..." />
            </Form.Group>
            <Button variant="info">Dodaj</Button>
        </Form>
    )
}

export default Creator