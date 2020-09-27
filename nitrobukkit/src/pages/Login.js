import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import * as actions from '../reducers/actions'
import * as valid from '../functions/valid'
import * as info from '../functions/info'
import './css/login.css'

import bg from '../assets/img/login_bg.png'
import login from '../assets/img/login.svg'

class Login extends React.Component {
    render() {
        var ip = ''
        var port = ''
        var password = ''

        var name = ''
        if (this.props.google.login) {
            name = this.props.google.data.profileObj.name
        }

        const googleLogin = (
            <>
                <div className='pwbox'>
                    <input
                        type='password'
                        placeholder='Password'
                        minLength='6'
                        onChange={(e) => {
                            password = e.target.value
                        }}
                    />
                </div>
                <div className='vl' >
                    or
                </div>
                <GoogleLogin
                    className='authorization'
                    clientId={info.google.googleID}
                    buttonText={info.google.loginText}
                    onSuccess={this.props.googleLogin}
                    onFailure={(e) => { alert(e) }}
                    cookiePolicy={info.google.cookiePolicy}
                    isSignedIn={info.google.isSignedIn}
                    theme={info.google.theme}
                    uxMode={info.google.uxMode}
                />
            </>
        )
        const googleLogout = (
            <>
                <p className='authtext'>Welcome, {name}!</p>
                <GoogleLogout
                    className='authorization'
                    clientId={info.google.googleID}
                    buttonText={info.google.logoutText}
                    theme={info.google.theme}
                    onLogoutSuccess={this.props.googleLogout}
                />
            </>
        )

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
                                        ip = e.target.value
                                    }}
                                />
                            </div>
                            <div className='portbox'>
                                <input
                                    type='text'
                                    placeholder='Port'
                                    pattern={valid.portPattern}
                                    onChange={(e) => {
                                        port = e.target.value
                                    }}
                                />
                            </div>
                        </div>
                        <p>Authorization</p>
                        <div className='inputarea'>
                            {!this.props.google.login ? googleLogin : googleLogout}
                        </div>
                        <button type='button' className='loginbtn'>
                            Connect
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    google: state.google
})
export default compose(connect(mapStateToProps, actions))(withRouter(Login))