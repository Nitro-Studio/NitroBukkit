import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'
import './dashboard.css'

import io from "socket.io-client";
import PageHeader from '../../components/PageHeader'

class MainTab extends React.Component {

    render() {
        var text, cmd;

        const socket = io('http://localhost:8010/', {
            path: '/socket'
        });

        socket.on('connect', () => {
            console.log('connection server');
        });

        socket.on('init', (data) => {
            text = data;
            console.log(data);
        });

        socket.on('err', (data) => {
            text = data;
            console.log(data);
        });

        socket.on('close', (data) => {
            text = data;
            console.log(data);
        });

        socket.on('fail', (data) => {
            text = data;
            console.log(data);
        });

        socket.on('console', (data) => {
            text = data;
            console.log(data);
        });

        const send = () => {
            console.log(cmd);
            const params = cmd.toString().split(' ');
            const name = params[0];
            const version = params[1];
            const port = params[2];
            const memory = params[3];
            const type = params[4];
            socket.emit('create', {
                "name": name,
                "version": version,
                "port": port,
                "memory": memory,
                "type": type
            });
        }

        return (
            <nav className='page'>
                <PageHeader title='Server Status' explanation='Explanation' />
                <button type='button' onClick={() => { this.props.setTEST('test') }}>Set test</button>
                <button type='button' onClick={() => { console.log(this.props.test.A) }}>Print test</button>
                <br />
                <textarea value={text} />
                <br />
                <input type="text" id="textbox" placeholder="Console Input" onChange={(e) => { cmd = e.target.value }} />
                <br />
                <button type='button' onClick={() => { send(); }}>Send</button>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    test: state.status
})
export default compose(connect(mapStateToProps, actions))(MainTab)