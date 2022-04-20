import React from 'react'
import { useSelector } from 'react-redux'

import Header from './../../components/Header'
import Products from './../../components/Products/store'

export default function Clients() {
    const headerNavigation = useSelector((state) => state.headerNavigation)
    const { headerNavigator } = headerNavigation
    return(
        <div>
            <Header />
            {headerNavigator === "Home" && <h1>Client Page</h1> }
            {headerNavigator === "Products" && <Products /> }
            {headerNavigator === "Buy" && <h1>Buy</h1> }
            {headerNavigator === "Cart" && <h1>Cart</h1> }
        </div>
    )
}