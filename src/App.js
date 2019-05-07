import React from 'react';
import './App.css';
import ComponentFir from './component/ComponentFir'
import ComponentSec from './component/ComponentSec'

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<ComponentFir />
      	<br/>
      	<br/>
      	<ComponentSec />
      </div>
    );
  }
}

