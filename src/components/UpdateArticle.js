import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Modal } from 'react-bootstrap'

const UpdateArticle = (props) => {
    const [text, setText] = useState(props.text)
    const [title, setTitle] = useState(props.title)

    const handleInput = (event, type) => {
        if (type === "title") {
            setTitle(event.target.value)
        }
        if (type === "text") {
            setText(event.target.value)
        }
    }

    const propsList = [];
    for (let key in props) {
        propsList.push(key);
    }

    return ReactDOM.createPortal(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Aktualizuj artykuł</Modal.Title>
            </Modal.Header>
            <Form className="ml-3 mt-3 d-flex flex-column">
                <Form.Group className="w-75" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tytuł</Form.Label>
                    <Form.Control type="text" value={title} placeholder="Podaj tytuł artykułu" onChange={(e) => handleInput(e, propsList[2])} />
                </Form.Group>
                <Form.Group className="w-75" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Treść artykułu</Form.Label>
                    <Form.Control style={{ height: "175px" }} as="textarea" rows="3" value={text} onChange={(e) => handleInput(e, propsList[3])} />
                </Form.Group>
                <Button className="my-3 w-25" variant="info">Aktualizuj</Button>
            </Form>
        </Modal>,
        document.getElementById('auth-hook')
    )
}

export default UpdateArticle