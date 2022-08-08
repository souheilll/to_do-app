import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function SignIn({ user, setUser, setEtat }) {
    const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }
    const handleNameChange = (e) => {
        setUser({ ...user, name: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setEtat(true)
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     props.setEtat(true)
    // }
    // const handleChange = (e) => {
    //     props.setUser({ ...props.user, [e.target.name]: e.target.value })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     props.setUser({ ...props.user, etat: true })
    // }
    return (
        <div style={{ width: 600, margin: 'auto' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={user.email}
                        name='email' onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                        value={user.name} name='name' onChange={handleNameChange} />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Connect
                </Button>
            </Form>
        </div>
    )
}
export default SignIn