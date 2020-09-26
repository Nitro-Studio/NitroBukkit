import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class Server extends React.Component {
    render() {
        return (
            <>
                <h1>Server</h1>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(withRouter(Server))