import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Home} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
