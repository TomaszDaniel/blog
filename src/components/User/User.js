import React from 'react';
import { Col, ListGroup } from 'react-bootstrap'


const User = (props) => {
    return (
        <ListGroup horizontal >
            <Col sm={6} className="px-0 ">
                <ListGroup.Item>{props.username}</ListGroup.Item>
            </Col>
            <Col sm={6} className="px-0 ">
                <ListGroup.Item>{props.email}</ListGroup.Item>
            </Col>
        </ListGroup>
    )
}

export default User