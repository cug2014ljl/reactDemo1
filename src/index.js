import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentFir from './component/ComponentFir'
import ComponentSec from './component/ComponentSec'
import AlertDrop from './component/AlertDrop'
import ToastDrop from './component/ToastDrop'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disStateAlert: "none",
			disStateToast: "none",
			msgTitle: "",
			msgContent: ""
		};
	}
	changeEventTitle(e){
		this.setState({
			msgTitle:e.target.value
		})
	}
	changeEventCon(e){
		this.setState({
			msgContent:e.target.value
		})
	}
	showAlert(e){
		this.setState({
			disStateAlert: "block"
		})
	}
	showToast(e){
		this.setState({
			disStateToast: "block"
		})
	}
	btnADo(e){
		this.setState({
			disStateAlert: "none"
		})
	}
	btnBDo(e){
		this.setState({
			disStateAlert: "none"
		})
	}
	componentDidUpdate(){
		let _this = this;
		if( _this.timer ){
				clearTimeout( _this.timer);
			}
		_this.timer = setTimeout(function(){
			_this.setState({
				disStateToast: "none"
			})
		},3000)
	}
  render() {
    return (
    	<div className="theme">
	    	<ComponentFir changeEventTitle={this.changeEventTitle.bind(this)}  dataTit={this.state.msgTitle}/>
	  		<br/>
	  		<br/>
	  		<ComponentSec changeEventCon={this.changeEventCon.bind(this)}  dataCon={this.state.msgContent} />
	      <br/>
	      <br/>
	      <div className="showAlert" onClick={this.showAlert.bind(this)}>弹个Alert吧</div>
	  		<AlertDrop btnADo={this.btnADo.bind(this)} btnBDo={this.btnBDo.bind(this)} disStateAlert={this.state.disStateAlert} alertFlag={true} msgTitle={this.state.msgTitle} msgContent={this.state.msgContent} btnAContent={"确定"} btnBContent={"取消"}/>
    		<br/>
	      <br/>
    		<div className="showToast" onClick={this.showToast.bind(this)}>弹个Toast吧</div>
    		<ToastDrop disStateToast={this.state.disStateToast} msgTitle={this.state.msgTitle} msgContent={this.state.msgContent} />
    	</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



