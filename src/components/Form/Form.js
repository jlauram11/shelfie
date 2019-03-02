import React, { Component } from 'react';

class Form extends Component {
    state = {
        productName: '',
        productPrice: '',
        imageUrl: ''
    }

    constructor () {
        super ()

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleImageChange (event) {
        this.setState({
            imageUrl: event.target.value,
        })
    }

    handleNameChange (event) { 
        this.setState({
            productName: event.target.value,
        })
    }

    handlePriceChange (event) {
        this.setState({
            productPrice: event.target.value,
        })
    }
    
    handleCancel (event) {
        event.preventDefault();
        this.setState({
            productName: '',
            productPrice: '',
            imageUrl: ''
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        this.setState({
            productName: '',
            productPrice: '',
            imageUrl: ''
        })
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