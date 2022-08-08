
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function CardTask({ el, onHandleDelete, setTasks, tasks }) {
    console.log(el)
    const [show, setShow] = useState(false);
    const [descriptionUpdateTask, setDescriptionUpdateTask] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = () => {
        onHandleDelete(el.id)
    }
    const handleUpdateTask = (e) => {
        setDescriptionUpdateTask(e.target.value)
    }
    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        setTasks(tasks.map((elt) => {
            if (elt.id === el.id) {
                return { ...elt, description: descriptionUpdateTask }
            }
            else {
                return elt
            }
        }))
        handleClose()
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin: 'auto' }}>
                <Card.Body>
                    <Card.Text>
                        {el.description}
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" onClick={handleShow}>Update</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdateSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label> update Tasks</Form.Label>
                            <Form.Control type="text" placeholder="update your Tasks" onChange={handleUpdateTask}
                                value={descriptionUpdateTask} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            update tasks
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default CardTask