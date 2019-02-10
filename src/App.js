import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from './Redux'
import Temp from "./Temp";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Temp/>
        </Provider>
    );
  }
}

export default App;
