import React from 'react'

import Header from './../../components/Header'
import Clients from './../../components/Clients'

import './style.css'

export default function Admin() {
    return(
        <div>
            <Header />
            <h1>Admin Page</h1>
            <Clients />
        </div>
    )
}