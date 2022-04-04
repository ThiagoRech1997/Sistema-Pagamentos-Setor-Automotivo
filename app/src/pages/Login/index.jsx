import React from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import './style.css'

import { handleLoginEmail, handleLoginPassword, handleLogin } from './../../store/actions/loginActions'

export default function Login(){
    const history = useHistory()
    const dispatch = useDispatch();

    const loginEmail = useSelector((state) => state.loginEmail)
    const { email } = loginEmail
    const loginPassword = useSelector((state) => state.loginPassword)
    const { password } = loginPassword

    function authentication() {
        dispatch(handleLogin(email, password))
        history.push('/')
    }

    return(
        <div className="login--global">
            <div className="login--logo">
                <strong>Login</strong>
            </div>
            <div className="login--form">
                <Form onSubmit={() => authentication()}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            value={email}
                            onChange={e => dispatch(handleLoginEmail(e.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={e => dispatch(handleLoginPassword(e.target.value))}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}