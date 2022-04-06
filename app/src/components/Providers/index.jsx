import React from "react"
import { Table } from 'react-bootstrap'

export default function Clients() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>CNPJ</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Carrara Investimentos</th>
                        <th>000.000.000/0000-00</th>
                        <th>contato@carrarataxi.com</th>
                        <th>(11) 9 9999-9999</th>
                        <th>Rua do Cacete</th>
                        <th>Puta Que Pariu</th>
                        <th>2022-03-31T02:06:27.000Z</th>
                        <th>2022-03-31T02:06:27.000Z</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}