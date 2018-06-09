import React, { Component } from 'react';
import Terminal from '../containers/TerminalContainer';
import Head from 'next/head';
import store from '../redux/store.js';	
import { Provider } from 'react-redux';  

class App extends Component {
    render() {
        return (
		<div id="terminal">
			<Head>
				<link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css" />
				<link rel="stylesheet" href="static/main.css" />
			</Head>
			<Provider store = {store}>
				<Terminal/>
			</Provider>
		</div>
        );
    }
}

export default App;