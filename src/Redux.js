import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const reducer = (state={counter: 0}, action) => {
    switch(action.type) {
        case 'increment': return {counter: state.counter + action.delta}
        default: return state;
    }
}
export default createStore(reducer, applyMiddleware(thunk));

export function INCREMENT(x) {
    return {
        type: 'increment',
        delta: x
    }
}

export function INCREMENT_ASYNC(x) {
    return dispatch => {
        setTimeout(() => {
            dispatch(INCREMENT(x));
        }, 1000);
    };
}