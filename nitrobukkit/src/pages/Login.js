import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'
import * as valid from '../functions/valid'
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
                            <h1>Login to connect</h1>
                            <h2>Manage your server from anywhere.</h2>
                        </div>

                        <p>Server information</p>
                        <div className='inputarea'>
                            <div className='ipbox'>
                                <input
                                    type='text'
                                    placeholder='IP Address'
                                    pattern={valid.ipPattern}
                                    onChange={(e) => {
                                        //password = e.target.value
                                    }}
                                />
                            </div>
                            <div className='portbox'>
                                <input
                                    type='text'
                                    placeholder='Port'
                                    pattern={valid.portPattern}
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
                                    minLength='6'
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
                        <button type='button' className='loginbtn'>
                            Login
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(withRouter(Login))