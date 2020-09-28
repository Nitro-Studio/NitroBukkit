import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'
import './components.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='nav'>
                <h1>NitroBukkit</h1>
                <h2>{this.props.page}</h2>
                <div className='profile' >
                    <img src='https://cdn.scratch.mit.edu/static/site/projects/thumbnails/1137/8007.png' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, actions))(Navbar)