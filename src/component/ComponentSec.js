import React from 'react';

export default class ComponentSec extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}
	changeEvent(e){
		this.setState({
			content:e.target.value
		})
	}
  	render() {
    	return (
      		<div>
      			<div>您正在输入: {this.state.content}</div>
        		<ContentSec changeEvent={this.changeEvent.bind(this)}/>
      		</div>
    	);
  	}
}


class ContentSec extends React.Component {
  	render() {
    	return (
			<input type="text" onChange={this.props.changeEvent}/>
    	);
  	}
}


