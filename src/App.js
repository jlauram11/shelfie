import React, { Component } from 'react';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      
    }
  }

  //Lifecycle Methods
  
  //Methods
  

  render() {
    return (
      <div className="App">
       <Header/>
        <div className='container'>
          <Dashboard getInventory = {this.getInventory}/>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
