import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css'


class Dashboard extends Component {
   

    render () {
        //Mapped 
        let mappedInv = this.props.inventory.map((product, id) => (
            <Product className='product' key = {id} inventory = {product}/>
        ))

        return (
            <div className = 'inventory'>
                {mappedInv}
            </div>
        )
    }
}

export default Dashboard;