import React from 'react';

export default class ComponentSec extends React.Component {
  	render() {
    	return (
      		<div>
      			<div className="showContainer">Content: <div>{this.props.dataCon}</div></div>
        		<ContentSec changeEventCon={this.props.changeEventCon.bind(this)}/>
      		</div>
    	);
  	}
}


class ContentSec extends React.Component {
  	render() {
    	return (
			<input type="text" onChange={this.props.changeEventCon} maxLength="16" placeholder="请输入Content"/>
    	);
  	}
}


