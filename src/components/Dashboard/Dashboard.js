import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import './Dashboard.css'


class Dashboard extends Component {

    constructor () {
        super();

        this.state = {
            inventory: [],
        }
    }

    //Lifecyle Methods
    componentDidMount(props){
        this.getInventory();
    }

    //Methods
    getInventory = () => {
        axios.get('/api/products').then( response => {
            this.setState({
                inventory: response.data
            })
        })
    }
    

    // deleteProduct = (id) => {

    //     axios.delete(`/api/products/${id}`).then( response => {
    //         this.setState({
    //             inventory: response.data
    //         })
    //     })

    //     this.getInventory();
    // }
   

    render () {
        //Mapped 
        let mappedInventory = this.state.inventory.map((product, id) => (
                <Product 
                key={id}
                product={product} />       
        ))

        return (
            <div className = 'inventory'>
                {this.getInventory()}
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;