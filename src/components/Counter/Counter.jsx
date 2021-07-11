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
        return (
            <div className="main-counter">
                <span className={"indicator-badge badge " + (this.state.counter === 0 ? "badge-warning" : "badge-primary")}>
                    {this.state.counter === 0 ? "Zero" : this.state.counter}
                </span>
                <button className="btn btn-secondary" onClick={this.incrementCounter}>+</button>
                <button className="btn btn-secondary" onClick={this.decrementCounter} disabled={this.state.counter <= 0}>-</button>

                <button className="btn-remove btn btn-danger">Remove</button>
            </div>
        );
    }
}
 
export default Counter;