import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Admin from './../Admin'
import Clients from './../Clients'
import Employees from './../Employees'

export default function Home(){
    const history = useHistory()

    const login = useSelector((state) => state.login)
    const { access } = login.login

    useEffect(() => {
        (access === '') ? history.push('/login') : console.log(login.login)
    }, [access, history, login])

    return(
        <div>
            { access === "admin" && <Admin /> }
            { access === "clients" && <Clients /> }
            { access === "employees" && <Employees /> }
        </div>
    )
}