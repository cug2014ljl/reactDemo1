import React from 'react';
import '../index.css';

export default class ToastDrop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				display:this.props.disStateToast
			}
		};
	}
	
	componentWillReceiveProps(nextProps){
		if( nextProps.disStateToast !== this.props.disStateToast ){
			this.setState({
				style: {
					display:nextProps.disStateToast
				}
			})
		}
	}
	
  	render() {
		return (
			<div className="toastTip" style={this.state.style}>
				<div className="backDrop"></div>
				<div className="alertContainer">
					<div className="title">{this.props.msgTitle}</div>
					<div className="content">{this.props.msgContent}</div>
				</div>
			</div>
    	);
  	}
}