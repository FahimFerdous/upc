import React from 'react'
import { useState } from 'react'

import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [error, setError] = useState()
    const history = useHistory()
    const { loginUser } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        /*  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
             history.push("/admin")
         })
         console.log(email, password) */
        try {
            await loginUser(email, password)
            history.push("/admin")


        } catch {
            setError("Wrong email or password")
        }
    }
    return (
        <Container>
            <Row className='LoginMainContainer'>
                <Col className='LoginContainer'>
                    <h4>Login</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <Form.Text className="text-muted">
                                {error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
