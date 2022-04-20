import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'

import './style.css'

import { handleRegister } from './../../store/actions/clientsActions'

export default function Register() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [ name, setName ] = useState('')    
    const [ cpf, setCpf ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ city, setCity ] = useState('')
    const [ uf, setUf ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')    

    function register() {
        dispatch(handleRegister(name, cpf, street, city, uf, email, password))
        history.push('/')
    }

    return(
        <div className="register--form">
            <Form onSubmit={() => register()}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                        type="text"
                        required={true}
                        placeholder="Enter your Full Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control 
                        required={true}
                        placeholder="Enter CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Addresses</Form.Label>
                        <Form.Control
                            required={true}
                            placeholder="Addresses"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            required={true}
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>UF</Form.Label>
                        <Form.Control 
                            required={true}
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        required={true}
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        required={true}
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    )
}