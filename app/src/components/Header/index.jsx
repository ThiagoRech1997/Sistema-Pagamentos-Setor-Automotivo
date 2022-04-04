import React from 'react'
import { useSelector } from 'react-redux'

import './style.css'

export default function Header() {

    const applicationAccess = useSelector((state) => state.applicationAccess)
    const { appAccess } = applicationAccess
    
    return(
        <div>
            <div className='header'>
                <strong>{appAccess}</strong>
                <div className='header--menu'>
                    { appAccess === 'admin' && <>
                        <div>
                            <strong>Dashboard</strong>
                        </div>
                        <div>
                            <strong>Clients</strong>
                        </div>
                        <div>
                            <strong>Employees</strong>
                        </div>
                        <div>
                            <strong>Providers</strong>
                        </div>
                        <div>
                            <strong>Products</strong>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}