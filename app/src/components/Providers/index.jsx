import React, { useEffect }from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

import { handleProvidersList } from './../../store/actions/providersActions'

export default function Clients() {
    const dispatch = useDispatch()

    const getProviders = useSelector((state) => state.getProviders)
    const { providers } = getProviders

    useEffect(() => {
        dispatch(handleProvidersList())
    },[])
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
                {providers.flatMap((data, index) => (
                    <tr key={index}>
                        <th>{data.id}</th>
                        <th>{data.name}</th>
                        <th>{data.cnpj}</th>
                        <th>{data.email}</th>
                        <th>{data.phone}</th>
                        <th>{data.addresses_id}</th>
                        <th>{data.cities_id}</th>
                        <th>{data.createdAt}</th>
                        <th>{data.updatedAt}</th>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}