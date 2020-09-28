import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Home</h1>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(withRouter(Home))