import React, { useState } from 'react';
import { Card, Button, ListGroup, Col } from 'react-bootstrap';

import UpdateArticle from './UpdateArticle'


const Article = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editArticleHandler = (title) => {
        console.log(title)
        handleShow()
    }

    return (
        <>
            {show && <UpdateArticle show={show} handleClose={handleClose} title={props.title} text={props.text} />}
            {(props.list) ? <ListGroup horizontal >
                <Col sm={5} className="px-0 ">
                    <ListGroup.Item>{props.title}</ListGroup.Item>
                </Col>
                <Col sm={5} className="px-0 ">
                    <ListGroup.Item>{props.author}</ListGroup.Item>
                </Col>
                <Button onClick={() => editArticleHandler(props.title)} variant="secondary">Edit</Button>
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