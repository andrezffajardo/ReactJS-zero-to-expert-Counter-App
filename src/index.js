import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from "./FirstApp";
import './index.css';
import CounterApp from "./CounterApp";


const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={ 321 }/>, divRoot );
