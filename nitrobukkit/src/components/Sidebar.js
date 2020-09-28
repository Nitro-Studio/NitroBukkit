import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'
import './components.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className='side'>
                side
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(Sidebar)