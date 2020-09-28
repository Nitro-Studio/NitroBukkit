import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'
import './dashboard.css'

import PageHeader from '../../components/PageHeader'

class MainTab extends React.Component {
    render() {
        return (
            <nav className='page'>
                <PageHeader title='Server Status' explanation='Explanation' />
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(MainTab)