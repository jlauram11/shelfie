import React, { Component } from 'react';
import axios from 'axios';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  state = {
    inventory: []
  }

  //Lifecycle Methods
  componentDidMount(){
    this.getInventory();
  }

  //using arrow funtions in your functions makes it so that you do not have to bind each one
  //Makes your code cleaner

  //Methods
  getInventory = () => {
    axios.get('/api/products').then( response => {
        this.setState({
            inventory: response.data
        })
    })
}

  render() {
    return (
      <div className="App">
       <Header/>
        <div className='container'>
          {this.getInventory()}
          <Dashboard inventory = {this.state.inventory}/>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
