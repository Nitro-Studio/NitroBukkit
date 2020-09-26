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
                        <div className='head'>
                            <h1>Welcome back!</h1>
                            <h2>Connect to your server :)</h2>
                        </div>

                        <p>Server information</p>
                        <div className='inputarea'>
                            <div className='ipbox'>
                                <input
                                    type='text'
                                    placeholder='IP Address'
                                    minLength='3'
                                    onChange={(e) => {
                                        //password = e.target.value
                                    }}
                                />
                            </div>
                            <div className='portbox'>
                                <input
                                    type='text'
                                    placeholder='Port'
                                    minLength='3'
                                    onChange={(e) => {
                                        //password = e.target.value
                                    }}
                                />
                            </div>
                        </div>

                        <p>Authorization</p>
                        <div className='inputarea'>
                            <div className='pwbox'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    minLength='3'
                                    onChange={(e) => {
                                        //password = e.target.value
                                    }}
                                />
                            </div>
                            <div className='vl' >
                                or
                            </div>
                            <div className='authorization'>
                                Login with Google
                            </div>
                        </div>
                        <div className='loginbtn'>
                            Login
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