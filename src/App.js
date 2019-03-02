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

  //Methods
  getInventory = () => {
    axios.get('/api/products').then( response => {
        console.log(response)
        this.setState({
            inventory: response.data
        })
    })
}

  render() {
    return (
      <div className="App">
        <button onClick={() => this.getInventory()}>get</button>
        <Dashboard inventory = {this.state.inventory}/>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
