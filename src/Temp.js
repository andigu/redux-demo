import React from 'react'
import {connect} from 'react-redux'
import {INCREMENT, INCREMENT_ASYNC} from "./Redux";

class Temp extends React.Component {
    render() {
        return <div><p>{this.props.counter}</p>
            <button onClick={() => this.props.dispatch(INCREMENT_ASYNC(5))}>up</button>
        </div>
    }
}

export default connect(state => ({counter: state.counter}), dispatch => ({dispatch: dispatch}))(Temp)
