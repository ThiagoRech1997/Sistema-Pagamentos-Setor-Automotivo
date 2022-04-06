import React from 'react'

import './style.css'

export default function Header() {

    const storageAccess = localStorage.getItem("userToken")
    
    return(
        <header>
            <strong>{storageAccess}</strong>
            <div className='header--menu'>
                { storageAccess === 'admin' && <>
                    <div>
                        <a>Dashboard</a>
                    </div>
                    <div>
                        <a>Clients</a>
                    </div>
                    <div>
                        <a>Employees</a>
                    </div>
                    <div>
                        <a>Providers</a>
                    </div>
                    <div>
                        <a>Products</a>
                    </div>
                </>}
            </div>
            <div className='header--user'>
                <strong>Augustinho Carrara</strong>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' />
            </div>
        </header>
    )
}