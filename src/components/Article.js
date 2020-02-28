import React from 'react';

import { Card, Button, ListGroup, Col } from 'react-bootstrap';

const Article = (props) => {
    return (
        <>
            {(props.list) ? <ListGroup horizontal >
                <Col sm={5} className="px-0 ">
                    <ListGroup.Item>{props.title}</ListGroup.Item>
                </Col>
                <Col sm={5} className="px-0 ">
                    <ListGroup.Item>{props.author}</ListGroup.Item>
                </Col>
                <Button variant="secondary">Edit</Button>
                <Button variant="danger">Delete</Button>
            </ListGroup> : <Card className="mt-5" style={{ width: '95%' }}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Button className="mx-1 btn-sm" variant="success">+</Button>
                        <Button className="mx-1 btn-sm" variant="danger">-</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Autor: {props.author}</small>
                    </Card.Footer>
                </Card>}
        </>
    )
}

export default Article