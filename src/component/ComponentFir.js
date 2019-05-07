import React from 'react';

export default class ComponentFir extends React.Component {
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
      			<input type="text" onChange={(e)=>this.changeEvent(e)}/>
        		<ContentFir dataVal={this.state.content}/>
      		</div>
    	);
  	}
}


class ContentFir extends React.Component {
  	render() {
    	return (
			<div>您正在输入:  {this.props.dataVal}</div>
    	);
  	}
}

