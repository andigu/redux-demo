import {createStore} from "redux";

export default createStore((state={counter: 0}, action) => {
    switch(action.type) {
        case 'increment': return {counter: state.counter + action.delta}
        default: return state;
    }
});

export function INCREMENT(x) {
    return {
        type: 'increment',
        delta: x
    }
}