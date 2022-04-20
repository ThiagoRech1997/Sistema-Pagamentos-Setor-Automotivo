import React from 'react'
import { useSelector } from 'react-redux'

import Header from './../../components/Header'
import Clients from './../../components/Clients'
import Employees from './../../components/Employees'
import Providers from './../../components/Providers'
import Products from './../../components/Products'

import './style.css'

export default function Admin() {
    const headerNavigation = useSelector((state) => state.headerNavigation)
    const { headerNavigator } = headerNavigation

    return(
        <div>
            <Header />
            {headerNavigator === "Dashboard" && <h1>Admin Page</h1> }
            {headerNavigator === "Clients" && <Clients /> }
            {headerNavigator === "Employees" && <Employees /> }
            {headerNavigator === "Providers" && <Providers /> }
            {headerNavigator === "Products" && <Products /> }
        </div>
    )
}