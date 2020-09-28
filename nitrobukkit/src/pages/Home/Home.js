import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>{process.env.PUBLIC_URL}</h1>
                <h2>{this.props.test.A}</h2>
                <button type='button' onClick={() => { this.props.setTEST('test') }}>Set test</button>
                <button type='button' onClick={() => { console.log(this.props.test.A) }}>Print test</button>
                <br />
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/dashboard'>Dashboard</Link>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    test: state.status
})
export default compose(connect(mapStateToProps, actions))(withRouter(Home))