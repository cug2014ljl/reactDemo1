import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentFir from './component/ComponentFir'
import ComponentSec from './component/ComponentSec'
import ComponentThi from './component/ComponentThi'

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<ComponentFir />
      	<br/>
      	<br/>
      	<ComponentSec />
      	<br/>
      	<br/>
      	<ComponentThi />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



