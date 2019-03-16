import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'

class Form extends Component {

    constructor () {
        super ()

        this.state = {
            productName: '',
            productPrice: '',
            imageUrl: ''
        }
    }

    handleImageChange = (event) => {
        this.setState({
            imageUrl: event.target.value,
        })
    }

    handleNameChange = (event) => { 
        this.setState({
            productName: event.target.value,
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            productPrice: event.target.value,
        })
    }
    
    handleCancel = (event) => {
        event.preventDefault();
        this.setState({
            productName: '',
            productPrice: '',
            imageUrl: ''
        })
    }

    handleSubmit = (event) => {
        axios.post('/api/products', this.state)
        .then((response) => this.setState({
            productName: '',
            productPrice: '',
            imageUrl: ''
        }))
        .catch((err) => console.log(err))
    }

    render () {
        return (
            <div className = 'add-product'>
            <form>
               <label>
                   <div className = 'label'> Image URL:</div>
                   <input type = 'text'
                          value = {this.state.imageUrl}
                          onChange = {this.handleImageChange} />
               </label>
               <label>
                   <div className = 'label'> Product Name:</div>
                   <input type = 'text' 
                          value = {this.state.productName}
                          onChange = {this.handleNameChange} />
               </label>
               <label>
                   <div className = 'label'> Price:</div>
                   <input type = 'number' 
                          value = {this.state.productPrice}
                          onChange = {this.handlePriceChange} />
               </label>

                <button onClick = {this.handleCancel} > Cancel </button>
                <button type = 'submit' onClick = {this.handleSubmit}> Add to Inventory </button>
            </form>    
            </div>
        )
    }
}

export default Form;