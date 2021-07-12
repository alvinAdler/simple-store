import React, { Component } from 'react'

import './Counter_master.css'

class Counter extends Component {
    state = { 
        counter: 0
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter+1})
    }

    decrementCounter = () => {
        this.setState({counter: this.state.counter-1})
    }

    render() { 
        let itemID = this.props.onChangeDetails.itemId
        let currentCounter = this.props.itemCounter
        let isItemExist = this.props.onChangeDetails.itemId in this.props.itemCounter
        return (
            <div className="main-counter">
                <span className={"indicator-badge badge " + (isItemExist ? "badge-primary" : "badge-warning")}>
                    {isItemExist ? 
                    currentCounter[itemID]
                    : 
                    "Zero"}
                    
                </span>
                <button className="btn btn-secondary" onClick={() => this.props.onChangeDetails.execute(this.props.onChangeDetails.itemId, "increment")}>+</button>
                <button className="btn btn-secondary" onClick={() => this.props.onChangeDetails.execute(this.props.onChangeDetails.itemId, "decrement")} disabled={!isItemExist}>-</button>
 

                <button className="btn-remove btn btn-danger" onClick={() => this.props.onItemRemove(itemID)}>Remove</button>
            </div>
        );
    }
}
 
export default Counter;