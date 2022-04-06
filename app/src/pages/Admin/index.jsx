import React from 'react'

import Header from './../../components/Header'
import Clients from './../../components/Clients'
import Employees from './../../components/Employees'
import Providers from './../../components/Providers'
import Products from './../../components/Products'

import './style.css'

export default function Admin() {
    return(
        <div>
            <Header />
            <h1>Admin Page</h1>
            <Clients />
            <Employees />
            <Providers />
            <Products />
        </div>
    )
}