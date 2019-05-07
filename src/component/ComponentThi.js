import React from 'react';
import axios from 'axios'

export default class ComponentThi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ""
		};
	}
	componentDidMount(){
		console.log(1)
          var _self=this;
      	// 可选地，上面的请求可以这样做
			 axios.get('/mine-api/api/article/pageList', {
			  
			  })
			  .then(function (response) {
			    console.log(response.data.data);
			    _self.setState({list:"1232"});

			  })
			  .catch(function (error) {
			    console.log(error);
			  });
	}
	
	getList( data ){
		let dataList = "";
		if( data ){
			for( let i in data ){
				dataList += <li key={i}>data.name +" : "+ data.name</li>;
			}
		}
		return dataList;
	}
	
  	render() {
  		console.log(2)
    	return (
      		<ul>
        		{this.state.list}
      		</ul>
    	);
  	}
}

