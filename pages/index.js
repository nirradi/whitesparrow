import React, { Component } from 'react';
import Terminal from '../components/Terminal';
import Head from 'next/head';


	

class App extends Component {
    render() {
        return (
		<div id="terminal">
			<Head>
				<link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css" />
				<link rel="stylesheet" href="static/main.css" />
			</Head>
            <Terminal/>
		</div>
        );
    }
}

export default App;