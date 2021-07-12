import React, { Component } from 'react'

import './Basket_master.css'

class Basket extends Component {
    render() { 
        const {
            onAllItemReset,
            onItemsCheckout,

            itemsTotal,
            itemsQuantity,
        } = this.props

        return (    
            <div className = "basket-container">
                <h3>Basket</h3>
                <table className="price-details">
                    <tbody>
                        <tr>
                            <td width="15%">Item Count: </td>
                            <td>{itemsQuantity}</td>
                        </tr>
                        <tr>
                            <td width="15%">Item Price: </td>
                            <td>{itemsTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="price-options">
                    <button className="btn btn-danger" onClick = {onAllItemReset}>Reset Item Quantity</button>
                    <button className="btn btn-primary" onClick = {onItemsCheckout}>Checkout</button>
                </div>
            </div>
        );
    }
}
 
export default Basket;