import React from 'react';
import './Product.css';

function Products (props) {
    return (
        <div className='card'>
            <p> Image: {props.inventory.image_url} </p>
             <div className='container'>
                <p> Product Name: {props.inventory.product_name} </p>
                <p> Price: {props.inventory.product_price} </p>
                
             </div>
        </div>
    )
}

export default Products;