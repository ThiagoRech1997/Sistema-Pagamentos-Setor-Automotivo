import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

import { handleProductsList } from './../../store/actions/productsActions'

export default function Clients() {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { products } = getProducts

    useEffect(() => {
        dispatch(handleProductsList())
    },[dispatch])

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
                {products.flatMap((data, index) => (
                    <tr>
                        <th>{data.id}</th>
                        <th>{data.description}</th>
                        <th>{data.amount}</th>
                        <th>{data.value}</th>
                        <th>{data.createdAt}</th>
                        <th>{data.updatedAt}</th>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}