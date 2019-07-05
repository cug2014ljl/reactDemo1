import React from 'react';

export default class ComponentFir extends React.Component {
  	render() {
    	return (
      		<div>
      			<input type="text" onChange={this.props.changeEventTitle} maxLength="8" placeholder="请输入Title"/>
        		<ContentFir dataVal={this.props.dataTit}/>
      		</div>
    	);
  	}
}


class ContentFir extends React.Component {
  	render() {
    	return (
			<div className="showContainer">Title:  <div>{this.props.dataVal}</div></div>
    	);
  	}
}

