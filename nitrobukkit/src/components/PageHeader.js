import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'
import './components.css'

class PageHeader extends React.Component {
    render() {
        return (
            <nav className='pageheader'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.explanation}</h2>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(PageHeader)