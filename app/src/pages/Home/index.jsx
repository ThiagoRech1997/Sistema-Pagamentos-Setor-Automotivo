import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Admin from './../Admin'
import Clients from './../Clients'
import Employees from './../Employees'

export default function Home(){
    const history = useHistory()

    const storageAccess = localStorage.getItem("userToken")

    console.log(storageAccess)

    useEffect(() => {
        (storageAccess === '') ? history.push('/login') : console.log("Ok")
    }, [storageAccess, history])

    return(
        <div>
            { storageAccess === "admin" && <Admin /> }
            { storageAccess === "clients" && <Clients /> }
            { storageAccess === "employees" && <Employees /> }
        </div>
    )
}