import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTask({ task, setTask, setTasks, tasks }) {
    const handleTaskChange = (e) => {
        setTask({ id: Math.floor(Math.random() * 1000), description: e.target.value })
        console.log(task)
    }
    const handleAddTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, task])
        setTask({ ...task, description: '' })
    }
    console.log(tasks)
    return (
        <div style={{ width: 600, margin: 'auto' }}>
            <Form onSubmit={handleAddTask}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Tasks:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Tasks" onChange={handleTaskChange} value={task.description} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Add tasks
                </Button>
            </Form>
        </div>
    )
}
export default AddTask