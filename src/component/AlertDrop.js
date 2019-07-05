import React from 'react';
import '../index.css';

export default class AlertDrop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				display:this.props.disStateAlert
			}
		};
	}
	
	componentWillReceiveProps(nextProps){
		if( nextProps.disStateAlert !== this.props.disStateAlert ){
			this.setState({
				style: {
					display:nextProps.disStateAlert
				}
			})
		}
	}
	
  	render() {
  		if( this.props.alertFlag ){
  			return (
  				<div className="alertTip" style={this.state.style}>
  					<div className="backDrop"></div>
					<div className="alertContainer">
						<div className="title">{this.props.msgTitle}</div>
						<div className="content">{this.props.msgContent}</div>
						<div className="btnContainer">
							<div onClick={this.props.btnADo}>{this.props.btnAContent}</div>
						</div>
					</div>
  				</div>
	    	);
  		}else{
	    	return (
	    		<div className="alertTip" style={this.state.style}>
	    			<div className="backDrop"></div>
					<div className="alertContainer">
						<div className="content">{this.props.msgContent}</div>
						<div className="btnContainer">
							<div onClick={this.props.btnADo}>{this.props.btnAContent}</div>
							<div onClick={this.props.btnBDo}>{this.props.btnBContent}</div>
						</div>
					</div>
  				</div>
	    	);
  		}
  	}
}