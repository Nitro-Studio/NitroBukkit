import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'
import './css/login.css'

import bg from '../assets/img/login_bg.png'

class Login extends React.Component {
    render() {
        return (
            <>
                <img src={bg} className='bgimg' />
                <div className='loginbox'>
                    <div className='sidebox'>
                        <h2>img</h2>
                    </div>
                    <div className='sidebox'>
                        <h2>Login</h2>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(withRouter(Login))