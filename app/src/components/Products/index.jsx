import React from "react"
import { Table } from 'react-bootstrap'

export default function Clients() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Banana</th>
                        <th>5kg</th>
                        <th>R$ 100.00</th>
                        <th>2022-03-31T02:06:27.000Z</th>
                        <th>2022-03-31T02:06:27.000Z</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}