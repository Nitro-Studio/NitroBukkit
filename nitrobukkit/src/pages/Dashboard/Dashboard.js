import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'

import './dashboard.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import MainTab from './MainTab'


class Dashboard extends React.Component {
    render() {

        return (
            <>
                <Navbar page='Dashboard' />
                <Sidebar />
                <MainTab />
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(withRouter(Dashboard))