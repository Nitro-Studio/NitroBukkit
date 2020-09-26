import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'
import './css/login.css'

import bg from '../assets/img/login_bg.png'
import login from '../assets/img/login.svg'

class Login extends React.Component {
    render() {
        return (
            <>
                <img src={bg} className='bgimg' />
                <div className='loginbox'>
                    <img src={login} className='sideimg' />
                    <div className='sidebox'>
                        <br />
                        <br />
                        <h1>Welcome back!</h1>
                        <h2>Connect to your server :)</h2>
                        <br />
                        <div className='inputbox'>
                            <p>Server information</p>
                            <input
                                className='input ipbox'
                                type='text'
                                placeholder='IP Address'
                                minLength='3'
                                onChange={(e) => {
                                    //password = e.target.value
                                }}
                            />
                            <input
                                className='input portbox'
                                type='text'
                                placeholder='Port'
                                minLength='3'
                                onChange={(e) => {
                                    //password = e.target.value
                                }}
                            />
                            <p>Authorization</p>
                            <input
                                className='input pwbox'
                                type='password'
                                placeholder='Password'
                                minLength='3'
                                onChange={(e) => {
                                    //password = e.target.value
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(withRouter(Login))