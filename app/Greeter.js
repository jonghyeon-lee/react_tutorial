import React, { Component } from 'react';
import config from './config.json';
//var config = require('./config.json')

class Greeter extends Component {
	render(){
		return(
			<div>
				{config.greetText}
			</div>
		);
	}
}

export default Greeter;