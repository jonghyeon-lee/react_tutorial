import React from 'react';
//import config from './config.json';

class Greeter extends React.Component {
	render(){
		return(
			<div>
				Hmm .. {config.greetText}
			</div>
		);
	}
}

export default Greeter;