import React, { Component } from 'react';
import Products from '../Products/Products';


class Dashboard extends Component {
    constructor(props){
        super (props);
        this.state = {
            inventoryList: []
        }
    }

    componentDidMount( ){
        this.setState({
            inventoryList: this.props.inventory
        })
    };

    
    render () {
        return (
            <div>
                <Products/>
            </div>
        )
    }
}

export default Dashboard;