import React, { useEffect }from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

import { handleEmployeesList } from './../../store/actions/employeesActions'

export default function Clients() {
    const dispatch = useDispatch()

    const getEmployees = useSelector((state) => state.getEmployees)
    const { employees } = getEmployees

    useEffect(() => {
        dispatch(handleEmployeesList())
    },[])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>User</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                    </tr>
                </thead>
                <tbody>
                {employees.flatMap((data, index) => (
                    <tr key={index}>
                        <th>{data.id}</th>
                        <th>{data.name}</th>
                        <th>{data.email}</th>
                        <th>{data.addresses_id}</th>
                        <th>{data.cities_id}</th>
                        <th>{data.users_id}</th>
                        <th>{data.createdAt}</th>
                        <th>{data.updatedAt}</th>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}