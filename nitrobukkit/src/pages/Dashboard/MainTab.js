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
                <button type='button' onClick={() => { this.props.setTEST('test') }}>Set test</button>
                <button type='button' onClick={() => { console.log(this.props.test.A) }}>Print test</button>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    test: state.status
})
export default compose(connect(mapStateToProps, actions))(MainTab)