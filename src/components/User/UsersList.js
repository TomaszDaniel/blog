import React from 'react';
import { ListGroup, Col } from 'react-bootstrap'

import User from './User'

const dummyUsers = [
    {
        username: "TestUser1",
        email: "test@test.com",
    },
    {
        username: "TestUser2",
        email: "test2@test.com",
    },
    {
        username: "TestUser3",
        email: "test3@test.com",
    },
    {
        username: "TestUser4",
        email: "test4@test.com",
    },
    {
        username: "TestUser5",
        email: "test5@test.com",
    },
]

const UsersList = () => {

    const users = dummyUsers.map((user, i) => (
        <User key={i} username={user.username} email={user.email} />
    ))

    return (
        <>
            <ListGroup horizontal>
                <Col sm={6} className="px-0 font-weight-bold">
                    <ListGroup.Item>Nazwa Użytkownika</ListGroup.Item>
                </Col>
                <Col sm={6} className="px-0 font-weight-bold">
                    <ListGroup.Item>Email</ListGroup.Item>
                </Col>
            </ListGroup>
            {users}
        </>
    )
}

export default UsersList