import React from 'react'
import { useDispatch } from 'react-redux'

import './style.css'

import { handleHeaderNavigation } from './../../store/actions/headerNavigationActions'

export default function Header() {
    const dispatch = useDispatch()

    const storageAccess = localStorage.getItem("userToken")
    const storageName = localStorage.getItem("userName")
    
    return(
        <header>
            <div className='header--menu'>
                { storageAccess === 'admin' && <>
                    <div onClick={() => dispatch(handleHeaderNavigation('Dashboard'))}>
                        <a>Dashboard</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Clients'))}>
                        <a>Clients</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Employees'))}>
                        <a>Employees</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Providers'))}>
                        <a>Providers</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Products'))}>
                        <a>Products</a>
                    </div>
                </>}
                { storageAccess === 'clients' && <>
                    <div onClick={() => dispatch(handleHeaderNavigation('Home'))}>
                        <a>Home</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Products'))}>
                        <a>Products</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Buy'))}>
                        <a>Buy</a>
                    </div>
                    <div onClick={() => dispatch(handleHeaderNavigation('Cart'))}>
                        <a>Cart</a>
                    </div>
                </>}
            </div>
            <div className='header--user'>
                <strong onClick={() => localStorage.clear("userToken")}>{storageName}</strong>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' />
            </div>
        </header>
    )
}