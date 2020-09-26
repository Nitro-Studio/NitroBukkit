import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/css/index.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import store from './reducers/store'

import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Server from './pages/Server'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={createStore(store, {}, applyMiddleware(reduxThunk))}>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/server' component={Server} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)